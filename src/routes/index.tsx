import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './routesType';

import { Home } from '../screens/Home';
import { Statistics } from '../screens/Statistics';
import { CreateMeal } from '../screens/CreateMeal';
import { CreateMealFeedback } from '../screens/CreateMealFeedback';
import { MealInfo } from '../screens/MealInfo';
import { EditMeal } from '../screens/EditMeal';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Statistics' component={Statistics}/>
            <Stack.Screen name='CreateMeal' component={CreateMeal}/>
            <Stack.Screen name='CreateMealFeedback' component={CreateMealFeedback}/>
            <Stack.Screen name='MealInfo' component={MealInfo}/>
            <Stack.Screen name='EditMeal' component={EditMeal}/>
        </Stack.Navigator>
    )
}