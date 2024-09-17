import { useNavigation } from "@react-navigation/native";
import { Container, Title, Subtitle, FeedBackImage } from "./styles"

import { Button } from "@components/Button"

import insideDietIMG from '@assets/feedBackImages/insideDiet.png';

export function FeedBackCreateMeal(){
    const navigation = useNavigation();

    function goHome(){
        navigation.navigate('home')
    }

    return(
        <Container>
            <Title>
                Continue assim!
            </Title>

            <Subtitle>
                Você continua <Subtitle style={{ fontWeight: 'bold'}}>dentro da dieta</Subtitle>. Muito bem!
            </Subtitle>

            <FeedBackImage
                source={insideDietIMG}
                resizeMode="contain"
            />

            <Button
                title="Ir para a página inicial"
                onPress={goHome}
            />
        </Container>
    )
}