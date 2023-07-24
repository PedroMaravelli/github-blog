import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { IssuesPublished } from "../pages/IssuesPublished";

export function Routers (){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/publication/:id" element={<IssuesPublished/>}></Route>

            
           


        </Routes>
    )
}