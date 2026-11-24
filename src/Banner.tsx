export default function Banner() {
  return <div className="relative flex flex-col justify-between w-81.5 h-48 bg-[#0B4789] rounded-lg border border-[#1F272A] overflow-hidden px-4 pt-4 pb-3.5">
    <div className="absolute top-3 left-63 w-32 h-6 bg-[#FFD600] rotate-z-45"></div>

    <div className="flex flex-row items-center gap-2">
      <img className="w-6 h-6" src="/yoshlar.svg" alt="icon"/>
      <div className="flex flex-col text-[#F7F9FA] text-[10px] font-semibold leading-[1.1]">
        <p>Yoshlar</p>
        <p>portali</p>
      </div>
    </div>

    <div className="flex flex-col text-[#F7F9FA] text-[22px] font-bold leading-[1.1]">
      <div className="flex flex-row gap-1.5">
        <p>Aynan</p>
        <p className="text-[#FFD600]">siz</p>
        <p>uchun qanday</p>
      </div>
      <p>imtiyozlar borligini</p>
      <p>bilib oling</p>
    </div>

    <button className="flex flex-row items-center justify-center gap-3 w-37 h-10 rounded-lg bg-[#1C92E0] hover:bg-[#42A5F5] text-[#F7F9FA] text-[18px]">
      Batafsil
      <img className="w-5 h-5" src="/arrow-circle.svg" alt="icon"/>
    </button>
  </div>;
}
