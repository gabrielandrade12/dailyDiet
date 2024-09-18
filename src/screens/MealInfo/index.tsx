import { TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, BackIcon, Title, Container2, MealName, MealText, DateHourText,
    IsInsideDietContainer, HealthyIndicator, HealthyIndicatorText } from "./styles";
    
import { Button } from "@components/Button";

type RouteParams = {
    isHealthy?: boolean;
}

export function MealInfo(){
    const navigation = useNavigation();

    const route = useRoute();
    const { isHealthy } = route.params as RouteParams;

    function goHome(){
        navigation.navigate('home');
    }

    return(
        <Container isHealthy={isHealthy}>
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
                    Sanduíche
                </MealName>

                <MealText>
                    Sanduíche de pão integral com atum e salada de alface e tomate
                </MealText>

                <DateHourText>
                    Data e Hora
                </DateHourText>

                <MealText>
                    12/08/2022 às 16:00
                </MealText>

                <View style={{ flex: 1}}>
                    <IsInsideDietContainer>
                        <HealthyIndicator/>

                        <HealthyIndicatorText>
                            dentro da dieta
                        </HealthyIndicatorText>
                    </IsInsideDietContainer>
                </View>

                <Button
                    title="Editar refeição"
                    hasIcon
                    iconName="pencil"
                    style={{ marginBottom: 9 }}
                />

                <Button
                    title="Excluir refeição"
                    hasIcon
                    iconName="trash"
                    type="SECONDARY"
                />
            </Container2>
        </Container>
    )
}