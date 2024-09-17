import { useState } from "react"
import { TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Container, BackIcon, Title, Container2, InputTitle, Input, DateInput, HorizontalContainer, InsideDietButton,
        HealthyIndicator, InsideDietButtonTitle
 } from "./styles"

import { Button } from "@components/Button"

export function CreateMeal(){
    const [ date, setDate ] = useState('');
    const [ hour, setHour ] = useState('');
    const [ healthy, setHealthy ] = useState<boolean>(true);

    const navigation = useNavigation();

    function handleGoHome(){
        navigation.navigate('home');
    }

    function handleFeedBackMeal(){
        navigation.navigate('feedBackCreateMeal')
    }

    return(
        <Container>
            <TouchableOpacity onPress={handleGoHome}>
                <BackIcon
                    name="arrowleft"
                />
            </TouchableOpacity>

            <Title>
                Nova refeição
            </Title>

            <Container2>
                <InputTitle>
                    Nome
                </InputTitle>

                <Input/>

                <InputTitle>
                    Descrição
                </InputTitle>

                <Input
                    style={{ minHeight: 100, maxHeight: 100 }}
                    multiline
                    scrollEnabled
                    textAlignVertical="top"
                />

                <HorizontalContainer>
                    <View style={{ flex: 1 }}>
                        <InputTitle>
                            Data
                        </InputTitle>

                        <DateInput
                            type="datetime"
                            options={{
                                format: 'DD/MM/YYYY'
                            }}
                            value={date}
                            onChangeText={setDate}
                        />
                    </View>

                    <View style={{ flex: 1, marginLeft: 20 }}>
                        <InputTitle>
                            Hora
                        </InputTitle>

                        <DateInput
                            type="datetime"
                            options={{
                                format: 'HH:mm'
                            }}
                            value={hour}
                            onChangeText={setHour}
                        />
                    </View>
                </HorizontalContainer>

                <InputTitle>
                    Está dentro da dieta?
                </InputTitle>

                <HorizontalContainer style={{ flex: 1}}>
                    <InsideDietButton 
                        onPress={() => setHealthy(true)} 
                        isActive={healthy} 
                        buttonColor="GREEN"         
                    >
                        <HealthyIndicator isHealthy/>

                        <InsideDietButtonTitle>
                            Sim
                        </InsideDietButtonTitle>
                    </InsideDietButton>

                    <InsideDietButton 
                        style={{ marginLeft: 8 }}
                        onPress={() => setHealthy(false)}
                        isActive={!healthy}
                        buttonColor="RED"
                    >
                        <HealthyIndicator isHealthy={false}/>

                        <InsideDietButtonTitle>
                            Não
                        </InsideDietButtonTitle>
                    </InsideDietButton>
                </HorizontalContainer>

                <Button
                    title="Cadastrar refeição"
                    onPress={handleFeedBackMeal}
                />
            </Container2>
        </Container>
    )
}