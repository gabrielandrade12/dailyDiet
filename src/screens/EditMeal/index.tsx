import { useState } from "react"
import { Alert, TouchableOpacity, View } from "react-native"
import Animated, {FadeInUp} from "react-native-reanimated"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Container, BackIcon, Title, Container2, InputTitle, Input, DateInput, HorizontalContainer, InsideDietButton,
        HealthyIndicator, InsideDietButtonTitle
 } from "./styles"
 
 import { Button } from "@components/Button"

 import { editMealById } from "@storage/meals/editMealById"
 import { createMealDate } from "@storage/mealsDates/createMealDate"
 import { MealStorageDTO } from "@storage/meals/MealsStorageDTO"

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

    async function handleEditMeal(){
        const data_now = new Date()

        if(mealName.trim().length == 0 || date.trim().length == 0 || hour.trim().length == 0){
            return Alert.alert('Campos obrigatórios', 'Os campos "Nome", "Data" e "Hora" são obrigatórios.')
        }

        if(parseInt(date.substring(6, 10)) < data_now.getFullYear() || parseInt(date.substring(3,5)) < (data_now.getMonth()+1) && parseInt(date.substring(6, 10)) == data_now.getFullYear() || parseInt(date.substring(0,2)) < data_now.getDate() && parseInt(date.substring(3, 5)) == (data_now.getMonth()+1)){
            return Alert.alert('Data Inválida', 'Essa data é do passado.')
        }

        if(parseInt(hour.substring(0,2)) > 23 || parseInt(hour.substring(3,5)) > 59){
            return Alert.alert('Horário inválido', 'Certifique-se que o horário está entre 00:00 e 23:59')
        }

        const mealsInfo: MealStorageDTO = {
            id: mealsData.id,
            name: mealName,
            description,
            date,
            hour,
            isHealthy: healthy
        }

        try {
            await createMealDate(date);
            await editMealById(mealsInfo)
            handleFeedBackMeal()
        } catch (error) {
            console.log(error)
            Alert.alert('Falha ao editar', 'Não foi possível editar a refeição')
        }
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
                    onPress={handleEditMeal}
                />
            </Container2>
        </AnimatedContainer>
    )
}