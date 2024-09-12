import { Container, Title, Icon, ButtonStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";

import { EvilIcons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
    iconName?: keyof typeof EvilIcons.glyphMap; 
    type?: ButtonStyleProps;
    title: string;
    hasIcon?: boolean;
}

export function Button({ iconName = 'plus', type = 'PRIMARY', title, hasIcon = false, ...rest }: Props){
    return(
        <Container type={type} {...rest}>
            {hasIcon &&
                <Icon
                    name={iconName}
                    type={type}
                />
            }

            <Title type={type}>
                {title}
            </Title>
        </Container>
    )
}