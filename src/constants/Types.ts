export interface cuisineProps{
    id:number,
    country:string;
}

export interface dishesProps{
    name:string,
    rating:Number,
    description:string,
    equipments:string[],
    image:string,
    id:number
}
export interface PopularDishesProps{
    name:string;
    image:string;
    id:Number;
}
export interface applianceProps{
    name:string;
    image:string;
}
export interface ingredientDetails{
    name:string;
    quantity:string;
}
export interface IngredientProps{
    vegetables:ingredientDetails[];
    spices:ingredientDetails[];
    appliances:applianceProps[]
}
export interface selectedDishProps{
    name:string;
    id:Number;
    timeToPrepare:string;
    ingredients:IngredientProps;
}