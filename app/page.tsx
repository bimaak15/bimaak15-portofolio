"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  CheckCircle2,
  Code2,
  GitBranch,
  Compass,
  GraduationCap,
  Heart,
  MapPin,
  Rocket,
  Sparkles,
  Target,
  Terminal,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  achievements,
  apiEndpoints,
  profile,
  projects,
  skillGroups,
  stats,
} from "@/lib/portfolio-data";

const navItems = [
  { label: "Profil", href: "#profil" },
  { label: "Skill", href: "#skill" },
  { label: "Proyek", href: "#proyek" },
  { label: "Prestasi", href: "#prestasi" },
];

const floatingIcons = [
  { Icon: Code2, color: "text-blue-400", delay: 0 },
  { Icon: Rocket, color: "text-emerald-400", delay: 1 },
  { Icon: Sparkles, color: "text-yellow-400", delay: 2 },
  { Icon: Terminal, color: "text-purple-400", delay: 3 },
];

function TypingRoles() {
  const [index, setIndex] = useState(0);
  // @ts-ignore
  const roles = profile.roles || [profile.role];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="h-10 sm:h-12">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-primary sm:text-3xl"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function Section({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <main className="min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.a 
            href="#" 
            className="flex items-center gap-2 font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="flex size-9 items-center justify-center rounded-md bg-secondary text-secondary-foreground shadow-sm">
              <Terminal className="size-4" aria-hidden="true" />
            </span>
            <span>Bima.dev</span>
          </motion.a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Button key={item.href} asChild variant="ghost" size="sm" className="hover:bg-primary/10 transition-colors">
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>
          <Button asChild size="sm" className="hidden sm:inline-flex shadow-md hover:shadow-lg transition-all">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              <GitBranch className="mr-2 h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden border-b bg-[radial-gradient(circle_at_50%_50%,hsl(var(--muted)/0.5)_0%,hsl(var(--background))_100%)]"
      >
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10"
          >
            <Badge variant="accent" className="mb-6 gap-2 px-3 py-1 text-sm">
              <Sparkles className="size-3.5 animate-pulse" aria-hidden="true" />
              Available for Proyek Menarik
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              {profile.name.split(" ")[0]}
              <span className="text-primary font-black">.</span>
            </h1>
            <div className="mt-4">
              <TypingRoles />
            </div>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {profile.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-8 shadow-xl hover:shadow-primary/20 transition-all">
                <a href="#proyek">
                  <Rocket className="mr-2 h-5 w-5" aria-hidden="true" />
                  Lihat Hasil Karya
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 backdrop-blur-sm">
                <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                  <GitBranch className="mr-2 h-5 w-5" aria-hidden="true" />
                  Explore Code
                </a>
              </Button>
            </div>
            
            <motion.dl 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="group rounded-2xl border bg-card/40 p-4 transition-all hover:bg-card/80 backdrop-blur-sm">
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-lg font-bold tracking-tight">{stat.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="group relative"
            >
              {/* Floating Icons Background */}
              {floatingIcons.map(({ Icon, color, delay }, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay,
                    ease: "easeInOut"
                  }}
                  className={`absolute z-20 size-12 rounded-2xl border bg-background/80 shadow-xl backdrop-blur-md flex items-center justify-center ${color}`}
                  style={{
                    top: `${10 + i * 25}%`,
                    left: i % 2 === 0 ? '-10%' : 'auto',
                    right: i % 2 !== 0 ? '-10%' : 'auto',
                  }}
                >
                  <Icon className="size-6" />
                </motion.div>
              ))}

              {/* Profile Image with effects */}
              <div className="relative z-10 size-72 sm:size-96 overflow-hidden rounded-[2.5rem] border-4 border-background shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                <img 
                  src="/profile.jpg" 
                  alt={profile.name} 
                  className="size-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Background Glows */}
              <div className="absolute -inset-4 -z-10 rounded-full bg-primary/20 blur-[60px] animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -z-20 size-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/10 blur-[100px]" />

              {/* Code Card Overlap */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 sm:-left-12 z-20 max-w-[280px] overflow-hidden rounded-2xl border bg-secondary/95 text-secondary-foreground shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 bg-black/20">
                  <div className="flex gap-1.5">
                    <span className="size-2 rounded-full bg-red-400" />
                    <span className="size-2 rounded-full bg-yellow-300" />
                    <span className="size-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-[10px] text-white/40">api.ts</span>
                </div>
                <div className="p-4 font-mono text-[11px] leading-relaxed">
                  <div className="space-y-2">
                    {apiEndpoints.slice(0, 3).map((endpoint, i) => {
                      const Icon = endpoint.icon;
                      return (
                        <motion.div 
                          key={i}
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          className="flex items-center justify-between gap-4 rounded bg-white/5 p-2"
                        >
                          <div className="flex items-center gap-2">
                            <Icon className="size-3 text-primary" />
                            <span className="text-white/80">{endpoint.path}</span>
                          </div>
                          <span className="text-emerald-400">200 OK</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Profil Section */}
      <Section id="profil" className="relative overflow-hidden border-b py-20 sm:py-28">
        <div className="absolute -left-20 top-1/4 -z-10 size-96 rounded-full bg-primary/5 blur-[120px]" />
        
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <Badge variant="outline" className="gap-2 px-3 py-1">
              <BookOpen className="size-3.5" aria-hidden="true" />
              Tentang Saya
            </Badge>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Profil yang langsung menjawab <span className="text-primary">siapa Bima.</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="border-l-4 border-primary/20 pl-6 italic">
                {profile.description}
              </p>
              <div className="text-base leading-8 whitespace-pre-line text-muted-foreground/90">
                {/* @ts-ignore */}
                {profile.aboutDetail}
              </div>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: "Pendidikan", desc: profile.major, icon: GraduationCap, content: profile.school, color: "text-blue-500" },
              { title: "Identitas", desc: profile.location, icon: MapPin, content: `Usia ${profile.age} • Pelajar Aktif`, color: "text-emerald-500" },
              { title: "Minat & Hobi", desc: "Eksplorasi di luar kode", icon: Heart, content: (profile as any).interests, color: "text-rose-500", isBadge: true },
              { title: "Visi & Tujuan", desc: "Target Masa Depan", icon: Target, content: (profile as any).goals, color: "text-amber-500" }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full group hover:border-primary/50 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
                  <div className={`h-1 w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary/50 transition-all`} />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <card.icon className={`${card.color} size-5 transition-transform group-hover:scale-110`} />
                      {card.title}
                    </CardTitle>
                    <CardDescription>{card.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm leading-7 text-muted-foreground">
                    {card.isBadge ? (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {(card.content as string[]).map((item) => (
                          <Badge key={item} variant="secondary" className="bg-primary/5 text-primary border-primary/10">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <p>{card.content as string}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skill" className="border-b bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="accent" className="gap-2">
              <Code2 className="size-3.5" aria-hidden="true" />
              Etalase Keahlian
            </Badge>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Stack mumpuni yang dikuasai.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-none bg-background/50 backdrop-blur-sm group hover:bg-background transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg font-bold">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <group.icon className="size-5" />
                      </div>
                      {group.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill) => (
                        <motion.img
                          key={skill.name}
                          src={skill.logo}
                          alt={skill.name}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          className="h-9 w-auto shadow-sm rounded border border-white/5"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="proyek" className="border-b py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end mb-16">
            <div className="max-w-2xl">
              <Badge variant="outline" className="gap-2">
                <Rocket className="size-3.5" aria-hidden="true" />
                Portofolio & Repositori
              </Badge>
              <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Proyek nyata sebagai bukti kemampuan.
              </h2>
            </div>
            <Button asChild variant="secondary" className="rounded-full shadow-lg">
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                <GitBranch className="mr-2 h-4 w-4" aria-hidden="true" />
                Semua Repositori
              </a>
            </Button>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="group flex h-full flex-col overflow-hidden border-none bg-muted/20 hover:bg-muted/40 transition-all shadow-sm hover:shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <Rocket className="size-12 text-primary/20" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="leading-7 min-h-[100px]">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between gap-8 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item} variant="secondary" className="bg-primary/10 text-primary border-none">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="ghost" className="w-full rounded-xl border group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        Open on GitHub
                        <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Achievements Section */}
      <Section id="prestasi" className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground sm:py-28">
        <div className="absolute top-0 right-0 p-20 -z-10 opacity-20">
          <Award className="size-96" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <Badge variant="accent" className="gap-2">
              <Award className="size-3.5" aria-hidden="true" />
              Achievements
            </Badge>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Pencapaian yang <span className="text-emerald-300">menjadi fondasi</span> langkah berikutnya.
            </h2>
          </div>
          <div className="grid gap-6">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-[2rem] border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl hover:bg-white/[0.06] transition-all"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-6">
                    <div className="mt-1 size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                      <CheckCircle2 className="size-6 text-emerald-300 group-hover:text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-white/50">{achievement.description}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/5 px-6 py-2 text-sm font-black text-orange-200 border border-white/10 group-hover:bg-orange-200 group-hover:text-black transition-all">
                    {achievement.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} {profile.name} • Built with Next.js & Framer Motion</p>
      </footer>
    </main>
  );
}
