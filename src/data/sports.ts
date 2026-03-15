export interface Sport {
  id: string;
  name: string;
  shortDescription: string;
  icon: string;
  heroImage: string;
  readTime: string;
  difficulty: string;
  accentColor: string;
}

export const sports: Sport[] = [
  {
    id: "basketball",
    name: "Basketball",
    shortDescription: "Learn spacing, passing, and fast decision-making.",
    icon: "Target",
    heroImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1000",
    readTime: "5 min",
    difficulty: "Beginner Friendly",
    accentColor: "#F97316"
  },
  {
    id: "soccer",
    name: "Soccer",
    shortDescription: "Understand positioning, attacking options, and field awareness.",
    icon: "Activity",
    heroImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000",
    readTime: "4 min",
    difficulty: "Beginner Friendly",
    accentColor: "#22C55E"
  },
  {
    id: "football",
    name: "Football",
    shortDescription: "Practice reading plays and choosing high-impact options.",
    icon: "Zap",
    heroImage: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=1000",
    readTime: "6 min",
    difficulty: "Intermediate",
    accentColor: "#DC2626"
  },
  {
    id: "tennis",
    name: "Tennis",
    shortDescription: "Learn shot selection, court control, and tactical responses.",
    icon: "Dumbbell",
    heroImage: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=1000",
    readTime: "4 min",
    difficulty: "Beginner Friendly",
    accentColor: "#A3E635"
  },
  {
    id: "baseball",
    name: "Baseball",
    shortDescription: "Improve choices around hitting, fielding, and baserunning.",
    icon: "Trophy",
    heroImage: "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&q=80&w=1000",
    readTime: "5 min",
    difficulty: "Beginner Friendly",
    accentColor: "#2563EB"
  },
  {
    id: "volleyball",
    name: "Volleyball",
    shortDescription: "Learn rotations, positioning, and quick-response team play.",
    icon: "Users",
    heroImage: "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=1000",
    readTime: "4 min",
    difficulty: "Beginner Friendly",
    accentColor: "#0D9488"
  },
  {
    id: "cricket",
    name: "Cricket",
    shortDescription: "Master batting strategy, field placements, and bowling tactics.",
    icon: "Shield",
    heroImage: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1000",
    readTime: "7 min",
    difficulty: "Intermediate",
    accentColor: "#8B5CF6"
  },
  {
    id: "golf",
    name: "Golf",
    shortDescription: "Learn course management, club selection, and mental focus.",
    icon: "Flag",
    heroImage: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=1000",
    readTime: "5 min",
    difficulty: "Beginner Friendly",
    accentColor: "#15803D"
  }
];
