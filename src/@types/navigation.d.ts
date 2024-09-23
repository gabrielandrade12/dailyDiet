import { MEALDATA } from "@screens/Home";

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
                mealsData: MEALDATA;
            };
            editMeal: undefined;
        }
    }
}