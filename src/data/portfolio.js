export const projects = [
  {
    number: '01',
    name: 'Flour Power Hub — Posho Mill Tracker',
    description:
      'A complete point-of-sale and inventory system for small agribusiness operations. Includes real-time financial reporting, audit trails, and M-Pesa STK Push payments — built to replace manual reconciliation entirely.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'M-Pesa API', 'CI/CD', 'PWA'],
    impact: '↗ Reduced manual reconciliation time by ~70%',
    links: [
      { label: 'GitHub', href: 'https://github.com/mwei023/flour-power-hub.git' },
      { label: 'Live', href: 'https://amani.mwei.co.ke' },
    ],
  },
  {
    number: '02',
    name: 'ICT Asset Management System',
    description:
      'A department-wide system to register, assign, and track ICT assets with full lifecycle traceability. Database-level audit logging via PostgreSQL triggers captures every CRUD operation with user context.',
    stack: ['React', 'PostgreSQL', 'SQL Triggers', 'JWT', 'RBAC'],
    impact: '↗ Full lifecycle traceability — reduced asset loss incidents',
    links: [{ label: 'GitHub', href: 'https://github.com/mwei023/brs-asset-guardian-system' }],
  },
  {
    number: '03',
    name: 'Crypto Market Data Backend',
    description:
      'A backend service ingesting real-time cryptocurrency data from multiple public APIs with automatic fallback strategies. Handles time-series storage efficiently with connection pooling, indexing, and Pydantic validation throughout.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Pydantic', 'REST'],
    impact: '↗ Multi-source ingestion with structured error handling & fallbacks',
    links: [{ label: 'GitHub', href: 'https://github.com/mwei023/crypto-market-data-backend' }],
  },
  {
    number: '04',
    name: 'Home Lab & Network Infrastructure',
    description:
      'A self-hosted lab running Cloudflare Tunnels to expose local services securely under mwei.co.ke subdomains — no port forwarding. Includes a custom metrics server, automated Bash diagnostics, and wireless network deployments for local clients.',
    stack: ['Kali Linux', 'Cloudflared', 'Bash', 'Prometheus', 'MikroTik', 'iptables'],
    impact: '↗ first-resolution rate on client network deployments',
    links: [{ label: 'mwei.co.ke', href: 'https://mwei.co.ke' }],
  },
]

export const philosophy = [
  {
    year: "Now",
    title: "Systems Thinking",
    desc: `I enjoy understanding how systems behave under failure.

Whether it's a database trigger,
a routing problem,
or a payment integration,
I'm interested in the layers underneath the interface.

The goal isn't just to make software work.

It's to make it reliable.`
  }
]

export const skillGroups = [
  {
    label: 'Frontend & Mobile',
    skills: ['React / TypeScript', 'React Native', 'Vite / PWA', 'WebSockets', 'REST API integration'],
  },
  {
    label: 'Backend',
    skills: ['Node.js / Express', 'Python / FastAPI', 'PostgreSQL / MongoDB', 'M-Pesa Daraja API', 'JWT / RBAC / bcrypt'],
  },
  {
    label: 'Networking',
    skills: ['TCP/IP, DNS, DHCP, NAT', 'VLANs & Subnetting', 'Wireshark / tcpdump', 'Nmap / iptables', 'Cloudflare Tunnels'],
  },
  {
    label: 'DevOps & Security',
    skills: ['Docker / Compose', 'GitHub Actions CI/CD', 'Linux (Kali, Lubuntu)', 'Threat analysis / CTF', 'OWASP: rate limiting, CORS, SQLi'],
  },
]

export const milestones = [
  {
    year: '2022',
    title: 'Started BSc. Computer Science',
    desc: 'Enrolled at Maasai Mara University. First exposure to networks, OS internals, and algorithms. Realised quickly that building things was more interesting than just studying them.',
  },
  {
    year: '2023',
    title: 'First real systems',
    desc: 'Built the ICT Asset Management System — first time designing a database with triggers, implementing RBAC from scratch, and thinking seriously about security at the data layer.',
  },
  {
    year: '2024',
    title: 'Production & payments',
    desc: 'Shipped Flour Power Hub — the first project with real users, real money (M-Pesa), and real consequences if things broke. Learned what "production-ready" actually means.',
  },
  {
    year: '2025',
    title: 'IT Internship at BRS',
    desc: 'Hands-on network troubleshooting for 50+ staff at Business Registration Services. Verified DHCP leases, DNS resolution, and gateway connectivity daily. Reduced repeat tickets by ~30%.',
  },
  {
    year: 'Now',
    title: 'Network+ & building deeper',
    desc: 'Pursuing CompTIA Network+, active on TryHackMe, and building a RAG-based knowledge assistant. Looking for a team where I can grow into network operations or security engineering.',
  },
  {
    year: 'Beyond',
    title: 'Future Goals',
    desc: 'Aspiring to lead network infrastructure projects and contribute to open-source security initiatives.',
  },
]

export const contact = {
  email: 'petermwei23@gmail.com',
  phone: '+254 704 546 776',
  github: 'https://github.com/mwei023',
  linkedin: 'https://www.linkedin.com/in/mwei23/',
  website: 'https://mwei.co.ke',
}
