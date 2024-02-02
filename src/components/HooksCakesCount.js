import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buycake } from "../Features/Cake/CakeActions";

const HooksCakesCount = () => {
    const [number, setNumbre] = useState(0)
    const cakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();
    console.log(cakes)
  return (
    <div>
      <h3>Number Of Cakes -{cakes}</h3>
      <input type="number" value={number} onChange={e => setNumbre(e.target.value)}/>
      <button onClick={() => dispatch(buycake(number))}>Buy Cake</button>
    </div>
  );
};

export default HooksCakesCount;
