import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home'
import { Contact } from '../pages/Contact'
import { Project } from "../pages/Projescts";
import { Navbar } from "../components/Navbar";

export const AppRoutes = () =>(
    <BrowserRouter>
            <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project/>} />
        </Routes>
    </BrowserRouter>
)