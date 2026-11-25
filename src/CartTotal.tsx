export default function CartTotal() {
  return <div className="flex flex-col w-81.5 bg-[#1A1D1F] rounded-xl border border-[#1F272A]">
    <div className="flex flex-col gap-3 p-4 text-[#F7F9FA] text-[14px]">
      <div className="flex flex-row justify-between">
        <p>To'lov narxi:</p>
        <p>1 560 000.00 UZS</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>Chegirma:</p>
        <p>156 000.00 UZS (10%)</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>Kupon:</p>
        <p>0 UZS</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>Yetkazib berish</p>
        <p>0 UZS</p>
      </div>
      <div className="flex flex-row justify-between items-center pt-2">
        <p className="text-[18px] font-medium">Jami:</p>
        <p className="text-[20px] font-bold">1 404 000.00 UZS</p>
      </div>
    </div>

    <div className="w-full h-px bg-[#1F272A]"></div>

    <div className="flex flex-col gap-2 p-4">
      <p className="text-[#F7F9FA] text-[14px] font-medium">Kupon</p>
      <input className="h-11 rounded-lg border border-[#2C2F31] bg-[#111315] px-3 text-[#F7F9FA] text-[14px] outline-none placeholder:text-[#6D7274]" placeholder="Kupondagi kodni kiriting"/>
      <button className="flex flex-row items-center justify-center gap-2.5 h-12.5 mt-2 rounded-lg bg-[#1C92E0] hover:bg-[#1A84CB] text-[#F7F9FA] text-[20px] font-medium">
        <img className="w-6 h-6" src="/Component 1.svg" alt="icon"/>
        Rasmiylashtirish
      </button>
    </div>
  </div>;
}
