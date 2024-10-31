import { useState } from "react"
import { TouchableOpacity, View } from "react-native"
import Animated, {FadeInUp} from "react-native-reanimated"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Container, BackIcon, Title, Container2, InputTitle, Input, DateInput, HorizontalContainer, InsideDietButton,
        HealthyIndicator, InsideDietButtonTitle
 } from "./styles"

import { MealStorageDTO } from "@storage/meals/MealsStorageDTO"
 
import { Button } from "@components/Button"

type RouteParams = {
    mealsData: MealStorageDTO
}

const AnimatedContainer = Animated.createAnimatedComponent(Container)

export function EditMeal(){
    const route = useRoute();
    const { mealsData } = route.params as RouteParams;

    const [ mealName, setMealName ] = useState(mealsData.name);
    const [ description, setDescription ] = useState(mealsData.description);
    const [ date, setDate ] = useState(mealsData.date);
    const [ hour, setHour ] = useState(mealsData.hour);
    const [ healthy, setHealthy ] = useState<boolean>(mealsData.isHealthy);

    const navigation = useNavigation();

    function handleGoHome(){
        navigation.navigate('home');
    }

    function handleFeedBackMeal(){
        navigation.navigate('feedBackCreateMeal', { isHealthy: healthy })
    }

    return(
        <AnimatedContainer entering={FadeInUp.duration(400).delay(200)}>
            <TouchableOpacity onPress={handleGoHome}>
                <BackIcon
                    name="arrowleft"
                />
            </TouchableOpacity>

            <Title>
                Editar refeição
            </Title>

            <Container2>
                <InputTitle>
                    Nome
                </InputTitle>

                <Input
                    onChangeText={setMealName}
                    value={mealName}
                />

                <InputTitle>
                    Descrição
                </InputTitle>

                <Input
                    style={{ minHeight: 100, maxHeight: 100 }}
                    multiline
                    scrollEnabled
                    textAlignVertical="top"
                    onChangeText={setDescription}
                    value={description}
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
                    title="Salvar alterações"
                    onPress={handleFeedBackMeal}
                />
            </Container2>
        </AnimatedContainer>
    )
}