import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { datas } from "./useeffect";
// import { data } from "../src/useeffect";

const Another = () => {
  const loc = useLocation();
  const data = loc.state?.data || [];
  const countvalue = useContext(datas); 

  return (
    <>
      <h3>Another page file show</h3>
      <h3>Data index 2 value: {data[2]}</h3>

      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <p>Context Value: {countvalue}</p>
    </>
  );
};

export default Another;
