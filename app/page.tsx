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
  socialLinks,
  stats,
} from "@/lib/portfolio-data";

const socialIconPaths: Record<string, React.ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  dicoding: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M6.5 2A4.5 4.5 0 002 6.5v11A4.5 4.5 0 006.5 22h11a4.5 4.5 0 004.5-4.5v-11A4.5 4.5 0 0017.5 2h-11zM8 7h2.5a5 5 0 010 10H8V7zm2 2v6h.5a3 3 0 000-6H10z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z" />
    </svg>
  ),
};

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Find me on</span>
              <Separator orientation="vertical" className="h-4" />
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  title={link.name}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="group flex size-10 items-center justify-center rounded-xl border bg-background/50 text-muted-foreground shadow-sm backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-md"
                >
                  {socialIconPaths[link.icon]}
                </motion.a>
              ))}
            </motion.div>

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
              Tech Stack mumpuni yang dikuasai.
            </h2>
            <p className="mt-4 text-muted-foreground/80 italic text-sm sm:text-base leading-relaxed">
              *Note: Tidak semua bahasa pemrograman dibawah 100% saya kuasai.
              Mengingat saya baru belajar sekitar dua tahun, jadi value saya belum sepenuhnya memumpuni. Mungkin
              hanya beberapa saja yang bisa saya kuasai, karena saya manusia biasa bukan nabi boy. 😂
            </p>
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
                  <div className="aspect-video relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={(project as any).image}
                      alt={project.title}
                      className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
        <p className="mt-2 text-xs italic opacity-70">
          "Jangan lupa sholat 5 waktu, karena malaikat tidak bertanya tentang repository mu ketika di alam kubur."
        </p>
      </footer>
    </main>
  );
}
