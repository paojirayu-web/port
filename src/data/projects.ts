import { TODO, type Project } from '../types/content'
import rollerKiln from '../assets/images/projects/roller-kiln.webp'
import kilnCar from '../assets/images/projects/kiln-car-refractory.webp'

export const projects: Project[] = [
  {
    id: 'gas-burner-control',
    number: 'P-01',
    featured: true,
    title: { th: 'ปรับปรุงการควบคุมหัวเผาแก๊ส', en: 'Gas Burner Control Improvement' },
    category: [
      { th: 'Energy', en: 'Energy' },
      { th: 'Combustion', en: 'Combustion' },
      { th: 'Continuous Improvement', en: 'Continuous Improvement' },
    ],
    summary: {
      th: 'ทดลองเปลี่ยน Ball Valve ที่ใช้ปรับแก๊สเข้าหัวเผาเป็น Needle Valve เพื่อให้ปรับ Flow ได้ละเอียดขึ้น',
      en: 'Trialled replacing burner inlet ball valves with needle valves for finer gas flow adjustment.',
    },
    problem: {
      th: 'เดิมใช้ Ball Valve ปรับแก๊สเข้าหัวเผา แต่ Ball Valve ออกแบบมาสำหรับเปิด-ปิด จึงปรับปริมาณแก๊สได้ไม่ละเอียด',
      en: 'Burner adjustment relied on ball valves, which are built for on/off service and give only coarse control of gas flow.',
    },
    analysis: [
      { th: 'ความดันแก๊ส (Gas Pressure)', en: 'Gas pressure' },
      { th: 'ลักษณะการไหลของแก๊ส', en: 'Flow behaviour' },
      { th: 'คุณลักษณะการเปิดของวาล์ว (Valve Characteristic)', en: 'Valve opening characteristics' },
      { th: 'การทำงานของหัวเผา', en: 'Burner operation' },
      { th: 'ปริมาณการใช้แก๊ส', en: 'Gas consumption' },
    ],
    action: {
      th: 'ทดลองเปลี่ยนวาล์วหน้าหัวเผาจาก Ball Valve เป็น Needle Valve จากนั้นปรับตั้ง (Tuning) หัวเผาใหม่ และเก็บข้อมูลการใช้แก๊สภายใต้เงื่อนไขการทดสอบ',
      en: 'Replaced the burner inlet ball valves with needle valves on trial, re-tuned the burners, and recorded gas consumption under the tested condition.',
    },
    result: {
      th: 'ผลจากการทดลอง: ใช้แก๊สลดลงประมาณ 9.16% ภายใต้เงื่อนไขที่ทดสอบ',
      en: 'Measured trial result: approximately 9.16% reduction in gas consumption under the tested condition.',
    },
    caution: {
      th: 'ยังไม่ได้แยกตัวแปรว่าผลที่ลดลงมาจากการเปลี่ยนวาล์วเพียงอย่างเดียวมากน้อยเท่าไร',
      en: 'The trial has not isolated how much of the reduction comes from the valve change alone.',
    },
    metric: { th: 'ใช้แก๊สลดลง ~9.16% ในการทดลอง', en: '~9.16% lower gas use in trial' },
    learning: TODO,
    methods: ['Combustion tuning', 'Flow control', 'Trial & measurement', 'Energy efficiency'],
    evidence: [],
  },
  {
    id: 'quality-dashboard',
    number: 'P-02',
    featured: true,
    title: { th: 'Dashboard ติดตามคุณภาพและของเสีย', en: 'Production Quality / Defect Dashboard' },
    category: [
      { th: 'Digital Engineering', en: 'Digital Engineering' },
      { th: 'Quality', en: 'Quality' },
      { th: 'Data Analytics', en: 'Data Analytics' },
    ],
    summary: {
      th: 'ย้ายการวิเคราะห์ข้อมูลคัดเกรดจาก Excel ที่ช้าลงเรื่อย ๆ มาเป็น Web Application สำหรับติดตามผลรายวัน',
      en: 'Moved production grading analysis from a slowing Excel workflow to a web application for daily monitoring.',
    },
    problem: {
      th: 'ข้อมูลการผลิตและผลคัดเกรดมาจากหลายแหล่งและมีปริมาณมาก เมื่อข้อมูลสะสมมากขึ้น การ Refresh และวิเคราะห์ใน Excel ใช้เวลานานจนติดตามรายวันได้ยาก',
      en: 'Production and grading data came from several sources in large volumes. As the dataset grew, refreshing and analysing it in Excel became too slow for daily monitoring.',
    },
    analysis: [
      { th: 'กำหนดโจทย์ทางวิศวกรรมที่ต้องการคำตอบ', en: 'Defined the engineering problem to answer' },
      { th: 'ระบุข้อมูลที่ต้องใช้ (Data Requirement)', en: 'Defined the data requirements' },
      { th: 'ออกแบบ Logic การวิเคราะห์', en: 'Designed the analysis logic' },
      { th: 'กำหนดวิธี Validate ความถูกต้องของข้อมูล', en: 'Defined the validation method' },
      { th: 'เก็บ Requirement จากผู้ใช้งาน', en: 'Gathered user requirements' },
    ],
    action: [
      { th: 'เริ่มจาก SQL, Excel, Power Query และ PivotTable', en: 'Started with SQL, Excel, Power Query, and PivotTables' },
      { th: 'พัฒนาต่อเป็น Web Application ให้เข้าถึงง่ายและเร็วขึ้น', en: 'Moved to a web application for accessibility and performance' },
      { th: 'ใช้ AI ช่วยในการพัฒนา แต่การตัดสินใจทางวิศวกรรมยังอยู่ที่วิศวกร', en: 'Used AI-assisted development; engineering judgement stayed with the engineer' },
    ],
    result: TODO,
    learning: TODO,
    methods: ['SQL', 'Power Query', 'Data validation', 'Web application'],
    evidence: [],
  },
  {
    id: 'kiln-breakdown-learning',
    number: 'P-03',
    featured: true,
    title: { th: 'บทเรียนจากเหตุ Breakdown ของเตาเผา', en: 'Kiln Breakdown & Maintenance Learning' },
    category: [
      { th: 'Maintenance', en: 'Maintenance' },
      { th: 'Troubleshooting', en: 'Troubleshooting' },
      { th: 'Reliability', en: 'Reliability' },
    ],
    summary: {
      th: 'งานซ่อม Roller Kiln ที่ถูกเร่งส่งคืนไลน์ผลิตก่อนตรวจสอบวิธีซ่อมให้รอบคอบ จนเกิดปัญหาตามมา',
      en: 'A rushed roller kiln repair returned to production before the method was verified, and caused problems downstream.',
    },
    problem: {
      th: 'Roller Kiln เกิด Breakdown กะทันหัน ในช่วงที่ฝ่ายผลิตต้องการให้เตากลับมาเดินเร็วที่สุด',
      en: 'A roller kiln broke down urgently while production needed it back as fast as possible.',
    },
    analysis: {
      th: 'ทีมเร่งซ่อมจนเตากลับมาเดินได้ แต่วิธีซ่อมยังไม่ได้ตรวจสอบให้เพียงพอก่อนส่งคืนไลน์ผลิต ต่อมาชิ้นงานเริ่มเดินเบี้ยว และมีความเสี่ยงที่จะติดขัดตามมา',
      en: 'The team completed the repair quickly, but the repair method was not sufficiently verified before the kiln returned to production. This later caused ware movement to become misaligned and created a downstream jamming risk.',
    },
    action: {
      th: 'แก้ไขเฉพาะหน้า: ปรับความเร็วมอเตอร์ของแต่ละโซนเตาให้สมดุลกัน เพื่อให้ชิ้นงานเคลื่อนที่ได้นิ่งขึ้น',
      en: 'Immediate countermeasure: balanced motor speeds between kiln zones to stabilise ware movement.',
    },
    result: TODO,
    learning: [
      { th: 'งานซ่อมไม่ได้จบแค่ตอนที่เครื่องกลับมาเดินได้', en: 'Maintenance does not end when the machine starts running again.' },
      { th: 'ต้องตรวจสอบงานซ่อมก่อน Return to Service ทุกครั้ง', en: 'Verify the repair before return to service' },
      { th: 'คุณภาพของงานซ่อมและการสื่อสารภายในทีม', en: 'Maintenance quality and communication' },
      { th: 'ความรับผิดชอบในฐานะหัวหน้างาน', en: 'Leadership accountability' },
      { th: 'การรักษาสมดุลระหว่างแรงกดดันจากการผลิตกับคุณภาพงานซ่อม', en: 'Production pressure versus maintenance quality' },
      { th: 'การทำ Root Cause Analysis (RCA)', en: 'Root cause analysis' },
    ],
    methods: ['Breakdown response', 'RCA', 'Drive speed balancing', 'Return-to-service check'],
    evidence: [
      {
        src: rollerKiln,
        alt: { th: 'ลูกกลิ้งใน Roller Kiln เรียงเป็นแถว', en: 'Rows of rollers in a roller kiln' },
        caption: { th: 'ลูกกลิ้งใน Roller Kiln (ภาพประกอบ)', en: 'Roller kiln rollers (illustrative)' },
      },
    ],
  },
  {
    id: 'kiln-structure-heat-loss',
    number: 'P-04',
    featured: false,
    title: { th: 'โครงสร้างเตาและการสูญเสียความร้อน', en: 'Kiln Structure, Heat Loss & Reliability' },
    category: [
      { th: 'Reliability', en: 'Reliability' },
      { th: 'Energy', en: 'Energy' },
    ],
    summary: {
      th: 'ตรวจสภาพผนัง หลังคา และ Seal ของเตา ซึ่งส่งผลต่อพลังงาน ความนิ่งของอุณหภูมิ คุณภาพชิ้นงาน และความเสี่ยงที่เตาจะ Breakdown',
      en: 'Inspecting kiln walls, roof, and sealing, which affect energy, temperature stability, product quality, and breakdown risk.',
    },
    problem: [
      { th: 'สภาพผนังและหลังคาเตา', en: 'Kiln wall and roof condition' },
      { th: 'Seal ของเตาและการสูญเสียความร้อน', en: 'Sealing and heat loss' },
      { th: 'การเสื่อมสภาพของโครงสร้างเตา', en: 'Structural degradation' },
    ],
    analysis: [
      { th: 'การใช้พลังงาน', en: 'Energy consumption' },
      { th: 'ความนิ่งของอุณหภูมิในเตา', en: 'Temperature stability' },
      { th: 'ของเสียในชิ้นงาน (Defect)', en: 'Product defects' },
      { th: 'ความเสี่ยงที่เตาจะ Breakdown', en: 'Breakdown risk' },
    ],
    action: { th: 'ตรวจสอบโครงสร้างเตาเชิงป้องกัน (Preventive Inspection)', en: 'Preventive inspection of the kiln structure' },
    result: TODO,
    learning: TODO,
    methods: ['Preventive inspection', 'Heat loss', 'Refractory'],
    evidence: [],
  },
  {
    id: 'kiln-car-maintenance',
    number: 'P-05',
    featured: false,
    title: { th: 'ปรับปรุงงานซ่อมบำรุง Kiln Car', en: 'Kiln Car Maintenance Improvement' },
    category: [
      { th: 'Maintenance', en: 'Maintenance' },
      { th: 'Energy', en: 'Energy' },
    ],
    summary: {
      th: 'ลดช่องว่างและความร้อนรั่วระหว่าง Kiln Car พร้อมยืดอายุการใช้งานของโครงสร้าง',
      en: 'Reducing gaps and heat leakage between kiln cars and extending kiln car service life.',
    },
    problem: [
      { th: 'ช่องว่างของ Seal ระหว่าง Kiln Car', en: 'Seal gaps between kiln cars' },
      { th: 'สภาพอิฐทนไฟและฉนวน', en: 'Brick and insulation condition' },
      { th: 'ความร้อนรั่วไหล', en: 'Heat leakage' },
      { th: 'โครงสร้าง Kiln Car และวิธีการซ่อม', en: 'Kiln car structure and maintenance methods' },
    ],
    analysis: TODO,
    action: [
      { th: 'ปรับปรุง Seal ระหว่าง Kiln Car', en: 'Improve sealing between kiln cars' },
      { th: 'ลดช่องว่างในโครงสร้าง Kiln Car', en: 'Reduce gaps in kiln car construction' },
      { th: 'ปรับการจัดวางวัสดุทนไฟและฉนวนใหม่', en: 'Improve refractory and insulation arrangement' },
      { th: 'เปลี่ยนอิฐที่เสื่อมสภาพ', en: 'Replace degraded bricks' },
      { th: 'ยืดอายุการใช้งานของ Kiln Car', en: 'Extend kiln car service life' },
    ],
    result: TODO,
    learning: TODO,
    methods: ['Refractory', 'Insulation', 'Sealing', 'Structural repair'],
    evidence: [
      {
        src: kilnCar,
        alt: { th: 'ชุดฉนวนทนไฟของ Kiln Car ถูกยกด้วยโซ่ระหว่างการซ่อม', en: 'A kiln car refractory insulation block lifted on a chain during repair' },
        caption: { th: 'ยกชุดฉนวน Kiln Car ระหว่างซ่อม', en: 'Lifting a kiln car insulation section during repair' },
      },
    ],
  },
  {
    id: 'kiln-furniture-material',
    number: 'P-06',
    featured: false,
    title: { th: 'เปรียบเทียบ Kiln Furniture: SiSiC กับ SSiC', en: 'Kiln Furniture Material: SiSiC vs SSiC' },
    category: [
      { th: 'Materials', en: 'Materials' },
      { th: 'Quality', en: 'Quality' },
    ],
    summary: {
      th: 'เปรียบเทียบ Kiln Furniture สองวัสดุ ทั้งเรื่องการติดของชิ้นงาน ผลต่อผิวชิ้นงาน การดูแลรักษา และจำนวนรอบการเผา',
      en: 'Comparing two kiln furniture materials for ware sticking, surface interaction, maintenance, and firing cycles.',
    },
    problem: TODO,
    analysis: TODO,
    action: TODO,
    result: TODO,
    learning: TODO,
    methods: ['Hypothesis', 'Trial', 'Observation', 'Decision'],
    evidence: [],
  },
]

export const getProject = (id: string | undefined) => projects.find((p) => p.id === id)
