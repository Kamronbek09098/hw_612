import TopBookItem from "./TopBookItem.tsx";

export default function RecommendedBooks() {
  return <div className="flex flex-col gap-5 w-81.5 bg-[#1A1D1F] rounded-xl border border-[#1F272A] p-4">
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-[#F7F9FA] text-[20px] font-medium">Tavfsiya</h1>
      <button className="flex flex-row items-center gap-1 text-[#9DA1A3]/60 text-[16px]">
        Barchasi
        <img className="w-5 h-5" src="/chevron-forward-outline 1-1.svg" alt="icon"/>
      </button>
    </div>
    <div className="flex flex-col gap-3">
      <TopBookItem author="J.Silman" title="Bobbi Fisher shaxmatni o'ynashni o'rgataning" image="/book4.png"/>
      <div className="w-full h-px bg-[#1F272A]"></div>
      <TopBookItem author="J.Silman" title="Mening tizimim" image="/book5.png"/>
      <div className="w-full h-px bg-[#1F272A]"></div>
      <TopBookItem author="J.Silman" title="Zurixdagi shaxmat musobaqasi" image="/book6.png"/>
      <div className="w-full h-px bg-[#1F272A]"></div>
      <TopBookItem author="J.Silman" title="Mening esdaqolarlik o'yinlarim" image="/book7.png"/>
    </div>
  </div>;
}
