import { View, Text, TouchableOpacity } from "react-native";
import { Box, BoxSubtitle, BoxTitle, Container, StatisticsContainer, Subtitle, Title } from "./styles";

import { ArrowLeftIcon } from 'phosphor-react-native';
import { theme } from "../../theme";
import { useRootNavigation } from "../../hooks/navigation";

export function Statistics(){
    const navigation = useRootNavigation()

    return(
        <Container>
            <TouchableOpacity 
                style={{paddingHorizontal:24, paddingTop: 24}}
                onPress={() => navigation.goBack()}
            >
                <ArrowLeftIcon color={theme.colors.green.dark}/>
            </TouchableOpacity>
            
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
                    <Box color="GRAY">
                        <BoxTitle>22</BoxTitle>
                        <BoxSubtitle>melhor sequência de pratos dentro da dieta</BoxSubtitle>
                    </Box>
                    <Box color="GRAY">
                        <BoxTitle>109</BoxTitle>
                        <BoxSubtitle>refeições registradas</BoxSubtitle>
                    </Box>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 12, gap: 12 }}>
                    <Box color="GREEN">
                        <BoxTitle>99</BoxTitle>
                        <BoxSubtitle>refeições dentro da</BoxSubtitle>
                        <BoxSubtitle>dieta</BoxSubtitle>
                    </Box>
                    <Box color="RED">
                        <BoxTitle>10</BoxTitle>
                        <BoxSubtitle>refeições fora da</BoxSubtitle>
                        <BoxSubtitle>dieta</BoxSubtitle>
                    </Box>
                </View>

            </StatisticsContainer>
        </Container>
    )
}