import { PressableProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, MealHour, Title, HealthyIndicator } from "./styles";

import { MealStorageDTO } from "@storage/meals/MealsStorageDTO";

type Props = PressableProps & {
    mealInfo: MealStorageDTO;
}

export function MealCard({ mealInfo, ...rest }: Props){
    const navigation = useNavigation();

    function goToMealInfo(){
        navigation.navigate('mealInfo', { mealsData: mealInfo });
    }

    return(
        <Container onPress={goToMealInfo} {...rest}>
            <MealHour>
                {mealInfo.hour}
            </MealHour>
            
          
            <Title>
                {mealInfo.name}
            </Title>

            <HealthyIndicator
                isHealthy={mealInfo.isHealthy}
            />
        </Container>
    )
}