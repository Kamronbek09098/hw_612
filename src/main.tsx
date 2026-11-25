import {createRoot} from "react-dom/client";
import './styles.css';
import CartPage from "./CartPage.tsx";
import BookPage from "./BookPage.tsx";
import CoursePage from "./CoursePage.tsx";

const root = createRoot(document.getElementById('root')!);
root.render(<> 
<CartPage/> <br/><br/><br/><br/><br/><br/><br/><br/><br/> 
<BookPage/> <br/><br/><br/><br/><br/><br/><br/><br/><br/>
<CoursePage/> <br/><br/><br/><br/><br/><br/><br/><br/><br/>
</>);

