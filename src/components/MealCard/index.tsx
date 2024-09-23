import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, MealHour, Title, HealthyIndicator } from "./styles";

import { MEALDATA } from "@screens/Home";

type Props = TouchableOpacityProps & {
    key: string;
    mealInfo: MEALDATA;
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
                {mealInfo.title}
            </Title>

            <HealthyIndicator
                isHealthy={mealInfo.isHealthy}
            />
        </Container>
    )
}