import { Text } from "react-native";
import { Container, HomeHeader, Logo, ProfilePhoto,
        StatisticsContainer, StatisticsTitle, StatisticsSubtitle, StatisticsIcon,
        StatisticsButton, Title } from "./styles";

import logoImg from '@assets/logo.png';
import { Button } from "@components/Button";

export function Home(){
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
           />
        </Container>
    )
}