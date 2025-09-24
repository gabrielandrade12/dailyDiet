import { SectionList, Text, View } from "react-native";
import { Container, Header, ListTitle, Logo, ProfilePicture } from "./styles";

import { theme } from '../../theme'

import logo from '../../images/logo.png'
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { MealCard } from "../../components/MealCard";

const DATA = [
    {
        title: '24/09/2025',
        data: [
            {
                id: '1',
                hour: '20:00',
                title: 'X-tudo',
                isHealthy: false
            },
            {
                id: '2',
                hour: '15:00',
                title: 'Whey',
                isHealthy: true
            },
            {
                id: '3',
                hour: '12:00',
                title: 'Almoço',
                isHealthy: true
            }
        ]
    },
    {
        title: '25/09/2025',
        data: [
            {
                id: '3',
                hour: '20:00',
                title: 'Sushi',
                isHealthy: false
            },
            {
                id: '4',
                hour: '15:00',
                title: 'Pão com ovo',
                isHealthy: true
            },
            {
                id: '5',
                hour: '12:00',
                title: 'Almoço',
                isHealthy: true
            }
        ]
    },
    {
        title: '26/09/2025',
        data: [
            {
                id: '6',
                hour: '20:00',
                title: 'Sushi',
                isHealthy: false
            },
            {
                id: '7',
                hour: '15:00',
                title: 'Pão com ovo',
                isHealthy: true
            },
            {
                id: '8',
                hour: '12:00',
                title: 'Almoço',
                isHealthy: true
            }
        ]
    }
]

export function Home(){
    return(
        <Container>
            <Header>
                <Logo source={logo}/>
                <ProfilePicture source={{uri: 'https://github.com/gabrielandrade12.png'}}/>
            </Header>
            
            <Card style={{ fontSize: 32 }} title="90,86%" subtitle="das refeições dentro da dieta"/>

            <Text style={{ 
                fontFamily: theme.fontFamily.regular,
                fontSize: 16,
                color: theme.colors.gray[100],
                marginTop: 40,
                marginBottom: 8
            }}>
                Refeições
            </Text>
            <Button title="Nova refeição" icon="Plus" buttonType="Black"/>

            
            <SectionList
                sections={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <MealCard hour={item.hour} title={item.title} isHealthy={item.isHealthy}/>
                )}
                renderSectionHeader={({ section: {title} }) => (
                    <ListTitle>{title}</ListTitle>
                )}
            />
        </Container>
    )
}