import Navigation from '@/components/portfolio/Navigation';
import { client } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types/project'


async function getProjects() {
  const projects = await client.fetch(`
    *[_type == "project"] | order(featured desc, publishedAt desc) {
      _id,
      title,
      slug,
      description,
      techStack,
      liveUrl,
      githubUrl,
      featured,
      "mainImage": mainImage.asset->url,
      "media": media[].asset->url
    }
  `)
  return projects
}


export default async function Home() {
  const projects = await getProjects()
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navigation />

      {/* Hero Section - Bigger & Cleaner */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl text-center">
          <div className="mb-6 inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/20">
            Available for freelance & opportunities
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-8">
            Hi, I&apos;m <span className="text-emerald-400">Corbin Lamplot</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-zinc-400 max-w-3xl mx-auto mb-12">
            Versatile Software & Embedded Engineer | Full-Stack & IoT/Hardware | Founder @ Garden Sync
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-10 py-4 bg-white text-black rounded-full font-semibold hover:bg-emerald-400 hover:text-black transition-all active:scale-95"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl font-semibold mb-10">About Me</h2>
        <div className="prose prose-invert prose-lg text-zinc-400">
          <p>
             I’m a versatile Software & Embedded Systems Engineer with a B.S. in Computer Science from the University of Nebraska-Lincoln (ABET-accredited) and 4+ years of hands-on development experience. Proficient in C#, C++, .NET, JavaScript/TypeScript, React, Docker, SQL/NoSQL, and AI, I build complete solutions from microcontroller firmware all the way to production-ready cloud applications. At Kage Innovation I delivered automation solutions with API integration and custom applications. This included C#/.NET tools that cut R&D-to-production time by 70%, a React Native Bluetooth app for hydraulic plow control, ESP32/STM32 microcontroller systems, PLC programming for industrial electrical solutions, and M-Files/M1 (ERP software) customizations for business workflows and automations. In parallel, I founded Garden Sync — an IoT web app that brings precision agriculture directly to home gardeners. I designed and developed the full MERN-stack application (React + Express + MongoDB), implemented secure JWT authentication, hosted an MQTT server for real-time device communication, containerized everything with Docker + nginx, and set up CI/CD with GitHub Actions, all while adding ESP32 support for effortless user device programming. I thrive on independent project execution and bridging embedded systems, modern web technologies, cloud infrastructure, and AI to ship real products quickly. Open to conversations about full-stack, IoT, embedded software, or versatile engineering roles. Feel free to reach out!
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-28 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-semibold mb-16">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project: Project) => (
              <div
                key={project._id}
                className="group bg-zinc-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
              >
                {/* Main Image */}
                {project.mainImage && (
                  <div className="relative h-80 overflow-hidden">
                    <Link href={`/projects/${project.slug.current}`} className="block">
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    </Link>
                  </div>
                )}

                <div className="p-10">
                  <h3 className="text-3xl font-medium mb-3">{project.title}</h3>
                  
                  <p className="text-zinc-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech: string) => (
                        <span
                          key={tech}
                          className="text-xs px-4 py-2 bg-zinc-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="text-emerald-400 hover:text-emerald-500 font-medium"
                      >
                        Live Demo →
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="text-emerald-400 hover:text-emerald-500 font-medium"
                      >
                        GitHub →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="py-28 px-6 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-5xl font-semibold mb-8">Let&apos;s Work Together</h2>
          <p className="text-xl text-zinc-400 mb-10">
            I&apos;m always interested in new opportunities, collaborations, or just a friendly chat.
          </p>
          <a
            href="mailto:corbinlamplot@gmail.com"
            className="inline-block px-12 py-5 bg-emerald-500 hover:bg-emerald-400 text-black text-lg font-semibold rounded-full transition-colors"
          >
            Send me an email
          </a>
        </div>
      </section>
    </main>
  );
}