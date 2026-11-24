import Menu from "./Menu.tsx";
import Title from "./Title.tsx";
import Banner from "./Banner.tsx";
import Footer from "./Footer.tsx";
import BookCartDetails from "./BookCartDetails.tsx";

export default function CartPage() {
  return <div className="flex flex-col gap-16 w-full bg-[#111315]">
    <div className="px-8 pt-5">
      <Menu/>
      <Title page="Savatcha"/>
      <div className="flex flex-row gap-6 pt-5">
        <BookCartDetails/>
        <div className="flex flex-col gap-6 w-81.5 shrink-0">
          <Banner/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>;
}

