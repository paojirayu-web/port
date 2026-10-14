import type { L } from '../types/content'
import photo from '../assets/images/profile.webp'

export const profile = {
  name: { th: 'จิรายุ เจากสิกร', en: 'Jirayu' } satisfies L,
  fullName: { th: 'จิรายุ เจากสิกร (เปา)', en: 'Jirayu (Pao)' } satisfies L,
  photo,
  heroName: { th: 'จิรายุ เจากสิกร', en: 'JIRAYU' } satisfies L,
  role: { th: 'วิศวกรเครื่องกล', en: 'Mechanical Engineer' } satisfies L,
  focus: [
    { th: 'Maintenance', en: 'Maintenance' },
    { th: 'Reliability', en: 'Reliability' },
    { th: 'Operation', en: 'Operation' },
    { th: 'Digital Improvement', en: 'Digital Improvement' },
  ] satisfies L[],
  statement: {
    th: 'วิศวกรเครื่องกลที่มีประสบการณ์ด้านงานซ่อมบำรุง การควบคุมกระบวนการเตาเผาอุตสาหกรรม และการบริหารแผนก มุ่งประยุกต์ใช้หลักวิศวกรรมและเทคโนโลยีดิจิทัลเพื่อเพิ่ม Reliability ของเครื่องจักร พัฒนาประสิทธิภาพการดำเนินงาน และขับเคลื่อนการปรับปรุงอย่างต่อเนื่อง',
    en: 'Mechanical Engineer with experience in maintenance, industrial kiln process control, and department management, focused on applying engineering principles and digital technology to improve equipment reliability, enhance operational performance, and drive continuous improvement.',
  } satisfies L,
  currentRole: {
    th: 'ผู้จัดการแผนกเตาเผาเคลือบ (Glaze Kiln)',
    en: 'Manager / Head, Glaze Kiln Department',
  } satisfies L,
  company: 'Crown Ceramics Co., Ltd.',
  education: {
    th: 'วศ.บ. วิศวกรรมเครื่องกล มหาวิทยาลัยศิลปากร',
    en: 'B.Eng. Mechanical Engineering, Silpakorn University',
  } satisfies L,
  licence: {
    th: 'ใบ กว. ระดับภาคีวิศวกร สาขาวิศวกรรมเครื่องกล',
    en: 'Associate Engineer licence (Mechanical)',
  } satisfies L,
  email: 'paojirayu@gmail.com',
  location: { th: 'บ้านโป่ง ราชบุรี', en: 'Ban Pong, Ratchaburi' } satisfies L,
  resumeUrl: undefined as string | undefined,
}

export const facts: { label: L; value: L }[] = [
  { label: { th: 'ตำแหน่งปัจจุบัน', en: 'Current role' }, value: { th: 'ผู้จัดการแผนกเตาเผา, Crown Ceramics', en: 'Kiln Department Manager, Crown Ceramics' } },
  { label: { th: 'ปริญญาตรี', en: 'Degree' }, value: { th: 'วศ.บ. เครื่องกล ม.ศิลปากร · GPA 3.53 (เกียรตินิยมอันดับ 2)', en: 'B.Eng. Mechanical, Silpakorn · GPA 3.53 (2nd-class honours)' } },
  { label: { th: 'ที่อยู่', en: 'Based in' }, value: { th: 'บ้านโป่ง ราชบุรี', en: 'Ban Pong, Ratchaburi' } },
]

export const tools: { group: L; items: string[] }[] = [
  { group: { th: 'Engineering Design', en: 'Engineering Design' }, items: ['SolidWorks', 'AutoCAD'] },
  { group: { th: 'Data & Productivity', en: 'Data & Productivity' }, items: ['Microsoft Office', 'Google Workspace', 'AppSheet'] },
  { group: { th: 'Digital & Automation', en: 'Digital & Automation' }, items: ['Cursor (AI IDE)', 'Claude', 'Codex', 'n8n', 'GitHub'] },
]

export const careerFlow: L[] = [
  { th: 'Maintenance', en: 'Maintenance' },
  { th: 'Kiln Operation', en: 'Kiln Operation' },
  { th: 'Department Management', en: 'Department Management' },
  { th: 'Maintenance & Reliability', en: 'Maintenance & Reliability' },
]

export const careerStages: { tag: string; title: string; body: L }[] = [
  {
    tag: 'MAINTENANCE',
    title: 'Mechanical Maintenance Engineer',
    body: {
      th: 'เริ่มต้นทำงานในตำแหน่ง Mechanical Maintenance Engineer รับผิดชอบงาน PM, CM และ Breakdown Maintenance รวมถึงดูแลเครื่องจักรในกระบวนการผลิต ตั้งแต่เครื่องขึ้นรูปจนถึงเตาเผาอุตสาหกรรม',
      en: 'Started as a Mechanical Maintenance Engineer, responsible for PM, CM, and breakdown maintenance, and for production equipment from forming machines to industrial kilns.',
    },
  },
  {
    tag: 'OPERATION & MANAGEMENT',
    title: 'Kiln Operation & Department Management',
    body: {
      th: 'ต่อมาได้รับมอบหมายให้ดูแลงานด้านเตาเผาและบริหารแผนก การทำงานในมุมของผู้ใช้งานเครื่องจักร ทำให้เข้าใจว่าสภาพและความพร้อมของเครื่องจักรส่งผลต่อคุณภาพ พลังงาน ต้นทุน กระบวนการผลิต และการทำงานของทีมอย่างไร',
      en: 'Later took charge of kiln operation and the department. Working from the equipment user’s side showed me how equipment condition and readiness affect quality, energy, cost, production, and the team’s work.',
    },
  },
  {
    tag: 'NEXT DIRECTION',
    title: 'Maintenance & Equipment Reliability',
    body: {
      th: 'เป้าหมายต่อจากนี้คือการกลับมาพัฒนาตัวเองในสาย Mechanical Maintenance อย่างจริงจังในระยะยาว โดยมุ่งต่อยอดด้าน Equipment Reliability และนำข้อมูลมาใช้สนับสนุนการวิเคราะห์และตัดสินใจทางวิศวกรรม',
      en: 'My goal from here is a long-term career in mechanical maintenance, building on equipment reliability and using data to support engineering analysis and decisions.',
    },
  },
]

export const competencies: { group: string; note?: L; items: string[] }[] = [
  { group: 'Maintenance', items: ['Preventive Maintenance (PM)', 'Corrective Maintenance (CM)', 'Breakdown Maintenance', 'Troubleshooting'] },
  { group: 'Equipment & Operation', items: ['Industrial Kiln', 'Hydraulic System', 'Production Machinery', 'Kiln Operation'] },
  { group: 'Improvement & Reliability', items: ['Root Cause Analysis', 'Lean Improvement', 'Reliability Improvement', 'Energy Improvement'] },
  {
    group: 'Engineering Data',
    note: { th: 'ข้อมูลเพื่อสนับสนุนการตัดสินใจทางวิศวกรรม', en: 'Data for engineering decisions' },
    items: ['Data Analysis', 'Condition Monitoring', 'Engineering Dashboard', 'Data-driven Decision Making'],
  },
]
