import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { Container, HomeHeader, Logo, ProfilePhoto,
        StatisticsContainer, StatisticsTitle, StatisticsSubtitle, StatisticsIcon,
        StatisticsButton, Title, DateTitle } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import logoImg from '@assets/logo.png';

import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";

import { MealStorageDTO } from "@storage/meals/MealsStorageDTO";
import { getAllMealDates } from "@storage/mealsDates/getAllMealDates";
import { getAllMeals } from "@storage/meals/getAllMeals";
import { deleteDate } from "@storage/mealsDates/deleteDate";

export function Home(){
    const [meals, setMeals] = useState<MealStorageDTO[]>([]);
    const [mealsDate, setMealsDate] = useState<string[]>([]);
    const [percentageInsideDiet, setPercentageInsideDiet] = useState<number>(0);

    const navigation = useNavigation();

    function goToStatistics(){
        navigation.navigate('statistics');
    };

    function goToCreateMeal(){
        navigation.navigate('createMeal');
    };

    function calculatePercentageInsideDiet(){
        const percentageMealsInsideDiet = meals.filter(meal => meal.isHealthy).length * 100 / meals.length;
        if(meals.length === 0){
            setPercentageInsideDiet(0);
        } else {
            setPercentageInsideDiet(percentageMealsInsideDiet);
        }
    }
    
    async function fetchDates(){
        try {
            await deleteDate();
            const dates = await getAllMealDates();
            setMealsDate(dates);
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchMeals(){
        try {
            const allMeals = await getAllMeals();
            setMeals(allMeals);
        } catch (error) {
            console.log(error);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchDates();
        fetchMeals();
        calculatePercentageInsideDiet();
    },[meals]));

    return(
        <Container>
           <HomeHeader>
                <Logo source={logoImg}/>

                <ProfilePhoto source={{ uri: 'https://github.com/gabrielandrade12.png'}}/>
           </HomeHeader>

           <StatisticsContainer percentageInsideDiet={percentageInsideDiet}>
                <StatisticsButton onPress={goToStatistics}>
                    <StatisticsIcon name="arrow-up-right" percentageInsideDiet={percentageInsideDiet}/>
                </StatisticsButton>
            
                <StatisticsTitle>
                    {percentageInsideDiet.toFixed(2) + '%'}
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
                        {meals.map(meal => meal.date === item && <MealCard key={meal.id} mealInfo={meal}/>)}
                    </>
                )}
                style={{marginBottom: 12}}
            />
        </Container>
    )
}