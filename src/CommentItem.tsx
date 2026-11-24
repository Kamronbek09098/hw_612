import {useState} from "react";

export default function CommentItem({name, avatar, date, rating, text}) {
  const [isOpen, setIsOpen] = useState(false);
  let filledStars = Array.from({length: rating});
  let emptyStars = Array.from({length: 5 - rating});

  return <div className="relative flex flex-col gap-3 py-4">
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center gap-3">
        <img className="w-10 h-10 rounded-3xl object-cover" src={avatar} alt="image"/>
        <div className="flex flex-col">
          <h3 className="text-[#F7F9FA] text-[16px] font-medium">{name}</h3>
          <div className="flex flex-row items-center gap-3">
            <p className="text-[#F7F9FA]/64 text-[13px]">{date}</p>
            <div className="flex flex-row gap-0.5">
              {filledStars.map((_, index) => <img key={index} className="w-4 h-4" src="/star-filled.svg" alt="icon"/>)}
              {emptyStars.map((_, index) => <img key={index} className="w-4 h-4" src="/star-empty.svg" alt="icon"/>)}
            </div>
          </div>
        </div>
      </div>

      <button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-[#F7F9FA]/8" onClick={() => setIsOpen(!isOpen)}>
        {isOpen && <img className="w-5 h-5" src="/dots-blue.svg" alt="icon"/>}
        {!isOpen && <img className="w-5 h-5" src="/dots.svg" alt="icon"/>}
      </button>
    </div>

    {isOpen && <button className="absolute right-0 top-13 flex flex-row items-center gap-2 px-3 py-2 bg-[#1A1D1F] border border-[#F7F9FA]/8 rounded-lg text-[#F7F9FA] text-[14px] hover:bg-[#25292C]">
      <img className="w-5 h-5" src="/warning.svg" alt="icon"/>
      Shikoyat qilish
    </button>}

    <p className="text-[#F7F9FA] text-[14px]">{text}</p>
  </div>;
}
