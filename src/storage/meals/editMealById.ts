import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "@storage/meals/getAllMeals";
import { MealStorageDTO } from "./MealsStorageDTO";
import { MEALS_COLLECTION } from "@storage/storageConfig";

export async function editMealById(mealsData: MealStorageDTO){
    try {
        const storedMeals = await getAllMeals()

        console.log(`Antes: ${JSON.stringify(storedMeals)}`)

        let index = storedMeals.findIndex(meal => meal.id === mealsData.id)

        if(index !== -1){
            storedMeals[index] = mealsData
        }

        console.log(`Depois: ${JSON.stringify(storedMeals)}`)

        AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storedMeals))
    } catch (error) {
        throw error
    }
}