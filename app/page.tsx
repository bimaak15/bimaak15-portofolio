import {
  ArrowUpRight,
  Award,
  BookOpen,
  CheckCircle2,
  Code2,
  GitBranch,
  GraduationCap,
  MapPin,
  Rocket,
  Sparkles,
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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b bg-background/88 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="flex size-9 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <Terminal className="size-4" aria-hidden="true" />
            </span>
            <span>Bima.dev</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Button key={item.href} asChild variant="ghost" size="sm">
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              <GitBranch aria-hidden="true" />
              GitHub
            </a>
          </Button>
        </nav>
      </header>

      <section className="relative border-b bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--muted))_48%,hsl(var(--background))_100%)]">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-5 gap-2">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Portfolio interaktif
            </Badge>
            <h1 className="text-4xl font-bold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-2xl font-semibold text-primary sm:text-3xl">
              {profile.role}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {profile.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#proyek">
                  <Rocket aria-hidden="true" />
                  Lihat Proyek
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                  <GitBranch aria-hidden="true" />
                  Repositori GitHub
                </a>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border bg-card/80 p-4 shadow-sm">
                  <dt className="text-xs font-semibold uppercase text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-lg font-bold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg border bg-secondary text-secondary-foreground shadow-sharp">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-red-400" />
                  <span className="size-3 rounded-full bg-yellow-300" />
                  <span className="size-3 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-xs text-white/58">portfolio.ts</span>
              </div>
              <div className="terminal-scan p-5 font-mono text-sm leading-7 sm:p-7">
                <p className="text-emerald-300">const developer = {"{"}</p>
                <p className="pl-4 text-white/90">name: &quot;Bima Satria Putra&quot;,</p>
                <p className="pl-4 text-white/90">role: &quot;Junior Software Engineer&quot;,</p>
                <p className="pl-4 text-white/90">school: &quot;SMKN 1 Surabaya&quot;,</p>
                <p className="pl-4 text-white/90">major: &quot;RPL&quot;,</p>
                <p className="pl-4 text-white/90">
                  stack: [&quot;React&quot;, &quot;Laravel&quot;, &quot;MySQL&quot;],
                </p>
                <p className="text-emerald-300">{"}"}</p>
                <Separator className="my-5 bg-white/10" />
                <div className="grid gap-3">
                  {apiEndpoints.slice(0, 4).map((endpoint) => {
                    const Icon = endpoint.icon;
                    return (
                      <div
                        key={endpoint.path}
                        className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2"
                      >
                        <span className="flex min-w-0 items-center gap-2">
                          <Icon className="size-4 text-orange-300" aria-hidden="true" />
                          <span className="truncate text-white/82">{endpoint.path}</span>
                        </span>
                        <span className="rounded bg-emerald-400/16 px-2 py-1 text-[11px] font-bold text-emerald-200">
                          {endpoint.method}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profil" className="border-b bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <Badge variant="outline" className="gap-2">
              <BookOpen className="size-3.5" aria-hidden="true" />
              Tentang Saya
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-4xl">
              Profil yang langsung menjawab siapa Bima.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <GraduationCap className="size-5 text-primary" aria-hidden="true" />
                  Pendidikan
                </CardTitle>
                <CardDescription>{profile.major}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p className="font-medium text-foreground">{profile.school}</p>
                <p>Kelas 10 jurusan Rekayasa Perangkat Lunak.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <MapPin className="size-5 text-primary" aria-hidden="true" />
                  Identitas
                </CardTitle>
                <CardDescription>{profile.location}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Umur:</span> {profile.age}
                </p>
                <p>
                  <span className="font-medium text-foreground">Tanggal lahir:</span>{" "}
                  {profile.birthDate}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="skill" className="border-b bg-muted/45 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="accent" className="gap-2">
              <Code2 className="size-3.5" aria-hidden="true" />
              Etalase Keahlian
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-4xl">
              Stack yang siap tumbuh bersama proyek baru.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <Card key={group.category} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Icon className="size-5 text-primary" aria-hidden="true" />
                      {group.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <img
                          key={skill.name}
                          src={skill.logo}
                          alt={skill.name}
                          className="h-8 w-auto transition-transform hover:scale-105"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proyek" className="border-b bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Badge variant="outline" className="gap-2">
                <Rocket className="size-3.5" aria-hidden="true" />
                Portofolio & Repositori
              </Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-4xl">
                Proyek sebagai bukti kemampuan.
              </h2>
            </div>
            <Button asChild variant="secondary">
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                <GitBranch aria-hidden="true" />
                Semua Repositori
              </a>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="leading-6">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      Buka GitHub
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prestasi" className="bg-secondary py-16 text-secondary-foreground sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <Badge variant="accent" className="gap-2">
              <Award className="size-3.5" aria-hidden="true" />
              Achievements
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-4xl">
              Pencapaian yang menjadi fondasi langkah berikutnya.
            </h2>
          </div>
          <div className="grid gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                      <CheckCircle2 className="size-5 text-emerald-300" aria-hidden="true" />
                      {achievement.title}
                    </h3>
                    <p className="mt-2 leading-7 text-white/70">{achievement.description}</p>
                  </div>
                  <span className="rounded-md bg-white/10 px-3 py-1 text-sm font-bold text-orange-200">
                    {achievement.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
