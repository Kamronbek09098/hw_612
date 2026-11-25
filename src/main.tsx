import {createRoot} from "react-dom/client";
import './styles.css';
import CartPage from "./CartPage.tsx";

const root = createRoot(document.getElementById('root')!);
root.render(<CartPage/>);
