import { TouchableOpacityProps } from "react-native";
import { Container, SubTitle, Title, CardColor } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    subtitle: string;
    color?: CardColor;
}

export function Card({title, subtitle, color ='GREEN', ...rest}: Props){
    return(
        <Container color={color} {...rest}>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Container>
    )
}