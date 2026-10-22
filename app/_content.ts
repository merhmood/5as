export const contact = {
  address: ["House 15, Ganaja Road,", "Lokoja, Kogi State"],
  phones: ["0703 737 4411", "0903 478 0718"],
  email: "contact@5astechnologies.com",
  website: "5astechnologies.com",
};

export const values = [
  ["Integration", "Structure, power and technology are planned as one system, never in isolation."],
  ["Accountability", "Clear owners, clear deliverables, clean handovers. No grey areas."],
  ["Safety & Compliance", "We build to standard and put qualified professionals on every task."],
  ["Practical Innovation", "Technology earns its place by solving a real operational problem."],
  ["Client Partnership", "We listen first, speak plainly and shape every solution around your goals."],
  ["Continuity", "Our job doesn't end at installation. We plan for maintenance, resilience and support."],
] as const;

export const divisions = [
  {
    id: "construction",
    title: "Construction & General Contracting",
    tagline: "Spaces built from the ground up to carry the power, data and operations a modern facility depends on.",
    items: [
      "Commercial and residential fit-outs, renovations and partitioning.",
      "Structural pathways, utility trenches and conduit routes for power and data, planned in from the start.",
      "Server rooms, data centres and specialist technical spaces, built to specification.",
      "Fit-outs for hospitals, clinics, laboratories and diagnostic centres, delivered by qualified teams.",
      "Single-point coordination across building, electrical and IT packages.",
    ],
  },
  {
    id: "power",
    title: "Electrical & Critical Power",
    tagline: "Power designed around how your facility runs, and engineered to keep it running when the grid doesn't.",
    items: [
      "Power distribution, sub-panels, switchgear and associated infrastructure.",
      "Backup generators with automatic transfer switching for seamless changeover.",
      "Solar PV and battery storage to reduce reliance on the grid.",
      "Dedicated power planning for server rooms, offices, clinics and other critical spaces.",
      "Upgrades, testing and commissioning carried out with licensed professionals.",
    ],
  },
  {
    id: "it",
    title: "IT, Connectivity, Cloud & Smart Systems",
    tagline: "The digital backbone that connects your people, devices, applications and buildings.",
    items: [
      "Structured cabling, fibre-optic networks, LAN and enterprise Wi-Fi.",
      "Network equipment, server-room infrastructure and data-centre fit-outs.",
      "CCTV, access control, intercoms and integrated physical security.",
      "Smart-building automation, environmental sensors and IoT monitoring.",
      "Cloud hosting, data backup, disaster recovery and cybersecurity support.",
      "Domains, DNS, business email and website infrastructure.",
    ],
  },
  {
    id: "healthcare-tech",
    title: "Healthcare Technology & Medical Systems",
    tagline: "Reliable digital systems for hospitals, clinics, laboratories and diagnostic centres, so clinicians can focus on care.",
    items: [
      "EMR/EHR implementation, configuration, training and ongoing support.",
      "Hospital Management Information Systems (HMIS) and digital workflows.",
      "Analytics dashboards and operational reporting.",
      "Laboratory Information Systems (LIS) and diagnostic workflow integration.",
      "Radiology Information Systems (RIS), PACS and imaging infrastructure.",
      "Telemedicine, patient portals, appointment and queue management.",
      "Clinical networks, workstations, secure hosting, access control and backup.",
      "Medical-equipment connectivity and biomedical maintenance through qualified specialists.",
    ],
    note: "We deliver the technology and infrastructure behind care, not clinical services. Regulated medical-equipment work and specialist activities are carried out only with the required approvals and qualified partners in place.",
  },
] as const;

export const sectors = [
  ["Commercial & Corporate", "Offices, retail spaces and multi-site businesses that need reliable power, fast networks and secure premises."],
  ["Property & Construction", "Developers, contractors, architects and facility managers who want one partner for every technical package."],
  ["Industrial & Technical", "Industrial sites, server rooms and data centres where uptime is non-negotiable."],
  ["Healthcare", "Hospitals, clinics, diagnostic centres, laboratories, pharmacies and healthcare groups."],
  ["Education & Institutions", "Schools, training centres and institutional campuses that need infrastructure built for scale."],
  ["Residential", "Residential developments and smart homes built for modern living."],
] as const;

export const steps = [
  ["Discover", "We learn your goals, your site, your constraints and how the facility needs to run."],
  ["Assess & Plan", "We review drawings and requirements, and map every point where structure, power and technology meet."],
  ["Scope & Coordinate", "We lock in deliverables, dependencies, responsibilities, timelines and specialist partners."],
  ["Deliver & Integrate", "Our teams install and configure every system to the agreed scope and standard."],
  ["Test & Handover", "We test, document, train your people and hand over everything you need to operate."],
  ["Support & Maintain", "Maintenance, updates and support keep your systems performing long after launch."],
] as const;

export const whyOnePartner = [
  "Fewer gaps between the building, power and technology teams.",
  "Routing, power and space clashes caught early, on paper rather than on site.",
  "Clear ownership, timelines and handovers you can track.",
  "Infrastructure designed for easy maintenance and future growth.",
  "One point of contact, from first visit to final sign-off.",
] as const;

export const clinicSteps = [
  "Assess the facility, power, network and software needs.",
  "Install cabling, Wi-Fi, workstations and backup power.",
  "Deploy an EMR/HMIS platform with a trusted software partner.",
  "Configure role-based access, backups and live dashboards.",
  "Train staff, document everything and agree ongoing support.",
] as const;

export const reasons = [
  ["Joined-up thinking", "Building, electrical and IT requirements designed together from day one."],
  ["Seamless coordination", "Every work package planned around its interfaces and dependencies."],
  ["Flexible delivery", "Full projects, specialist packages or ongoing support, whatever the job needs."],
  ["Sector versatility", "Solutions tailored to commercial, institutional, residential and healthcare settings."],
  ["Built to last", "Maintenance, documentation, security and continuity planned in from the start."],
] as const;

export const nav = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Sectors", "/sectors"],
  ["Process", "/process"],
  ["Healthcare", "/healthcare"],
] as const;
