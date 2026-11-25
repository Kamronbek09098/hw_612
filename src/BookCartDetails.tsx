import {useState} from "react";

export default function BookCartDetails({title, image, price, oldPrice, count = 1}) {
  const [amount, setAmount] = useState(count);

  return <div className="relative flex flex-row items-center gap-5 w-full h-45 bg-[#1A1D1F] rounded-xl border border-[#1F272A] px-4">
    <button className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-[#111315] text-[#F7F9FA] text-[16px] leading-none">×</button>

    <div className="relative flex items-center justify-center w-36 h-36 shrink-0 bg-[#13181C] rounded-sm border border-[#F7F9FA]/8 overflow-hidden">
      <img className="absolute top-0 left-0 w-full h-full object-cover blur-xl" src={image} alt="image"/>
      <div className="absolute top-0 left-0 w-full h-full bg-[#172329]/30"></div>
      <img className="relative w-25 h-32 object-cover" src={image} alt="image"/>
    </div>

    <div className="flex flex-col justify-between h-36 flex-1">
      <h1 className="w-130 text-[#F7F9FA] text-[20px] font-bold leading-[1.3]">{title}</h1>
      <div className="flex flex-col">
        <p className="text-[#82CC27] text-[24px] font-bold">{price} uzs</p>
        <p className="text-[#F7F9FA]/64 text-[14px] line-through decoration-[#DC2D2D]/80">{oldPrice} uzs</p>
      </div>
    </div>

    <div className="flex flex-row items-center gap-3 self-end pb-6">
      <button className={`flex items-center justify-center w-10 h-10 rounded-lg text-[#F7F9FA] text-[22px] ${amount > 1 ? "bg-[#DC2D2D] hover:bg-[#C42626]" : "bg-[#2C3134]"}`} onClick={() => amount > 1 && setAmount(amount - 1)}>−</button>
      <p className="flex items-center justify-center w-21 h-10 rounded-lg border border-[#F7F9FA]/10 bg-[#111315] text-[#F7F9FA] text-[16px]">{amount}</p>
      <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#82CC27] hover:bg-[#74B823] text-[#F7F9FA] text-[22px]" onClick={() => setAmount(amount + 1)}>+</button>
    </div>
  </div>;
}
