export default function LessonCard({title, duration, icon}) {
  return <div className="flex flex-col gap-2">
    <div className="relative flex items-center justify-center w-full h-30 rounded-lg border border-[#F7F9FA]/16 bg-[#1E2A33] overflow-hidden">
      <p className="text-[64px]">{icon}</p>
      <div className="absolute left-3 bottom-3 flex flex-row items-center gap-1.5">
        <img className="w-4 h-4" src="/play.svg" alt="icon"/>
        <p className="text-[#F7F9FA]/72 text-[12px]">{duration}</p>
      </div>
    </div>
    <p className="text-[#F7F9FA] text-[15px] font-medium">{title}</p>
  </div>;
}
