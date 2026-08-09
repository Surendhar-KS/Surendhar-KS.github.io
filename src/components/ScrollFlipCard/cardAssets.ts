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
      "/badges/aws-cloud-practitioner.png"
    ],
    credentialLink: "/images/certificates/aws-cloud-practitioner.jpg",
    origin: { originX: 0, zIndex: 2 },
  },
  {
    iconUrl: "/images/servicenow-logo-new.jpeg",
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
      "/badges/servicenow-csa.png", 
      "/badges/servicenow-cis-df.png"
    ],
    credentialLinks: [
      { label: "CSA Cert", url: "/images/certificates/servicenow-csa.jpg" },
      { label: "CIS-DF Cert", url: "/images/certificates/servicenow-cis-df.jpg" }
    ],
    origin: { originX: 0, zIndex: 1 },
  },
  {
    iconUrl: "/images/oracle-logo-new.jpeg",
    iconBg: "#C74634", // Oracle Red
    accentColor: "#C74634", // Oracle Accent
    title: "Oracle Cloud Infrastructure",
    subtitles: ["OCI Architect Associate"],
    description: "Validated cloud architecture skills for designing secure, scalable, and reliable solutions on Oracle Cloud Infrastructure.",
    issuer: "Oracle",
    year: "2025",
    badgeScale: 1.5,
    badges: [
      "/badges/oracle-oci-architect-associate.png"
    ],
    credentialLink: "/images/certificates/oracle-oci.jpg",
    origin: { originX: 0, zIndex: 0 },
  },
];
