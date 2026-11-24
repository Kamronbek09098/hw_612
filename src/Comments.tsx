import CommentItem from "./CommentItem.tsx";

export default function Comments() {
  let text = "2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi. 26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi.";

  return <div className="flex flex-col items-center gap-4">
    <h2 className="w-full text-[#F7F9FA] text-[22px] font-bold">Kurs haqida izohlar</h2>

    <div className="w-full bg-[#1A1D1F] rounded-lg border border-[#F7F9FA]/8 px-5">
      <CommentItem name="Jasurbek Narzullayev" avatar="/odam.jpg" date="7 Sentyabr 2022 y. 19:52" rating={4} text={text}/>
      <div className="w-full h-px bg-[#F7F9FA]/8"></div>
      <CommentItem name="Muhammadamin Domlahonov" avatar="/odam.jpg" date="7 Sentyabr 2022 y. 19:52" rating={3} text={text}/>
      <div className="w-full h-px bg-[#F7F9FA]/8"></div>
      <CommentItem name="Shoxruh Baxtiyarov" avatar="/odam.jpg" date="7 Sentyabr 2022 y. 19:52" rating={5} text={text}/>
      <div className="w-full h-px bg-[#F7F9FA]/8"></div>
      <CommentItem name="Jasurbek Narzullayev" avatar="/odam.jpg" date="7 Sentyabr 2022 y. 19:52" rating={4} text={text}/>
    </div>

    <button className="h-10 px-8 rounded-lg bg-[#2A2D30] hover:bg-[#33373A] text-[#F7F9FA] text-[14px] font-medium">Barcha izohlar</button>
  </div>;
}
