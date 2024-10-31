import { TouchableOpacity, View, Alert } from "react-native";
import Animated, {FadeInUp, FadeOutDown} from "react-native-reanimated";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, BackIcon, Title, Container2, MealName, MealText, DateHourText,
    IsInsideDietContainer, HealthyIndicator, HealthyIndicatorText} from "./styles";
    
import { Button } from "@components/Button";
import { MealStorageDTO } from "@storage/meals/MealsStorageDTO";
import { deleteMeal } from "@storage/meals/deleteMeal";

type RouteParams = {
    mealsData: MealStorageDTO;
}

const AnimatedContainer = Animated.createAnimatedComponent(Container)

export function MealInfo(){
    const navigation = useNavigation();

    const route = useRoute();
    const { mealsData } = route.params as RouteParams;

    function goHome(){
        navigation.navigate('home');
    }

    function goEditMeal(){
        navigation.navigate('editMeal', { mealsData })
    }

    async function removeMeal(){
        try {
            await deleteMeal(mealsData.name);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleDeleteMeal(){
        Alert.alert('Deseja remover essa refeição?', '', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => {
                    removeMeal();
                    goHome();
                }
            }
        ])
    }

    return(
        <AnimatedContainer isHealthy={mealsData!.isHealthy} entering={FadeInUp.duration(400).delay(200)}>
            <TouchableOpacity onPress={goHome}>
                <BackIcon
                    name="arrowleft"
                />
            </TouchableOpacity>

            <Title>
                Refeição
            </Title>

            <Container2>
                <MealName>
                    {mealsData.name.toUpperCase()}
                </MealName>

                <MealText>
                    {mealsData.description}
                </MealText>

                <DateHourText>
                    Data e Hora
                </DateHourText>

                <MealText>
                    {mealsData.date} às {mealsData.hour}
                </MealText>

                <View style={{ flex: 1}}>
                    <IsInsideDietContainer>
                        <HealthyIndicator isHealthy={mealsData!.isHealthy}/>

                        {mealsData.isHealthy ? 
                            <HealthyIndicatorText>dentro da dieta</HealthyIndicatorText>
                            : 
                            <HealthyIndicatorText>fora da dieta</HealthyIndicatorText>
                        }
                    </IsInsideDietContainer>
                </View>

                <Button
                    title="Editar refeição"
                    hasIcon
                    iconName="pencil"
                    style={{ marginBottom: 9 }}
                    onPress={goEditMeal}
                />

                <Button
                    title="Excluir refeição"
                    hasIcon
                    iconName="trash"
                    type="SECONDARY"
                    onPress={handleDeleteMeal}
                />
            </Container2>
        </AnimatedContainer>
    )
}