import {
  Award,
  Braces,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Rocket,
  Server,
  TerminalSquare,
  Wrench,
} from "lucide-react";

export const profile = {
  name: "Bima Satria Putra",
  role: "Junior Software Engineer",
  age: "16 tahun",
  birthDate: "Tanggal lahir siap dihubungkan ke API",
  school: "SMK Negeri 1 Surabaya",
  major: "Rekayasa Perangkat Lunak",
  location: "Surabaya, Indonesia",
  description:
    "Siswa SMK Negeri 1 Surabaya jurusan Rekayasa Perangkat Lunak yang tertarik dengan dunia web development, terutama dalam membuat tampilan website yang sederhana, nyaman dilihat, dan mudah digunakan.",
  aboutDetail:
    "Saya mulai memasuki dunia IT dari kecil, berawal dari rasa penasaran, lalu perlahan berkembang menjadi sesuatu yang benar-benar saya tekuni sampai sekarang.\n\nSaat ini saya lebih sering menggunakan JavaScript, PHP, HTML, dan CSS untuk mengerjakan berbagai project kecil maupun project sekolah. Saya suka mencoba hal baru, belajar dari kesalahan saat ngoding, dan terus meningkatkan kemampuan sedikit demi sedikit lewat praktik langsung.\n\nBagi saya, coding bukan cuma soal membuat program berjalan, tapi juga tentang bagaimana sebuah website bisa memberikan pengalaman yang baik untuk orang yang memakainya. Karena itu, saya selalu mencoba membuat hasil yang rapi, responsif, dan punya tujuan yang jelas.",
  interests: ["UI/UX Design", "Gaming", "Open Source Contribution", "Tech Community", "Continuous Learning", "System Optimization"],
  goals: "Menjadi Software Architect yang mampu membangun sistem skala besar yang berdampak positif bagi masyarakat.",
  githubUrl: "https://github.com/bimaak15",
};

export const stats = [
  { label: "Fokus", value: "Full-stack Web" },
  { label: "Pendidikan", value: "Kelas 10 RPL" },
  { label: "Basis", value: "Laravel + React" },
];

export const skillGroups = [
  {
    category: "Frontend",
    icon: Layers3,
    skills: [
      { name: "HTML5", logo: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
      { name: "CSS3", logo: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" },
      { name: "JavaScript", logo: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
      { name: "TypeScript", logo: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" },
      { name: "React", logo: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
      { name: "Next.js", logo: "https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" },
      { name: "Tailwind CSS", logo: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "PHP", logo: "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" },
      { name: "Laravel", logo: "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white" },
      { name: "Node.js", logo: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" },
      { name: "REST API", logo: "https://img.shields.io/badge/REST%20API-005571?style=for-the-badge&logo=google-cloud&logoColor=white" },
      { name: "Authentication", logo: "https://img.shields.io/badge/Authentication-FFCE54?style=for-the-badge&logo=auth0&logoColor=black" },
      { name: "CRUD", logo: "https://img.shields.io/badge/CRUD-4CAF50?style=for-the-badge&logo=codeforces&logoColor=white" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", logo: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" },
      { name: "Eloquent ORM", logo: "https://img.shields.io/badge/Eloquent%20ORM-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" },
      { name: "Schema Design", logo: "https://img.shields.io/badge/Schema%20Design-0078D4?style=for-the-badge&logo=diagrams.net&logoColor=white" },
      { name: "Query Builder", logo: "https://img.shields.io/badge/Query%20Builder-4479A1?style=for-the-badge&logo=mariadb&logoColor=white" },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", logo: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" },
      { name: "GitHub", logo: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" },
      { name: "VS Code", logo: "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" },
      { name: "Postman", logo: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
      { name: "Netlify", logo: "https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" },
      { name: "XAMPP", logo: "https://img.shields.io/badge/XAMPP-FB7A24?style=for-the-badge&logo=xampp&logoColor=white" },
    ],
  },
  {
    category: "Programming",
    icon: Braces,
    skills: [
      { name: "Python", logo: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
      { name: "OOP", logo: "https://img.shields.io/badge/OOP-121011?style=for-the-badge&logo=codingame&logoColor=white" },
      { name: "Problem Solving", logo: "https://img.shields.io/badge/Problem%20Solving-F7931E?style=for-the-badge&logo=hackerrank&logoColor=white" },
      { name: "Debugging", logo: "https://img.shields.io/badge/Debugging-D13127?style=for-the-badge&logo=bugsnag&logoColor=white" },
      { name: "Clean Code", logo: "https://img.shields.io/badge/Clean%20Code-000000?style=for-the-badge&logo=sonarqube&logoColor=white" },
    ],
  },
];

export const projects = [
  {
    title: "JavaScript DOM Learning",
    description:
      "Tutorial interaktif untuk memahami cara JavaScript berinteraksi dengan halaman web. Cocok untuk pemula yang ingin belajar DOM dari nol.",
    stack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/bimaak15/javascript-dom-learning",
  },
  {
    title: "krisnaprinting",
    description:
      "Website ini dirancang khusus untuk mengelola invoice dan transaksi harian bagi bisnis packaging (dus kemasan, spundbond, dll). Proyek ini mengubah sistem konvensional menjadi digital, memberikan kemudahan dalam pembuatan tagihan, pemantauan uang masuk, dan manajemen riwayat pesanan dengan antarmuka yang sangat intuitif.",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/bimaak15/krisnaprinting",
  },
  {
    title: "Web CRM Travel",
    description:
      "CRM dan Sistem Manajemen Konten (CMS) untuk Agen Perjalanan, dibangun dengan PHP native dan MySQL. Menyediakan situs utama publik bagi pelanggan untuk menelusuri paket wisata, melihat galeri, dan mengakses informasi perusahaan/kontak, beserta dasbor administratif untuk mengelola konten, pemesanan, pelanggan, dan pembayaran.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/FAYnim/Web-CRM-Travel",
  },
];

export const achievements = [
  {
    title: "Siswa Rekayasa Perangkat Lunak",
    year: "2026",
    description: "Aktif membangun proyek web dan memperdalam fundamental software engineering.",
  },
  {
    title: "Portfolio Showcase Pertama",
    year: "2026",
    description: "Menyusun profil publik untuk menampilkan skill, proyek, dan repositori secara profesional.",
  },
  {
    title: "GitHub Project Practice",
    year: "2026",
    description: "Membiasakan publikasi kode, dokumentasi proyek, dan pengembangan berbasis repositori.",
  },
];

export const apiEndpoints = [
  { method: "GET", path: "/api/profile", icon: TerminalSquare },
  { method: "GET", path: "/api/skills", icon: Code2 },
  { method: "GET", path: "/api/projects", icon: Rocket },
  { method: "GET", path: "/api/achievements", icon: Award },
  { method: "GET", path: "/api/education", icon: GraduationCap },
];
