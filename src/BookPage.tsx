import Menu from "./Menu.tsx";
import Title from "./Title.tsx";
import BookDetails from "./BookDetails.tsx";
import Banner from "./Banner.tsx";
import RecommendedBooks from "./RecommendedBooks.tsx";
import Footer from "./Footer.tsx";

export default function BookPage() {
  return <div className="flex flex-col gap-16 w-full bg-[#111315]">
    <div className="px-8 pt-5">
      <Menu/>
      <Title page="Kutubxona" title="Shaxmatdagi qobiliyatliringizga qayta baxo bering"/>
      <div className="flex flex-row gap-6 pt-5">
        <BookDetails/>
        <div className="flex flex-col gap-6 w-81.5 shrink-0">
          <Banner/>
          <RecommendedBooks/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>;
}

