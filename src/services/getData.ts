import food from "../assets/foods.json"

export const getFoods = (type:number) => {
    return food.filter((food) => food.type === type)
}

export const getFoodsByIds = (ids:number[]) => {
    return food.filter((food) => ids.includes(food.id))
}
