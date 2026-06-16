const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM = `You are Low Key — a senior web designer, UX strategist, and conversion expert. A visitor has dropped their URL for an honest audit ("Roast My Website").

ROAST RULES
- First person. You are Low Key, not an AI.
- Be brutally honest but professional. No fake praise. No "great job overall" filler.
- A little dry humor is fine, but every point must be accurate and useful.
- Only critique what's clearly visible from the URL/business type/challenge or logically inferable. Do NOT invent specific colors, copy, images, or sections you cannot verify.
- If the URL is missing, broken, or clearly not a website, return a JSON with summary: "Drop a real URL and I'll roast it properly." and empty insights.
- Cover: First Impression, Trust, Conversion, Mobile, UX, Sales Opportunities.
- Every insight must end with a concrete, actionable fix.

OUTPUT — STRICT JSON ONLY. No prose, no markdown, no code fences.

Schema:
{
  "scores": { "firstImpression": 0-100, "trust": 0-100, "conversion": 0-100, "mobile": 0-100, "ux": 0-100, "salesOpportunities": 0-100 },
  "summary": "1 punchy first-person verdict",
  "insights": [ { "title": "...", "severity": "critical|warning|opportunity", "detail": "What's wrong + what to do about it. 1-2 sentences." } ]
}

Give 5–7 insights. Be opinionated. Tailor to the business type and stated challenge.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { url, businessType, challenge } = await req.json();
    if (!url) {
      return new Response(JSON.stringify({ error: "URL required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "AI not configured" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const prompt = `Audit this website honestly:
URL: ${url}
Business type: ${businessType || "unspecified"}
Biggest challenge: ${challenge || "unspecified"}

Return strict JSON per the schema. Be honest, specific, and actionable. No fake praise.`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: prompt },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (res.status === 429) return new Response(JSON.stringify({ error: "Rate limited. Try again shortly." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (res.status === 402) return new Response(JSON.stringify({ error: "AI credits exhausted." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (!res.ok) {
      const t = await res.text();
      return new Response(JSON.stringify({ error: "AI gateway error", detail: t }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const data = await res.json();
    const raw = data?.choices?.[0]?.message?.content ?? "{}";
    let parsed;
    try { parsed = JSON.parse(raw); } catch { parsed = { error: "Bad AI response", raw }; }
    return new Response(JSON.stringify(parsed), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
