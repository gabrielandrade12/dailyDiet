import { Image } from "react-native";
import { Container, Subtitle, Title } from "./styles";

import { Button } from "../../components/Button";

import healthyImg from '../../images/healthyFeedback.png';
import unHealthyImg from '../../images/unHealthy.png';
import { theme } from "../../theme";
import { useRootNavigation } from "../../hooks/navigation";


export function CreateMealFeedback(){
    const isHealthy = false

    const navigation = useRootNavigation()

    return(
        isHealthy ?

        <Container>
            <Title isHealthy>Continue assim!</Title>
            
            <Subtitle>
                Você continua 
                <Subtitle style={{ fontFamily: theme.fontFamily.bold}}> dentro da dieta. </Subtitle> 
                Muito bem!
            </Subtitle>
            
            <Image source={healthyImg} style={{ marginBottom: 32 }}/>
            
            <Button buttonType="Black" title="Ir para a página inicial"/>
        </Container> 
        :

        <Container>
            <Title isHealthy={isHealthy}>Que pena!</Title>
            
            <Subtitle>
                Você 
                <Subtitle style={{ fontFamily: theme.fontFamily.bold}}> saiu da dieta </Subtitle> 
                dessa vez, mas continue se esforçando e não desista!
            </Subtitle>
            
            <Image source={unHealthyImg} style={{ marginBottom: 32 }}/>
            
            <Button 
                buttonType="Black" 
                title="Ir para a página inicial"
                onPress={() => navigation.navigate('Home')}
            />
        </Container> 
    )
}