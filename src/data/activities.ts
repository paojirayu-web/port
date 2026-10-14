import type { L } from '../types/content'
import repair from '../assets/images/activities/repair.webp'
import troubleshooting from '../assets/images/activities/troubleshooting.webp'
import solidworks from '../assets/images/activities/solidworks.webp'
import kilnFurniture from '../assets/images/activities/kiln-furniture-design.webp'
import audit5s from '../assets/images/activities/5s-audit.webp'
import energyTeam from '../assets/images/activities/energy-team.webp'

export const activities: { image: string; title: L }[] = [
  { image: repair, title: { th: 'ซ่อมเครื่องจักรในไลน์ผลิต', en: 'Repairing production-line equipment' } },
  { image: troubleshooting, title: { th: 'วิเคราะห์ปัญหาและซ่อมบำรุงเชิงป้องกัน', en: 'Troubleshooting and preventive maintenance' } },
  { image: solidworks, title: { th: 'ออกแบบชิ้นส่วนอะไหล่ด้วย SolidWorks', en: 'Designing spare parts in SolidWorks' } },
  { image: kilnFurniture, title: { th: 'ออกแบบชุดรองเผาสำหรับเตา', en: 'Designing kiln furniture setups' } },
  { image: audit5s, title: { th: 'คณะทำงานตรวจ 5ส.', en: '5S audit team' } },
  { image: energyTeam, title: { th: 'คณะทำงานด้านพลังงานและลดก๊าซเรือนกระจก', en: 'Energy and GHG reduction working group' } },
]

/** Extra on-the-job photos that only appear, faded, behind the home-page hero. */
const heroExtras = Object.values(import.meta.glob<string>('../assets/images/hero/work-*.webp', { eager: true, import: 'default' }))

export const heroPhotos = heroExtras.flatMap((src, i) => (i % 3 === 0 && activities[i / 3] ? [activities[i / 3].image, src] : [src]))
