const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM = `You are Low Key — elite digital growth architect. You audit websites with brutal, useful clarity (Stripe/Apple/Linear taste). Output STRICT JSON only, no prose, no markdown fences.

Schema:
{
  "scores": { "firstImpression": 0-100, "trust": 0-100, "conversion": 0-100, "mobile": 0-100, "ux": 0-100, "salesOpportunities": 0-100 },
  "summary": "1 punchy sentence verdict",
  "insights": [ { "title": "...", "severity": "critical|warning|opportunity", "detail": "1-2 sentences, specific and actionable" } ]
}

Give 5-7 insights. Be opinionated. Use the business type and challenge to focus the audit. If you cannot fetch the site, still infer based on typical patterns for that business type and stated challenge.`;

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

    const prompt = `Audit this website:
URL: ${url}
Business type: ${businessType || "unspecified"}
Biggest challenge: ${challenge || "unspecified"}

Return strict JSON per the schema. No prose outside JSON.`;

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
