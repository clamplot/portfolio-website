export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  longDescription?: any[] // Portable Text
  techStack?: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  mainImage?: string
  media?: string[]
  publishedAt?: string
}