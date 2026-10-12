export type Lang = 'th' | 'en'

export interface L {
  th: string
  en: string
}

export const TODO_TEXT = 'TODO: CANDIDATE_INPUT_REQUIRED'

export const TODO: L = { th: TODO_TEXT, en: TODO_TEXT }

export const isTodo = (value: unknown): boolean => value === TODO

/** A paragraph, a bullet list, or a missing value the candidate must supply. */
export type Content = L | L[]

export interface Evidence {
  src: string
  alt: L
  caption: L
}

export interface Project {
  id: string
  number: string
  title: L
  category: L[]
  summary: L
  problem: Content
  analysis: Content
  action: Content
  result: Content
  learning: Content
  methods: string[]
  featured: boolean
  caution?: L
  metric?: L
  evidence: Evidence[]
}

export interface Stage {
  id: string
  period: L
  title: L
  focus: L
  items: L[]
  current?: boolean
}

export interface Strength {
  title: L
  tags: string[]
  line: L
}

export interface FitRow {
  requirement: L
  evidence: L
  refs: { label: L; to: string }[]
}

export interface Credential {
  image: string
  title: L
  meta: L
  lead?: boolean
}
