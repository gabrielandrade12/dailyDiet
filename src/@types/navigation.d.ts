import { MealStorageDTO } from "@storage/meals/MealsStorageDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statistics: undefined
            createMeal: undefined;
            feedBackCreateMeal: {
                isHealthy: boolean;
            };
            mealInfo: {
                mealsData: MealStorageDTO;
            };
            editMeal:  {
                mealsData: MealStorageDTO;
            };
        }
    }
}