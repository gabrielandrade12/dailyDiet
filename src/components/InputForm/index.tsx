import { TextInputProps } from 'react-native'
import { Container, Input, Title } from "./styles";

type Props = TextInputProps & {
    title: string;
}

export function InputForm({title, ...rest}: Props){
    return(
        <Container>
            <Title>{title}</Title>
            <Input {...rest}/>
        </Container>
    )
}