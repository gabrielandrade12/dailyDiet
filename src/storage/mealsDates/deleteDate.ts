import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALSDATES_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "@storage/meals/getAllMeals";
import { getAllMealDates } from "./getAllMealDates";

export async function deleteDate(){
    try {
        const storedMeals = await getAllMeals();
        const storedDates = await getAllMealDates();

        const arrayDates = storedMeals.map(meal => meal.date);

        const filteredDates = storedDates.filter(date => arrayDates.includes(date));

        await AsyncStorage.setItem(MEALSDATES_COLLECTION, JSON.stringify(filteredDates));
    } catch (error) {
        throw error;
    }
}
