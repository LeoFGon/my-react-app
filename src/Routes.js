import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

function AppRouters() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouters;