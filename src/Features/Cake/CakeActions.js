import { Buy_Cake, Ice_Cream } from "./CakeTypes"

export const buycake = (number=1) => ({
    type: Buy_Cake,
    payload: number
})

export const icecream = () => ({
    type: Ice_Cream
})