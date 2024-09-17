import styled, {css} from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { TextInputMask } from "react-native-masked-text";

type Props = {
    isHealthy: boolean;
}

type HealthyButtonStyle = {
    isActive?: boolean;
    buttonColor: 'GREEN' | 'RED';
}

export const Container = styled(SafeAreaView)`
    flex: 1;

    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const BackIcon = styled(AntDesign).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_2,
}))` margin-bottom: 1px; margin-left: 24px`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};
    align-self: center;
`;

export const Container2 = styled.View`
    flex: 1;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    padding: 24px;
    
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    margin-top: 34px;
`;

export const InputTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_2};
    `};
    margin-bottom: 8px
`;

export const Input = styled.TextInput`
    width: 100%;

    padding: 14px;

    border: 1px solid;
    border-radius: 6px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5};

    margin-bottom: 24px;
`;

export const HorizontalContainer = styled.View`
    width: 100%;

    flex-direction: row;

    justify-content: space-between;
`;

export const DateInput = styled(TextInputMask)`
    width: 100%;

    padding: 14px;

    border: 1px solid;
    border-radius: 6px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5};

    margin-bottom: 24px;
`;

export const InsideDietButton = styled(TouchableOpacity)<HealthyButtonStyle>`
    flex: 1;
    flex-direction: row;
    padding: 16px;

    border-radius: 6px;
    border: ${({ isActive }) => isActive ? 1 : 0}px solid;
    border-color: ${({ theme, buttonColor }) => buttonColor === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

    background-color: ${({ theme }) => theme.COLORS.GRAY_6};

    align-items: center;
    justify-content: center;

    max-height: 50px;
`;

export const HealthyIndicator = styled.View<Props>`
    width: 8px;
    height: 8px;

    border-radius: 50px;

    background-color: ${({ theme, isHealthy }) => isHealthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

    margin-right: 8px;
`;

export const InsideDietButtonTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};
`;