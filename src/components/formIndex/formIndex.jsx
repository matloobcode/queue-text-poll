import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../login/login";
import { Register } from "../register/register";

export function FormIndex(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}