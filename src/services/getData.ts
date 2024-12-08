import food from "../assets/foods.json"

export const getFoods = (type:number) => {
    return food.filter((food) => food.type === type)
}