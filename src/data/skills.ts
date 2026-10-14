import type { Credential, L } from '../types/content'
import license from '../assets/images/credentials/license.webp'
import honours from '../assets/images/credentials/honours.webp'
import safetyExec from '../assets/images/credentials/safety-exec.webp'
import safetySupervisor from '../assets/images/credentials/safety-supervisor.webp'
import fire from '../assets/images/credentials/fire.webp'
import mlAi from '../assets/images/credentials/ml-ai-2026.webp'

/** `core` items are highlighted and listed first. */
export const skillGroups: { group: L; desc: L; core: string[]; items: string[] }[] = [
  {
    group: { th: 'Engineering', en: 'Engineering' },
    desc: { th: 'ซ่อมบำรุง วิเคราะห์ปัญหา และดูแลระบบเครื่องจักร', en: 'Maintaining machinery, troubleshooting and analysing problems' },
    core: ['Mechanical Maintenance', 'PM / CM', 'Troubleshooting', 'Root Cause Analysis (RCA)'],
    items: ['Kiln Systems', 'Hydraulics', 'Reliability Improvement', 'SolidWorks', 'AutoCAD'],
  },
  {
    group: { th: 'Management', en: 'Management' },
    desc: { th: 'บริหารทีม วางแผนงาน และควบคุมการดำเนินงานของแผนก', en: 'Leading the team, planning work and running department operations' },
    core: ['Team Management', 'Production Planning'],
    items: ['Manpower Planning', 'Safety', 'Continuous Improvement', 'ISO 9001:2015', 'ISO 14001:2015', '5S'],
  },
  {
    group: { th: 'Data', en: 'Data' },
    desc: { th: 'วิเคราะห์และนำเสนอข้อมูลเพื่อสนับสนุนการตัดสินใจทางวิศวกรรม', en: 'Analysing and presenting data to support engineering decisions' },
    core: ['Excel', 'Dashboard'],
    items: ['Data Analysis', 'SQL', 'Power Query', 'Power Pivot'],
  },
  {
    group: { th: 'Digital & Automation', en: 'Digital & Automation' },
    desc: { th: 'ประยุกต์ใช้เครื่องมือดิจิทัล No-code และ AI เพื่อพัฒนางาน', en: 'Applying digital, no-code and AI tools to improve work' },
    core: ['AppSheet', 'Cursor (AI IDE)', 'Automation'],
    items: ['Microsoft Office', 'Google Workspace', 'GitHub', 'Web Applications', 'AI-assisted Workflows'],
  },
]

export const philosophy: { title: L; body: L }[] = [
  {
    title: { th: 'Safety First', en: 'Safety first' },
    body: {
      th: 'ความเร่งด่วนของการผลิต ไม่ใช่เหตุผลที่จะยอมทำงานซ่อมอย่างไม่ปลอดภัย',
      en: 'Production urgency must never justify unsafe maintenance.',
    },
  },
  {
    title: { th: 'หา Root Cause', en: 'Find the root cause' },
    body: {
      th: 'ไม่หยุดแค่ทำให้เครื่องกลับมาเดินได้ แต่ต้องเข้าใจว่าเสียเพราะอะไร และป้องกันไม่ให้เกิดซ้ำ',
      en: 'Do not stop at restoring operation. Understand why the failure occurred and prevent recurrence.',
    },
  },
  {
    title: { th: 'ตรวจสอบก่อน Return to Service', en: 'Verify before return to service' },
    body: {
      th: 'เครื่องกลับมาเดินได้ ไม่ได้แปลว่างานซ่อมเสร็จสมบูรณ์',
      en: 'A machine running again does not automatically mean maintenance is complete.',
    },
  },
  {
    title: { th: 'ใช้ข้อมูลประกอบการตัดสินใจ', en: 'Data supports engineering judgement' },
    body: {
      th: 'ใช้ข้อมูลและเครื่องมือดิจิทัลช่วยให้ตัดสินใจได้ดีขึ้น โดยยังต้องผ่านการตรวจสอบทางวิศวกรรมเสมอ',
      en: 'Use data and digital tools to improve decisions while retaining engineering validation.',
    },
  },
  {
    title: { th: 'เรียนรู้อย่างต่อเนื่อง', en: 'Continuous learning' },
    body: {
      th: 'เรียนรู้เครื่องจักร เทคโนโลยี และวิธีการใหม่ ๆ แล้วนำมาใช้กับโจทย์วิศวกรรมจริง',
      en: 'Learn new equipment, technology, and methods, and apply them to real engineering problems.',
    },
  },
]

export const credentials: Credential[] = [
  {
    image: license,
    lead: true,
    title: { th: 'ใบอนุญาตประกอบวิชาชีพวิศวกรรมควบคุม (กว.)', en: 'Professional Engineer Licence (กว.)' },
    meta: { th: 'ระดับภาคีวิศวกร · สาขาวิศวกรรมเครื่องกล', en: 'Mechanical Engineering · Associate Engineer' },
  },
  {
    image: honours,
    title: { th: 'เกียรตินิยมอันดับ 2', en: 'Second-Class Honours' },
    meta: { th: 'วศ.บ. วิศวกรรมเครื่องกล ม.ศิลปากร · GPA 3.53', en: 'B.Eng. Mechanical, Silpakorn · GPA 3.53' },
  },
  {
    image: mlAi,
    title: { th: 'Machine Learning & AI 2026', en: 'Machine Learning & AI 2026' },
    meta: { th: 'Uncle Engineer × Cons Robotics · 13 ต.ค. 2569', en: 'Uncle Engineer × Cons Robotics · 13 Oct 2026' },
  },
  {
    image: safetyExec,
    title: { th: 'จป. ระดับบริหาร', en: 'Safety Officer, Executive Level' },
    meta: { th: '10–11 พ.ค. 2567', en: '10–11 May 2024' },
  },
  {
    image: safetySupervisor,
    title: { th: 'จป. ระดับหัวหน้างาน', en: 'Safety Officer, Supervisor Level' },
    meta: { th: '19–20 เม.ย. 2567', en: '19–20 Apr 2024' },
  },
  {
    image: fire,
    title: { th: 'การดับเพลิงขั้นต้น', en: 'Basic Firefighting' },
    meta: { th: '14 ธ.ค. 2566', en: '14 Dec 2023' },
  },
]
