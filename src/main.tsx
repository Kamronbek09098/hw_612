import {createRoot} from "react-dom/client";
import './styles.css';
import BookPage from "./BookPage.tsx";

const root = createRoot(document.getElementById('root')!);
root.render(<BookPage/>);
