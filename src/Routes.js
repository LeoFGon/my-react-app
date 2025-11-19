import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Assistir from "./Assistir";

function AppRouters() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/assistir" element={<Assistir />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouters;