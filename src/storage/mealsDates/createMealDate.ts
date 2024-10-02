import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALSDATES_COLLECTION } from "@storage/storageConfig";
import { getAllMealDates } from "./getAllMealDates";

export async function createMealDate(mealDate: string){
    try {
        const storedDates = await getAllMealDates();

        const dateExist = storedDates.includes(mealDate);

        if(dateExist){
            return
        }

        const dates = JSON.stringify([...storedDates, mealDate]);

        await AsyncStorage.setItem(MEALSDATES_COLLECTION, dates);
    } catch (error) {
        throw error;
    }
}