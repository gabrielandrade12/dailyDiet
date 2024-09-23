import { useState } from "react";
import { FlatList } from "react-native";
import { Container, HomeHeader, Logo, ProfilePhoto,
        StatisticsContainer, StatisticsTitle, StatisticsSubtitle, StatisticsIcon,
        StatisticsButton, Title, DateTitle } from "./styles";
import { useNavigation } from "@react-navigation/native";

import logoImg from '@assets/logo.png';

import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";

export type MEALDATA = {
    hour: string;
    title: string;
    date: string;
    isHealthy: boolean;
}

export function Home(){
    const [meals, setMeals] = useState<MEALDATA[]>([{hour: '20:00', title: 'macarrão', date: '23/08/2024' , isHealthy: false}, {hour: '15:00', title: 'whey com banana', date: '24/08/2024', isHealthy: true},
                                                    {hour: '12:00', title: 'almoço', date:'25/08/2024', isHealthy: true}, {hour: '19:00', title: 'janta', date:'26/08/2024', isHealthy: true},
                                                    {hour: '9:00', title: 'fruta', date:'26/08/2024', isHealthy: false}, {hour: '10:00', title: 'iogurte', date:'26/08/2024', isHealthy: true}])
    const [mealsDate, setMealsDate] = useState<string[]>(['23/08/2024', '24/08/2024', '25/08/2024', '26/08/2024']);

    const navigation = useNavigation()

    function goToStatistics(){
        navigation.navigate('statistics')
    }

    function goToCreateMeal(){
        navigation.navigate('createMeal');
    }

    const mealsInsideDiet = meals.filter(meal => meal.isHealthy).length * 100 / meals.length
    return(
        <Container>
           <HomeHeader>
                <Logo source={logoImg}/>

                <ProfilePhoto source={{ uri: 'https://github.com/gabrielandrade12.png'}}/>
           </HomeHeader>

           <StatisticsContainer>
                <StatisticsButton onPress={goToStatistics}>
                    <StatisticsIcon name="arrow-up-right"/>
                </StatisticsButton>
               
                <StatisticsTitle>
                    {mealsInsideDiet.toFixed(2) + '%'}
                </StatisticsTitle>

                <StatisticsSubtitle>
                    das refeições dentro da dieta
                </StatisticsSubtitle>
           </StatisticsContainer>

           <Title>
                Refeições
           </Title>

           <Button
                title="Nova refeição"
                hasIcon
                iconName="plus"
                style={{ marginBottom: 32 }}
                onPress={goToCreateMeal}
           />


            <FlatList
                data={mealsDate}
                keyExtractor={mealsDate => mealsDate}
                renderItem={({ item }) => (
                    <>
                        <DateTitle>
                            {item}
                        </DateTitle>
                        {meals.map(meal => meal.date === item && <MealCard key={meal.title} mealInfo={meal}/>)}
                    </>
                )}
            />
        </Container>
    )
}