import { TODO, type Stage, type Strength } from '../types/content'

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
    period: TODO,
    title: { th: 'วิศวกรซ่อมบำรุงเครื่องกล', en: 'Mechanical Maintenance Engineer' },
    focus: { th: 'ประมาณ 2 ปี', en: 'About 2 years' },
    items: [
      { th: 'Preventive Maintenance (PM)', en: 'Preventive maintenance (PM)' },
      { th: 'Corrective Maintenance (CM)', en: 'Corrective maintenance (CM)' },
      { th: 'แก้ปัญหาเครื่องจักร Breakdown', en: 'Breakdown troubleshooting' },
      { th: 'ระบบไฮดรอลิก', en: 'Hydraulic systems' },
      { th: 'เครื่องจักรในไลน์ผลิตและเครื่องขึ้นรูป', en: 'Production equipment and forming machines' },
      { th: 'อุปกรณ์ที่เกี่ยวข้องกับเตาเผา', en: 'Kiln-related equipment' },
    ],
  },
  {
    id: 'kiln-department',
    period: TODO,
    title: { th: 'แผนกเตาเผา', en: 'Kiln Department' },
    focus: { th: 'การเดินเตาและควบคุมการเผา', en: 'Kiln operation and firing process' },
    items: [
      { th: 'เดินเตาและควบคุม Firing Process', en: 'Kiln operation and firing process' },
      { th: 'ดูแล Reliability ของอุปกรณ์เตา', en: 'Equipment reliability' },
      { th: 'ติดตามการใช้พลังงานของเตา', en: 'Energy consumption' },
      { th: 'แก้ปัญหาในกระบวนการผลิต', en: 'Process troubleshooting' },
      { th: 'ประสานงานกับฝ่ายผลิต', en: 'Production coordination' },
    ],
  },
  {
    id: 'kiln-manager',
    period: TODO,
    title: { th: 'ผู้จัดการแผนกเตาเผาเคลือบ', en: 'Glaze Kiln Department Manager' },
    focus: { th: 'มองงานวิศวกรรมในภาพที่กว้างขึ้น', en: 'A wider engineering perspective' },
    current: true,
    items: [
      { th: 'บริหารทีมและวางแผนกำลังคน', en: 'Team management and manpower planning' },
      { th: 'วางแผนการผลิต', en: 'Production planning' },
      { th: 'ประสานงานซ่อมบำรุง', en: 'Maintenance coordination' },
      { th: 'ควบคุมต้นทุนและบริหารพลังงาน', en: 'Cost control and energy management' },
      { th: 'ปรับปรุงคุณภาพและความปลอดภัย', en: 'Quality improvement and safety' },
      { th: 'ผลักดันโครงการ Engineering Improvement', en: 'Engineering improvement projects' },
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
  th: 'ประสบการณ์ที่ผ่านมาทำให้ผมเห็นงานทั้งในมุมของซ่อมบำรุงและมุมของการเดินเครื่อง เป้าหมายต่อไปคือพัฒนาตัวเองให้ลึกขึ้นในสาย Mechanical Maintenance และ Equipment Reliability โดยใช้ข้อมูลและเครื่องมือดิจิทัลช่วยให้ตัดสินใจทางวิศวกรรมได้ดีขึ้น',
  en: 'My previous experience has given me perspectives from both maintenance and operation. My next goal is to deepen my expertise in mechanical maintenance and equipment reliability while using digital technology and data to support better engineering decisions.',
}

export const careerBridge = {
  th: 'การเผาไหม้ของหัวเผา การสูญเสียความร้อนผ่านผนังเตา และสภาพวัสดุทนไฟ (Refractory) อยู่บนหลักการเดียวกับอุปกรณ์ความร้อนในโรงไฟฟ้า นี่คือพื้นฐานที่ผมอยากนำไปต่อยอดกับงานบำรุงรักษาเครื่องกลของ กฟผ.',
  en: 'Burner combustion, heat loss through kiln walls, and refractory condition rest on the same principles as thermal equipment in power plants. That is the foundation I want to build on in EGAT mechanical maintenance.',
}
