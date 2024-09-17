import { TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Container, BackIcon, Title, Container2, InputTitle, Input, HorizontalContainer, InsideDietButton,
        HealthyIndicator, InsideDietButtonTitle
 } from "./styles"

import { Button } from "@components/Button"

export function CreateMeal(){
    const navigation = useNavigation();

    function handleGoHome(){
        navigation.navigate('home');
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

                        <Input
                        />
                    </View>

                    <View style={{ flex: 1, marginLeft: 20 }}>
                        <InputTitle>
                            Hora
                        </InputTitle>

                        <Input/>
                    </View>
                </HorizontalContainer>

                <InputTitle>
                    Está dentro da dieta?
                </InputTitle>

                <HorizontalContainer style={{ flex: 1}}>
                    <InsideDietButton>
                        <HealthyIndicator isHealthy/>

                        <InsideDietButtonTitle>
                            Sim
                        </InsideDietButtonTitle>
                    </InsideDietButton>

                    <InsideDietButton style={{ marginLeft: 8 }}>
                        <HealthyIndicator isHealthy={false}/>

                        <InsideDietButtonTitle>
                            Não
                        </InsideDietButtonTitle>
                    </InsideDietButton>
                </HorizontalContainer>

                <Button
                    title="Cadastrar refeição"
                />
            </Container2>
        </Container>
    )
}