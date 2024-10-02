import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALSDATES_COLLECTION } from "@storage/storageConfig";

export async function getAllMealDates(){
    try {
        const storage = await AsyncStorage.getItem(MEALSDATES_COLLECTION);

        const mealDates: string[] = storage ? JSON.parse(storage) : [];
        
        return mealDates; 
    } catch (error) {
        throw error;
    }
}