import { useState } from "react";
import { TouchableOpacity, View, Modal, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, BackIcon, Title, Container2, MealName, MealText, DateHourText,
    IsInsideDietContainer, HealthyIndicator, HealthyIndicatorText, ModalContainer,
    BlurBackground, ModalView, ModalTitle } from "./styles";
    
import { Button } from "@components/Button";
import { MealStorageDTO } from "@storage/meals/MealsStorageDTO";
import { deleteMeal } from "@storage/meals/deleteMeal";

type RouteParams = {
    mealsData: MealStorageDTO;
}

export function MealInfo(){
    const [ modalVisible, setModalVisible ] = useState(false)
    const navigation = useNavigation();

    const route = useRoute();
    const { mealsData } = route.params as RouteParams;

    function goHome(){
        navigation.navigate('home');
    }

    function goEditMeal(){
        navigation.navigate('editMeal')
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
        <Container isHealthy={mealsData!.isHealthy}>
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
        </Container>
    )
}