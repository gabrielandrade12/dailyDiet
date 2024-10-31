import { useState } from "react"
import { TouchableOpacity, View, Alert } from "react-native"
import Animated, {FadeInUp} from "react-native-reanimated"
import { useNavigation } from "@react-navigation/native"
import { Container, BackIcon, Title, Container2, InputTitle, Input, DateInput, HorizontalContainer, InsideDietButton,
        HealthyIndicator, InsideDietButtonTitle
 } from "./styles"

import { Button } from "@components/Button"
import { createMealDate } from "@storage/mealsDates/createMealDate"
import { createNewMeal } from "@storage/meals/createNewMeal"
import { MealStorageDTO } from "@storage/meals/MealsStorageDTO"

const AnimatedContainer = Animated.createAnimatedComponent(Container)

export function CreateMeal(){
    const [ mealName, setMealName ] = useState('');
    const [ mealDescription, setMealDescription ] = useState('');
    const [ date, setDate ] = useState('');
    const [ hour, setHour ] = useState('');
    const [ healthy, setHealthy ] = useState<boolean>(true);

    const navigation = useNavigation();

    function handleGoHome(){
        navigation.navigate('home');
    }

    function handleFeedBackMeal(){
        navigation.navigate('feedBackCreateMeal', {isHealthy: healthy})
    }

    
    async function handleCreateNewMeal(){
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

        try {
            await createMealDate(date);
            
            const id = data_now.toISOString()

            const MEALSINFO: MealStorageDTO = {
                id,
                name: mealName,
                description: mealDescription,
                date,
                hour,
                isHealthy: healthy
            };

            await createNewMeal(MEALSINFO);
            handleFeedBackMeal();
        } catch (error) {
            console.log(error)
            Alert.alert('Erro ao criar refeição', 'Não foi possível criar a refeição')
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
                Nova refeição
            </Title>

            <Container2>
                <InputTitle>
                    Nome
                </InputTitle>

                <Input
                    value={mealName}
                    onChangeText={setMealName}
                />

                <InputTitle>
                    Descrição
                </InputTitle>

                <Input
                    style={{ minHeight: 100, maxHeight: 100 }}
                    multiline
                    scrollEnabled
                    textAlignVertical="top"
                    value={mealDescription}
                    onChangeText={setMealDescription}
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
                    onPress={handleCreateNewMeal}
                />
            </Container2>
        </AnimatedContainer>
    )
}