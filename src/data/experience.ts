import type { Stage, Strength } from '../types/content'

export const strengths: Strength[] = [
  {
    title: { th: 'งานซ่อมบำรุง', en: 'Maintenance' },
    tags: ['PM', 'CM', 'Troubleshooting', 'RCA', 'Reliability'],
    line: {
      th: 'แก้ปัญหาหน้างานได้จริง และตัดสินใจเรื่องงานซ่อมบำรุงจากประสบการณ์ตรง',
      en: 'Hands-on troubleshooting combined with practical maintenance decision-making.',
    },
  },
  {
    title: { th: 'งานเดินเครื่องและการบริหาร', en: 'Operation & Leadership' },
    tags: ['Kiln Operation', 'Production Planning', 'Team Management', 'Safety', 'Cost'],
    line: {
      th: 'เข้าใจงานทั้งฝั่งซ่อมบำรุงและฝั่งผู้ใช้เครื่องจักร',
      en: 'Understands both the maintenance side and the equipment user’s side.',
    },
  },
  {
    title: { th: 'ดิจิทัลและการปรับปรุงงาน', en: 'Digital & Improvement' },
    tags: ['SQL', 'Data Analysis', 'Dashboard', 'Web Application', 'AI Tools'],
    line: {
      th: 'ใช้เครื่องมือดิจิทัลแก้ปัญหาจริงในงานเดินเครื่องและงานซ่อมบำรุง',
      en: 'Uses digital technology as an engineering tool for real operation and maintenance problems.',
    },
  },
]

export const stages: Stage[] = [
  {
    id: 'maintenance-engineer',
    title: { th: 'แผนกวิศวกรรม', en: 'Engineering Department' },
    roles: [
      { title: { th: 'หัวหน้าหน่วยซ่อมบำรุงเครื่องกล', en: 'Head, Mechanical Maintenance Unit' }, period: { th: '2565–2567', en: '2022–2024' } },
    ],
    items: [
      { th: 'วางแผน PM ร่วมกับฝ่ายผลิตและดำเนินการตามแผน PM', en: 'Planned PM with the production team and carried out the PM plan' },
      { th: 'ซ่อมแก้ไข (Corrective) เมื่อเครื่องจักร Breakdown แล้วหา Root Cause ร่วมกับฝ่ายผลิต เพื่อนำไปปรับแผน Preventive ป้องกันการเกิดซ้ำ', en: 'Carried out corrective repairs on breakdowns, then worked with production to find the root cause and update the preventive plan so it would not recur' },
      { th: 'ออกแบบอะไหล่ด้วย SolidWorks และเขียน Layout โรงงานด้วย AutoCAD', en: 'Designed spare parts in SolidWorks and drew plant layouts in AutoCAD' },
      { th: 'วางแผนจัดซื้ออะไหล่ และประสานงาน Outsource ในและต่างประเทศ', en: 'Planned spare-part purchasing and worked with local and overseas contractors' },
      { th: 'บริหารงานตามระบบคุณภาพ ISO 9001:2015', en: 'Worked to the ISO 9001:2015 quality system' },
    ],
  },
  {
    id: 'kiln-department',
    title: { th: 'แผนกเตาเผาเคลือบ', en: 'Glaze Kiln Department' },
    current: true,
    roles: [
      { title: { th: 'หัวหน้าแผนก', en: 'Head of Department' }, period: { th: '2567–2569', en: '2024–2026' } },
      { title: { th: 'ผู้จัดการแผนก', en: 'Department Manager' }, period: { th: '2569–ปัจจุบัน', en: '2026–present' } },
    ],
    items: [
      { th: 'เดินเตาและควบคุม Firing Process พร้อมดูแล Reliability ของอุปกรณ์เตา', en: 'Ran the kilns and firing process, and kept kiln equipment reliable' },
      { th: 'วางแผนและติดตามงาน PM เตาเผา 15 เตา', en: 'Planned and followed up PM for 15 kilns' },
      { th: 'บริหารทีม วางแผนกำลังคน และวางแผนนำชิ้นงานเข้าเผา', en: 'Managed the team, manpower and firing schedules' },
      { th: 'ควบคุมต้นทุนและพลังงาน ร่วมคณะทำงานลดก๊าซเรือนกระจก (GHG)', en: 'Controlled cost and energy; member of the GHG reduction working group' },
      { th: 'แก้ปัญหาในกระบวนการผลิต ปรับปรุงคุณภาพชิ้นงานและความปลอดภัย', en: 'Solved process problems and improved product quality and safety' },
    ],
  },
]

export const careerPath = [
  { th: 'Mechanical Maintenance', en: 'Mechanical Maintenance' },
  { th: 'Equipment Reliability', en: 'Equipment Reliability' },
  { th: 'Predictive Maintenance', en: 'Predictive Maintenance' },
  { th: 'Engineering Improvement', en: 'Engineering Improvement' },
]

export const careerStatement = {
  th: 'ประสบการณ์ที่ผ่านมาเปิดโอกาสให้ผมได้ทำงานทั้งในมุมของงานซ่อมบำรุง การใช้งานเครื่องจักร และการบริหารจัดการ เป้าหมายต่อจากนี้คือการพัฒนาตัวเองให้ลึกขึ้นในสาย Mechanical Maintenance และ Equipment Reliability โดยต่อยอดการใช้ข้อมูลและเครื่องมือดิจิทัลเพื่อสนับสนุนการวิเคราะห์สภาพเครื่องจักร วางแผนการบำรุงรักษา และตัดสินใจทางวิศวกรรมได้อย่างมีประสิทธิภาพมากขึ้น',
  en: 'My experience so far has let me work from three angles: maintenance, equipment operation and management. My next goal is to go deeper in mechanical maintenance and equipment reliability, building on data and digital tools to support equipment condition analysis, maintenance planning and more effective engineering decisions.',
}