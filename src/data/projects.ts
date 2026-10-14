import type { Project } from '../types/content'
import kilnCarRepairLog from '../assets/images/projects/kiln-car-repair-log.webp'
import burnerChart from '../assets/images/projects/burner-k1-gas-chart.png'
import burnerK1Trend from '../assets/images/projects/burner-k1-gas-trend.png'
import burnerTck3Chart from '../assets/images/projects/burner-tck3-gas-chart.png'
import burnerO2Compare from '../assets/images/projects/burner-o2-compare.png'
import burnerK1O2Chart from '../assets/images/projects/burner-k1-o2-chart.png'
import burnerFishbone from '../assets/images/projects/burner-fishbone.png'
import sortingPareto from '../assets/images/projects/sorting-pareto.png'
import wallTempCriteria from '../assets/images/projects/kiln-wall-temp-criteria.png'
import furnitureFishbone from '../assets/images/projects/kiln-furniture-fishbone.png'
import ballValve from '../assets/images/projects/burner-ball-valve.webp'
import needleValve from '../assets/images/projects/burner-needle-valve.webp'
import roofFibreCheck from '../assets/images/projects/kiln-roof-fibre-check.webp'
import kilnCarOld from '../assets/images/projects/kiln-car-old-leak.webp'
import kilnCarNew from '../assets/images/projects/kiln-car-new-build.webp'
import ssicWithWare from '../assets/images/projects/ssic-with-ware.webp'
import ssicStack from '../assets/images/projects/ssic-setter-stack.webp'
import ssicLine from '../assets/images/projects/ssic-roller-line.webp'
import ssicShaped from '../assets/images/projects/ssic-after-firing-shaped.webp'
import ssicFlat from '../assets/images/projects/ssic-after-firing-flat.webp'
import sortingCover from '../assets/images/projects/sorting-cover.webp'
import sortingOverview from '../assets/images/projects/sorting-overview.webp'
import sortingLineReport from '../assets/images/projects/sorting-line-report.webp'
import appsheetEditor from '../assets/images/projects/appsheet-editor.webp'
import appsheetSheet from '../assets/images/projects/appsheet-sheet.webp'
import appsheetApp from '../assets/images/projects/appsheet-app.webp'
import appsheetLine from '../assets/images/projects/appsheet-line.webp'
import plankilnCover from '../assets/images/projects/plankiln-cover.webp'
import plankilnOverview from '../assets/images/projects/plankiln-overview.webp'

export const projects: Project[] = [
  {
    id: 'gas-burner-control',
    number: 'P-01',
    featured: true,
    status: 'rollout',
    statusLabel: { th: 'ใช้งานจริง / ติดตามผล / ขยายผล', en: 'Implemented / Monitoring / Expansion' },
    title: { th: 'ปรับปรุงวาล์วปรับแก๊สเตารุ่นเก่า', en: 'Legacy Kiln Gas Control Valve Improvement' },
    category: [
      { th: 'Energy', en: 'Energy' },
      { th: 'Lean', en: 'Lean' },
    ],
    summary: {
      th: 'เปลี่ยน Ball Valve เป็น Needle Valve เพื่อเพิ่มความละเอียดในการปรับแก๊สเข้าสู่หัวเผา และสนับสนุนการ Fine-tune Air–Gas ของเตาเผารุ่นเก่า',
      en: 'Replaced ball valves with needle valves to give finer burner gas adjustment and support air–gas fine-tuning on older kilns.',
    },
    sections: [
      {
        label: { th: 'ปัญหา', en: 'Problem' },
        content: [
          {
            items: [
              { th: 'แผนกเตามีต้นทุนพลังงานสูง โดยเฉพาะค่าแก๊ส', en: 'The kiln department carries a high energy cost, mainly gas.' },
              { th: 'เตารุ่นเก่าใช้ Ball Valve ปรับแก๊สเข้าหัวเผาด้วยมือ ซึ่ง Ball Valve เหมาะกับการเปิด–ปิด และอัตราการไหลเปลี่ยนเร็วในบางช่วงของการเปิด', en: 'Older kilns used ball valves to set burner gas by hand. Ball valves suit isolation, and flow changes quickly over part of their travel.' },
              { th: 'ผู้ปฏิบัติงานใช้ Ball Valve หรี่และปรับละเอียด จึงปรับ Gas Flow ได้ยาก', en: 'Operators were using them to throttle and fine-tune, which made gas flow hard to set.' },
            ],
          },
          {
            text: {
              th: 'ประเด็นไม่ใช่ว่า Ball Valve ทำให้ใช้แก๊สมากขึ้นเอง แต่คือการปรับละเอียดได้จำกัด',
              en: 'The concern was not that a ball valve uses more gas by itself, but that it limits fine adjustment.',
            },
            flow: [
              { th: 'ปรับละเอียดได้จำกัด', en: 'Limited fine adjustment' },
              { th: 'ตั้ง Gas Flow ได้ยาก', en: 'Difficult gas-flow tuning' },
              { th: 'Balance Air–Gas ได้ยากขึ้น', en: 'Harder air–gas balancing' },
              { th: 'อาจป้อนแก๊สเกินจำเป็น / การเผาไหม้แปรปรวน', en: 'Potential excess gas input / combustion variation' },
            ],
          },
        ],
      },
      {
        label: { th: 'การวิเคราะห์ทางวิศวกรรม', en: 'Engineering Analysis' },
        content: [
          {
            items: [
              { th: 'ความละเอียดในการปรับแก๊ส: Ball Valve หรี่แบบหยาบและไว ทำให้ Fine-tune ที่หัวเผาได้ยาก', en: 'Adjustment resolution: a ball valve throttles coarsely and sensitively, so burner fine-tuning is difficult.' },
              { th: 'ความสัมพันธ์ Air–Gas: การตั้งแก๊สที่ไม่แม่นทำให้ปรับสัดส่วนอากาศกับแก๊สยาก', en: 'Air–gas interaction: imprecise gas setting makes the air–gas ratio harder to tune.' },
              { th: 'พลังงานและความแปรปรวน: ต้องประเมินจากข้อมูลการใช้แก๊สจริง ไม่ใช่สมมติจากตัววาล์ว', en: 'Energy and variability: judged from measured gas use, not assumed from the valve.' },
              { th: 'ใช้ 4M1E ระดมสาเหตุที่เป็นไปได้ของการใช้แก๊สสูง', en: 'Used 4M1E to list possible causes of high gas use.' },
            ],
          },
        ],
      },
      {
        label: { th: 'การปรับปรุง', en: 'Improvement' },
        content: [
          {
            flow: [
              { th: 'Needle Valve', en: 'Needle valve' },
              { th: 'หรี่ปรับด้วยมือได้ละเอียดขึ้น', en: 'Finer manual throttling' },
              { th: 'ปรับ Gas Flow ได้ดีขึ้น', en: 'Better gas-flow adjustability' },
              { th: 'Fine-tune Air–Gas ได้ง่ายขึ้น', en: 'Easier air–gas fine-tuning' },
              { th: 'อาจลดแก๊สส่วนเกิน และการเผาไหม้สม่ำเสมอขึ้น', en: 'Potentially less excess gas and more consistent combustion' },
            ],
          },
          {
            items: [
              { th: 'เปลี่ยน Ball Valve เป็น Needle Valve ทั้ง 12 หัวเผาของเตา K1 (ก.ย. 2024)', en: 'Replaced the ball valves with needle valves on all 12 burners of kiln K1 (Sep 2024).' },
              { th: 'เป้าหมายคือเพิ่มความละเอียดในการปรับแก๊สที่หัวเผาแต่ละหัว Needle Valve ไม่ได้ประหยัดแก๊สเอง ผลด้านพลังงานต้องวัดจากข้อมูลจริง', en: 'The goal is finer gas adjustment at each burner. A needle valve does not save gas by itself; the energy effect has to be measured.' },
            ],
          },
        ],
      },
      {
        label: { th: 'การวัดผล', en: 'Measurement' },
        content: [
          {
            items: [
              { th: 'ปริมาณการใช้แก๊สวัดจาก Main Gas Flow Meter ของเตา ไม่ได้ประมาณจากแรงดันแก๊ส', en: 'Gas use comes from the kiln’s main gas flow meter, not estimated from gas pressure.' },
              { th: 'ติดตาม %O2 ในโซนเผาเพื่อดูพฤติกรรมการเผาไหม้', en: '%O2 in the firing zones is tracked to watch combustion behaviour.' },
              { th: 'ดูแนวโน้มระยะยาวเทียบกับ Baseline ก่อนปรับปรุง (เม.ย.–ส.ค. 2024)', en: 'Long-term trends are compared with the pre-improvement baseline (Apr–Aug 2024).' },
            ],
          },
        ],
      },
      {
        label: { th: 'ผลที่เตา K1', en: 'K1 Result' },
        content: [
          {
            items: [
              { th: 'Baseline ก่อนปรับปรุง (เม.ย.–ส.ค. 2024): เฉลี่ย 277 m³/วัน', en: 'Pre-improvement baseline (Apr–Aug 2024): 277 m³/day' },
              { th: 'ก.ย.–ธ.ค. 2024: 268 m³/วัน (−3.2%)', en: 'Sep–Dec 2024: 268 m³/day (−3.2%)' },
              { th: 'ปี 2025: 255 m³/วัน (ประมาณ −8.0%)', en: '2025: 255 m³/day (about −8.0%)' },
              { th: 'ปี 2026: 257 m³/วัน (ประมาณ −7.2%)', en: '2026: 257 m³/day (about −7.2%)' },
            ],
          },
          {
            text: {
              th: 'การใช้แก๊สที่วัดได้ลดลงต่อเนื่องประมาณ 7–8% เทียบกับ Baseline ตลอดปี 2025–2026 ไม่ใช่แค่ช่วงทดลองสั้น ๆ',
              en: 'Measured gas consumption showed a sustained reduction of about 7–8% versus the pre-improvement baseline through 2025–2026, not just during a short trial.',
            },
          },
        ],
      },
      {
        label: { th: 'การควบคุมการเผาไหม้ (%O2)', en: 'Combustion Control (%O2)' },
        content: [
          {
            text: {
              th: 'Needle Valve ปรับ Gas Flow ไม่ได้คุม O2 โดยตรง O2 ขึ้นกับทั้งแก๊ส อากาศ สัดส่วน Air–Gas Draft อากาศรั่ว สภาพหัวเผา และปริมาณงาน การปรับแก๊สได้ละเอียดขึ้นช่วยให้ Fine-tune Air–Gas และคุม O2 ในช่วงที่ต้องการได้ง่ายขึ้น',
              en: 'The needle valve sets gas flow; it does not control O2 directly. O2 depends on gas, air, air–gas ratio, draft, air leakage, burner condition and loading. Finer gas adjustment supports air–gas tuning and helps operators keep O2 in the desired range.',
            },
          },
          {
            heading: { th: 'ข้อมูลที่ติดตาม', en: 'Monitored data' },
            items: [
              { th: 'K1 Firing Zone 2 (OP 50%) ก.พ.–ก.ย. 2026: CL 8.25%, UCL 11.0%, LCL 5.5% ทุกจุดอยู่ในพิกัด ±3σ แสดงว่า O2 นิ่งทางสถิติในช่วงที่ติดตาม', en: 'K1 Firing Zone 2 (OP 50%), Feb–Sep 2026: CL 8.25%, UCL 11.0%, LCL 5.5%; every point within ±3σ, so O2 was statistically stable over the period.' },
              { th: 'SD ของ O2 ที่ OP 50%: K1 1.28 / 0.91, เตารุ่นใหม่ TCK1 1.17 / 0.76, เตารุ่นเก่า BC1 1.77 / 1.00 (Zone 1 / Zone 2) K1 ใกล้เคียง TCK1 และต่ำกว่า BC1 ในสภาวะที่วิเคราะห์', en: 'O2 SD at OP 50%: K1 1.28 / 0.91, newer TCK1 1.17 / 0.76, older BC1 1.77 / 1.00 (zone 1 / zone 2). K1 sits close to TCK1 and below BC1 for the conditions analysed.' },
              { th: 'ค่าเฉลี่ย O2 สองโซน: K1 8.7% / 8.2% (ต่าง 0.5 จุด) BC1 6.0% / 8.8% (ต่าง 2.8 จุด) ซึ่งบอกว่าควรตรวจ Balance หัวเผา/Air–Gas ของ BC1 ต่อ', en: 'Zone O2 means: K1 8.7% / 8.2% (0.5 points apart), BC1 6.0% / 8.8% (2.8 points apart), which suggests BC1’s burner / air–gas balance is worth investigating.' },
            ],
          },
          {
            text: {
              th: 'ข้อมูลชุดนี้ยังไม่ใช่การเทียบก่อน–หลังของ K1 จึงยังสรุปไม่ได้ว่า Needle Valve ทำให้ O2 นิ่งขึ้น',
              en: 'This is not a before-and-after comparison on K1, so it does not show that the needle valve made O2 more stable.',
            },
          },
        ],
      },
      {
        label: { th: 'ผลทางธุรกิจ', en: 'Business Impact' },
        content: [
          {
            items: [
              { th: 'ประมาณการแก๊สที่ประหยัดสะสมที่เตา K1: ~14,100 m³ (~669,000 บาท) เทียบกับ Baseline (ก.ย. 2024 – 2026)', en: 'Estimated accumulated saving at K1: ~14,100 m³ of gas (~669,000 THB) versus baseline (Sep 2024 – 2026).' },
              { th: 'เป็นตัวเลขประมาณการจาก Baseline ที่เลือก ไม่ใช่ตัวเลขที่ผ่านการตรวจสอบทางบัญชี', en: 'An estimate against the selected baseline, not an audited financial result.' },
            ],
          },
        ],
      },
      {
        label: { th: 'การขยายผล', en: 'Expansion' },
        content: [
          {
            heading: { th: 'TCK3 (ผลเบื้องต้น)', en: 'TCK3 (preliminary)' },
            items: [
              { th: 'ทดลองที่โซน Pre-heat 2 หัวเผา ตั้งแต่ 23 ก.ย. 2026', en: 'Trial on 2 pre-heat zone burners from 23 Sep 2026.' },
              { th: 'ติดตาม 19 วัน: เฉลี่ย 408.5 → 384.8 m³/วัน ลดลงประมาณ 5.8% ช่วงติดตามยังสั้น จึงยังไม่ใช่ผลระยะยาว', en: 'Preliminary 19-day monitoring showed about 5.8% lower average gas use (408.5 → 384.8 m³/day). The period is still short, so this is not a long-term result.' },
            ],
          },
          {
            heading: { th: 'ศักยภาพเมื่อขยายผล 8 เตา (ประมาณการ)', en: 'Potential 8-kiln rollout (estimated)' },
            items: [
              { th: 'ประมาณการลดแก๊ส: 1–3%', en: 'Estimated gas reduction: 1–3%' },
              { th: 'ประมาณการประหยัด: ~1.79 ล้านบาท/ปี', en: 'Estimated saving: ~1.79M THB/year' },
              { th: 'ประมาณการคืนทุนเฉลี่ย: ~23 วัน (128 หัวเผา งบ ~120,000 บาท อยู่ระหว่างสั่งซื้อ)', en: 'Estimated average payback: ~23 days (128 burners, ~120,000 THB budget, valves on order)' },
            ],
          },
        ],
      },
      {
        label: { th: 'ข้อจำกัดทางวิศวกรรม', en: 'Engineering Limitations' },
        content: [
          {
            items: [
              { th: 'การใช้แก๊สรายวันขึ้นกับปริมาณผลิต ชนิดสินค้า Loading อุณหภูมิและโปรไฟล์การเผา ชั่วโมงเดินเตา และวันหยุด/ซ่อม ผลที่ได้จึงไม่ได้มาจาก Needle Valve เพียงอย่างเดียว', en: 'Daily gas use depends on output, product mix, loading, firing temperature and profile, operating hours, and shutdown or maintenance days, so the result is not due to the needle valve alone.' },
              { th: 'วันที่ใช้แก๊สต่ำผิดปกติต้องหาสาเหตุก่อน ไม่ตัดข้อมูลทิ้งอัตโนมัติ', en: 'Abnormally low days need a known cause before any exclusion; outliers are not removed automatically.' },
              { th: 'ยังไม่มี Datasheet ของ Needle Valve ที่ติดตั้ง จึงยังไม่ได้ยืนยันการเลือกวาล์วด้วยการคำนวณ Cv', en: 'The installed needle valve’s datasheet is not yet available, so the selection has not been validated by a Cv calculation.' },
              { th: 'ไม่ใช่การทดลองแบบควบคุมในห้องปฏิบัติการ แต่เป็นข้อมูลการเดินเตาจริง', en: 'This is operating data from a production kiln, not a controlled laboratory experiment.' },
            ],
          },
        ],
      },
      {
        label: { th: 'ขั้นตอนถัดไป', en: 'Next Steps' },
        content: [
          {
            ordered: true,
            items: [
              { th: 'หายี่ห้อ รุ่น และ Datasheet ของ Needle Valve', en: 'Identify the needle valve’s maker and model and obtain its datasheet' },
              { th: 'ตรวจสอบ Cv/Kv แรงดันและอุณหภูมิที่ยอมรับได้ และลักษณะการไหล', en: 'Verify Cv/Kv, allowable pressure and temperature, and flow characteristic' },
              { th: 'วัดแรงดันก่อน–หลังวาล์ว เพื่อหา Pressure Drop', en: 'Measure upstream and downstream pressure to find the pressure drop' },
              { th: 'ประเมินความต้องการแก๊สของหัวเผา และเทียบการปรับระหว่าง Ball Valve กับ Needle Valve', en: 'Evaluate burner gas requirements and compare ball vs needle valve controllability' },
              { th: 'ปรับข้อมูลแก๊สตามปริมาณผลิต เช่น m³ แก๊ส / kg Ware', en: 'Normalise gas use against production, e.g. m³ gas per kg of ware' },
              { th: 'ติดตาม O2 ระยะยาว และขยายวิธีการไปยังเตาอื่น', en: 'Continue long-term O2 monitoring and replicate the method on other kilns' },
            ],
          },
        ],
      },
    ],
    metric: { th: 'ใช้แก๊สลดลง 8.0%', en: '8.0% lower gas use' },
    metricNote: {
      th: 'การใช้แก๊สเฉลี่ยปี 2025 เทียบกับ Baseline ก่อนการปรับปรุง (เตา K1)',
      en: '2025 average compared with the pre-improvement K1 baseline',
    },
    methods: ['Energy Saving', 'Burner Control', 'Lean', 'Data Analysis'],
    cover: { src: needleValve, photo: true, position: '50% 62%' },
    evidence: [
      {
        src: burnerK1O2Chart,
        alt: { th: 'Control Chart %O2 ของเตา K1 Firing Zone 2 (OP 50%) ปี 2026 พร้อมเส้น UCL, CL และ LCL', en: 'Control chart of kiln K1 Firing Zone 2 %O2 (OP 50%), 2026, with UCL, CL and LCL' },
        caption: { th: 'Control Chart %O2 เตา K1 Firing Zone 2 (OP 50%) ก.พ.–ก.ย. 2026: CL 8.25%, UCL 11.0%, LCL 5.5% (±3σ) ทุกจุดอยู่ในพิกัด O2 นิ่งทางสถิติในช่วงที่ติดตาม', en: 'Kiln K1 Firing Zone 2 %O2 control chart (OP 50%), Feb–Sep 2026: CL 8.25%, UCL 11.0%, LCL 5.5% (±3σ); every point within limits, so O2 was statistically stable over the period' },
      },
      {
        src: ballValve,
        alt: { th: 'ชุดท่อแก๊สหัวเผาที่ใช้ Ball Valve ด้ามเหลือง', en: 'A burner gas train with a yellow-handled ball valve' },
        caption: { th: 'ก่อน: Ball Valve เหมาะกับการเปิด–ปิด ใช้หรี่ปรับแก๊สละเอียดได้ยาก', en: 'Before: a ball valve suits isolation and is hard to use for fine throttling' },
        photo: true,
      },
      {
        src: needleValve,
        alt: { th: 'ชุดท่อแก๊สหัวเผาที่เปลี่ยนเป็น Needle Valve ปุ่มหมุนสีดำ', en: 'A burner gas train fitted with a black-knob needle valve' },
        caption: { th: 'หลัง: Needle Valve ปรับแก๊สเข้าหัวเผาได้ละเอียดขึ้น', en: 'After: a needle valve allows finer burner gas adjustment' },
        photo: true,
      },
      {
        src: burnerK1Trend,
        alt: { th: 'กราฟแท่งการใช้แก๊สเฉลี่ยของเตา K1 ก่อนและหลังปรับปรุง: 277, 268, 255 และ 257 m³/วัน', en: 'Bar chart of K1 average gas use before and after the improvement: 277, 268, 255 and 257 m³/day' },
        caption: { th: 'การใช้แก๊สเฉลี่ยเตา K1 ก่อน–หลังปรับปรุง (Main Gas Flow Meter): Baseline 277 → ปี 2025 255 (−8.0%) → ปี 2026 257 m³/วัน (−7.2%)', en: 'K1 average gas use before and after the improvement (main gas flow meter): baseline 277 → 255 in 2025 (−8.0%) → 257 m³/day in 2026 (−7.2%)' },
      },
      {
        src: burnerO2Compare,
        alt: { th: 'กราฟเทียบ %O2 ที่ OP 50% ของเตา TCK1, K1 และ BC1 แยก Firing Zone 1 และ Zone 2', en: 'Chart comparing %O2 at OP 50% for kilns TCK1, K1 and BC1, split by firing zones 1 and 2' },
        caption: { th: '%O2 ที่ OP 50% แยกโซน: K1 แกว่งใกล้เคียงเตารุ่นใหม่ TCK1 และน้อยกว่า BC1 ส่วนค่าเฉลี่ย 2 โซนของ BC1 ต่างกันมาก ควรตรวจสอบต่อ', en: '%O2 at OP 50% by zone: K1 varies about as much as the newer TCK1 and less than BC1, whose two zone means differ widely and merit investigation' },
      },
      {
        src: burnerChart,
        alt: { th: 'Control Chart การใช้แก๊สรายวันของเตา K1 ปี 2024–2026', en: 'Control chart of kiln K1 daily gas use, 2024–2026' },
        caption: { th: 'ข้อมูลการใช้แก๊สรายวันเตา K1 ปี 2024–2026 (ใช้ดูวันผิดปกติ เช่น วันหยุดหรือผลิตไม่เต็ม)', en: 'Kiln K1 daily gas use, 2024–2026 (used to spot abnormal days such as shutdowns or partial production)' },
      },
      {
        src: burnerTck3Chart,
        alt: { th: 'Control Chart การใช้แก๊สรายวันของเตา TCK3 ปี 2026', en: 'Control chart of kiln TCK3 daily gas use, 2026' },
        caption: { th: 'การใช้แก๊สรายวันเตา TCK3 หลังทดลอง (23 ก.ย. 2026): ผลเบื้องต้น 19 วัน', en: 'Kiln TCK3 daily gas use after the trial began (23 Sep 2026): preliminary, 19 days' },
      },
      {
        src: burnerFishbone,
        alt: { th: 'แผนภาพก้างปลา 4M1E สาเหตุการใช้แก๊สสูง', en: '4M1E fishbone diagram of high gas use' },
        caption: { th: '4M1E: สาเหตุที่เป็นไปได้ของการใช้แก๊สสูง (ระดมความคิด ยังไม่ได้ยืนยันทุกข้อ)', en: '4M1E: possible causes of high gas use (brainstormed, not all confirmed)' },
      },
    ],
  },
  {
    id: 'quality-dashboard',
    number: 'P-02',
    featured: true,
    status: 'live',
    title: { th: 'Dashboard ติดตามของเสีย', en: 'Sorting Defect Dashboard' },
    category: [
      { th: 'Quality', en: 'Quality' },
      { th: 'Data', en: 'Data' },
    ],
    summary: {
      th: 'ย้ายรายงานผลคัดเกรดจาก Excel มาเป็นหน้าเว็บที่ดูของเสียได้ทุกวัน',
      en: 'Moved sorting reports from Excel to a web page that shows defects every day.',
    },
    problem: {
      th: 'ข้อมูลคัดเกรดมีปริมาณมาก การ Refresh ใน Excel ใช้เวลานาน จึงติดตามของเสียรายวันได้ยาก',
      en: 'Sorting data was large, and refreshing it in Excel took too long to follow defects daily.',
    },
    analysis: [
      { th: 'กำหนดสิ่งที่ต้องรู้: ของเสียตัวไหนสูง เกิดกับงานกลุ่มใด และแนวโน้มรายเดือน', en: 'Defined what to answer: which defects are high, on which ware groups, and the monthly trend.' },
      { th: 'ใช้ % ของเสียเทียบจำนวนที่ผลิต แทนจำนวนชิ้น เพื่อเทียบข้ามเดือนได้', en: 'Used defect % of quantity processed rather than counts, so months compare fairly.' },
    ],
    action: [
      { th: 'เชื่อมฐานข้อมูลคัดเกรดแบบอ่านอย่างเดียว แสดง Pareto, Control Chart และ Trend', en: 'Connected to the sorting database read-only and showed Pareto, control chart and trend.' },
      { th: 'ส่งรายงานของเสียรายวันเข้า LINE อัตโนมัติ', en: 'Sent the daily defect report to LINE automatically.' },
    ],
    result: {
      th: 'ใช้งานบน Server ในโรงงานตั้งแต่ ก.พ. 2026 ไม่ต้อง Refresh Excel ด้วยมือ',
      en: 'Running on the factory server since Feb 2026, with no manual Excel refresh.',
    },
    learning: {
      th: 'เริ่มจากคำถามที่ต้องการคำตอบ แล้วค่อยเลือกกราฟ',
      en: 'Start from the question to answer, then choose the chart.',
    },
    methods: ['SQL', 'Pareto', 'Control chart', 'Web app'],
    cover: { src: sortingCover, photo: true },
    evidence: [
      {
        src: sortingOverview,
        alt: { th: 'หน้า Overview ของ Dashboard คัดเกรด แสดงยอดผลิต ของดี ของเสีย และแนวโน้มรายสัปดาห์', en: 'Sorting dashboard overview with processed, good, scrap and reject totals and the weekly trend' },
        caption: { th: 'หน้า Overview: ยอดคัดเกรดรายวัน/สัปดาห์ แนวโน้ม 7 วัน และของเสียแยกตามงาน (เบลอรหัสสินค้า)', en: 'Overview: daily/weekly sorting totals, 7-day trend and defects by job (product codes blurred)' },
      },
      {
        src: sortingPareto,
        alt: { th: 'Pareto ของเสียจาก Dashboard', en: 'Defect Pareto from the dashboard' },
        caption: { th: 'Pareto ของเสียจาก Dashboard ซึ่งชี้ให้เห็นว่าฟุตบิ่นเป็นอันดับ 1', en: 'Defect Pareto from the dashboard, with foot chipping on top' },
      },
      {
        src: sortingLineReport,
        alt: { th: 'รายงาน Daily Defects Monitor ที่ Bot ส่งเข้ากลุ่ม LINE พร้อมจำนวนรายการและตาราง', en: 'Daily Defects Monitor report posted by a bot to a LINE group, with item counts and a table' },
        caption: { th: 'รายงานของเสียรายวันส่งเข้ากลุ่ม LINE อัตโนมัติ เวลา 22.00 น.', en: 'Daily defect report posted to LINE automatically at 22:00' },
      },
    ],
  },
  {
    id: 'kiln-structure-heat-loss',
    number: 'P-03',
    featured: false,
    status: 'study',
    title: {
      th: 'โครงการปรับปรุงโครงสร้างเตาเพื่อลดการสูญเสียความร้อนและเพิ่มความน่าเชื่อถือ',
      en: 'Kiln Structure Reliability & Heat Loss Reduction',
    },
    category: [
      { th: 'Reliability', en: 'Reliability' },
      { th: 'Energy Efficiency', en: 'Energy Efficiency' },
    ],
    summary: {
      th: 'พัฒนาแนวทางตรวจผนังและหลังคาเตาตามสภาพ (Condition-based) ด้วยการตรวจโครงสร้างและ Thermal Imaging เพื่อหาจุดที่อาจสูญเสียความร้อนและการเสื่อมสภาพก่อนเกิดความเสียหายใหญ่',
      en: 'Developing a condition-based inspection approach for kiln walls and roofs, using structural inspection and thermal imaging to find potential heat-loss areas and deterioration before major failure.',
    },
    sections: [
      {
        label: { th: 'ปัญหา', en: 'Problem' },
        content: [
          {
            text: {
              th: 'เตาทำงานต่อเนื่องที่อุณหภูมิประมาณ 880–1,245°C ตามกระบวนการเผา และพลังงานเป็นต้นทุนหลักของแผนกเตา',
              en: 'Kilns run continuously at roughly 880–1,245°C depending on the firing process, and energy is a major cost in the kiln department.',
            },
          },
          {
            heading: { th: 'เมื่อโครงสร้างเตาเสื่อมสภาพ อาจเกิด', en: 'When the kiln structure deteriorates, possible consequences are' },
            items: [
              { th: 'สูญเสียความร้อนผ่านผนังและหลังคา และเกิดจุดร้อน (Hot spot) ที่ผิวนอก', en: 'Heat loss through walls and roof, and hot spots on the outer surface' },
              { th: 'อากาศรั่วผ่านช่องว่างของโครงสร้าง ทำให้บรรยากาศในเตาไม่เสถียร', en: 'Air leakage through structural gaps and an unstable kiln atmosphere' },
              { th: 'อาจใช้เชื้อเพลิง (LPG) มากขึ้น และงานซ่อมบำรุงเพิ่มขึ้น', en: 'Possibly higher fuel (LPG) use and more maintenance work' },
              { th: 'ความเสี่ยงต่อวัสดุทนไฟ/โครงสร้าง และอาจกระทบคุณภาพการเผา', en: 'Risk to refractory and structure, with a possible effect on firing quality' },
            ],
          },
          {
            text: {
              th: 'ปัจจุบันการเสื่อมสภาพส่วนใหญ่พบจากการตรวจด้วยตา หรือเมื่อความผิดปกติปรากฏชัดแล้ว',
              en: 'Today, deterioration is found mainly by visual inspection or once abnormalities are already obvious.',
            },
          },
        ],
      },
      {
        label: { th: 'การวิเคราะห์ทางวิศวกรรม', en: 'Engineering Analysis' },
        content: [
          {
            heading: { th: 'ลำดับเหตุและผล', en: 'Cause-and-effect chain' },
            flow: [
              { th: 'โครงสร้างเสื่อมสภาพ', en: 'Structural degradation' },
              { th: 'รอยร้าว / ช่องว่าง / ฉนวนเสื่อม', en: 'Cracks / gaps / insulation deterioration' },
              { th: 'ความร้อนรั่ว / อุณหภูมิผิวผิดปกติ / อากาศอาจรั่วเข้า', en: 'Heat leakage / abnormal surface temperature / possible air infiltration' },
              { th: 'อาจใช้พลังงานเพิ่มและกระบวนการไม่เสถียร', en: 'Potential rise in energy use and process instability' },
              { th: 'ต้นทุนการผลิตและซ่อมบำรุงสูงขึ้น', en: 'Higher operating and maintenance cost' },
            ],
          },
          {
            heading: { th: 'มุมมอง Lean: ความสูญเปล่าที่อาจเกี่ยวข้อง', en: 'Lean view: wastes that may be involved' },
            items: [
              { th: 'พลังงาน: ความร้อนที่รั่วออกอาจทำให้ใช้เชื้อเพลิงเกินจำเป็น', en: 'Energy: escaping heat may raise fuel use beyond what is needed' },
              { th: 'ของเสีย: อากาศรั่วอาจกระทบบรรยากาศในเตา ซึ่งยังต้องพิสูจน์ด้วยการตรวจสอบจริง', en: 'Defects: air leakage may affect the kiln atmosphere; this still needs real investigation to confirm' },
              { th: 'การรอคอย: การหยุดเตาเพื่อซ่อมแบบไม่คาดคิดทำให้การผลิตต้องรอ', en: 'Waiting: unplanned structural repairs or shutdowns hold up production' },
              { th: 'ค่าซ่อมบำรุง: ตรวจพบเร็วช่วยวางแผนซ่อมก่อนเสียหายรุนแรง', en: 'Maintenance cost: early detection allows repairs to be planned before damage gets worse' },
            ],
          },
        ],
      },
      {
        label: { th: 'แนวทางการปรับปรุง', en: 'Improvement Concept' },
        content: [
          {
            heading: { th: '1. ตรวจโครงสร้างเตา', en: '1. Kiln structure inspection' },
            text: {
              th: 'กำหนดเกณฑ์ตรวจผนัง หลังคา วัสดุทนไฟ รอยร้าว ช่องว่าง รอยต่อ ซีล และอุณหภูมิผิวที่ผิดปกติ',
              en: 'Set inspection criteria for walls, roof, refractory, cracks, gaps, joints, seals and abnormal surface temperature.',
            },
          },
          {
            heading: { th: '2. Thermal Imaging / Condition Monitoring', en: '2. Thermal imaging / condition monitoring' },
            text: {
              th: 'ศึกษาการใช้ Thermal Camera ตรวจผนังและหลังคาเป็นประจำ แทนการวัดเพียงครั้งเดียว',
              en: 'Study the use of a thermal camera for regular wall and roof checks, instead of one-off measurements.',
            },
          },
          {
            heading: { th: '3. ลดการรั่วของความร้อน / ปรับปรุงซีล', en: '3. Heat-loss reduction / sealing improvement' },
            text: {
              th: 'ประเมินวิธีซ่อมที่เหมาะสม เช่น อุดช่องว่างวัสดุทนไฟ ปรับปรุงซีลผนัง/หลังคา และซ่อมฉนวนที่เสื่อม โดยยังคงความปลอดภัยในการเดินเตา',
              en: 'Evaluate suitable repairs such as filling refractory gaps, improving wall/roof seals and repairing worn insulation, while keeping kiln operation safe.',
            },
          },
        ],
      },
      {
        label: { th: 'กลยุทธ์การตรวจด้วยภาพความร้อน', en: 'Thermal Inspection Strategy' },
        content: [
          {
            flow: [
              { th: 'วัด (Measure)', en: 'Measure' },
              { th: 'บันทึก (Record)', en: 'Record' },
              { th: 'ดูแนวโน้ม (Trend)', en: 'Trend' },
              { th: 'เปรียบเทียบ (Compare)', en: 'Compare' },
              { th: 'ตรวจหน้างาน (Inspect)', en: 'Inspect' },
              { th: 'ยืนยันสาเหตุ (Confirm)', en: 'Confirm' },
            ],
          },
          {
            heading: { th: 'ตัวแปรที่ต้องบันทึกเพื่อให้เทียบกันได้', en: 'Variables to record so readings are comparable' },
            items: [
              { th: 'อุณหภูมิในเตา โปรแกรมเผา สภาพการผลิต และปริมาณงานในเตา', en: 'Internal kiln temperature, firing program, production condition and kiln loading' },
              { th: 'จุดวัด ระยะและมุมกล้อง', en: 'Measurement location, distance and angle' },
              { th: 'ค่า Emissivity ของผิว และอุณหภูมิแวดล้อม/สะท้อน', en: 'Surface emissivity and ambient / reflected temperature' },
            ],
          },
          {
            text: {
              th: 'Hot spot ไม่ได้แปลว่าวัสดุทนไฟเสียหายเสมอไป ภาพความร้อนใช้คัดกรองเบื้องต้น และต้องตรวจหน้างานจริงเพื่อยืนยันสาเหตุ',
              en: 'A hot spot does not automatically mean refractory failure. Thermal images are a screening tool; physical inspection confirms the actual cause.',
            },
          },
        ],
      },
      {
        label: { th: 'กลยุทธ์การซ่อมบำรุง', en: 'Maintenance Strategy' },
        content: [
          {
            flow: [
              { th: 'Reactive: ซ่อมหลังพบความเสียหายหรือเสีย', en: 'Reactive: repair after visible damage or failure' },
              { th: 'Preventive / Condition-Based: ตรวจสภาพและซ่อมตามการเสื่อม', en: 'Preventive / condition-based: inspect condition and repair based on deterioration' },
              { th: 'Predictive (เป้าหมายระยะยาว): ใช้แนวโน้มความร้อนในอดีตวางแผนซ่อมก่อนเสียหาย', en: 'Predictive (long-term target): use historical thermal trends to plan repairs before failure' },
            ],
          },
          {
            text: {
              th: 'ปัจจุบันอยู่ระหว่างวางรากฐานไปสู่ Condition-Based Maintenance ยังไม่ใช่ระบบ Predictive Maintenance เต็มรูปแบบ',
              en: 'The current work lays the groundwork for condition-based maintenance; it is not yet a full predictive maintenance system.',
            },
          },
        ],
      },
      {
        label: { th: 'ประโยชน์ที่คาดหวัง (Expected Benefits)', en: 'Expected Benefits' },
        content: [
          {
            text: {
              th: 'อยู่ระหว่างประเมิน ยังไม่มีตัวเลขผลลัพธ์จนกว่าจะมีข้อมูลวัดจริงที่ยืนยันแล้ว',
              en: 'Under evaluation. No figures will be shown until validated measurement data is available.',
            },
            items: [
              { th: 'ลดการสูญเสียความร้อนที่ไม่จำเป็น และอาจลดการใช้ LPG', en: 'Less unnecessary heat loss and potentially lower LPG use' },
              { th: 'ตรวจพบการเสื่อมของโครงสร้างได้เร็วขึ้น ลดความเสี่ยงเสียหายแบบไม่คาดคิด', en: 'Earlier detection of structural deterioration and lower risk of unexpected failure' },
              { th: 'วางแผน PM ได้ดีขึ้น และมีมาตรฐานการตรวจตามสภาพ', en: 'Better PM planning and a condition-based inspection standard' },
              { th: 'เพิ่มความน่าเชื่อถือของเตา และลดค่าซ่อมบำรุงระยะยาว', en: 'Higher kiln reliability and lower long-term maintenance cost' },
            ],
          },
        ],
      },
      {
        label: { th: 'สถานะปัจจุบัน', en: 'Current Status' },
        content: [
          {
            heading: { th: 'ศึกษาและวางแผน (Planning / Study Phase)', en: 'Planning / Study Phase' },
            items: [
              { th: 'ศึกษากลไกการสูญเสียความร้อนของเตา', en: 'Studying kiln heat-loss mechanisms' },
              { th: 'กำหนดเกณฑ์ตรวจผนังและหลังคาเตา', en: 'Defining wall and roof inspection criteria' },
              { th: 'ประเมินวิธีตรวจด้วย Thermal Camera', en: 'Evaluating the thermal-camera inspection method' },
              { th: 'เลือกจุดตรวจที่เหมาะสม', en: 'Identifying suitable inspection locations' },
              { th: 'วางแผนการบันทึกและดูแนวโน้มข้อมูลความร้อน', en: 'Planning how thermal data is recorded and trended' },
              { th: 'ประเมินแนวทางซ่อมซีลและวัสดุทนไฟ', en: 'Evaluating sealing and refractory repair approaches' },
            ],
          },
        ],
      },
      {
        label: { th: 'ขั้นตอนถัดไป', en: 'Next Steps' },
        content: [
          {
            ordered: true,
            items: [
              { th: 'กำหนดจุดตรวจความร้อนมาตรฐาน', en: 'Define standard thermal inspection locations' },
              { th: 'เก็บข้อมูลอุณหภูมิผิวเป็น Baseline', en: 'Establish baseline surface-temperature data' },
              { th: 'บันทึกสภาพการเดินเตาระหว่างตรวจ', en: 'Record kiln operating conditions during inspection' },
              { th: 'ตรวจด้วยภาพความร้อนเป็นระยะ', en: 'Perform periodic thermal inspections' },
              { th: 'ระบุและติดตามแนวโน้ม Hot spot ที่ผิดปกติ', en: 'Identify and trend abnormal hot spots' },
              { th: 'ยืนยันจุดผิดปกติด้วยการตรวจหน้างาน', en: 'Verify abnormal areas by physical inspection' },
              { th: 'ซ่อม/อุดซีลเฉพาะจุดตามความเหมาะสม', en: 'Carry out targeted repair / sealing where appropriate' },
              { th: 'เปรียบเทียบสภาพก่อนและหลังซ่อม', en: 'Compare condition before and after maintenance' },
              { th: 'ประเมินผลด้านพลังงานและการซ่อมบำรุงจากข้อมูลจริง', en: 'Evaluate the actual energy and maintenance impact' },
              { th: 'จัดทำมาตรฐานการตรวจจากผลที่ยืนยันแล้ว', en: 'Turn validated results into a standard inspection procedure' },
            ],
          },
        ],
      },
      {
        label: { th: 'สิ่งที่ได้เรียนรู้', en: 'Engineering Learning' },
        content: [
          {
            text: {
              th: 'งานซ่อมบำรุงที่ดีไม่ใช่แค่ซ่อมหลังเสีย แต่ต้องเข้าใจการเสื่อมสภาพและตรวจพบให้เร็ว',
              en: 'Good maintenance is not just repairing after failure; it means understanding deterioration and catching it early.',
            },
            flow: [
              { th: 'เข้าใจการเสื่อมสภาพ', en: 'Understand deterioration' },
              { th: 'ตรวจพบเร็ว', en: 'Detect early' },
              { th: 'วิเคราะห์สภาพ', en: 'Analyse condition' },
              { th: 'วางแผนซ่อม', en: 'Plan maintenance' },
              { th: 'ยืนยันผล', en: 'Verify result' },
              { th: 'เพิ่มความน่าเชื่อถือและลดต้นทุน', en: 'Improve reliability and cost' },
            ],
          },
        ],
      },
    ],
    methods: ['Thermal Imaging', 'Heat Loss', 'Refractory', 'Reliability', 'CBM / PdM'],
    cover: { src: roofFibreCheck, photo: true, position: '50% 30%' },
    evidence: [
      {
        src: roofFibreCheck,
        alt: { th: 'ตรวจสภาพฉนวนเซรามิกไฟเบอร์ที่หลังคาเตาจากด้านใน', en: 'Inspecting the ceramic-fibre roof insulation from inside the kiln' },
        caption: { th: 'ตรวจสภาพฉนวนไฟเบอร์หลังคาเตาจากด้านใน', en: 'Checking the roof fibre insulation from inside the kiln' },
        photo: true,
      },
      {
        src: wallTempCriteria,
        alt: { th: 'ตารางเกณฑ์อุณหภูมิผิวผนังและหลังคาเตาตามอุณหภูมิเผา', en: 'Table of kiln wall and roof surface-temperature limits by firing temperature' },
        caption: { th: 'ร่างเกณฑ์อุณหภูมิผิวผนัง/หลังคา (อยู่ระหว่างประเมิน)', en: 'Draft wall and roof surface-temperature criteria (under evaluation)' },
      },
    ],
  },
  {
    id: 'kiln-car-maintenance',
    number: 'P-04',
    featured: false,
    status: 'monitoring',
    title: { th: 'ปรับปรุงงานซ่อม Kiln Car', en: 'Kiln Car Maintenance' },
    category: [
      { th: 'Maintenance', en: 'Maintenance' },
      { th: 'Lean A3', en: 'Lean A3' },
    ],
    summary: {
      th: 'ตั้งทีมซ่อม Kiln Car เอง และเปลี่ยนอิฐเป็น BX80 ที่อายุยาวกว่า 6 เท่า',
      en: 'Set up an in-house kiln car team and switched to BX80 bricks that last 6× longer.',
    },
    problem: [
      { th: 'Kiln Car เตาเคลือบเสื่อมเร็ว อิฐแตก เกิดช่องว่างและความร้อนรั่ว', en: 'Glaze-kiln cars degraded fast; cracked bricks left gaps that leaked heat.' },
      { th: 'ปี 2025 เกิด Breakdown จากรถเตาล้ม', en: 'In 2025 a kiln car collapsed and caused a breakdown.' },
    ],
    analysis: [
      { th: 'อิฐ SK34 ที่รอง Setter แตกภายใน ~1 เดือน', en: 'SK34 setter-support bricks cracked within ~1 month.' },
      { th: 'ไม่มีทีมซ่อมรถเตา', en: 'There was no kiln car repair team.' },
    ],
    action: [
      { th: 'ตั้งทีม Self-Maintenance 3 คน และซ่อมรถเตา', en: 'Formed a 3-person self-maintenance team to repair the kiln cars.' },
      { th: 'ทดลองอิฐ BX80 เทียบ SK34 ในตำแหน่งเดียวกัน', en: 'Trialled BX80 against SK34 bricks in the same position.' },
    ],
    result: [
      { th: 'จากการติดตาม PI ยังไม่พบ Breakdown ที่เตา Tunnel (5/2025 - 9/2026)', en: 'PI tracking has found no breakdowns at the tunnel kiln so far (5/2025 - 9/2026).' },
      { th: 'อายุอิฐ 1 → 6 เดือน ค่า Maintenance ลดลง ~551,696 บาท/ปี', en: 'Brick life 1 → 6 months, cutting maintenance cost by ~฿551,696/year.' },
    ],
    table: {
      title: { th: 'ผลทดลองอิฐ SK34 เทียบกับ BX80', en: 'SK34 vs BX80 brick trial' },
      columns: [
        { th: 'หัวข้อ', en: 'Item' },
        { th: 'SK34 (เดิม)', en: 'SK34 (old)' },
        { th: 'BX80 (ใหม่)', en: 'BX80 (new)' },
        { th: 'ส่วนต่าง', en: 'Difference' },
      ],
      rows: [
        [{ th: 'ราคาอิฐ (บาท/ก้อน)', en: 'Brick price (฿/brick)' }, { th: '59', en: '59' }, { th: '190', en: '190' }, { th: '+131', en: '+131' }],
        [{ th: 'อายุการใช้งาน (เดือน)', en: 'Service life (months)' }, { th: '1', en: '1' }, { th: '6', en: '6' }, { th: 'นานขึ้น 6 เท่า', en: '6× longer' }],
        [{ th: 'ความถี่การเปลี่ยนอิฐ (ครั้ง/ปี)', en: 'Replacements per year' }, { th: '12', en: '12' }, { th: '2', en: '2' }, { th: '−10 (−83%)', en: '−10 (−83%)' }],
        [{ th: 'ค่าอิฐ BC1 (บาท/ปี) 32 คัน × 16 ก้อน', en: 'BC1 brick cost (฿/year), 32 cars × 16 bricks' }, { th: '362,496', en: '362,496' }, { th: '194,560', en: '194,560' }, { th: '−167,936', en: '−167,936' }],
        [{ th: 'ค่าอิฐ DT Glost (บาท/ปี) 39 คัน × 30 ก้อน', en: 'DT Glost brick cost (฿/year), 39 cars × 30 bricks' }, { th: '828,360', en: '828,360' }, { th: '444,600', en: '444,600' }, { th: '−383,760', en: '−383,760' }],
        [{ th: 'รวม 2 เตา (บาท/ปี)', en: 'Both kilns (฿/year)' }, { th: '1,190,856', en: '1,190,856' }, { th: '639,160', en: '639,160' }, { th: '−551,696', en: '−551,696' }],
      ],
      note: { th: 'ทดลองที่เตา BC1 และ DT Glost ตำแหน่งอิฐรองรับขาตั้งแผ่นเดียวกัน: SK34 ม.ค.–ก.พ. 2026 (เกิดรอยร้าว), BX80 มี.ค.–ก.ย. 2026 (ยังใช้งานได้)', en: 'Trialled on kilns BC1 and DT Glost in the same setter-support position: SK34 Jan–Feb 2026 (cracked); BX80 Mar–Sep 2026 (still serviceable).' },
    },
    metric: { th: 'ค่า Maintenance ลดลง ~552,000 บาท/ปี', en: '~฿552,000/year lower maintenance cost' },
    learning: {
      th: 'การมีทีมซ่อมรถเตาโดยเฉพาะและแผนซ่อมรายคันที่ชัดเจน เปลี่ยนงานซ่อมฉุกเฉินให้เป็นงานที่ควบคุมได้',
      en: 'A dedicated kiln car repair team with a clear per-car plan turns emergency repairs into controlled work.',
    },
    methods: ['A3 / 4M1E', 'Self-maintenance', 'Refractory trial', 'Cost analysis'],
    cover: { src: kilnCarNew, photo: true },
    evidence: [
      {
        src: kilnCarRepairLog,
        alt: { th: 'ตารางแผนและผลการซ่อมรถเตา DT ทีละคัน 18 คัน', en: 'Plan-versus-actual log for repairing 18 DT kiln cars one by one' },
        caption: { th: 'บันทึกการซ่อมรถเตา DT 18 คัน: แผน 126 วัน ใช้จริง 122 วัน (เร็ว 8 / ตามแผน 5 / ช้า 5)', en: 'Repair log for 18 DT kiln cars: 126 days planned, 122 actual (8 early, 5 on time, 5 late)' },
      },
      {
        src: kilnCarOld,
        alt: { th: 'ฉนวนทนไฟของ Kiln Car แบบเดิมแตกร่อนรอบช่องเปิด', en: 'Cracked, crumbling refractory around an opening on an old-build kiln car' },
        caption: { th: 'ก่อน: การก่อรถแบบเดิมมีจุดที่ความร้อนรั่วลงด้านล่างได้', en: 'Before: the old build had points where heat could leak down' },
        photo: true,
      },
      {
        src: kilnCarNew,
        alt: { th: 'Kiln Car ที่ก่ออิฐทนไฟใหม่ด้วยอิฐฉนวนสีขาวและอิฐสีส้ม', en: 'A kiln car rebuilt with white insulating bricks and orange firebricks' },
        caption: { th: 'หลัง: ก่ออิฐ Kiln Car ใหม่โดยทีม Self-Maintenance', en: 'After: kiln car rebuilt by the self-maintenance team' },
        photo: true,
      },
    ],
  },
  {
    id: 'kiln-furniture-material',
    number: 'P-05',
    featured: false,
    status: 'trial',
    title: { th: 'แผ่นรองเผา SiSiC กับ SSiC', en: 'Kiln Furniture: SiSiC vs SSiC' },
    category: [
      { th: 'Materials', en: 'Materials' },
      { th: 'Lean A3', en: 'Lean A3' },
    ],
    summary: {
      th: 'ทดลองแผ่น SSiC ที่ไม่ต้องพ่น Alumina เพื่อลดฟุตบิ่นและงานดูแลแผ่น',
      en: 'Trialling uncoated SSiC batts to reduce foot chipping and batt maintenance.',
    },
    problem: [
      { th: 'ฟุตบิ่นเป็น Defect อันดับ 1 ของงาน WW (ม.ค.–ก.ย. 2026)', en: 'Foot chipping was the top whiteware defect (Jan–Sep 2026).' },
      { th: 'แผ่น SiSiC ต้องพ่น Alumina ซ้ำ 24 ครั้ง/ปี ค่าดูแล ~363,000 บาท/ปี', en: 'SiSiC batts need recoating 24 times a year, costing ~฿363,000/year.' },
    ],
    analysis: {
      th: 'Glaze ไหลถึง Foot แล้วติดกับแผ่น และชั้น Alumina หลุดเร็ว สมมติฐานคือ SSiC จะลดทั้งการติดและงานดูแล',
      en: 'Glaze runs to the foot and sticks, and the alumina layer wears fast. Hypothesis: SSiC reduces both sticking and upkeep.',
    },
    action: [
      { th: 'ทดลองแผ่น SSiC ที่เตา TCK1 และ TCK3', en: 'Trialled SSiC batts on kilns TCK1 and TCK3.' },
      { th: 'สั่ง SSiC 100 แผ่นเพื่อทดลองในการผลิตจริง', en: 'Ordered 100 SSiC batts for a production trial.' },
    ],
    result: [
      { th: 'ทดลอง 30 วันแรก ยังไม่พบฟุตบิ่น', en: 'First 30 days: no foot chipping found.' },
      { th: 'ประมาณการ: Maintenance cost save ~352,000 บาท/ปี คืนทุน ~0.5 ปี', en: 'Estimate: maintenance cost saving of ~฿352,000/year, payback ~0.5 year.' },
    ],
    learning: {
      th: 'ทดลองเล็กก่อนลงทุนเต็ม และทดลองทางเลือกที่ไม่ต้องลงทุนควบคู่กัน',
      en: 'Trial small before investing, and test the no-cost option alongside.',
    },
    methods: ['A3 / 4M1E', 'Hypothesis', 'Material trial'],
    cover: { src: ssicStack, photo: true, position: '50% 45%' },
    evidence: [
      {
        src: ssicWithWare,
        alt: { th: 'จานและถาดเซรามิกวางบนแผ่น SSiC ก่อนเข้าเตา', en: 'Ceramic plates and trays set on an SSiC batt before firing' },
        caption: { th: 'ชิ้นงานวางบนแผ่น SSiC ก่อนเข้าเตา', en: 'Ware set on an SSiC batt before firing' },
        photo: true,
      },
      {
        src: ssicStack,
        alt: { th: 'ชุดแผ่นรองเผา SSiC ซ้อนชั้นด้วยเสาบนแผ่นฐาน', en: 'A stacked SSiC kiln-furniture set on posts over a base batt' },
        caption: { th: 'ชุดแผ่นรองเผา SSiC ที่ใช้ทดลอง', en: 'The SSiC kiln-furniture set used in the trial' },
        photo: true,
      },
      {
        src: ssicLine,
        alt: { th: 'ชุดแผ่นรองเผา SSiC เรียงบนไลน์ลูกกลิ้งหน้าเตา', en: 'SSiC furniture sets lined up on the roller line at the kiln' },
        caption: { th: 'ทดลองแผ่น SSiC ในไลน์ผลิตจริง', en: 'SSiC batts on the production line' },
        photo: true,
      },
      {
        src: ssicShaped,
        alt: { th: 'แผ่น SiSiC ที่พ่นชั้น Alumina หลังเผา มีรอยวางชิ้นงาน', en: 'An alumina-coated SiSiC batt after firing, showing ware placement marks' },
        caption: { th: 'แผ่น SiSiC ที่ใช้ปัจจุบัน ต้องพ่น Alumina ก่อนใช้งาน', en: 'The SiSiC batt in current use, which needs an alumina coating before use' },
        photo: true,
      },
      {
        src: ssicFlat,
        alt: { th: 'แผ่น SSiC แบบเรียบหลังเผา มีรอยวงกลมจากฐานชิ้นงาน', en: 'A flat SSiC batt after firing, with ring marks from ware feet' },
        caption: { th: 'แผ่น SSiC แบบเรียบหลังใช้งาน', en: 'Flat SSiC batt after use' },
        photo: true,
      },
      {
        src: furnitureFishbone,
        alt: { th: 'แผนภาพก้างปลา 4M1E สาเหตุของ Defect ฟุตบิ่น', en: '4M1E fishbone diagram of foot-chipping causes' },
        caption: { th: 'วิเคราะห์สาเหตุฟุตบิ่นด้วย 4M1E', en: '4M1E analysis of foot chipping' },
      },
    ],
  },
  {
    id: 'plankiln-dashboard',
    number: 'P-06',
    featured: false,
    status: 'live',
    title: { th: 'PlanKiln: Dashboard งานเผา', en: 'PlanKiln: Kiln Planning Dashboard' },
    category: [
      { th: 'Kiln Operations', en: 'Kiln Operations' },
      { th: 'Data', en: 'Data' },
    ],
    summary: {
      th: 'รวม Stock สถานะเตา Shipment และแผนเคลือบ/ดีคอล ไว้ในหน้าเดียวสำหรับวางแผนงานเผา',
      en: 'Stock, kiln status, shipments and glaze/decal plans on one page for firing planning.',
    },
    problem: {
      th: 'ข้อมูลมาเป็นไฟล์ Excel หลายไฟล์ทางอีเมล ต้องรวมเองทุกครั้ง และแต่ละฝ่ายดูข้อมูลคนละชุด',
      en: 'Data arrived as many Excel files by email, combined by hand, and each team saw a different copy.',
    },
    analysis: {
      th: 'กำหนดว่าแผนกเตา ผู้วางแผน และหัวหน้า ต้องเห็นอะไร ทั้งบนคอมพิวเตอร์และมือถือ',
      en: 'Defined what kiln staff, planners and supervisors each need to see, on desktop and phone.',
    },
    action: [
      { th: 'ดึงรายงานจากอีเมลเข้าฐานข้อมูลอัตโนมัติทุก 5 นาที', en: 'Loaded emailed reports into a database automatically every 5 minutes.' },
      { th: 'หน้า Kiln, Shipment, แผนเคลือบ/ดีคอล และ Stock พร้อมสถานะกำหนดส่ง', en: 'Kiln, shipment, glaze/decal plan and stock pages with due-date status.' },
    ],
    result: [
      { th: 'ใช้งานจริงตั้งแต่ มี.ค. 2026 เปิดดูได้ทั้งคอมพิวเตอร์และมือถือ', en: 'In use since Mar 2026, on desktop and phone.' },
      { th: 'ข้อมูลอัปเดตเองทุก 5 นาที ไม่ต้องรวมไฟล์ Excel ด้วยมืออีก', en: 'Data refreshes every 5 minutes, with no more manual Excel merging.' },
      { th: 'แผนกเตา ผู้วางแผน และหัวหน้า ดู Stock, Shipment และแผนงานจากข้อมูลชุดเดียวกัน', en: 'Kiln staff, planners and supervisors see stock, shipments and plans from one data set.' },
      { th: 'เห็นงานที่เกินกำหนดหรือใกล้ถึงกำหนดส่ง (≤ 7 วัน) ได้ทันที', en: 'Overdue and due-within-7-days work is flagged at a glance.' },
    ],
    learning: {
      th: 'ทุกฝ่ายดูข้อมูลชุดเดียวกัน สำคัญกว่าจำนวนกราฟ',
      en: 'One shared set of data matters more than the number of charts.',
    },
    methods: ['Python', 'Supabase', 'Web app', 'Automation'],
    cover: { src: plankilnCover, photo: true },
    evidence: [
      {
        src: plankilnOverview,
        alt: { th: 'หน้า Overview ของ PlanKiln แสดง Stock แยกตามเตาและ Shipment Timeline', en: 'PlanKiln overview page with stock by kiln and the shipment timeline' },
        caption: { th: 'หน้า Overview: Stock รอเคลือบ/ซ่อมแยกตามเตา และ Shipment Timeline รายสัปดาห์', en: 'Overview: glaze/repair stock by kiln and the weekly shipment timeline' },
      },
    ],
  },
  {
    id: 'spare-part-stock',
    number: 'P-07',
    featured: false,
    status: 'live',
    title: { th: 'ระบบสต็อกอะไหล่เตาด้วย AppSheet', en: 'Kiln Spare Part Stock on AppSheet' },
    category: [
      { th: 'Maintenance', en: 'Maintenance' },
      { th: 'No-code', en: 'No-code' },
    ],
    summary: {
      th: 'แอปเบิก–เติมอะไหล่เตาบนมือถือ แจ้งเข้า LINE ทุกครั้งที่สต็อกเปลี่ยน',
      en: 'A phone app to draw and restock kiln spares, posting every stock change to LINE.',
    },
    problem: {
      th: 'อะไหล่สำคัญของเตา เช่น Thermocouple, บอร์ด PLC และ Flame Controller ถ้าหมดตอนเตาเสีย Breakdown จะนานขึ้น และหัวหน้าไม่รู้ว่าใครเบิกอะไรไปเมื่อไร',
      en: 'If critical kiln spares such as thermocouples, PLC boards or flame controllers run out during a failure, breakdowns last longer, and supervisors could not see who drew what, or when.',
    },
    analysis: {
      th: 'กำหนด Minimum Stock ของแต่ละรายการ และให้ทุกการเบิก/เติมถูกบันทึกและแจ้งทันที',
      en: 'Set a minimum stock per item, and make every draw or restock recorded and announced immediately.',
    },
    action: [
      { th: 'เก็บรายการอะไหล่ ยอดคงเหลือ และ Minimum Stock ใน Google Sheets', en: 'Kept the parts list, quantities and minimum stock in Google Sheets.' },
      { th: 'สร้างแอป AppSheet ให้ทีมเบิกและเติมสต็อกจากมือถือ', en: 'Built an AppSheet app so the team can draw and restock from a phone.' },
      { th: 'ตั้ง Bot 3 ตัว: แจ้งเติมสต็อก แจ้งเบิกใช้ และแจ้งเตือนสต็อกต่ำ เข้ากลุ่ม LINE หัวหน้าเตา', en: 'Set up three bots, for restock, usage and low-stock alerts, posting to the kiln supervisors’ LINE group.' },
    ],
    result: [
      { th: 'ทุกการเบิก/เติมแจ้งเข้า LINE ทันที พร้อมชื่ออะไหล่ จำนวน ยอดคงเหลือ และผู้ทำรายการ', en: 'Every draw or restock posts to LINE at once with the part, quantity, remaining stock and who did it.' },
      { th: 'ยอดคงเหลืออัปเดตใน Google Sheets เอง ดูได้จากมือถือ', en: 'Stock levels update in Google Sheets automatically and are visible on a phone.' },
      { th: 'มีแจ้งเตือนเมื่อรายการใดต่ำกว่า Minimum Stock', en: 'An alert fires when any item falls below its minimum stock.' },
    ],
    learning: {
      th: 'เครื่องมือ No-code แก้ปัญหาหน้างานได้เร็ว โดยไม่ต้องรอระบบใหญ่',
      en: 'No-code tools fix shop-floor problems quickly, without waiting for a big system.',
    },
    methods: ['AppSheet', 'Google Sheets', 'Bot automation', 'LINE alert', 'Minimum stock'],
    cover: { src: appsheetEditor, photo: true, position: '50% 0%' },
    evidence: [
      {
        src: appsheetEditor,
        alt: { th: 'หน้าแก้ไข AppSheet แสดง Bot 3 ตัว และตัวอย่างแอปสต็อกอะไหล่', en: 'AppSheet editor showing three bots and a preview of the spare-part stock app' },
        caption: { th: 'AppSheet: Bot แจ้งเติมสต็อก แจ้งเบิกใช้ และแจ้งเตือนสต็อกต่ำ', en: 'AppSheet: restock, usage and low-stock alert bots' },
      },
      {
        src: appsheetSheet,
        alt: { th: 'Google Sheets รายการอะไหล่เตา พร้อมจำนวนคงเหลือและ Minimum Stock', en: 'Google Sheets list of kiln spares with quantity and minimum stock' },
        caption: { th: 'ฐานข้อมูลอะไหล่ใน Google Sheets พร้อม Minimum Stock แต่ละรายการ', en: 'Spare-part data in Google Sheets with a minimum stock per item' },
      },
      {
        src: appsheetApp,
        alt: { th: 'หน้าแอปบนมือถือแสดงรายการอะไหล่และจำนวนคงเหลือ', en: 'Phone app screen listing spare parts and quantities' },
        caption: { th: 'หน้าแอปบนมือถือ: ดูสต็อกและกด + เพื่อเบิก/เติม', en: 'Phone app: view stock and tap + to draw or restock' },
        photo: true,
      },
      {
        src: appsheetLine,
        alt: { th: 'ข้อความแจ้งเตือนการเบิกและเติมอะไหล่ในกลุ่ม LINE', en: 'LINE group messages announcing spare-part draws and restocks' },
        caption: { th: 'แจ้งเตือนเข้ากลุ่ม LINE (เบลออีเมลผู้ทำรายการ)', en: 'LINE alerts (operator emails blurred)' },
        photo: true,
      },
    ],
  },
]

export const getProject = (id: string | undefined) => projects.find((p) => p.id === id)
