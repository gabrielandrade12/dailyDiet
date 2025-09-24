import { Container, Hour, Indicator, Line, Title } from "./styles";

type Props = {
    hour: string;
    title: string;
    isHealthy: boolean
}

export function MealCard({ hour, title, isHealthy }: Props){
    return(
        <Container>
            <Hour>{hour}</Hour>
            <Line/>
            <Title>{title}</Title>
            <Indicator isHealthy={isHealthy}/>
        </Container>
    )
}