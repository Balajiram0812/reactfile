import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { Another } from "./another"

 export const Routedata=()=>{
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/ano" element={<Another/>}/>
        </Routes>
        
        
        </BrowserRouter>
        </>
    )
}