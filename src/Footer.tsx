export default function Footer() {
  return <div className="w-full bg-[#1A1D1F]">
    <div className="flex flex-col items-center gap-4 pt-7 pb-6">
      <img className="w-29 h-10" src="/Group 3.svg" alt="logo"/>
      <div className="flex flex-row gap-6 text-[#F7F9FA] text-[14px]">
        <p>Biz haqimizda</p>
        <p>Cookie fayllari siyosati</p>
        <p>Foydalanish qoidalari</p>
        <p>Cookie fayllari siyosati</p>
      </div>
      <div className="flex flex-row items-center gap-3">
        <div className="flex items-center justify-center w-5 h-5">
          <img className="w-4 h-4" src="/instagram.svg" alt="icon"/>
        </div>
        <div className="flex items-center justify-center w-5 h-5">
          <img className="w-4.5 h-4" src="/telegram.svg" alt="icon"/>
        </div>
        <div className="flex items-center justify-center w-5 h-5">
          <img className="w-4.5 h-4" src="/youtube.svg" alt="icon"/>
        </div>
        <div className="flex items-center justify-center w-5 h-5">
          <img className="w-4 h-3.5" src="/twitter.svg" alt="icon"/>
        </div>
        <div className="flex items-center justify-center w-5 h-5">
          <img className="w-4 h-4" src="/facebook.svg" alt="icon"/>
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-between items-center h-12.5 px-8 border-t border-[#F7F9FA]/10 text-[#F7F9FA] text-[16px]">
      <p>© UzChess. All rights reserved.</p>
      <img className="w-8 h-4.5" src="/Group 1.svg" alt="icon"/>
      <p>Foydalanish qoidalari</p>
    </div>
  </div>;
}
