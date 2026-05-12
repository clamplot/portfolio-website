export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  longDescription?: unknown[] // Portable Text
  techStack?: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  mainImage?: string
  media?: string[]
  publishedAt?: string
}