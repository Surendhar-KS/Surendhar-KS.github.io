export type CardAsset = {
  frontImage: string;
  title: string;
  subtitle: string;
  gradient: string;
  origin: { originX: number; zIndex: number };
};

export const cardAssets: CardAsset[] = [
  {
    frontImage: "https://framerusercontent.com/images/tUkDeSIXGHUoQm8mfXzM7PvqB8Q.png?width=686&height=755",
    title: "Branding & Identity",
    subtitle: "Build distinctive brands through strategy, identity, and messaging that create trust and meaningful audience connections now.",
    gradient: "linear-gradient(180deg, rgb(239, 156, 60) 0%, rgb(196, 125, 43) 100%)",
    origin: { originX: 0, zIndex: 2 },
  },
  {
    frontImage: "https://framerusercontent.com/images/A4kZ4JKrKRQB47BZsV6CXyJCwA.png?width=1200&height=673",
    title: "Web Design & Dev",
    subtitle: "Design and develop modern websites with seamless experiences that engage visitors and turn interactions into growth at scale.",
    gradient: "linear-gradient(180deg, rgb(60, 138, 240) 0%, rgb(54, 120, 207) 100%)",
    origin: { originX: 0, zIndex: 1 },
  },
  {
    frontImage: "https://framerusercontent.com/images/aX7OzhXTeeu9KoHilGJmEuZTbY.png?width=1200&height=799",
    title: "Creative Production",
    subtitle: "Create impactful visual content through storytelling and production that captures attention across every platform every day.",
    gradient: "linear-gradient(180deg, rgb(109, 230, 69) 0%, rgb(76, 176, 42) 100%)",
    origin: { originX: 0, zIndex: 0 },
  },
];
