import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION, MEALSDATES_COLLECTION } from "./storageConfig";

export async function deleteAllMealsAndDates(){
    try {
        await AsyncStorage.setItem(MEALS_COLLECTION, '');
        await AsyncStorage.setItem(MEALSDATES_COLLECTION, '');
    } catch (error) {
        throw error;
    }
}