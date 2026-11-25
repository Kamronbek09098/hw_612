import Menu from "./Menu.tsx";
import Title from "./Title.tsx";
import Banner from "./Banner.tsx";
import Footer from "./Footer.tsx";
import BookCartDetails from "./BookCartDetails.tsx";
import CartTotal from "./CartTotal.tsx";

export default function CartPage() {
  return <div className="flex flex-col gap-16 w-full bg-[#111315]">
    <div className="px-8 pt-5">
      <Menu/>
      <Title page="Savatcha"/>
      <div className="flex flex-row gap-6 pt-5">
        <div className="flex flex-col gap-5 flex-1">
          <BookCartDetails title="Bobbi Fisher shaxmatni o'ynashni o'rgataning va barchani" image="/book1.png" price="155 000.00" oldPrice="205 000.00" count={5}/>
          <BookCartDetails title="Shaxmatchilar klubi nishoni" image="/book2.png" price="2 000 000.00" oldPrice="2 500 000.00"/>
          <BookCartDetails title="“Shox”lar uchun shox donasi ko'rinishidagi nishon" image="/book3.png" price="525 250.00" oldPrice="600 000.00" count={20}/>
        </div>
        <div className="flex flex-col gap-6 w-81.5 shrink-0">
          <CartTotal/>
          <Banner/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>;
}
