import { createContext, useContext, useEffect } from 'react'
import { isTodo, TODO_TEXT, type Content, type L, type Lang } from '../types/content'
import { profile } from '../data/profile'
import { ui } from '../data/ui'

const LangContext = createContext<Lang>('th')

export const LangProvider = LangContext.Provider

export function useLang() {
  const lang = useContext(LangContext)
  return {
    lang,
    t: (value: L) => value[lang],
    path: (to: string) => localizePath(to, lang),
  }
}

/** Prefix an app path with `/en` for English; hash-only targets resolve against the home page. */
export function localizePath(to: string, lang: Lang): string {
  const base = lang === 'en' ? '/en' : ''
  if (to.startsWith('#')) return `${base}/${to}`
  if (to === '/') return base || '/'
  return `${base}${to}`
}

export function switchLangPath(pathname: string, hash: string, target: Lang): string {
  const bare = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  return localizePath(bare, target) + hash
}

export function useDocumentTitle(page?: string) {
  const lang = useContext(LangContext)
  useEffect(() => {
    const site = `${profile.name[lang]} | Mechanical Engineer`
    document.title = page ? `${page} | ${site}` : site
  }, [lang, page])
}

export function Todo() {
  const { t } = useLang()
  return (
    <span className="todo" title={t(ui.todo)}>
      {TODO_TEXT}
    </span>
  )
}

export function Text({ value }: { value: L }) {
  const { t } = useLang()
  return isTodo(value) ? <Todo /> : <>{t(value)}</>
}

export function Rich({ value }: { value: Content }) {
  const { t } = useLang()
  if (isTodo(value)) return <Todo />
  if (Array.isArray(value)) {
    return (
      <ul className="dashlist">
        {value.map((item) => (
          <li key={item.en}>{t(item)}</li>
        ))}
      </ul>
    )
  }
  return <p>{t(value as L)}</p>
}
