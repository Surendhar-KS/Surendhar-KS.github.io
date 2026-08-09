export type CardAsset = {
  iconUrl: string;
  iconBg: string;
  accentColor: string;
  title: string;
  subtitles: string[];
  description: string;
  issuer: string;
  year: string;
  badges: string[];
  badgeScale?: number;
  badgeTranslateY?: number;
  credentialLink?: string;
  credentialLinks?: { label: string; url: string }[];
  skills?: string[];
  origin: { originX: number; zIndex: number };
};

export const cardAssets: CardAsset[] = [
  {
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    iconBg: "#232F3E", // AWS Dark
    accentColor: "#FF9900", // AWS Accent
    title: "AWS Certified",
    subtitles: ["Cloud Practitioner"],
    description: "Validated foundational knowledge of AWS Cloud, core services, security, and cloud architecture.",
    issuer: "Amazon Web Services",
    year: "2026",
    badges: [
      "/badges/aws-cloud-practitioner.webp"
    ],
    credentialLink: "/images/certificates/aws-cloud-practitioner.webp",
    skills: ["Cloud Concepts", "Security", "Technology", "Billing & Pricing"],
    origin: { originX: 0, zIndex: 2 },
  },
  {
    iconUrl: "/images/servicenow-logo-new.webp",
    iconBg: "#032D42", // ServiceNow Dark Blue/Greenish
    accentColor: "#00796B", // ServiceNow Teal Accent
    title: "ServiceNow Certified",
    subtitles: [
      "System Administrator (CSA)",
      "Certified Implementation Specialist – Data Foundations (CMDB & CSDM)"
    ],
    description: "",
    issuer: "ServiceNow",
    year: "2026",
    badges: [
      "/badges/servicenow-csa.webp", 
      "/badges/servicenow-cis-df.webp"
    ],
    credentialLinks: [
      { label: "CSA Cert", url: "/images/certificates/servicenow-csa.webp" },
      { label: "CIS-DF Cert", url: "/images/certificates/servicenow-cis-df.webp" }
    ],
    skills: ["System Administration", "CMDB", "CSDM"],
    origin: { originX: 0, zIndex: 1 },
  },
  {
    iconUrl: "/images/oracle-logo-new.webp",
    iconBg: "#C74634", // Oracle Red
    accentColor: "#C74634", // Oracle Accent
    title: "Oracle Cloud Infrastructure",
    subtitles: ["OCI Architect Associate"],
    description: "Validated cloud architecture skills for designing secure, scalable, and reliable solutions on Oracle Cloud Infrastructure.",
    issuer: "Oracle",
    year: "2025",
    badgeScale: 1.5,
    badges: [
      "/badges/oracle-oci-architect-associate.webp"
    ],
    credentialLink: "/images/certificates/oracle-oci.webp",
    skills: ["Generative AI", "Cloud Infrastructure", "Security", "Networking"],
    origin: { originX: 0, zIndex: 0 },
  },
];
