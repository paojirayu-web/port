export type Lang = 'th' | 'en'

export interface L {
  th: string
  en: string
}

export const TODO_TEXT = 'TODO: CANDIDATE_INPUT_REQUIRED'

export const TODO: L = { th: TODO_TEXT, en: TODO_TEXT }

export const isTodo = (value: unknown): boolean => value === TODO

/** A subsection: any of a subheading, a paragraph, a bullet (or numbered) list and a step-by-step flow. */
export interface Group {
  heading?: L
  text?: L
  items?: L[]
  ordered?: boolean
  flow?: L[]
}

/** A paragraph, a bullet list, subsections, or a missing value the candidate must supply. */
export type Content = L | L[] | Group[]

export interface Section {
  label: L
  content: Content
}

export interface Evidence {
  src: string
  alt: L
  caption: L
  /** Photos sit in a grid; charts and diagrams span the full width. */
  photo?: boolean
}

export interface Table {
  title: L
  columns: L[]
  rows: L[][]
  note?: L
}

export type Status = 'study' | 'trial' | 'rollout' | 'monitoring' | 'live'

export interface Project {
  id: string
  number: string
  title: L
  category: L[]
  summary: L
  problem?: Content
  analysis?: Content
  action?: Content
  result?: Content
  learning?: Content
  /** Replaces the standard problem → learning blocks on the project page. */
  sections?: Section[]
  methods: string[]
  featured: boolean
  status: Status
  /** Overrides the standard label for `status`. */
  statusLabel?: L
  caution?: L
  /** Shown under the result. */
  table?: Table
  metric?: L
  /** What the metric is measured against; shown under it on the project page. */
  metricNote?: L
  /** Charts and diagrams render letterboxed; photos fill the frame. */
  cover?: { src: string; photo?: boolean; position?: string }
  evidence: Evidence[]
}

export interface Role {
  title: L
  period: L
}

export interface Stage {
  id: string
  /** Department name. */
  title: L
  /** Successive positions within the department, listed in order. */
  roles: Role[]
  items: L[]
  current?: boolean
}

export interface Strength {
  title: L
  tags: string[]
  line: L
}

export interface Credential {
  image: string
  title: L
  meta: L
  lead?: boolean
}
