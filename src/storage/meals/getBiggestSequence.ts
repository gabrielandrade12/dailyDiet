import { getAllMeals } from "./getAllMeals";

export async function getBiggestSequence(){
    try {
        const storedMeals = await getAllMeals()

        let biggestSequence = 0
        let currentSequence = 0

        for (let i = 0; i < storedMeals.length; i++) {
            if(storedMeals[i].isHealthy){
                currentSequence++
                if(currentSequence > biggestSequence){
                    biggestSequence = currentSequence
                }
            } else {
                currentSequence = 0
            }
        }

        return biggestSequence
    } catch (error) {
        throw error
    }
}