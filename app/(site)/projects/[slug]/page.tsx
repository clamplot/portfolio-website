import { client } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types/project'
import CustomPortableText from '@/components/portfolio/portabletext'

async function getProject(slug: string) {
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      longDescription,
      techStack,
      liveUrl,
      githubUrl,
      "mainImage": mainImage.asset->url,
      "media": media[].asset->url,
      publishedAt
    }`,
    { slug }                     // ← Parameter passed correctly
  )

  return project
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params     // ← This is the important fix for Next.js 16

  let project: Project | null = null

  try {
    project = await getProject(slug)
  } catch (error) {
    console.error("Failed to fetch project:", error)
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-zinc-400">
        Project not found
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          href="/#projects" 
          className="text-emerald-400 hover:text-emerald-500 mb-10 inline-block"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-6xl font-bold tracking-tight mb-8">{project.title}</h1>

        {project.mainImage && (
          <div className="relative h-[520px] rounded-3xl overflow-hidden mb-12">
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="flex gap-4 mb-12">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" className="px-8 py-4 bg-emerald-500 text-black rounded-full font-semibold hover:bg-emerald-400">
              Live Demo →
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" className="px-8 py-4 border border-white/40 rounded-full hover:bg-white/10">
              GitHub →
            </a>
          )}
        </div>

        {project.description && <p className="text-xl text-zinc-400 mb-12">{project.description}</p>}

        {project.longDescription && <CustomPortableText value={project.longDescription} />}

        {project.techStack && project.techStack.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-medium mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech: string) => (
                <span key={tech} className="px-6 py-3 bg-zinc-800 rounded-2xl text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}