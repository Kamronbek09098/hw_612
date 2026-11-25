import Menu from "./Menu.tsx";
import Title from "./Title.tsx";
import CourseHeader from "./CourseHeader.tsx";
import CourseSectionItem from "./CourseSectionItem.tsx";
import Banner from "./Banner.tsx";
import Comments from "./Comments.tsx";
import Footer from "./Footer.tsx";

export default function CoursePage() {
  return <div className="flex flex-col gap-16 w-full bg-[#111315]">
    <div className="px-8 pt-5">
      <Menu/>
      <Title page="O'rganish" title="Shaxmat donalari bilan tanishuv"/>
      <CourseHeader/>
      <div className="flex flex-row gap-6 pt-10">
        <div className="flex flex-col gap-10 w-256.5">
          <CourseSectionItem/>
          <Comments/>
        </div>
        <div className="w-81.5">
          <Banner/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>;
}
