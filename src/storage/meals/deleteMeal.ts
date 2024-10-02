import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function deleteMeal(mealName: string){
    try {
        const storedMeals = await getAllMeals();

        const filterMeals = storedMeals.filter(meal => meal.name != mealName)

        await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(filterMeals));
    } catch (error) {
        throw error;
    }
}