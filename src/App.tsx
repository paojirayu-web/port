import { Fragment, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation, useParams } from 'react-router-dom'
import {
  Wrench, Users, BarChart3, ArrowRight, ShieldCheck, Search, CheckCircle2,
  GraduationCap, Menu, X, ChevronLeft, ChevronRight, Mail, Flame, LayoutDashboard,
  Cpu, PenTool, FileSpreadsheet, Bot,
} from 'lucide-react'
import { isTodo, type Content, type Evidence as EvidenceItem, type L, type Lang } from './types/content'
import { BrandIcon } from './lib/brandIcons'
import { LangProvider, Rich, switchLangPath, useDocumentTitle, useLang } from './lib/i18n'
import { profile, facts, tools, careerFlow, careerStages, competencies } from './data/profile'
import { activities, heroPhotos } from './data/activities'
import { stages, careerPath, careerStatement } from './data/experience'
import { projects, getProject } from './data/projects'
import { skillGroups, philosophy, credentials } from './data/skills'
import { ui } from './data/ui'
import './styles.css'

const stageIcons = [Wrench, Flame]
const skillIcons = [Wrench, Users, BarChart3, Cpu]
const toolIcons = [PenTool, FileSpreadsheet, Bot]
const mindsetIcons = [ShieldCheck, Search, CheckCircle2, BarChart3, GraduationCap]

function ScrollManager() {
  const { pathname, hash, state } = useLocation()
  useEffect(() => {
    if (state?.keepScroll) return
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
        <Link className="langswitch" to={switchLangPath(pathname, hash, other)} state={{ keepScroll: true }} lang={other} aria-label={t(ui.langSwitch)}>
          {other === 'en' ? 'EN' : 'ไทย'}
        </Link>
        <button className="menub" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={t(ui.nav.menu)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  )
}

// Thai has no spaces, so "|" marks where a line may break; each phrase stays on one line.
function Phrases({ text }: { text: string }) {
  return <>{text.split('|').map((part, i) => <Fragment key={i}>{i > 0 && '\u200B'}<span className="nobr">{part}</span></Fragment>)}</>
}

function Home() {
  const { t, path } = useLang()
  useDocumentTitle()
  return (
    <main>
      <section className="hero">
        <div className="herobg" aria-hidden="true">
          <div className="herotrack">
            {[...heroPhotos, ...heroPhotos].map((src, i) => <img key={i} src={src} alt="" />)}
          </div>
        </div>
        <div className="eyebrow">{t(ui.hero.eyebrow)}</div>
        <h1><Phrases text={t(ui.hero.title)} /><br /><em><Phrases text={t(ui.hero.titleEm)} /></em></h1>
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
        <div className="sectionhead">
          <span>{t(ui.about.label)}</span>
          <blockquote className="motto"><h2>{t(ui.about.title)}</h2><small>{t(ui.about.motto)}</small></blockquote>
          <p>{t(ui.about.lead)}</p>
        </div>
        <div className="aboutwrap">
          <aside className="profilecard">
            <img src={profile.photo} alt={t(profile.name)} />
            <div>
              <b>{t(profile.fullName)}</b>
              <span>{t(profile.role)}</span>
            </div>
            <dl>
              {facts.map((f) => <div key={f.label.en}><dt>{t(f.label)}</dt><dd>{t(f.value)}</dd></div>)}
            </dl>
          </aside>
          <div className="aboutstory">
            <small className="aboutlabel">{t(ui.about.career)}</small>
            <ol className="careerflow">
              {careerFlow.map((step) => <li key={step.en}>{t(step)}</li>)}
            </ol>
            <ol className="storystages">
              {careerStages.map((s, i) => (
                <li key={s.tag}>
                  <span className="stageno">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <small>{s.tag}</small>
                    <h3>{s.title}</h3>
                    <p>{t(s.body)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="competencies">
          <small className="aboutlabel">{t(ui.about.competencies)}</small>
          <div>
            {competencies.map((g, i) => (
              <section key={g.group}>
                <span className="compno">{String(i + 1).padStart(2, '0')}</span>
                <h3>{g.group}</h3>
                <ul>{g.items.map((item) => <li key={item}>{item}</li>)}</ul>
                {g.note && <p className="compnote">{t(g.note)}</p>}
              </section>
            ))}
          </div>
        </div>
        <div className="tools">
          <small className="aboutlabel">{t(ui.about.tools)}</small>
          {tools.map((g, i) => {
            const Icon = toolIcons[i]
            return (
              <div key={g.group.en}>
                <span><Icon size={14} />{t(g.group)}</span>
                <ul>{g.items.map((item) => <li key={item}><BrandIcon name={item} />{item}</li>)}</ul>
              </div>
            )
          })}
        </div>
        <div className="gallery">
          <small>{t(ui.about.gallery)}</small>
          <div className="marquee">
            <div className="track">
              {[...activities, ...activities].map((a, i) => (
                <figure key={i} aria-hidden={i >= activities.length || undefined}>
                  <img src={a.image} alt={i < activities.length ? t(a.title) : ''} />
                  <figcaption>{t(a.title)}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section dark">
        <div className="sectionhead"><span>{t(ui.experience.label)}</span><h2>{t(ui.experience.title)}</h2></div>
        <div className="journey">
          {stages.map((stage, i) => {
            const Icon = stageIcons[i]
            return (
              <article className={'step' + (stage.current ? ' now' : '')} key={stage.id}>
                <div className="node"><Icon size={20} /></div>
                <small>0{i + 1}{stage.current && ` • ${t(ui.experience.current)}`}</small>
                <h3>{t(stage.title)}</h3>
                <div className="roles">
                  <p><b>{t(stage.roles[stage.roles.length - 1].title)}</b> <span>({t(stage.roles[stage.roles.length - 1].period)})</span></p>
                  {stage.roles.slice(0, -1).map((role) => (
                    <small key={role.title.en}>{t(ui.experience.previously)} {t(role.title)} ({t(role.period)})</small>
                  ))}
                </div>
                <ul>{stage.items.map((item) => <li key={item.en}>{t(item)}</li>)}</ul>
              </article>
            )
          })}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="sectionhead"><span>{t(ui.projects.label)}</span><h2>{t(ui.projects.title)}</h2></div>
        <div className="projects">
          {projects.map((p) => (
            <Link to={path('/projects/' + p.id)} className="project" key={p.id}>
              <div className={'cover' + (p.cover?.photo ? ' photo' : '')}>
                {p.cover ? <img src={p.cover.src} alt="" loading="lazy" style={{ objectPosition: p.cover.position }} /> : <LayoutDashboard size={40} strokeWidth={1.4} />}
                <span className={'status ' + p.status}>{t(p.statusLabel ?? ui.projects.status[p.status])}</span>
              </div>
              <div className="projecttop"><span>{p.number}</span><small>{p.category.map((c) => t(c)).join(' • ')}</small></div>
              <h3>{t(p.title)}</h3>
              <p>{t(p.summary)}</p>
              {p.metric ? <b className="metric">↓ {t(p.metric)}</b> : isTodo(p.result) && <small className="pending">{t(ui.projects.pending)}</small>}
              <div className="view">{t(ui.projects.view)} <ArrowRight size={17} /></div>
            </Link>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="sectionhead"><span>{t(ui.skills.label)}</span><h2>{t(ui.skills.title)}</h2></div>
        <div className="skillgroups">
          {skillGroups.map((g, i) => {
            const Icon = skillIcons[i]
            return (
              <div key={g.group.en}>
                <div className="skillhead"><Icon size={20} /><h3>{t(g.group)}</h3></div>
                <p>{t(g.desc)}</p>
                <div className="chips">
                  {g.core.map((item) => <b key={item} className="core"><BrandIcon name={item} />{item}</b>)}
                  {g.items.map((item) => <b key={item}><BrandIcon name={item} />{item}</b>)}
                </div>
              </div>
            )
          })}
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

function Evidence({ items }: { items: EvidenceItem[] }) {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const e = items[active]
  return (
    <aside className="evidence">
      <small>{t(ui.case.evidence)}</small>
      <a className={'stage' + (e.photo ? ' photo' : '')} href={e.src} target="_blank" rel="noreferrer">
        <img src={e.src} alt={t(e.alt)} />
      </a>
      <p className="caption">{t(e.caption)}</p>
      {items.length > 1 && (
        <div className="thumbs">
          {items.map((item, i) => (
            <button key={item.src} className={i === active ? 'on' : undefined} onClick={() => setActive(i)} aria-label={t(item.caption)} aria-pressed={i === active}>
              <img src={item.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </aside>
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
  const standard: { label: L; content?: Content; isResult?: boolean }[] = [
    { label: ui.case.blocks.problem, content: p.problem },
    { label: ui.case.blocks.analysis, content: p.analysis },
    { label: ui.case.blocks.action, content: p.action },
    { label: ui.case.blocks.result, content: p.result, isResult: true },
    { label: ui.case.blocks.learning, content: p.learning },
  ]
  const blocks = (p.sections ?? standard)
    .filter((b): b is { label: L; content: Content; isResult?: boolean } => b.content !== undefined)
    .map((b, i) => ({ ...b, no: String(i + 1).padStart(2, '0'), isResult: 'isResult' in b && !!b.isResult }))

  return (
    <main className="case">
      <Link to={path('#projects')} className="back"><ChevronLeft size={17} /> {t(ui.case.back)}</Link>
      <div className="casehero">
        <small>{p.number} • {p.category.map((c) => t(c)).join(' • ')}</small>
        <span className={'status ' + p.status}>{t(p.statusLabel ?? ui.projects.status[p.status])}</span>
        <h1>{t(p.title)}</h1>
        <p>{t(p.summary)}</p>
        {p.metric && <div className="bigmetric">{t(p.metric)}</div>}
        {p.metricNote && <small className="metricnote">{t(p.metricNote)}</small>}
      </div>
      <div className={'casebody' + (p.evidence.length ? '' : ' solo')}>
        {p.evidence.length > 0 && <Evidence key={p.id} items={p.evidence} />}
        <div className="casetext">
          {blocks.map(({ no, label, content, isResult }) => (
            <section className="caseblock" key={no}>
              <span>{no}</span>
              <div>
                <h2>{t(label)}</h2>
                <Rich value={content} />
                {isResult && p.table && (
                  <figure className="casetable">
                    <figcaption>{t(p.table.title)}</figcaption>
                    <div>
                      <table>
                        <thead><tr>{p.table.columns.map((c) => <th key={c.en}>{t(c)}</th>)}</tr></thead>
                        <tbody>{p.table.rows.map((r) => <tr key={r[0].en}>{r.map((c, i) => <td key={i}>{t(c)}</td>)}</tr>)}</tbody>
                      </table>
                    </div>
                    {p.table.note && <small>{t(p.table.note)}</small>}
                  </figure>
                )}
                {isResult && p.caution && <p className="caution"><b>{t(ui.case.caution)}:</b> {t(p.caution)}</p>}
              </div>
            </section>
          ))}
          <div className="methods"><small>{t(ui.case.methods)}</small>{p.methods.map((m) => <b key={m}>{m}</b>)}</div>
        </div>
      </div>
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
