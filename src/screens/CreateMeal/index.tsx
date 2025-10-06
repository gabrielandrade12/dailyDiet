import { useState } from "react"
import { View, Text } from "react-native"
import { BackIconContainer, Container, CreateMealContainer,
        Header, HealthyButton, IsInsideDietIndicator, NotHealthyButton, Title } from "./styles"

import { ArrowLeftIcon } from "phosphor-react-native"
import { theme } from "../../theme"

import { InputForm } from "../../components/InputForm"
import { Button } from "../../components/Button"
import { useRootNavigation } from "../../hooks/navigation"

export function CreateMeal(){
    const [ isHealthy, setIsHealthy ] = useState(true)
    
    const navigation = useRootNavigation()

    return(
        <Container>
            <Header>
                <BackIconContainer onPress={() => navigation.goBack()}>
                    <ArrowLeftIcon color={theme.colors.gray[200]}/>
                </BackIconContainer>
                <Title>Nova refeição</Title>
            </Header>

            <CreateMealContainer>
                <InputForm title="Nome"/>
                <InputForm style={{ minHeight: 120, textAlignVertical: 'top', textAlign: 'left' }} title="Descrição" multiline/>

                <View style={{ flexDirection: 'row', gap: 12 }}>
                    <View style={{ flex: 1}}>
                        <InputForm title="Data"/>
                    </View>

                    <View style={{ flex: 1}}>
                        <InputForm title="Hora"/>
                    </View>
                </View>

                <View style={{ flex: 1}}>
                    <Text style={{ 
                        fontFamily: theme.fontFamily.bold,
                        fontSize: 14,
                        color: theme.colors.gray[200],
                        marginBottom: 8
                    }}>
                        Está dentro da dieta?
                    </Text>

                    <View style={{ flexDirection: 'row', gap: 12 }}>
                        <HealthyButton isHealthy={isHealthy} onPress={() => setIsHealthy(true)}>
                            <IsInsideDietIndicator isHealthy={true}/>
                            <Text style={{
                                fontFamily: theme.fontFamily.bold,
                                fontSize: 14,
                                color: theme.colors.gray[100]
                            }}>
                                Sim
                            </Text>
                        </HealthyButton>

                        <NotHealthyButton isHealthy={isHealthy} onPress={() => setIsHealthy(false)}>
                            <IsInsideDietIndicator isHealthy={false}/>
                            <Text style={{
                                fontFamily: theme.fontFamily.bold,
                                fontSize: 14,
                                color: theme.colors.gray[100]
                            }}>
                                Não
                            </Text>
                        </NotHealthyButton>
                    </View>
                </View>

                <Button 
                    buttonType="Black" 
                    title="Cadastrar refeição"
                    onPress={() => navigation.navigate('CreateMealFeedback')}
                />
            </CreateMealContainer>
        </Container>
    )
}