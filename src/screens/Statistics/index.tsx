import { View, Text } from "react-native";
import { Container, StatisticsContainer, Subtitle, Title } from "./styles";


import { ArrowLeftIcon } from 'phosphor-react-native';
import { theme } from "../../theme";
import { Card } from "../../components/Card";


export function Statistics(){
    return(
        <Container>
            <View style={{paddingHorizontal:24, paddingTop: 24}}>
                <ArrowLeftIcon color={theme.colors.green.dark}/>
            </View>
            <View style={{alignItems: 'center', gap: 2}}>
                <Title>90,86%</Title>
                <Subtitle>das refeições dentro da dieta</Subtitle>
            </View>

            <StatisticsContainer>
                <Text style={{
                    fontSize: 14,
                    fontFamily: theme.fontFamily.bold,
                    color: theme.colors.gray[100]
                }}>
                    Estatísticas gerais
                </Text>

                <View style={{ gap: 12, marginTop: 23 }}>
                <Card 
                    color="GRAY"
                    title="22"
                    subtitle="melhor sequência de pratos dentro da dieta"
                />
                <Card 
                    color="GRAY"
                    title="109"
                    subtitle="refeições registradas"
                />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 12 }}>
                    <Card
                        color="GREEN"
                        title="99"
                        subtitle="refeições dentro da dieta"
                    />
                    <Card
                        color="RED"
                        title="10"
                        subtitle="refeições fora da dieta"
                    />
                </View>
            </StatisticsContainer>
        </Container>
    )
}