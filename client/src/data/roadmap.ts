// Roadmap data — typed, exact copy as specified.
// Works for 3 to 8 chapters with edits only in this file.

export type Chapter = {
  id: string;
  quarter: string;
  title: string;
  theme?: string;
  status: "now" | "upcoming" | "flexible";
  items?: string[];
  note?: string;
};

export interface RoadmapData {
  title: string;
  subtitle: string;
  footerNote: string;
  chapters: Chapter[];
}

export const ROADMAP: RoadmapData = {
  title: "ROADMAP",
  subtitle:
    "Direction, not a countdown. We plan in quarters, not exact dates — we'd rather ship it right than ship it loud.",
  footerNote:
    "This roadmap is a direction, not a promise. Timelines may shift as we build — we'll always tell you when they do.",
  chapters: [
    {
      id: "ch-01",
      quarter: "Q4 2026",
      title: "THE ARRIVAL",
      status: "now",
      theme: "Get here.",
      items: [
        "Staged mint: Team, GTD, FCFS, then Public",
        "Post-mint review",
        "Discord goes live",
        "Building an active community: raffles, giveaways, collaborations",
      ],
    },
    {
      id: "ch-02",
      quarter: "Q1 2027",
      title: "FIRST FITTING",
      status: "upcoming",
      theme: "Show it to the people who'll use it.",
      items: [
        "Fitting Room prototype review with holders — their feedback shapes the build",
        "Partnership and funding conversations begin",
        "Attending tech and industry events",
      ],
    },
    {
      id: "ch-03",
      quarter: "Q2 2027",
      title: "BETA",
      status: "upcoming",
      theme: "Break it on purpose.",
      items: [
        "Fitting Room beta opens to holders",
        "Testing, bug fixes, and polish",
        "Partnership and funding conversations continue",
        "Getting the word out about the product",
      ],
    },
    {
      id: "ch-04",
      quarter: "Q3–Q4 2027",
      title: "OPEN DOORS",
      status: "upcoming",
      theme: "Everyone's invited.",
      items: [
        "Fitting Room goes public",
        "Holders keep premium access; everyone else gets a lighter version",
        "Focus shifts to the next big feature",
      ],
    },
    {
      id: "ch-05",
      quarter: "NEXT UP",
      title: "THE AI STYLIST",
      status: "flexible",
      note: "Smarter outfit suggestions built on top of the Fitting Room. Timing is flexible, and it may land earlier than the quarters above.",
    },
  ],
};
