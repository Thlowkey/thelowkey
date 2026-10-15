import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, Feather, Globe2, Mail, Menu, Sparkles } from "lucide-react";
import bookCover from "@/assets/author-concept-cover.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";

const references = [
  { name: "Remigiusz Mróz", url: "https://remigiuszmroz.pl/en/", note: "Author positioning, book-related content, and presenting an established literary career." },
  { name: "Karolina Lewestam", url: "https://www.lewestam.com/", note: "Literary identity, book presentation, and visual storytelling." },
  { name: "Sylwia Chutnik", url: "https://sylwiachutnik.com/", note: "Author biography, literary credentials, and professional activities." },
  { name: "Jacek Dukaj", url: "https://www.dukaj.pl/pl/about", note: "Author identity, background, and presentation of creative work." },
  { name: "Leo Bera", url: "https://leobera.pl/", note: "Featured book presentation, retailer links, author information, and events." },
  { name: "Katarzyna Pernal-Wyderkiewicz", url: "https://pernalwyderkiewicz.pl/", note: "Book-focused presentation and the organization of literary content." },
  { name: "Mirosława Kareta", url: "https://www.miroslawakareta.pl/", note: "Book announcements, author updates, and reader-facing content." },
  { name: "Robert Król", url: "https://robertkrol.com/", note: "Literary work, professional identity, and multilingual presentation." },
  { name: "Marlena Zynger", url: "https://marlenazynger.pl/", note: "Author profile, publications, and professional literary activities." },
  { name: "Konrad J. Piwowarczyk", url: "https://www.konradjpiwowarczyk.com/", note: "Personal branding, creative work, and professional presentation." },
];

const deliverables = [
  ["01", "Custom Author Branding", "Author wordmark or logo direction, favicon, coordinated colors, typography, and a visual identity that feels like your work."],
  ["02", "Professional Homepage", "A clear introduction, featured book, primary calls to action, and a considered content hierarchy."],
  ["03", "Dedicated Book Pages", "Cover, synopsis, genre, publication details, retailer links, and reviews or endorsements you provide."],
  ["04", "Author Biography", "A polished biography, portrait, writing journey, achievements, and relevant professional information."],
  ["05", "Bookshelf & Publications", "A well-organized catalog for multiple titles, book series, and future releases."],
  ["06", "Blog & News", "A home for writing insights, book announcements, publication updates, interviews, and articles."],
  ["07", "Reader Newsletter", "A clear subscription experience with consent language and integration for your chosen email platform."],
  ["08", "Events & Media", "Book signings, appearances, interviews, speaking information, press resources, and enquiries where relevant."],
  ["09", "Responsive Design", "Mobile-friendly layouts, accessible navigation, image optimization, and cross-device quality checks."],
  ["10", "SEO & Analytics", "Page metadata, headings, alt text, internal links, sitemap and indexing checks, relevant structured data, and agreed analytics."],
];

const benefits = [
  ["Discoverability", "A well-structured site gives search engines more relevant pages where readers may find you and your books."],
  ["Credibility", "A cohesive identity helps visitors understand your work, background, and place as an author."],
  ["Book discovery", "Dedicated book pages give interviews, social posts, reader communities, and campaigns a central destination."],
  ["Reader relationships", "An opted-in newsletter gives you a direct way to share future books, events, and news."],
  ["Long-term growth", "Your site can develop with new publications, interviews, events, and evolving goals."],
  ["Measurable learning", "With suitable analytics, you can assess visits, search visibility, retailer clicks, and newsletter signups."],
];

const process = [
  ["01", "Discover", "Understand you, your genre, goals, readers, books, and the materials you already have."],
  ["02", "Strategize", "Plan the structure, visual direction, reader journey, and features that fit the project."],
  ["03", "Design & Build", "Create the responsive site, organize the content, and implement the agreed features."],
  ["04", "Launch & Refine", "Test the experience, review together, launch when approved, and discuss future improvements."],
];

const faqs = [
  ["Do you design websites for first-time authors?", "Yes. The site can introduce a debut author and first book clearly, with room for the author brand and catalog to grow."],
  ["Can you redesign an existing author website?", "Yes. We can review what is working, what feels dated or difficult to use, and shape a redesign around your current goals."],
  ["Can my website showcase multiple books?", "Yes. A bookshelf or publications area can organize several titles, series, and future releases."],
  ["Can you add Amazon and other book-retailer links?", "Yes. Retailer links you provide can be included on each relevant book page."],
  ["Can you help with author branding and logos?", "Brand direction and a coordinated author identity can be included when they suit the project scope."],
  ["Will my website be mobile-friendly?", "Responsive layouts and checks across device sizes are part of the planned website experience."],
  ["Can you help improve my website's SEO?", "I can build a sound SEO foundation, including page metadata, structure, internal links, and indexing checks. Rankings are never guaranteed."],
  ["Can website design be combined with ebook marketing?", "Yes. Website design and ebook marketing or promotion can be discussed as complementary, separately scoped support."],
  ["How do I receive a quote?", "Share your books, goals, current website if you have one, and the support you are considering. Pricing and timing depend on scope."],
];

const mailto = (subject: string, body: string) =>
  `mailto:hello@uselowkey.online?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const enquiryBody = `Hello Low Key,\n\nI'd like to discuss an author website project.\n\nName:\nEmail:\nCurrent author website (if any):\nBook title or genre:\nWhat I need:\nBudget range (optional):\nProject notes (optional):\n`;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">{children}</p>;
}

function FictionWebsitePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[590px] pb-10 pr-8 sm:pb-12 sm:pr-12">
      <div className="overflow-hidden rounded-md border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
          <span className="font-heading text-sm sm:text-base">Eleanor Wren</span>
          <nav aria-label="Illustrative author-site navigation" className="hidden items-center gap-5 font-mono text-[9px] uppercase text-muted-foreground sm:flex">
            <span>Books</span><span>About</span><span>Journal</span>
          </nav>
          <Menu className="size-4 text-muted-foreground sm:hidden" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-[1.15fr_.85fr] items-center gap-3 p-4 sm:gap-7 sm:p-8">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-primary sm:text-[9px]">A novel by Eleanor Wren</p>
            <p className="mt-3 font-heading text-xl leading-tight sm:text-3xl">Some places<br />remember us.</p>
            <p className="mt-2 max-w-[235px] text-[9px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-xs">A story of inheritance, belonging, and the things we leave behind.</p>
            <span className="mt-4 inline-flex items-center gap-1 border-b border-primary pb-1 font-mono text-[8px] uppercase tracking-wider text-primary sm:mt-6 sm:text-[9px]">Discover the book <ArrowRight className="size-3" /></span>
          </div>
          <div className="mx-auto w-full max-w-[130px] rotate-2 overflow-hidden shadow-xl sm:max-w-[180px]">
            <BookCover label="The Quiet Shore" />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-border px-4 py-3 font-mono text-[7px] uppercase tracking-wider text-muted-foreground sm:px-6 sm:text-[8px]">
          <span>Stories for the spaces between</span><span>Meet the author ↗</span>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[104px] overflow-hidden rounded-[1rem] border-[3px] border-foreground/70 bg-background shadow-2xl sm:w-[145px] sm:rounded-[1.3rem] sm:border-4">
        <div className="mx-auto mt-1 h-1 w-8 rounded-full bg-muted-foreground/40" />
        <div className="px-2 pb-3 pt-2 text-center sm:px-3 sm:pb-4 sm:pt-3">
          <p className="font-heading text-[9px] sm:text-xs">Eleanor Wren</p>
          <div className="mx-auto my-2 w-12 rotate-2 overflow-hidden shadow-md sm:my-3 sm:w-16"><BookCover label="The Quiet Shore" /></div>
          <p className="font-heading text-[8px] leading-tight sm:text-[10px]">A story that<br />stays with you.</p>
          <span className="mt-2 inline-block bg-primary px-2 py-1 font-mono text-[6px] uppercase text-primary-foreground sm:text-[7px]">Discover</span>
        </div>
      </div>
      <span className="absolute -bottom-4 left-0 font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground">Illustrative concept · Fiction author</span>
    </div>
  );
}

function BookCover({ label }: { label: string }) {
  return (
    <div className="relative aspect-[2/3] w-full overflow-hidden bg-secondary">
      <img src={bookCover} alt="Illustrative moonlit mountain-lake artwork for a fictional novel cover" width={1024} height={1408} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-start bg-background/10 px-2 pt-[18%] text-center">
        <span className="font-mono text-[5px] uppercase tracking-[0.16em] text-foreground sm:text-[7px]">A novel</span>
        <span className="mt-1 max-w-[95%] font-heading text-[10px] leading-tight text-foreground drop-shadow sm:text-base">{label}</span>
        <span className="mt-2 font-mono text-[5px] uppercase tracking-[0.12em] text-foreground sm:text-[7px]">Eleanor Wren</span>
      </div>
    </div>
  );
}

function ConceptPreview({ kind }: { kind: "nonfiction" | "poetry" }) {
  if (kind === "nonfiction") {
    return (
      <div className="overflow-hidden rounded-md border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-4 py-3"><span className="font-heading text-sm">Dr. Ellis Rowan</span><span className="font-mono text-[8px] uppercase tracking-wider text-muted-foreground">Books&nbsp;&nbsp; Ideas&nbsp;&nbsp; Speaking</span></div>
        <div className="grid grid-cols-[1.3fr_.7fr] gap-4 p-5 sm:gap-8 sm:p-8">
          <div><p className="font-mono text-[8px] uppercase tracking-[0.17em] text-primary">Writer · Researcher · Speaker</p><p className="mt-2 font-heading text-xl leading-tight sm:text-3xl">Make room for<br />better questions.</p><p className="mt-2 max-w-xs text-[9px] leading-relaxed text-muted-foreground sm:mt-3 sm:text-xs">Ideas for doing meaningful work in a world that never stops asking for more.</p><span className="mt-4 inline-flex items-center gap-1 border-b border-primary pb-1 font-mono text-[8px] uppercase text-primary">Meet Ellis <ArrowRight className="size-3" /></span></div>
          <div className="flex flex-col items-center justify-center bg-secondary/70 p-3 text-center"><BookOpen className="mb-3 size-5 text-primary" /><p className="font-heading text-[11px] leading-tight sm:text-base">The Thoughtful<br />Practice</p><p className="mt-2 font-mono text-[6px] uppercase tracking-wider text-muted-foreground sm:text-[8px]">A new book</p></div>
        </div>
        <div className="flex justify-between border-t border-border px-4 py-2 font-mono text-[7px] uppercase text-muted-foreground"><span>Latest essays</span><span>Speaking & media ↗</span></div>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-md border border-border bg-card">
      <div className="flex items-center justify-between px-5 py-4"><span className="font-heading text-sm">mara lune</span><span className="font-mono text-[8px] uppercase tracking-wider text-muted-foreground">Poems&nbsp;&nbsp; Notes&nbsp;&nbsp; Readings</span></div>
      <div className="px-5 pb-5 pt-3 sm:px-8 sm:pb-8 sm:pt-6"><p className="font-heading text-2xl italic leading-tight sm:text-4xl">“I learned the names<br />of things by leaving.”</p><p className="mt-3 max-w-sm text-[9px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-xs">Poems on memory, distance, and the small rituals that make a place home.</p><div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3"><span className="font-mono text-[7px] uppercase tracking-wider text-muted-foreground sm:text-[8px]">Selected work · 2018—2026</span><span className="font-mono text-[8px] uppercase text-primary">Join the letter ↗</span></div></div>
    </div>
  );
}

export default function AuthorWebsiteDesign() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <Seo title="Author Website Design for Writers & Publishers | Low Key" description="Professional author website design for writers, novelists, and independent authors. Showcase your books, strengthen your author brand, and build a better reader experience with Low Key." path="/author-website-design" />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Author Website Design", description: "Custom author websites that bring books, biography, reader community, and an author's writing journey together.", provider: { "@type": "Person", name: "Low Key", url: "https://thelowkey.lovable.app/" }, url: "https://thelowkey.lovable.app/author-website-design", serviceType: "Author website design" })}</script>
      <Navbar />
      <main>
        <section className="relative px-4 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
          <div className="container mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-6">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="relative z-10 max-w-2xl">
              <Eyebrow>Author website design · Low Key</Eyebrow>
              <h1 className="mt-5 max-w-2xl font-heading text-4xl font-semibold leading-[1.08] md:text-6xl">Author Website Design That Gives Your Books a <span className="serif-italic font-normal text-primary">Stronger Digital Home</span></h1>
              <p className="mt-5 max-w-xl font-heading text-xl leading-snug text-foreground/90 md:text-2xl">Your stories deserve more than a book listing.</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">Build an author website that showcases your work, strengthens your identity, and helps readers discover what you write. I bring your books, biography, reader community, and writing journey together in one thoughtful digital home.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="h-12 rounded-full px-6 font-mono text-[10px] uppercase tracking-wider"><a href={mailto("Discuss Your Author Website", enquiryBody)}>Discuss Your Author Website <ArrowRight /></a></Button>
                <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-6 font-mono text-[10px] uppercase tracking-wider"><a href="#inspiration">Explore Design Inspiration <ArrowDown /></a></Button>
              </div>
              <p className="mt-7 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground"><Feather className="size-3.5 text-primary" />For debut voices and established author brands</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="relative mt-4 px-1 sm:px-6 lg:mt-0 lg:px-0">
              <div className="pointer-events-none absolute -inset-8 -z-10 bg-primary/5 blur-3xl" />
              <FictionWebsitePreview />
            </motion.div>
          </div>
        </section>

        <section id="inspiration" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end">
              <div><Eyebrow>Design Inspiration & Reference Websites</Eyebrow><h2 className="mt-4 max-w-lg font-heading text-3xl leading-tight md:text-5xl">Author Website Inspiration Gallery</h2></div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:justify-self-end md:text-base">Explore author websites with useful ideas for book presentation, author branding, navigation, content organization, and reader engagement. These independent references inform thoughtful custom design; they are not Low Key projects.</p>
            </div>
            <div className="mt-11 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {references.map((item, index) => <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.name}'s website (opens in a new tab)`} className="group flex min-h-[172px] flex-col border-t border-border py-5 transition-colors hover:border-primary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <div className="flex items-center justify-between"><span className="font-mono text-[9px] text-primary">0{index + 1}</span><ArrowUpRight className="size-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" /></div>
                <h3 className="mt-4 font-heading text-xl">{item.name}</h3><p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">{item.note}</p><span className="mt-auto pt-4 font-mono text-[8px] uppercase tracking-[0.14em] text-muted-foreground">Independent reference ↗</span>
              </a>)}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-4 md:grid-cols-[.7fr_1.3fr] md:items-end"><div><Eyebrow>Illustrative Design Concepts</Eyebrow><h2 className="mt-4 max-w-xl font-heading text-3xl leading-tight md:text-5xl">What Your Author Website Could Look Like</h2></div><p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:justify-self-end">Three fictional directions, each shaped by a different kind of writing. These are design explorations, not completed client projects.</p></div>
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-20">
              <article className="lg:col-span-2"><div className="grid items-center gap-8 lg:grid-cols-[.65fr_1.35fr]"><div><span className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary">Concept A · The Fiction Author</span><h3 className="mt-3 font-heading text-2xl">A world with a door into it.</h3><p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">Cinematic storytelling puts a featured novel first, then opens naturally into the author's story, a series shelf, and places to discover the book.</p><p className="mt-4 font-mono text-[8px] uppercase tracking-wider text-muted-foreground">Fictional author & title · For illustration only</p></div><div className="relative"><FictionWebsitePreview /></div></div></article>
              <article><span className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary">Concept B · The Nonfiction Author</span><h3 className="mt-3 font-heading text-2xl">Clarity with a point of view.</h3><p className="mb-5 mt-2 text-sm leading-relaxed text-muted-foreground">A contemporary, authoritative presentation for an author whose expertise extends into ideas, media, and speaking.</p><ConceptPreview kind="nonfiction" /><p className="mt-3 font-mono text-[8px] uppercase tracking-wider text-muted-foreground">Dr. Ellis Rowan · The Thoughtful Practice · Fictional concept</p></article>
              <article><span className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary">Concept C · The Poet or Literary Author</span><h3 className="mt-3 font-heading text-2xl">Let the words lead.</h3><p className="mb-5 mt-2 text-sm leading-relaxed text-muted-foreground">A minimal, expressive home for selected poems, publications, readings, a brief biography, and a reader letter.</p><ConceptPreview kind="poetry" /><p className="mt-3 font-mono text-[8px] uppercase tracking-wider text-muted-foreground">Mara Lune · Fictional author · Illustrative concept</p></article>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-3xl"><Eyebrow>Thoughtful, tailored scope</Eyebrow><h2 className="mt-4 font-heading text-3xl leading-tight md:text-5xl">Everything Your Author Website Needs to Make a Stronger Impression</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">These are possibilities, not a checklist every author needs. I shape the scope around your genre, goals, audience, existing materials, and budget.</p></div>
            <div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{deliverables.map(([number, title, description]) => <article key={number} className="border-t border-border py-5"><span className="font-mono text-[9px] text-primary">{number}</span><h3 className="mt-3 font-heading text-lg">{title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p></article>)}</div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="container mx-auto grid max-w-7xl gap-10 md:grid-cols-[.75fr_1.25fr]">
            <div><Eyebrow>Beyond a launch date</Eyebrow><h2 className="mt-4 max-w-lg font-heading text-3xl leading-tight md:text-5xl">Your Website Should Work Beyond the Book Launch</h2><p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">A considered author site gives your work a durable home. Results still depend on content quality, competition, promotion, audience demand, and ongoing work. No site can guarantee rankings, traffic, or book sales.</p></div>
            <div className="grid gap-x-8 sm:grid-cols-2">{benefits.map(([title, description], index) => <article key={title} className="border-t border-border py-5"><span className="font-mono text-[9px] text-primary">0{index + 1}</span><h3 className="mt-2 font-heading text-lg">{title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p></article>)}</div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end"><div><Eyebrow>Design meets promotion</Eyebrow><h2 className="mt-4 font-heading text-3xl leading-tight md:text-5xl">A Better Website Is Only the Beginning</h2></div><p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:justify-self-end">Your website can anchor a broader author marketing strategy. Beyond your digital home, we can explore how to present and promote your books to relevant readers—without suggesting design alone creates sales.</p></div>
            <div className="mt-10 grid gap-10 md:grid-cols-2"><a href="#enquire" className="group border-t border-border py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Globe2 className="size-5 text-primary" /><div className="mt-5 flex items-center justify-between"><h3 className="font-heading text-2xl">Author Website Design</h3><ArrowUpRight className="size-4 text-muted-foreground transition group-hover:text-primary" /></div><p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">Build a professional online home for your books, biography, and reader community.</p><span className="mt-5 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-primary">Discuss a website <ArrowRight className="size-3" /></span></a>
              <a href={mailto("Ebook Marketing & Promotion Enquiry", "Hello Low Key,\n\nI'd like to discuss ebook marketing and promotion.\n\nName:\nBook title or genre:\nWhat I'd like help with:\n") } className="group border-t border-border py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Sparkles className="size-5 text-primary" /><div className="mt-5 flex items-center justify-between"><h3 className="font-heading text-2xl">Ebook Marketing & Promotion</h3><ArrowUpRight className="size-4 text-muted-foreground transition group-hover:text-primary" /></div><p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">Explore suitable promotional opportunities and a more consistent way to put your books in front of readers.</p><span className="mt-5 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-primary">Ask about promotion <ArrowRight className="size-3" /></span></a></div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 md:py-28"><div className="container mx-auto max-w-7xl"><div className="max-w-2xl"><Eyebrow>A clear, collaborative process</Eyebrow><h2 className="mt-4 font-heading text-3xl leading-tight md:text-5xl">From Manuscript to a Professional Online Presence</h2></div><div className="mt-11 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">{process.map(([number, title, description]) => <article key={number} className="border-t border-border py-5"><span className="font-mono text-[9px] text-primary">{number}</span><h3 className="mt-4 font-heading text-xl">{title}</h3><p className="mt-3 text-xs leading-relaxed text-muted-foreground">{description}</p></article>)}</div><p className="mt-5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Scope, requirements, pricing, and timing are discussed before work begins.</p></div></section>

        <section className="px-4 py-20 md:px-8 md:py-28"><div className="container mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><Eyebrow>Author questions</Eyebrow><h2 className="mt-4 font-heading text-3xl leading-tight md:text-5xl">A few things worth knowing.</h2><p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">Have a question about fit or scope? Send a note and we can talk it through.</p></div><div>{faqs.map(([question, answer]) => <details key={question} className="group border-t border-border py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-lg"><span>{question}</span><span className="font-mono text-primary transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pb-2 pr-8 pt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></div></section>

        <section id="enquire" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28"><div className="container mx-auto max-w-7xl border-t border-border pt-10 md:pt-14"><div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><Eyebrow>Start a conversation</Eyebrow><h2 className="mt-4 max-w-3xl font-heading text-3xl leading-tight md:text-5xl">Let's Build a Website Around Your Writing</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">Whether you're publishing your first book or elevating an established author brand, let's discuss a website that reflects your work and supports your goals.</p></div><Button asChild size="lg" className="h-12 rounded-full px-6 font-mono text-[10px] uppercase tracking-wider"><a href={mailto("Discuss Your Author Website", enquiryBody)}><Mail /> Discuss My Author Website <ArrowRight /></a></Button></div><p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground"><Check className="size-3.5 text-primary" />No fixed package or timeline assumed; we begin with your project and priorities.</p></div></section>
      </main>
      <Footer />
    </div>
  );
}