import { Container, MealHour, Title, HealthyIndicator } from "./styles";
import { MEALDATA } from "@screens/Home";

type Props = {
    mealInfo: MEALDATA;
}

export function MealCard({ mealInfo }: Props){
    return(
        <Container>
            <MealHour>
                {mealInfo.hour}
            </MealHour>
            
          
            <Title>
                {mealInfo.title}
            </Title>

            <HealthyIndicator
                isHealthy={mealInfo.isHealthy}
            />
        </Container>
    )
}