import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, BackIcon, Title, Subtitle, StatisticsContainer,
        StatisticsTitle, InfoContainer, InfoTitle,
        HealthyContainer} from "./styles";

export function Statistics(){
    const navigation = useNavigation(); 

    function handleGoHome(){
        navigation.navigate('home');
    }

    return(
      <Container isHealthy>
        <TouchableOpacity onPress={handleGoHome}>
            <BackIcon
                name="arrowleft"
                isHealthy
            />
        </TouchableOpacity>

        <Title>
            90,86%
        </Title>

        <Subtitle>
            das refeições dentro da dieta
        </Subtitle>

        <StatisticsContainer>
            <StatisticsTitle>
                Estatísticas gerais
            </StatisticsTitle>

            <InfoContainer>
                <InfoTitle>
                    22
                </InfoTitle>

                <Subtitle>
                    melhor sequência de pratos dentro da dieta
                </Subtitle>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>
                    109
                </InfoTitle>

                <Subtitle>
                    refeições registradas
                </Subtitle>
            </InfoContainer>

            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <HealthyContainer isHealthy>
                    <InfoTitle>
                        99
                    </InfoTitle>

                    <Subtitle>
                        refeições dentro da {'\n'}dieta
                    </Subtitle>
                </HealthyContainer>

                <HealthyContainer isHealthy={false}>
                    <InfoTitle>
                        10
                    </InfoTitle>

                    <Subtitle>
                        refeições fora da {'\n'}dieta
                    </Subtitle>
                </HealthyContainer>
            </View>
        </StatisticsContainer>
      </Container>  
    )
}