import { TextProps } from "react-native";
import { Container, SubTitle, Title, CardColor } from "./styles";

type Props = TextProps & {
    title: string;
    subtitle: string;
    color?: CardColor;
}

export function Card({title, subtitle, color ='GREEN', ...rest}: Props){
    return(
        <Container color={color}>
            <Title {...rest}>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Container>
    )
}