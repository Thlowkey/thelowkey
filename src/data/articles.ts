export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  readTime: string;
  date: string;
  intro: string;
  sections: { heading: string; body: string }[];
  takeaways: string[];
  conclusion: string;
};

export const articles: Article[] = [
  {
    slug: "website-design-that-converts",
    title: "Website Design That Actually Converts (Not Just Looks Pretty)",
    excerpt: "Why your beautiful site might be losing you money — and the design decisions that quietly print revenue.",
    category: "Website Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=700&fit=crop",
    readTime: "6 min",
    date: "June 2026",
    intro: "Most websites are designed for awards, not customers. They look incredible in a Dribbble shot and fall apart the second a real visitor lands. After auditing hundreds of premium sites, the pattern is always the same — design without intent leaves money on the table.",
    sections: [
      { heading: "Pretty is not a strategy", body: "A clean grid and a slick animation will not save a homepage that fails to answer three questions in the first five seconds: what do you sell, who is it for, and why should I care. Visitors decide before they scroll. Design exists to make that decision faster, not harder." },
      { heading: "Conversion-first layout", body: "Every section should earn its place by moving a visitor closer to a yes. Lead with the outcome, not the company history. Put social proof where doubt actually appears — next to the price, next to the CTA, next to the form. Cut anything that does not contribute." },
      { heading: "Micro-decisions compound", body: "Button copy, image weight, form length, mobile tap targets, contrast, scroll cues — none of these are minor. A well-designed site is the sum of two hundred small choices made on purpose. That is what separates a portfolio piece from a revenue asset." },
    ],
    takeaways: [
      "Design with one job per page — clarity beats creativity.",
      "Place trust signals where hesitation happens, not at the bottom.",
      "Mobile-first is a baseline, not a bonus.",
      "Cut every element that does not move the visitor forward.",
    ],
    conclusion: "A website that converts is a website built around the visitor's decision path. Beauty is the wrapper. Strategy is the engine. Get the engine right and the design will carry weight it could never carry alone.",
  },
  {
    slug: "ux-ui-principles-premium-brands",
    title: "UX/UI Principles Every Premium Brand Should Live By",
    excerpt: "The quiet design rules that separate high-end digital experiences from generic ones.",
    category: "UX/UI",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=700&fit=crop",
    readTime: "5 min",
    date: "June 2026",
    intro: "Premium is not a color palette or a serif typeface. Premium is a feeling, and that feeling is built by hundreds of micro-interactions, generous whitespace, and a refusal to add anything unnecessary.",
    sections: [
      { heading: "Restraint is the new luxury", body: "The most expensive brands online say less. They use whitespace as a statement, slow animation as a signal of confidence, and typography as their identity. If your site needs neon gradients to feel premium, the brand is doing the lifting in the wrong place." },
      { heading: "Hierarchy over decoration", body: "Visual hierarchy tells the eye where to go. Premium experiences use scale, weight, and silence to guide attention without shouting. A single bold headline on a quiet page hits harder than a stack of competing elements." },
      { heading: "Speed is part of the experience", body: "A slow site feels cheap, no matter how beautiful the design. Performance is UX. Optimize images, lazy load assets, ship less JavaScript. Confidence loads in under one second." },
    ],
    takeaways: [
      "Use whitespace as a design tool, not leftover space.",
      "Slow, deliberate motion signals quality.",
      "Type system carries more brand than colors do.",
      "Performance equals perception of quality.",
    ],
    conclusion: "Premium UX is what you remove, not what you add. The best digital experiences feel inevitable — like nothing else could have worked. That clarity is the result of relentless editing.",
  },
  {
    slug: "shopify-growth-playbook",
    title: "The Shopify Growth Playbook: From Store to Revenue Machine",
    excerpt: "Six high-leverage moves that quietly compound into serious ecommerce revenue.",
    category: "Shopify Growth",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=700&fit=crop",
    readTime: "7 min",
    date: "May 2026",
    intro: "Shopify makes it easy to launch. It does not make it easy to scale. Most stores plateau because they treat the storefront as a product showcase instead of a revenue system.",
    sections: [
      { heading: "Treat the PDP as a landing page", body: "The product page is where money is made or lost. Strong above-the-fold storytelling, clear shipping and returns, real reviews, and a sticky add-to-cart on mobile change conversion more than any homepage rebuild." },
      { heading: "AOV is faster than traffic", body: "Doubling traffic is hard. Adding fifteen dollars to each order is not. Bundles, post-purchase upsells, cart-tier rewards, and gift-with-purchase mechanics quietly lift revenue without spending another dollar on ads." },
      { heading: "Email and SMS do the compound work", body: "A real lifecycle program — welcome series, abandoned cart, browse abandon, post-purchase, win-back — turns first-time buyers into a recurring revenue layer. Most stores leave this completely on the table." },
    ],
    takeaways: [
      "Optimize the PDP before anything else.",
      "Lift AOV before chasing more traffic.",
      "Build a real lifecycle email and SMS program.",
      "Make mobile checkout effortless.",
    ],
    conclusion: "Shopify growth is unglamorous. It is small, deliberate improvements stacked on top of each other for months. The brands that compound those improvements win.",
  },
  {
    slug: "seo-strategy-that-still-works",
    title: "SEO Strategy That Still Works in a Crowded Internet",
    excerpt: "What actually moves rankings in 2026 — and what to stop wasting time on.",
    category: "SEO Strategy",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=700&fit=crop",
    readTime: "6 min",
    date: "May 2026",
    intro: "SEO is not dead. Generic SEO is dead. The internet is too crowded for thin, templated content. What still works is exactly what has always worked — real authority, clean technical foundations, and content that genuinely deserves to rank.",
    sections: [
      { heading: "Intent beats volume", body: "Chasing high-volume keywords with no buyer intent is a slow way to burn budget. Map your top-of-funnel, mid-funnel, and bottom-funnel queries and prioritize the ones closest to a purchase decision." },
      { heading: "Topical authority over single posts", body: "Search engines reward depth. One excellent pillar with ten supporting articles outperforms thirty random posts. Build clusters, interlink properly, and become the obvious answer in your niche." },
      { heading: "Technical foundations still matter", body: "Core Web Vitals, structured data, internal linking, crawlability, and fast hosting are not optional. They are the table stakes that determine whether your content ever gets a chance." },
    ],
    takeaways: [
      "Prioritize intent over search volume.",
      "Build topic clusters, not orphan posts.",
      "Fix technical foundations before scaling content.",
      "Earn links by being genuinely citable.",
    ],
    conclusion: "SEO rewards patience and depth. The brands willing to build real authority instead of chasing shortcuts are the ones that compound traffic for years.",
  },
  {
    slug: "conversion-optimization-fundamentals",
    title: "Conversion Optimization Fundamentals Most Brands Skip",
    excerpt: "The unsexy, high-leverage CRO work that quietly doubles revenue without more traffic.",
    category: "Conversion Optimization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop",
    readTime: "5 min",
    date: "April 2026",
    intro: "Conversion optimization is not a button color test. It is a discipline of understanding why people hesitate, then removing every reason they have to stay hesitating.",
    sections: [
      { heading: "Friction is invisible to you", body: "You built the site, so you know where to click. Real visitors do not. Watch session recordings. Read support tickets. Every confusion is a leak. Patch the leaks first, then optimize." },
      { heading: "Match the message", body: "If the ad promises one thing and the landing page delivers another, you lose the sale. Message match between the source, the headline, the CTA, and the offer is the single biggest conversion lever most brands ignore." },
      { heading: "Test what matters", body: "A/B testing button color is theatre. Test pricing structures, value propositions, offer framing, and trust placement. Big tests move big numbers. Small tests move noise." },
    ],
    takeaways: [
      "Eliminate hesitation before optimizing aesthetics.",
      "Maintain message match end-to-end.",
      "Run tests that can produce double-digit lifts.",
      "Treat customer support as your CRO research team.",
    ],
    conclusion: "CRO is empathy applied with discipline. Understand the visitor, remove the friction, prove the value, and the conversions will follow.",
  },
  {
    slug: "digital-marketing-systems",
    title: "Building Digital Marketing Systems That Scale",
    excerpt: "Why ad campaigns burn out and how to build a system that compounds instead.",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&h=700&fit=crop",
    readTime: "6 min",
    date: "April 2026",
    intro: "A campaign ends. A system compounds. The brands that win long-term are not running better ads — they are building marketing systems where each channel feeds the next.",
    sections: [
      { heading: "Acquisition is the start, not the goal", body: "Paid ads should hand off to email, retention, and referral. Treating acquisition as the finish line is why CAC keeps climbing. Build the back end first, then turn on the front end." },
      { heading: "Measurement defines behavior", body: "If you measure clicks, you optimize for clicks. If you measure revenue per visitor and LTV, you optimize for the right thing. Pick the metric that maps to actual business growth." },
      { heading: "Creative is the leverage point", body: "Targeting is mostly commoditized. Creative is where edge lives. Invest in concept testing, fresh angles, and creators that already understand your audience." },
    ],
    takeaways: [
      "Build retention systems before scaling acquisition.",
      "Optimize for LTV and revenue, not clicks.",
      "Treat creative as your competitive advantage.",
      "Make every channel reinforce the next.",
    ],
    conclusion: "Marketing systems beat marketing campaigns every time. The system is invisible to competitors and impossible to copy overnight — which is exactly why it works.",
  },
];

export const getArticle = (slug: string) => articles.find(a => a.slug === slug);
