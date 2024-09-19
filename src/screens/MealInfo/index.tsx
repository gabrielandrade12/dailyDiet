import { useState } from "react";
import { TouchableOpacity, View, Modal } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, BackIcon, Title, Container2, MealName, MealText, DateHourText,
    IsInsideDietContainer, HealthyIndicator, HealthyIndicatorText, ModalContainer,
    BlurBackground, ModalView, ModalTitle } from "./styles";
    
import { Button } from "@components/Button";

type RouteParams = {
    isHealthy?: boolean;
}

export function MealInfo(){
    const [ modalVisible, setModalVisible ] = useState(false)
    const navigation = useNavigation();

    const route = useRoute();
    const { isHealthy } = route.params as RouteParams;

    function goHome(){
        navigation.navigate('home');
    }

    function goEditMeal(){
        navigation.navigate('editMeal')
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
                    onPress={goEditMeal}
                />

                <Button
                    title="Excluir refeição"
                    hasIcon
                    iconName="trash"
                    type="SECONDARY"
                    onPress={() => setModalVisible(true)}
                />

                <Modal
                    animationType="fade"
                    transparent
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <ModalContainer>
                        <BlurBackground/>
                        <ModalView>
                            <ModalTitle>
                                Deseja realmente excluir o registro da refeição?
                            </ModalTitle>

                            <View style={{  flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Button
                                    title="Cancelar"
                                    type="SECONDARY"
                                    onPress={() => setModalVisible(false)}
                                    style={{ flex: 1, marginRight: 12}}
                                />
                                <Button
                                    title="Sim, excluir"
                                    onPress={() => setModalVisible(false)}
                                    style={{ flex: 1 }}
                                />
                            </View>
                        </ModalView>
                    </ModalContainer>
                </Modal>
            </Container2>
        </Container>
    )
}