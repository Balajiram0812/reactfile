import { createContext, useEffect, useState } from "react"
import Another from "./another";

export const datas=createContext();
const UseEff = () => {


    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(count)
    }, [count])



    return (
        <>
            <h3>{count}</h3>
            <button type="button" onClick={() => setCount(count + 1)}>coount increse</button>
            <datas.Provider value={count}>
                <Another />
            </datas.Provider>
        </>
    )
}
export default UseEff;