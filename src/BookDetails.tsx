import {useState} from "react";
import BookInfoItem from "./BookInfoItem.tsx";

export default function BookDetails() {
  const [inCart, setInCart] = useState(false);

  return <div className="flex flex-col gap-6 flex-1 h-133.75 bg-[#1A1D1F] rounded-xl border border-[#1F272A] p-8 pb-2.5">
    <div className="flex flex-row gap-5">
      <div className="relative flex items-center justify-center w-49 h-68 bg-[#13181C] rounded-sm border border-[#F7F9FA]/8 overflow-hidden">
        <img className="absolute top-0 left-0 w-full h-full object-cover blur-xl" src="/book1.png" alt="image"/>
        <div className="absolute top-0 left-0 w-full h-full bg-[#172329]/30"></div>
        <img className="relative w-29 h-44 object-cover" src="/book1.png" alt="image"/>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="w-150 text-[#F7F9FA] text-[28px] font-bold leading-[1.3]">Shaxmatdagi qobiliyatliringizga qayta baxo bering</h1>

        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row items-center gap-3">
            <img className="w-7 h-7" src="/cash-outline 1.svg" alt="icon"/>
            <p className="text-[#F7F9FA] text-[20px] font-bold">55 000.00 UZS</p>
          </div>
          <p className="text-[#F7F9FA]/64 text-[14px] line-through decoration-[#DC2D2D]/80">160 000.00 uzs</p>
        </div>

        <div className="flex flex-row pt-1.5">
          <BookInfoItem icon="/Chess Symbols.svg" label="Daraja" value="Boshlangich"/>
          <BookInfoItem icon="/icons8-user 1.svg" label="Muallif" value="Jeremy Silman"/>
          <BookInfoItem icon="/person-circle-outline 2.svg" label="Sahifa soni" value="231"/>
          <BookInfoItem icon="/person-circle-outline 2-1.svg" label="Chop etilgan sana" value="2002"/>
        </div>

        <div className="flex flex-row gap-4 pt-1">
          <button className={`flex flex-row items-center gap-2.5 h-12.5 px-10 rounded-lg text-[#F7F9FA] text-[20px] font-medium leading-[1.3] ${inCart ? "bg-[#2C3134] hover:bg-[#353B3E]" : "bg-[#1C92E0] hover:bg-[#1A84CB]"}`} onClick={() => setInCart(!inCart)}>
            <img className="w-6 h-6" src={inCart ? "/cart_add.svg" : "/Component 1.svg"} alt="icon"/>
            {inCart ? "Savatchada" : "Savatchaga"}
          </button>
          <button className="flex items-center justify-center w-12.5 h-12.5 rounded-lg border border-[#F7F9FA]/30 bg-[#F7F9FA]/10">
            <img className="w-6 h-6" src="/heart-outline.svg" alt="icon"/>
          </button>
          <button className="flex items-center justify-center w-12.5 h-12.5 rounded-lg border border-[#F7F9FA]/30 bg-[#F7F9FA]/10">
            <img className="w-6 h-6" src="/share-1.svg" alt="icon"/>
          </button>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-3">
      <h2 className="text-[#F7F9FA] text-[24px] font-bold leading-[1.3]">Kitob haqida</h2>
      <p className="text-[#C2C4C5] text-[16px] leading-[1.4]">
        Shaxmatni qanday qayta baholash kerak, uzoq vaqtdan beri zamonaviy klassika hisoblangan. Ushbu 4-nashr
        Silmanning nomutanosiblik haqidagi innovatsion kontseptsiyasini butunlay yangi darajaga olib chiqadi. 1400 dan
        2100 gacha bo'lgan reyting oralig'idagi o'yinchilar va shaxmat bo'yicha tayyor o'quv dasturini qidirayotgan
        o'qituvchilar uchun mo'ljallangan muallif o'quvchini nomutanosiblik asoslari orqali olib boradigan, barcha
        nomutanosibliklarning har bir tafsiloti o'zlashtirilishini ta'minlaydigan aqlni kengaytiruvchi sayohatni baham
        ko'radi. va shaxmat o'yinchisini/sevuvchisini har doim xohlagan, lekin erisha olishiga ishonmagan narsasi bilan
        qoldiradi: usta darajasidagi pozitsion poydevor.
      </p>
    </div>
  </div>;
}
