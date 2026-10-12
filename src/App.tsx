import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation, useParams } from 'react-router-dom'
import {
  Wrench, Users, BarChart3, ArrowRight, ShieldCheck, Search, CheckCircle2,
  GraduationCap, Menu, X, ChevronLeft, ChevronRight, Mail,
} from 'lucide-react'
import type { Lang } from './types/content'
import { LangProvider, Rich, Text, switchLangPath, useDocumentTitle, useLang } from './lib/i18n'
import { profile, about } from './data/profile'
import { strengths, stages, careerPath, careerStatement, careerBridge } from './data/experience'
import { projects, getProject } from './data/projects'
import { skillGroups, philosophy, credentials, fitNote, fitRows } from './data/skills'
import { ui } from './data/ui'
import './styles.css'

const strengthIcons = [Wrench, Users, BarChart3]
const mindsetIcons = [ShieldCheck, Search, CheckCircle2, BarChart3, GraduationCap]

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Nav() {
  const [open, setOpen] = useState(false)
  const { lang, t, path } = useLang()
  const { pathname, hash } = useLocation()
  const other: Lang = lang === 'th' ? 'en' : 'th'
  const links = [
    ['#about', ui.nav.about],
    ['#experience', ui.nav.experience],
    ['#projects', ui.nav.projects],
    ['#fit', ui.nav.fit],
    ['#skills', ui.nav.skills],
    ['#contact', ui.nav.contact],
  ] as const
  return (
    <nav>
      <Link className="brand" to={path('/')}><span>J</span> JIRAYU</Link>
      <div className={'navlinks ' + (open ? 'open' : '')} onClick={() => setOpen(false)}>
        {links.map(([hash, label]) => <Link key={hash} to={path(hash)}>{t(label)}</Link>)}
      </div>
      <div className="navright">
        <Link className="langswitch" to={switchLangPath(pathname, hash, other)} lang={other} aria-label={t(ui.langSwitch)}>
          {other === 'en' ? 'EN' : 'ไทย'}
        </Link>
        <button className="menub" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={t(ui.nav.menu)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  )
}

function Home() {
  const { t, path } = useLang()
  useDocumentTitle()
  return (
    <main>
      <section className="hero">
        <div className="eyebrow">{t(ui.hero.eyebrow)}</div>
        <h1>{t(ui.hero.title)}<br /><em>{t(ui.hero.titleEm)}</em></h1>
        <p className="lead">{t(profile.statement)}</p>
        <div className="actions">
          <Link className="primary" to={path('#projects')}>{t(ui.hero.projects)} <ArrowRight size={18} /></Link>
          <Link className="secondary" to={path('#experience')}>{t(ui.hero.experience)}</Link>
          {profile.resumeUrl && <a className="secondary" href={profile.resumeUrl} download>{t(ui.hero.resume)}</a>}
        </div>
        <div className="heroStats">
          {ui.stats.map((s) => <div key={s.label.en}><b>{t(s.value)}</b><span>{t(s.label)}</span></div>)}
        </div>
      </section>

      <section id="about" className="section">
        <div className="sectionhead"><span>{t(ui.about.label)}</span><h2>{t(ui.about.title)}</h2><p>{t(ui.about.lead)}</p></div>
        <div className="aboutgrid">
          {about.map((para) => <p key={para.en}>{t(para)}</p>)}
          <p className="hobbies">{t(profile.hobbies)}</p>
        </div>
        <div className="cards">
          {strengths.map((s, i) => {
            const Icon = strengthIcons[i]
            return (
              <article className="strength" key={s.title.en}>
                <Icon /><h3>{t(s.title)}</h3><small>{s.tags.join(' • ')}</small><p>{t(s.line)}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="experience" className="section dark">
        <div className="sectionhead"><span>{t(ui.experience.label)}</span><h2>{t(ui.experience.title)}</h2></div>
        <div className="timeline">
          {stages.map((stage, i) => (
            <article key={stage.id}>
              <i>0{i + 1}</i>
              <div>
                <small>{stage.current && `${t(ui.experience.current)} • `}{t(stage.title)} • {t(stage.focus)}</small>
                <div className="period"><Text value={stage.period} /></div>
                <h3>{t(ui.experience.taglines[i])}</h3>
                <p>{stage.items.map((item) => t(item)).join(' • ')}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="sectionhead row">
          <div><span>{t(ui.projects.label)}</span><h2>{t(ui.projects.title)}</h2></div>
          <p>{t(ui.projects.lead)}</p>
        </div>
        <div className="projects">
          {projects.map((p) => (
            <Link to={path('/projects/' + p.id)} className="project" key={p.id}>
              <div className="projecttop"><span>{p.number}</span><small>{p.category.map((c) => t(c)).join(' • ')}</small></div>
              <h3>{t(p.title)}</h3>
              <p>{t(p.summary)}</p>
              {p.metric ? <b className="metric">↓ {t(p.metric)}</b> : <small className="pending">{t(ui.projects.pending)}</small>}
              <div className="view">{t(ui.projects.view)} <ArrowRight size={17} /></div>
            </Link>
          ))}
        </div>
      </section>

      <section id="fit" className="section fitsection">
        <div className="sectionhead"><span>{t(ui.fit.label)}</span><h2>{t(ui.fit.title)}</h2><p>{t(fitNote)}</p></div>
        <div className="fit">
          <div className="fitrow fithead" aria-hidden="true">
            <span>{t(ui.fit.requirement)}</span><span>{t(ui.fit.evidence)}</span><span>{t(ui.fit.ref)}</span>
          </div>
          {fitRows.map((row) => (
            <div className="fitrow" key={row.requirement.en}>
              <h3>{t(row.requirement)}</h3>
              <p>{t(row.evidence)}</p>
              <div className="refs">{row.refs.map((r) => <Link key={r.to} to={path(r.to)}>{t(r.label)}</Link>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="sectionhead"><span>{t(ui.skills.label)}</span><h2>{t(ui.skills.title)}</h2></div>
        <div className="skillgroups">
          {skillGroups.map((g) => (
            <div key={g.group.en}>
              <h3>{t(g.group)}</h3>
              <div className="chips">{g.items.map((item) => <b key={item}>{item}</b>)}</div>
            </div>
          ))}
        </div>
        <div className="sectionhead subhead"><span>{t(ui.mindset.label)}</span><h2>{t(ui.mindset.title)}</h2></div>
        <div className="mindset">
          {philosophy.map((note, i) => {
            const Icon = mindsetIcons[i]
            return <div key={note.title.en}><Icon /><h3>{t(note.title)}</h3><p>{t(note.body)}</p></div>
          })}
        </div>
        <div className="career">
          <span>{t(ui.mindset.career)}</span>
          <h2>{careerPath.map((step, i) => <span key={step.en}>{i > 0 && <b> → </b>}{t(step)}</span>)}</h2>
          <p>{t(careerStatement)}</p>
          <p>{t(careerBridge)}</p>
        </div>
      </section>

      <section id="credentials" className="section">
        <div className="sectionhead"><span>{t(ui.credentials.label)}</span><h2>{t(ui.credentials.title)}</h2></div>
        <div className="credentials">
          {credentials.map((c) => (
            <a className={'credential' + (c.lead ? ' lead' : '')} key={c.title.en} href={c.image} target="_blank" rel="noreferrer" aria-label={`${t(c.title)} — ${t(ui.credentials.open)}`}>
              <img src={c.image} alt="" loading="lazy" />
              <h3>{t(c.title)}</h3>
              <small>{t(c.meta)}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

function ProjectPage() {
  const { id } = useParams()
  const { t, path } = useLang()
  const p = getProject(id)
  useDocumentTitle(p ? `${p.number} ${t(p.title)}` : undefined)
  if (!p) return <div className="notfound">{t(ui.case.notFound)}</div>

  const index = projects.indexOf(p)
  const prev = projects[index - 1]
  const next = projects[index + 1]
  const blocks = [
    ['01', ui.case.blocks.problem, p.problem],
    ['02', ui.case.blocks.analysis, p.analysis],
    ['03', ui.case.blocks.action, p.action],
    ['04', ui.case.blocks.result, p.result],
    ['05', ui.case.blocks.learning, p.learning],
  ] as const

  return (
    <main className="case">
      <Link to={path('#projects')} className="back"><ChevronLeft size={17} /> {t(ui.case.back)}</Link>
      <div className="casehero">
        <small>{p.number} • {p.category.map((c) => t(c)).join(' • ')}</small>
        <h1>{t(p.title)}</h1>
        <p>{t(p.summary)}</p>
        {p.metric && <div className="bigmetric">{t(p.metric)}</div>}
      </div>
      {blocks.map(([no, label, content]) => (
        <section className="caseblock" key={no}>
          <span>{no}</span>
          <div>
            <h2>{t(label)}</h2>
            <Rich value={content} />
            {no === '04' && p.caution && <p className="caution"><b>{t(ui.case.caution)}:</b> {t(p.caution)}</p>}
          </div>
        </section>
      ))}
      {p.evidence.length > 0 && (
        <div className="evidence">
          <small>{t(ui.case.evidence)}</small>
          {p.evidence.map((e) => (
            <figure key={e.src}><img src={e.src} alt={t(e.alt)} loading="lazy" /><figcaption>{t(e.caption)}</figcaption></figure>
          ))}
        </div>
      )}
      <div className="methods"><small>{t(ui.case.methods)}</small>{p.methods.map((m) => <b key={m}>{m}</b>)}</div>
      <div className="casenav">
        {prev ? <Link to={path('/projects/' + prev.id)}><small><ChevronLeft size={15} /> {t(ui.case.prev)}</small>{prev.number} {t(prev.title)}</Link> : <span />}
        {next && <Link className="next" to={path('/projects/' + next.id)}><small>{t(ui.case.next)} <ChevronRight size={15} /></small>{next.number} {t(next.title)}</Link>}
      </div>
    </main>
  )
}

function Footer() {
  const { t } = useLang()
  return (
    <footer id="contact">
      <div>
        <b>JIRAYU</b>
        <span>{t(profile.name)} • {t(ui.footer.role)}</span>
        <a className="mail" href={`mailto:${profile.email}`}><Mail size={15} /> {profile.email}</a>
        <span>{t(profile.location)} • {t(ui.footer.contactMeta)}</span>
      </div>
      <p>{t(ui.footer.note)}</p>
    </footer>
  )
}

function Layout({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  return (
    <LangProvider value={lang}>
      <ScrollManager />
      <Nav />
      <Outlet />
      <Footer />
    </LangProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="en" element={<Layout lang="en" />}>
          <Route index element={<Home />} />
          <Route path="projects/:id" element={<ProjectPage />} />
          <Route path="*" element={<ProjectPage />} />
        </Route>
        <Route element={<Layout lang="th" />}>
          <Route index element={<Home />} />
          <Route path="projects/:id" element={<ProjectPage />} />
          <Route path="*" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
