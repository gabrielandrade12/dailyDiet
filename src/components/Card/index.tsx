import { TextProps } from "react-native";
import { Container, SubTitle, Title } from "./styles";

type Props = TextProps & {
    title: string;
    subtitle: string;
}

export function Card({title, subtitle, ...rest}: Props){
    return(
        <Container color="GREEN">
            <Title {...rest}>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Container>
    )
}