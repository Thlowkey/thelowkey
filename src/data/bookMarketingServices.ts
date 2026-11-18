import type { LucideIcon } from "lucide-react";
import { BookOpen, Clapperboard, Mail, MessageCircle, Sparkles, UsersRound } from "lucide-react";

export type BookMarketingService = {
  title: string;
  slug: string;
  summary: string;
  value: string;
  approach: string;
  receives: string[];
  faqs: [string, string][];
};

export type BookMarketingCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  value: string;
  icon: LucideIcon;
  services: BookMarketingService[];
};

export const bookMarketingCategories: BookMarketingCategory[] = [
  {
    slug: "social-media-book-promotion",
    title: "Social Media Book Promotion",
    shortTitle: "Social discovery",
    description: "Thoughtful, genre-aware creative features for the social spaces where readers trade recommendations and find their next book.",
    value: "Give readers a clear reason to pause, understand the book's appeal, and explore it further—without treating every platform as interchangeable.",
    icon: MessageCircle,
    services: [
      {
        title: "TikTok Book Features", slug: "tiktok-book-features",
        summary: "Short-form book discovery content shaped around a title's tone, hook, and likely reading audience.",
        value: "A concise visual feature can make a premise easier to grasp and give interested readers a natural next step.",
        approach: "We review the book's genre, description, supplied materials, and promotional aim, then shape a short-form concept for the reading context. Audience response and reach vary by platform and post.",
        receives: ["A genre-aware feature concept", "Short-form visual storytelling", "A clear book or author call to action"],
        faqs: [["Can a feature guarantee views or sales?", "No. Platform distribution and reader response are unpredictable; a feature is an opportunity for discovery, not a guaranteed outcome."], ["What should I share to get started?", "A book link, genre, short description, cover, and the readers you hope to reach are useful starting points."], ["Can an older title be featured?", "Yes. A relevant angle can introduce an existing title to readers who have not encountered it yet."]],
      },
      {
        title: "Instagram Book Features", slug: "instagram-book-features",
        summary: "Book spotlights, visual presentations, and short-form creative made to feel at home in an Instagram reading feed.",
        value: "Bring a book's mood, premise, and genre together in a polished feature readers can recognize and share.",
        approach: "Creative direction considers the cover and supplied assets, the book's identity, and whether a post, carousel, or reel best suits the story.",
        receives: ["A considered visual feature", "Post, carousel, or reel direction", "Reader-focused promotional copy"],
        faqs: [["Do I need to supply photographs?", "Share any approved cover and author assets you have; the creative direction can be scoped around available materials."], ["Is Instagram promotion right for every book?", "Not necessarily. Fit depends on the genre, visual materials, audience, and the kind of reader conversation you want to encourage."], ["Do you guarantee engagement?", "No. Engagement depends on the audience, content, timing, and platform distribution."]],
      },
      {
        title: "BookTok Promotion", slug: "booktok-promotion",
        summary: "Genre-relevant book discovery designed with the language and expectations of the TikTok reading community in mind.",
        value: "Help a title enter a reading conversation through a clear hook and audience-aware presentation.",
        approach: "We identify a reader-facing angle from the book's genre, themes, and description and shape a feature that invites curiosity without overstating the story.",
        receives: ["BookTok audience and angle review", "Genre-relevant feature direction", "A reader-first discovery hook"],
        faqs: [["Is BookTok only for romance or fantasy?", "No, but fit varies by genre and the interests of active readers. We discuss the title before recommending an approach."], ["Can you promise my book will trend?", "No. Trends and reach cannot be guaranteed."], ["Can independent and traditionally published authors enquire?", "Yes. Ebooks and print books can both be considered."]],
      },
      {
        title: "Bookstagram Promotion", slug: "bookstagram-promotion",
        summary: "Literary visual features that help readers notice a book and understand where it belongs on their reading shelf.",
        value: "Build a coherent visual introduction to the book, paired with context that makes the feature meaningful to readers.",
        approach: "We consider the cover, genre conventions, author materials, and reader communities, then develop a visual feature with accurate, supplied book information.",
        receives: ["Literary visual direction", "A book-centered feature concept", "Reader engagement prompts"],
        faqs: [["Will you use my official cover?", "Yes, when you provide an approved cover file or link and confirm it can be used for promotion."], ["Are reviews included?", "Bookstagram features are promotional content; review-related work is discussed separately and remains authentic and voluntary."], ["Can this support an older release?", "Yes. An established title can be presented through a new theme, reading moment, or discovery angle."]],
      },
      {
        title: "BookTube Features", slug: "booktube-features",
        summary: "Video-based book discovery for readers who enjoy thoughtful, longer-form literary content.",
        value: "Give readers more room to understand a book's premise, tone, and intended audience through a video feature.",
        approach: "We align the feature format and talking points with the title's genre, supplied description, and approved materials. Editorial opinions and audience response are not scripted or guaranteed.",
        receives: ["Video feature planning", "Accurate book information and talking points", "A reader-focused discovery path"],
        faqs: [["Does a feature mean a positive review?", "No. A feature is not a promise of a favorable opinion. Any review must reflect the reader's genuine experience."], ["Can you promote an ebook?", "Yes. The format is considered alongside the book link and the audience's preferred way to discover it."], ["Are video views guaranteed?", "No. Views depend on the channel, audience, subject, and platform distribution."]],
      },
    ],
  },
  {
    slug: "book-trailer-creation",
    title: "Book Video Production",
    shortTitle: "Book video",
    description: "Cinematic, genre-aware visual storytelling that gives a book a concise moving introduction across digital platforms.",
    value: "A trailer can distill a book's atmosphere and premise into an engaging visual invitation; it does not replace the book description or guarantee sales.",
    icon: Clapperboard,
    services: [{
      title: "Professional Book Trailer Creation", slug: "professional-book-trailer-creation",
      summary: "A cinematic book trailer with visual storytelling and creative direction appropriate to the genre.",
      value: "Translate a book's mood and central idea into a short visual piece that can support a launch or renewed discovery.",
      approach: "We discuss the genre, audience, synopsis, approved cover and assets, desired tone, and intended platforms before shaping a concept and production scope.",
      receives: ["Genre-appropriate creative direction", "A short visual story built around the book", "A digital video asset for agreed platforms"],
      faqs: [["Do I need to own the rights to the materials?", "Yes. Any supplied text, cover, music, photography, or footage must be cleared for the intended use."], ["Can a trailer guarantee book sales?", "No. It is a promotional asset; sales depend on many factors beyond a video."], ["What is the production timeline?", "Timing depends on scope, materials, and approvals and is agreed after the project is understood."]],
    }],
  },
  {
    slug: "email-marketing-for-authors",
    title: "Email Marketing",
    shortTitle: "Reader letters",
    description: "Author newsletters and book announcements that help authors communicate with readers who have chosen to hear from them.",
    value: "Email gives authors an owned, permission-based channel for sharing new books, meaningful updates, and reader invitations.",
    icon: Mail,
    services: [{
      title: "Email Marketing for Authors", slug: "email-marketing-for-authors",
      summary: "Newsletters and book campaigns for authors building an ongoing, consent-led reader relationship.",
      value: "Create a useful line of communication around new releases, backlist titles, author news, and reader engagement.",
      approach: "We discuss the author's email platform, audience, consent practices, communication rhythm, and campaign goal before developing a suitable structure and content direction.",
      receives: ["Newsletter or campaign structure", "Book announcement email direction", "Reader-engagement content planning"],
      faqs: [["Do I need an email list already?", "No. We can discuss an appropriate starting point and the consent language needed for sign-ups."], ["Can you promise opens or sales?", "No. Results depend on list quality, relevance, subject, timing, and the offer."], ["Which email platform do you use?", "We scope work around the author's existing or preferred email platform; a platform choice is discussed before work begins."]],
    }],
  },
  {
    slug: "social-media-management",
    title: "Author Digital Presence",
    shortTitle: "Author presence",
    description: "A clearer and more consistent author presence through profile refinement, content planning, branding, and audience care.",
    value: "Help readers quickly understand who you are, what you write, and where to follow or discover your books.",
    icon: Sparkles,
    services: [{
      title: "Social Media Management and Optimization", slug: "social-media-management-and-optimization",
      summary: "Author profile optimization and content planning shaped around writing identity and reader engagement.",
      value: "Present an author's work consistently and make the next step clearer for readers who find their profile.",
      approach: "We review the author's current profiles, audience, available content, and communication goals, then agree on practical priorities and a manageable content approach.",
      receives: ["Author profile review and optimization direction", "Social content planning", "Brand consistency and engagement guidance"],
      faqs: [["Which platforms can be included?", "The platforms are chosen to fit the author's goals and audience; scope is agreed before work starts."], ["Does management guarantee follower growth?", "No. Audience growth cannot be guaranteed and depends on many factors."], ["Can I still approve posts?", "Yes. Content expectations and approval steps are agreed as part of the scope."]],
    }],
  },
  {
    slug: "goodreads-and-literary-community-promotion",
    title: "Goodreads & Literary Community Promotion",
    shortTitle: "Reader communities",
    description: "Ethical opportunities for book discovery through Goodreads, reading challenges, book clubs, and authentic reader feedback.",
    value: "Reach readers in contexts organized around books, shared interests, and genuine discussion—not artificial review volume.",
    icon: UsersRound,
    services: [
      {
        title: "Goodreads Listopia Placement", slug: "goodreads-listopia-placement",
        summary: "Research and placement opportunities in relevant Goodreads Listopia categories for a book's genre and themes.",
        value: "Relevant lists can create another path for readers browsing by genre, subject, or reading interest.",
        approach: "We review the book's details, audience, and appropriate Listopia categories, then identify suitable placement opportunities. Platform rules and community activity are respected; inclusion is not guaranteed.",
        receives: ["Relevant category research", "A shortlist of suitable list opportunities", "Guidance on accurate book details"],
        faqs: [["Can you guarantee a specific placement?", "No. List activity and eligibility are controlled by the platform and community."], ["Is this a paid or official Goodreads ranking?", "No placement is described as official or endorsed unless the platform explicitly states so."], ["What information is needed?", "A book page, genre, publication details, and concise description help assess relevance."]],
      },
      {
        title: "Reading Challenge Promotion", slug: "reading-challenge-promotion",
        summary: "Genre-focused promotion that invites readers to consider a title within organized reading challenges.",
        value: "A challenge can make a book easier to discover in a shared reading context and encourage participation.",
        approach: "We explore relevant challenge themes, audience fit, and timing, then shape an accurate invitation. Participation remains voluntary and results are not promised.",
        receives: ["Challenge and genre fit review", "Reader-facing promotional framing", "A clear participation or book-discovery path"],
        faqs: [["Does every genre suit a challenge?", "Fit depends on the challenge theme, readers, and book; suitability is assessed first."], ["Can you promise challenge participation?", "No. Readers choose whether to participate."], ["Can the book be in print or digital?", "Yes. The format and available retailer or library links are considered in the promotion."]],
      },
      {
        title: "Book Club Promotion", slug: "book-club-promotion",
        summary: "Book discovery and discussion opportunities for clubs and communities whose readers may connect with a title.",
        value: "A thoughtful book-club approach can help a title find readers looking for a shared conversation.",
        approach: "We consider genre, discussion potential, format access, and the kinds of clubs likely to welcome the book, then coordinate appropriate outreach opportunities.",
        receives: ["Book-club audience fit review", "Discussion-oriented positioning", "A reader and organizer information pack"],
        faqs: [["Do you guarantee a book-club selection?", "No. Each club chooses its own reading schedule and titles."], ["Can I provide a discussion guide?", "If you have one, it can be included; developing additional materials would need to be agreed separately."], ["Do you contact every club?", "Outreach scope and suitable communities are agreed before work begins."]],
      },
      {
        title: "Book Review Services", slug: "book-review-services",
        summary: "Ethical coordination of reader review opportunities, grounded in voluntary participation and honest opinions.",
        value: "Authentic reader feedback can support conversation and help prospective readers understand a book's reception.",
        approach: "We discuss review eligibility, reader fit, platform rules, disclosure, and the book's availability. Readers are never asked to fabricate or guarantee a positive opinion.",
        receives: ["Review-campaign coordination plan", "Reader and platform fit considerations", "Clear ethical and disclosure expectations"],
        faqs: [["Can you guarantee positive reviews or a review count?", "No. Reviews must be genuine, independent, and voluntary; neither sentiment nor count is guaranteed."], ["Can authors pay for a positive review?", "No. Low Key does not offer fabricated or guaranteed positive reviews."], ["Can any book be submitted?", "Eligibility depends on the platform, format, reader fit, and applicable rules."]],
      },
    ],
  },
  {
    slug: "professional-book-mockup-design",
    title: "Book Design",
    shortTitle: "Book visuals",
    description: "Professional book mockups and digital promotional graphics for presenting a title clearly across online campaigns.",
    value: "A polished, accurate visual presentation helps authors use their existing cover more effectively in digital promotion.",
    icon: BookOpen,
    services: [{
      title: "Professional Book Mockup Design", slug: "professional-book-mockup-design",
      summary: "3D book mockups and promotional graphics that present a supplied book cover in a polished digital format.",
      value: "Turn a cover into adaptable campaign visuals while keeping the book's identity and artwork intact.",
      approach: "We confirm cover rights, formats, aspect ratios, and intended platforms, then create mockups and graphics appropriate to the agreed campaign use.",
      receives: ["3D book mockup concepts", "Promotional book graphics", "Digital-ready presentation files for agreed uses"],
      faqs: [["Do you redesign book covers?", "This offer is for mockups and promotional graphics, not cover redesign."], ["Can I use the mockups for any purpose?", "Usage is agreed for the project; cover and supplied asset rights remain subject to their owners' terms."], ["What formats can you provide?", "File formats and sizes are agreed based on the channels and use cases in scope."]],
    }],
  },
];

export const bookMarketingServices = bookMarketingCategories.flatMap((category) =>
  category.services.map((service) => ({ ...service, categorySlug: category.slug, categoryTitle: category.title })),
);

export function getServiceCategory(slug: string | undefined) {
  return bookMarketingCategories.find((category) => category.slug === slug);
}