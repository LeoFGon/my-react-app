import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Assistir from "./Pages/Assistir";


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