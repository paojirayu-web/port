import type { Credential, FitRow, L } from '../types/content'
import license from '../assets/images/credentials/license.webp'
import honours from '../assets/images/credentials/honours.webp'
import safetyExec from '../assets/images/credentials/safety-exec.webp'
import safetySupervisor from '../assets/images/credentials/safety-supervisor.webp'
import fire from '../assets/images/credentials/fire.webp'

export const skillGroups: { group: L; items: string[] }[] = [
  {
    group: { th: 'Engineering', en: 'Engineering' },
    items: ['Mechanical Maintenance', 'Kiln Systems', 'Hydraulics', 'Troubleshooting', 'RCA', 'PM / CM', 'Reliability', 'SolidWorks', 'AutoCAD'],
  },
  {
    group: { th: 'Management', en: 'Management' },
    items: ['Team Management', 'Production Planning', 'Manpower Planning', 'Continuous Improvement', 'Safety', 'ISO 9001:2015', '5S'],
  },
  {
    group: { th: 'Data', en: 'Data' },
    items: ['SQL', 'Excel', 'Power Query', 'Power Pivot', 'Data Analysis', 'Dashboard'],
  },
  {
    group: { th: 'Digital Tools', en: 'Digital Tools' },
    items: ['Web Applications', 'AI-assisted workflows', 'Automation'],
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

export const fitNote: L = {
  th: 'สรุปจากขอบเขตงานวิศวกรเครื่องกลในประกาศรับสมัครงานของ กฟผ.',
  en: 'Summarised from the mechanical engineer job descriptions in EGAT recruitment announcements.',
}

export const fitRows: FitRow[] = [
  {
    requirement: { th: 'วุฒิ ป.ตรี วิศวกรรมเครื่องกล และมีใบ กว.', en: 'B.Eng. Mechanical and a กว. licence' },
    evidence: {
      th: 'วศ.บ. วิศวกรรมเครื่องกล ม.ศิลปากร (เกียรตินิยมอันดับ 2) และใบ กว. ระดับภาคีวิศวกร สาขาเครื่องกล',
      en: 'B.Eng. Mechanical from Silpakorn with second-class honours, and an Associate Engineer licence in mechanical engineering',
    },
    refs: [{ label: { th: 'ใบรับรอง', en: 'Credentials' }, to: '#credentials' }],
  },
  {
    requirement: { th: 'วางแผนและดำเนินงานบำรุงรักษาเครื่องกล', en: 'Plan and carry out mechanical maintenance' },
    evidence: {
      th: 'ทำงาน PM, CM และแก้ปัญหาเครื่องจักร Breakdown ในตำแหน่ง Maintenance Engineer ประมาณ 2 ปี',
      en: 'About two years of PM, CM, and breakdown work as a maintenance engineer',
    },
    refs: [{ label: { th: 'ประสบการณ์', en: 'Experience' }, to: '#experience' }],
  },
  {
    requirement: { th: 'ตรวจสอบ ประเมินสภาพ และวิเคราะห์ความเสียหาย', en: 'Inspection, condition assessment, failure analysis' },
    evidence: {
      th: 'วิเคราะห์เหตุ Breakdown ของเตาเผา และตรวจสภาพโครงสร้างเตาและ Kiln Car',
      en: 'Analysed an urgent kiln breakdown and inspected the kiln structure and kiln cars',
    },
    refs: [
      { label: { th: 'P-03', en: 'P-03' }, to: '/projects/kiln-breakdown-learning' },
      { label: { th: 'P-04', en: 'P-04' }, to: '/projects/kiln-structure-heat-loss' },
    ],
  },
  {
    requirement: { th: 'อุปกรณ์ความร้อนและระบบการเผาไหม้', en: 'Thermal and combustion equipment' },
    evidence: {
      th: 'ปรับปรุงการควบคุมหัวเผาแก๊ส และดูแลปัญหาการสูญเสียความร้อนของเตาเผาอุตสาหกรรม',
      en: 'Improved gas burner control and worked on heat loss in industrial kilns',
    },
    refs: [
      { label: { th: 'P-01', en: 'P-01' }, to: '/projects/gas-burner-control' },
      { label: { th: 'P-05', en: 'P-05' }, to: '/projects/kiln-car-maintenance' },
    ],
  },
  {
    requirement: { th: 'ระบบไฮดรอลิกและเครื่องจักรกล', en: 'Hydraulic and mechanical systems' },
    evidence: {
      th: 'ซ่อมบำรุงระบบไฮดรอลิก เครื่องขึ้นรูป และเครื่องจักรในไลน์ผลิต',
      en: 'Maintained hydraulic systems, forming machines, and production equipment',
    },
    refs: [{ label: { th: 'ประสบการณ์', en: 'Experience' }, to: '#experience' }],
  },
  {
    requirement: { th: 'พลังงานและต้นทุน', en: 'Energy and cost' },
    evidence: {
      th: 'รับผิดชอบการบริหารพลังงานและควบคุมต้นทุนของแผนกเตาเผา',
      en: 'Managed energy and controlled cost for the kiln department',
    },
    refs: [{ label: { th: 'P-01', en: 'P-01' }, to: '/projects/gas-burner-control' }],
  },
  {
    requirement: { th: 'ใช้ข้อมูลประกอบการตัดสินใจ', en: 'Data-supported decisions' },
    evidence: {
      th: 'พัฒนาระบบติดตามคุณภาพการผลิตที่รวมข้อมูลจากหลายแหล่ง',
      en: 'Built production quality monitoring from multiple data sources',
    },
    refs: [{ label: { th: 'P-02', en: 'P-02' }, to: '/projects/quality-dashboard' }],
  },
  {
    requirement: { th: 'ความปลอดภัยในการทำงาน', en: 'Work safety' },
    evidence: {
      th: 'ผ่านการอบรม จป. ระดับบริหาร, จป. ระดับหัวหน้างาน และการดับเพลิงขั้นต้น',
      en: 'Executive and supervisor-level safety officer training, plus basic firefighting',
    },
    refs: [{ label: { th: 'ใบรับรอง', en: 'Credentials' }, to: '#credentials' }],
  },
]
