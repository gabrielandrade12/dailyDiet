import { useNavigation, useRoute } from "@react-navigation/native";
import Animated, {FadeInUp} from "react-native-reanimated";
import { Container, Title, Subtitle, FeedBackImage } from "./styles"

import { Button } from "@components/Button"

import insideDietIMG from '@assets/feedBackImages/insideDiet.png';
import outsideDietIMG from '@assets/feedBackImages/outsideDiet.png'

type RouteParams = {
    isHealthy?: boolean;
}

const AnimatedContainer = Animated.createAnimatedComponent(Container)

export function FeedBackCreateMeal(){
    const navigation = useNavigation();

    const route = useRoute();
    const { isHealthy } = route.params as RouteParams;

    function goHome(){
        navigation.navigate('home');
    }

    return(
        <AnimatedContainer entering={FadeInUp.duration(400).delay(200)}>
            {isHealthy ? <Title isHealthy={isHealthy}>Continue assim!</Title> : <Title isHealthy={isHealthy}>Que pena!</Title>}
            
            {isHealthy ?  <Subtitle>Você continua <Subtitle style={{ fontWeight: 'bold'}}>dentro da dieta</Subtitle>. Muito bem!</Subtitle> :
                <Subtitle>Você <Subtitle style={{ fontWeight: 'bold'}}>saiu da dieta</Subtitle>. dessa vez, mas continue se esforçando e não desista</Subtitle>
            }

            {isHealthy ? <FeedBackImage source={insideDietIMG} resizeMode="contain"/> :
                <FeedBackImage source={outsideDietIMG} resizeMode="contain"/>
            }
            
            <Button
                title="Ir para a página inicial"
                onPress={goHome}
            />
        </AnimatedContainer>
    )
}