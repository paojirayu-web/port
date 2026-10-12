import type { L } from '../types/content'

export const profile = {
  name: { th: 'จิรายุ เจากสิกร', en: 'Jirayu' } satisfies L,
  heroName: { th: 'จิรายุ เจากสิกร', en: 'JIRAYU' } satisfies L,
  role: { th: 'วิศวกรเครื่องกล', en: 'Mechanical Engineer' } satisfies L,
  focus: [
    { th: 'Maintenance', en: 'Maintenance' },
    { th: 'Reliability', en: 'Reliability' },
    { th: 'Operation', en: 'Operation' },
    { th: 'Digital Improvement', en: 'Digital Improvement' },
  ] satisfies L[],
  statement: {
    th: 'วิศวกรเครื่องกลที่มีประสบการณ์ตรงทั้งงานซ่อมบำรุง การเดินเตาเผาอุตสาหกรรม และการบริหารแผนก นำความรู้ด้านวิศวกรรมและเครื่องมือดิจิทัลมาใช้ยกระดับ Reliability ของเครื่องจักร ประสิทธิภาพการผลิต และการปรับปรุงงานอย่างต่อเนื่อง',
    en: 'Mechanical Engineer with hands-on maintenance, kiln operation, and management experience, applying engineering and digital technology to improve equipment reliability, operational performance, and continuous improvement.',
  } satisfies L,
  preparedFor: {
    th: 'คณะกรรมการสัมภาษณ์ กฟผ. · ตำแหน่งวิศวกร (วิศวกรรมเครื่องกล) · R10302',
    en: 'EGAT interview panel · Engineer (Mechanical) · R10302',
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
  hobbies: {
    th: 'นอกเวลางานชอบวิ่ง (Fun Run 5 กม. และ Mini Marathon 10 กม.) วาดรูป และฟังเพลง',
    en: 'Outside work I run 5 km fun runs and 10 km mini marathons, draw, and listen to music.',
  } satisfies L,
}

export const about: L[] = [
  {
    th: 'ผมจบวิศวกรรมเครื่องกลจากมหาวิทยาลัยศิลปากร และเริ่มงานแรกในตำแหน่ง Mechanical Maintenance Engineer ที่ Crown Ceramics ผู้ผลิตภาชนะบนโต๊ะอาหารประเภท Stoneware ช่วงราว 2 ปีแรกรับผิดชอบงาน PM / CM แก้ปัญหาเครื่องจักร Breakdown และดูแลระบบไฮดรอลิก เครื่องขึ้นรูป และเตาเผาอุตสาหกรรม',
    en: 'I studied mechanical engineering at Silpakorn University and started my career as a mechanical maintenance engineer at Crown Ceramics, a stoneware and tableware manufacturer. For about two years I handled preventive and corrective maintenance, breakdowns, hydraulic systems, forming machines, and industrial kilns.',
  },
  {
    th: 'หลังจากนั้นผมย้ายมาอยู่แผนกเตาเผา และได้รับมอบหมายให้ดูแลแผนก การได้มาอยู่ฝั่งผู้ใช้เครื่องจักรเองทำให้เห็นชัดว่าสภาพเครื่องจักรกระทบทั้งการเผา พลังงาน คุณภาพ คน และต้นทุน และได้เห็นว่าแรงกดดันจากการผลิตทำให้งานซ่อมถูกเร่งส่งกลับไปใช้งานก่อนตรวจสอบให้ครบได้อย่างไร',
    en: 'I then moved into the kiln department and later became its head. Running the kilns showed me maintenance from the equipment user’s side: how equipment condition affects firing, energy, quality, people, and cost, and how production pressure can push a repair back into service before it is verified.',
  },
  {
    th: 'เป้าหมายต่อจากนี้คือกลับมาทำงานสายซ่อมบำรุงเครื่องกลในระยะยาว ลงลึกด้าน Equipment Reliability และใช้ข้อมูลช่วยในการตัดสินใจทางวิศวกรรม',
    en: 'My next step is a long-term career in mechanical maintenance, going deeper into equipment reliability and using data to support engineering decisions.',
  },
]
