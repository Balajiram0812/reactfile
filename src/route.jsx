import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import  Another  from "./another"
import UseEff from "./useeffect"
import Session from "./sessio"


 export const Routedata=()=>{
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/another" element={<Another/>}/>
            <Route path="/useEff" element={<UseEff/>}/>
            <Route path="/session" element={<Session/>}/>
        </Routes>
        
        
        </BrowserRouter>
        </>
    )
}