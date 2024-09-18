import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';

type Props = {
    isHealthy?: boolean;
}

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;

    background-color: ${({ theme, isHealthy }) => isHealthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

export const MealName = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};

    margin-bottom: 8px;
`;

export const MealText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
    `};
`;

export const DateHourText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};

    margin-top: 24px;
    margin-bottom: 8px;
`;

export const IsInsideDietContainer = styled.View`
    width: auto;
    flex-direction: row;

    padding: 8px 16px;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_6};

    border-radius: 50px;

    margin-top: 24px;

    align-self: flex-start;
`;

export const HealthyIndicator = styled.View`
    width: 8px;
    height: 8px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};

    border-radius: 50px;

    margin-right: 8px;
`

export const HealthyIndicatorText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1};
    `};
`;