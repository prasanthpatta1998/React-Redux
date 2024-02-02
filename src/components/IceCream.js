import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { icecream } from '../Features/Cake/CakeActions'

const IceCream = () => {
    const iceCream = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
  return (
    <div>
      <h3>Number Of Cakes -{iceCream}</h3>
      <button onClick={() => dispatch(icecream())}>Buy Cake</button>
    </div>
  )
}

export default IceCream