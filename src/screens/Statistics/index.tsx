import { useEffect, useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import Animated, {FadeInUp, SlideInLeft, SlideInRight} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { Container, BackIcon, Title, Subtitle, StatisticsContainer,
        StatisticsTitle, InfoContainer, InfoTitle,
        HealthyContainer} from "./styles";

import { MealStorageDTO } from "@storage/meals/MealsStorageDTO";
import { getAllMeals } from "@storage/meals/getAllMeals";
import { getBiggestSequence } from "@storage/meals/getBiggestSequence";

const AnimatedContainer = Animated.createAnimatedComponent(Container)
const AnimatedInfoContainer = Animated.createAnimatedComponent(InfoContainer)
const AnimatedHealthyContainer = Animated.createAnimatedComponent(HealthyContainer)

export function Statistics(){
    const [meals, setMeals] = useState<MealStorageDTO[]>([]);
    const [mealsInsideDiet, setMealsInsideDiet] = useState<MealStorageDTO[]>([]);
    const [mealsOutSideDiet, setMealsOutSideDiet] = useState<MealStorageDTO[]>([]);
    const [percentageInsideDiet, setPercentageInsideDiet] = useState<number>(0);
    const [biggestHealthyMealsSequence, setBiggestHealthyMealsSequence] = useState(0);

    const navigation = useNavigation(); 

    function handleGoHome(){
        navigation.navigate('home');
    }

    async function fetchData(){
        try {
            const data = await getAllMeals();
            setMeals(data);

            const insideDiet = meals.filter(meal => meal.isHealthy === true);
            setMealsInsideDiet(insideDiet);

            const outSideDiet = meals.filter(meal => meal.isHealthy === false);
            setMealsOutSideDiet(outSideDiet);

            const sequence = await getBiggestSequence()
            setBiggestHealthyMealsSequence(sequence)
        } catch (error) {
            Alert.alert('Erro', 'Não foi possivel carregar os dados.');
            console.log(error);
        }
    }

    function calculatePercentageInsideDiet(){
        const percentageMealsInsideDiet = meals.filter(meal => meal.isHealthy).length * 100 / meals.length;
        if(meals.length === 0){
            setPercentageInsideDiet(0);
        } else {
            setPercentageInsideDiet(percentageMealsInsideDiet);
        }
    }

    useEffect(() => {
        fetchData();
        calculatePercentageInsideDiet();
    },[meals]);

    return(
      <AnimatedContainer entering={FadeInUp.duration(400).delay(200)} percentageInsideDiet={percentageInsideDiet}>
        <TouchableOpacity onPress={handleGoHome}>
            <BackIcon
                name="arrowleft"
                percentageInsideDiet={percentageInsideDiet}
            />
        </TouchableOpacity>

        <Title>
            {percentageInsideDiet.toFixed(2)}
        </Title>

        <Subtitle>
            das refeições dentro da dieta
        </Subtitle>

        <StatisticsContainer>
            <StatisticsTitle>
                Estatísticas gerais
            </StatisticsTitle>

            <AnimatedInfoContainer entering={SlideInLeft.delay(1*200).duration(400)}>
                <InfoTitle>
                    {biggestHealthyMealsSequence}
                </InfoTitle>

                <Subtitle>
                    melhor sequência de pratos dentro da dieta
                </Subtitle>
            </AnimatedInfoContainer>

            <AnimatedInfoContainer entering={SlideInLeft.delay(2*200).duration(400)}>
                <InfoTitle>
                    {meals.length}
                </InfoTitle>

                <Subtitle>
                    refeições registradas
                </Subtitle>
            </AnimatedInfoContainer>

            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <AnimatedHealthyContainer entering={SlideInLeft.delay(3*200).duration(400)} isHealthy>
                    <InfoTitle>
                        {mealsInsideDiet.length}
                    </InfoTitle>

                    <Subtitle>
                        refeições dentro da
                    </Subtitle>

                    <Subtitle>
                        dieta
                    </Subtitle>
                </AnimatedHealthyContainer>

                <AnimatedHealthyContainer entering={SlideInRight.delay(3*200).duration(400)} isHealthy={false}>
                    <InfoTitle>
                        {mealsOutSideDiet.length}
                    </InfoTitle>

                    <Subtitle>
                        refeições fora da
                    </Subtitle>

                    <Subtitle>
                        dieta
                    </Subtitle>
                </AnimatedHealthyContainer>
            </View>
        </StatisticsContainer>
      </AnimatedContainer>  
    )
}