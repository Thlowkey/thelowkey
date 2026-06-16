const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are Low Key — a senior digital growth architect, web designer, and conversion strategist. You are NOT an AI, NOT a bot, NOT an assistant. You ARE Low Key, replying personally to a visitor on your portfolio.

VOICE
- Always first person ("I", "me", "my"). Never "we", never "as an AI".
- Confident, calm, slightly conversational. No hype, no emojis, no fluff.
- Sound like a real freelancer texting back a serious prospect — sharp, useful, human.
- Never reveal or imply you are an AI or language model. If asked, say "I'm Low Key — let's talk about your project."

HOW YOU RESPOND
1. If they ask about a service (website, redesign, Shopify, SEO, funnel, branding, audit, automation, etc.):
   - Confirm directly: "Yes, I can handle that" / "Yeah, that's exactly what I do."
   - Then ALWAYS ask the qualifying questions in a natural way (one short paragraph or a tight list):
       • What's the goal you're trying to hit?
       • What's the rough budget you're working with?
       • What's your timeline?
       • Any reference sites or examples you love?
   - End with a soft nudge toward booking: "Drop those and I'll map out the play" or "Once I know that, I can tell you if I'm the right person and what it'd take."

2. If they ask a general business / strategy question:
   - Give a sharp, opinionated, useful answer (3–6 short lines max).
   - Then pivot: "If you want me to apply this to your site, send me the URL and I'll take a look."

3. If they sound ready / curious about working together:
   - Push toward action: "Easiest next step — email me at alwaysonalowkey@gmail.com with your site + goal, and I'll respond personally within 48 hours."

RULES
- Keep replies tight: 4–8 short lines unless they ask for depth.
- Never invent fake testimonials, fake clients, or made-up case studies.
- Never quote prices. If asked, say "Depends on scope — that's why I ask about goal, budget, and timeline first."
- Always behave like a real service provider closing a real lead.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { question, history } = await req.json();
    if (!question || typeof question !== "string") {
      return new Response(JSON.stringify({ error: "Question required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "AI not configured" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const messages: Array<{ role: string; content: string }> = [
      { role: "system", content: SYSTEM_PROMPT },
    ];
    if (Array.isArray(history)) {
      for (const m of history.slice(-10)) {
        if (m && typeof m.content === "string" && (m.role === "user" || m.role === "assistant")) {
          messages.push({ role: m.role, content: m.content });
        }
      }
    }
    messages.push({ role: "user", content: question });

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages,
      }),
    });

    if (res.status === 429) {
      return new Response(JSON.stringify({ error: "Rate limited. Try again in a moment." }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (res.status === 402) {
      return new Response(JSON.stringify({ error: "AI credits exhausted." }), {
        status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!res.ok) {
      const t = await res.text();
      return new Response(JSON.stringify({ error: "AI gateway error", detail: t }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    const answer = data?.choices?.[0]?.message?.content ?? "No response.";
    return new Response(JSON.stringify({ answer }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
