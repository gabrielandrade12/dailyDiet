import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Statistics } from '@screens/Statistics';
import { CreateMeal } from '@screens/CreateMeal';
import { FeedBackCreateMeal } from '@screens/FeedBackCreateMeal';
import { MealInfo } from '@screens/MealInfo';
import { EditMeal } from '@screens/EditMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='home'
                component={Home}
            />

            <Screen
                name='statistics'
                component={Statistics}
            />

            <Screen
                name='createMeal'
                component={CreateMeal}
            />

            <Screen
                name='feedBackCreateMeal'
                component={FeedBackCreateMeal}
            />

            <Screen
                name='mealInfo'
                component={MealInfo}
            />

            <Screen
                name='editMeal'
                component={EditMeal}
            />
        </Navigator>
    )
}