import { View, Text } from "react-native"
import { Container, Title, Header, BackIconContainer, MealInfoContainer, MealTitle, MealText, HealthyIndicatorBox, HealthyIndicator, HealthyIndicatorText } from "./styles"
import { ArrowLeftIcon } from "phosphor-react-native"
import { theme } from "../../theme"
import { Button } from "../../components/Button"

export function MealInfo(){
    return(
        <Container>
            <Header>
                <BackIconContainer>
                    <ArrowLeftIcon color={theme.colors.gray[200]}/>
                </BackIconContainer>

                <Title>Refeição</Title>
            </Header>

            <MealInfoContainer>
                <MealTitle>Sanduíche</MealTitle>
                <MealText>Sanduíche de pão integral com atum e salada de alface e tomate</MealText>

                <MealTitle style={{ fontSize: 14 }}>Data e hora</MealTitle>
                <MealText>12/08/2022 às 16:00</MealText>

                <View style={{ flex: 1 }}>
                    <HealthyIndicatorBox>
                        <HealthyIndicator/>
                        <HealthyIndicatorText>dentro da dieta</HealthyIndicatorText>
                    </HealthyIndicatorBox>
                </View>

                <Button style={{ marginBottom: 9 }} buttonType="Black" icon="Pencil" title="Editar refeição"/>
                <Button buttonType="White" icon="Trash" title="Excluir refeição"/>
            </MealInfoContainer>
        </Container>
    )
}