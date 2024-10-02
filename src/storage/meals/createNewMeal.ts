import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealsStorageDTO";
import { getAllMeals } from "./getAllMeals";

export async function createNewMeal(newMeal: MealStorageDTO){
    try{
        const storedMeals = await getAllMeals();

        const meals = JSON.stringify([...storedMeals, newMeal]);

        await AsyncStorage.setItem(MEALS_COLLECTION, meals);
    } catch( error ){
        throw error;
    };
};