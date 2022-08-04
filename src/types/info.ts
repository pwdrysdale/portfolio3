export type Skill = {
  name: string
}

export type About = {
  section: string
  blurb: string
}

export type Education = {
  place: string
  time: string
  paragraphs: string[]
}

export type Work = Education

export type Link = {
  url: string
  type: "URL" | "GITHUB"
  label: string
}

export type Project = {
  name: string
  description: string
  technologies: string
  date: string
  image: string
  proudPart: string
  projectLink: Link
  codeLink?: Link
}
