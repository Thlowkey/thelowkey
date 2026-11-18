import { describe, expect, it } from "vitest";
import { bookMarketingCategories, bookMarketingServices } from "@/data/bookMarketingServices";

describe("Low Key book-marketing service catalog", () => {
  it("contains the 13 services currently offered", () => {
    expect(bookMarketingServices).toHaveLength(13);
    expect(bookMarketingServices.map((service) => service.title)).toEqual([
      "TikTok Book Features",
      "Instagram Book Features",
      "BookTok Promotion",
      "Bookstagram Promotion",
      "BookTube Features",
      "Professional Book Trailer Creation",
      "Email Marketing for Authors",
      "Social Media Management and Optimization",
      "Goodreads Listopia Placement",
      "Reading Challenge Promotion",
      "Book Club Promotion",
      "Book Review Services",
      "Professional Book Mockup Design",
    ]);
  });

  it("groups the offers into the six approved categories", () => {
    expect(bookMarketingCategories.map((category) => category.title)).toEqual([
      "Social Media Book Promotion",
      "Book Video Production",
      "Email Marketing",
      "Author Digital Presence",
      "Goodreads & Literary Community Promotion",
      "Book Design",
    ]);
    expect(bookMarketingCategories.map((category) => category.services.length)).toEqual([5, 1, 1, 1, 4, 1]);
  });

  it("keeps every service address distinct for reliable navigation", () => {
    const slugs = bookMarketingServices.map((service) => service.slug);
    expect(new Set(slugs).size).toBe(13);
  });
});