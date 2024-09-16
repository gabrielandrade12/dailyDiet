import { useState } from "react";
import { Container, HomeHeader, Logo, ProfilePhoto,
        StatisticsContainer, StatisticsTitle, StatisticsSubtitle, StatisticsIcon,
        StatisticsButton, Title } from "./styles";

import logoImg from '@assets/logo.png';

import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { FlatList } from "react-native";

export type MEALDATA = {
    hour: string;
    title: string;
    isHealthy: boolean;
}

export function Home(){
    const [meals, setMeals] = useState<MEALDATA[]>([{hour: '20:00', title: 'macarrão', isHealthy: false}, {hour: '15:00', title: 'whey com banana', isHealthy: true}, {hour: '12:00', title: 'almoço', isHealthy: true}])

    return(
        <Container>
           <HomeHeader>
                <Logo source={logoImg}/>

                <ProfilePhoto source={{ uri: 'https://github.com/gabrielandrade12.png'}}/>
           </HomeHeader>

           <StatisticsContainer>
                <StatisticsButton>
                    <StatisticsIcon name="arrow-up-right"/>
                </StatisticsButton>
               
                <StatisticsTitle>
                    90,86%
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
           />


            <FlatList
                data={meals}
                keyExtractor={meals => meals.title}
                renderItem={({ item }) => (
                    <MealCard
                        mealInfo={item}
                    />
                )}
            />
        </Container>
    )
}