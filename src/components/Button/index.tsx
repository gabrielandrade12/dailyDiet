import { TouchableOpacityProps} from 'react-native'
import { Container, Title, ButtonType } from "./styles";
import { PlusIcon, PencilSimpleLineIcon, TrashIcon } from 'phosphor-react-native'

type IconType = 'Plus' | 'Pencil' | 'Trash'

type Props = TouchableOpacityProps & {
    buttonType: ButtonType;
    title: string;
    icon?: IconType
}

export function Button({ buttonType, title, icon, ...rest }: Props){
    return(
        <Container buttonType={buttonType} {...rest}>
            {icon === 'Plus' ?
                <PlusIcon color="white"/>:
             icon === 'Pencil' ?
                <PencilSimpleLineIcon color="white"/>:  
             icon === 'Trash' ?
                <TrashIcon color="white"/> : 
             null
            }
            <Title buttonType={buttonType}>{title}</Title>
        </Container>
    )
}