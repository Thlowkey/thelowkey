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

const image = "/book-marketing-editorial.jpg";

export const articles: Article[] = [
  {
    slug: "book-marketing-for-independent-authors",
    title: "A Thoughtful Book Marketing Plan for Independent Authors",
    excerpt: "Start with the book, the readers it is for, and a small number of useful ways to help those readers discover it.",
    category: "Author strategy", image, readTime: "6 min", date: "November 2026",
    intro: "Book promotion works best when it begins with the book itself. Before choosing platforms, describe the story or ideas, the readers most likely to care, and the next action you want them to take. A plan built around those answers is more useful than trying every available channel at once.",
    sections: [
      { heading: "Make the reader and the promise specific", body: "A genre label is a starting point, not a complete audience definition. Consider what readers already enjoy, what emotional or practical need your book answers, and what makes the book's premise distinct. Keep the description accurate and consistent across your author site, retailer pages, and promotional materials." },
      { heading: "Choose a few suitable discovery paths", body: "Short-form video, literary communities, email, book clubs, and review opportunities serve different purposes. Choose based on audience fit, the assets you can supply, platform rules, and the time you can sustain. A channel is not useful simply because it is popular." },
      { heading: "Give each activity a clear destination", body: "A reader who sees a feature should be able to find the book, learn what it is about, and choose where to read more. Use accurate links and a clear next step. Where suitable, an author website can bring books, biography, and reader updates together." },
      { heading: "Learn without promising an outcome", body: "Track practical signals such as clicks, newsletter sign-ups, inquiries, or participation where the platform makes them available. Those signals can inform future decisions, but they do not guarantee sales or predict bestseller status." },
    ],
    takeaways: ["Start with reader fit, not a platform trend.", "Use a few consistent channels rather than trying everything.", "Make the next step clear and measure what is available.", "Treat visibility as an opportunity, not a sales guarantee."],
    conclusion: "A good plan helps the right readers understand why a book may interest them. The strategy should remain flexible as you learn what resonates.",
  },
  {
    slug: "is-booktok-right-for-your-book",
    title: "Is BookTok the Right Discovery Channel for Your Book?",
    excerpt: "A practical way to assess genre, creative fit, available materials, and realistic expectations before investing in short-form promotion.",
    category: "BookTok & video", image, readTime: "5 min", date: "November 2026",
    intro: "BookTok can help readers encounter books through short-form video and community conversation, but it is not a universal answer for every title. Decide whether the format suits the book and the people you hope to reach before building a campaign around it.",
    sections: [
      { heading: "Look for a natural short-form hook", body: "A compelling premise, strong mood, distinctive setting, useful idea, or a question readers can relate to may translate into a short feature. The hook should be truthful and understandable without revealing more than the author wants to share." },
      { heading: "Consider genre and audience fit", body: "Reader interests vary, and platform communities change. Ask whether the target readers use the format, whether the book's themes can be presented clearly, and whether another channel may better match how those readers choose books." },
      { heading: "Prepare accurate materials", body: "An approved cover, synopsis, genre, book link, and any relevant content notes help create a responsible feature. Rights for any supplied music, footage, artwork, or text should be clear before production." },
      { heading: "Set expectations you can stand behind", body: "A feature creates a chance to be seen; it cannot guarantee reach, engagement, trend placement, or sales. Plan for a useful creative asset and a clear reader journey rather than a promised number." },
    ],
    takeaways: ["Evaluate audience fit before choosing a platform.", "Build around a truthful, concise hook.", "Prepare approved creative assets and clear links.", "No feature can guarantee views, trends, or sales."],
    conclusion: "BookTok is one possible part of a thoughtful promotion mix. Its value depends on the book, creative angle, audience, and how the feature fits into the reader's path to discovery.",
  },
  {
    slug: "promoting-a-book-beyond-launch-week",
    title: "How to Keep an Existing Book Discoverable After Launch Week",
    excerpt: "Ideas for giving a backlist title a fresh, honest introduction without pretending that every release has one decisive moment.",
    category: "Long-term discovery", image, readTime: "6 min", date: "November 2026",
    intro: "A book does not stop being relevant when its launch window closes. Authors can revisit a title through new reader contexts, seasonal themes, community conversations, and updated ways to present the book—without implying that renewed promotion will guarantee a sales result.",
    sections: [
      { heading: "Find a new, accurate entry point", body: "A backlist book may connect with readers through a theme, setting, question, or related moment in the calendar. Revisit the description and choose a specific angle that helps a new reader understand why the title might interest them." },
      { heading: "Match the channel to the book", body: "A short-form feature, BookTube discussion, reading challenge, book-club outreach, or Goodreads category may offer different paths. Check relevance and platform rules rather than repeating the same campaign everywhere." },
      { heading: "Refresh useful campaign assets", body: "A clear book mockup, updated author profile, concise retailer links, or newsletter note can help present the title consistently. Use only approved cover art, current book information, and rights-cleared materials." },
      { heading: "Build a sustainable rhythm", body: "One well-considered mention may be more useful than a burst of repetitive posts. Plan around the author's capacity, audience interest, and other publishing commitments, then review any available engagement signals." },
    ],
    takeaways: ["A launch is one moment in a book's life, not the only one.", "Use a fresh angle that remains true to the book.", "Respect each community's rules and reader expectations.", "Renewed visibility is an opportunity, never a guarantee."],
    conclusion: "A backlist title can remain part of an author's ongoing discovery work. Thoughtful promotion makes it easier for new readers to find and understand the book.",
  },
  {
    slug: "ethical-book-review-promotion",
    title: "Ethical Book Review Promotion: What Authors Should Expect",
    excerpt: "A clear guide to voluntary reader feedback, platform policies, disclosure, and why review promises are a warning sign.",
    category: "Reviews & trust", image, readTime: "5 min", date: "November 2026",
    intro: "Reviews can help readers understand how a book lands with its audience, but they only have value when they reflect real reading experiences. Promotion should create ethical opportunities for readers to consider a book—not pressure them to praise it.",
    sections: [
      { heading: "An opportunity is not an endorsement", body: "A review campaign may coordinate exposure to readers who could be interested. Each reader decides whether to read and whether to leave feedback. Their opinion must remain independent, including when it is mixed or critical." },
      { heading: "Check platform rules and disclosures", body: "Review platforms maintain their own policies. Authors and promoters should follow the current rules, disclose relevant relationships where required, and avoid incentives tied to a positive rating or particular wording." },
      { heading: "Reject fabricated or guaranteed reviews", body: "Do not buy fabricated reviews, write reviews under false identities, or promise a positive sentiment or fixed review count. These practices mislead readers and can put a book's reputation and platform standing at risk." },
      { heading: "Make it easy to find the book", body: "When an interested reader wants to explore further, provide the correct book details and an appropriate retailer, library, or author-page link. Do not imply that a review is required to receive the book or participate unless the applicable terms explicitly allow the arrangement." },
    ],
    takeaways: ["Reader participation and opinions must be voluntary.", "Follow platform rules and disclosure requirements.", "Never accept fabricated, guaranteed, or paid-positive reviews.", "A particular review count or sentiment cannot be promised."],
    conclusion: "Authentic reader response is the only kind of review worth building a campaign around. Ethical promotion supports discovery while leaving the reader's judgment their own.",
  },
  {
    slug: "author-newsletter-reader-relationships",
    title: "An Author Newsletter That Readers Choose to Open",
    excerpt: "Use permission, relevance, and a sustainable cadence to make email a thoughtful extension of an author's relationship with readers.",
    category: "Email for authors", image, readTime: "5 min", date: "November 2026",
    intro: "An author newsletter can be a direct way to share books, updates, and useful context with readers who have chosen to hear from you. Its foundation is permission and relevance, not a constant stream of announcements.",
    sections: [
      { heading: "Make the sign-up promise clear", body: "Tell readers what kind of email they can expect and how often you plan to write. Use an appropriate consent-based sign-up process and include the unsubscribe mechanism required by your email provider and applicable rules." },
      { heading: "Send something that belongs to your author world", body: "A newsletter might include a book update, an excerpt, a note about research, an event, or a behind-the-scenes detail the reader will find interesting. It should feel consistent with the author and their work." },
      { heading: "Choose a cadence you can maintain", body: "A realistic rhythm is better than an ambitious schedule that quickly becomes difficult. Let readers know what they are signing up for and adjust transparently if your publishing calendar changes." },
      { heading: "Learn from the relationship", body: "Email platforms may report deliveries, clicks, and other signals. Use them carefully as directional information, not as a measure of a reader's worth or a guarantee of book sales." },
    ],
    takeaways: ["Get clear permission before sending marketing email.", "Set expectations about content and frequency.", "Choose a sustainable schedule and relevant messages.", "Engagement metrics inform decisions but promise no sales."],
    conclusion: "A good author newsletter makes staying in touch feel welcome. Start with clarity and care, then let the relationship grow at a pace that suits both author and reader.",
  },
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);