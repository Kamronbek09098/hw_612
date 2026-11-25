import Lesson from "./Lesson.tsx";
import {useState} from "react";

export default function CourseSectionItem() {
  const [isOpen, setIsOpen] = useState(true);

  return <div className="select-none">
    <div className="flex flex-row justify-between items-center h-16 px-5" onClick={() => setIsOpen(!isOpen)}>
      <h1 className="text-[24px] text-[#F7F9FA] font-bold">1. Asosiy donalar</h1>
      {isOpen && <img src="/arrow-up.svg" alt="icon"/>}
      {!isOpen && <img className="rotate-z-180" src="/arrow-up.svg" alt="icon"/>}
    </div>
    {isOpen && <div className="grid grid-cols-3 gap-6 w-full bg-[#F7F9FA]/3 p-5">
      <Lesson/>
      <Lesson/>
      <Lesson/>
      <Lesson/>
      <Lesson/>
      <Lesson/>
      <Lesson/>
    </div>}
  </div>;
}
