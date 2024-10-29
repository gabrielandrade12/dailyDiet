import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign } from "@expo/vector-icons";

type Props = {
    percentageInsideDiet: number;
}

type HealthyContainerProps = {
    isHealthy: boolean;
}

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;

    background-color: ${({ theme, percentageInsideDiet }) => percentageInsideDiet >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const BackIcon = styled(AntDesign).attrs<Props>(({ theme, percentageInsideDiet }) => ({
    size: 24,
    color: percentageInsideDiet >= 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))` margin-bottom: 1px; margin-left: 24px`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};
    align-self: center
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
    `};
    align-self: center;
`;
    
    // Área das estatísticas gerais
    
export const StatisticsContainer = styled.View`
    flex: 1;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    padding: 24px;
    
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
    align-items: center;

    margin-top: 34px;
`;

export const StatisticsTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};

    margin-bottom: 23px;
`;

export const InfoContainer = styled.View`
    width: 100%;

    padding: 16px;
    align-items: center;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_6};

    margin-bottom: 12px;
`;

export const InfoTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};
`;

export const HealthyContainer = styled.View<HealthyContainerProps>`
    min-width: 170px;
    padding: 16px;
    align-items: center;
    border-radius: 8px;

    background-color: ${({ theme, isHealthy }) => isHealthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

    margin-bottom: 12px;
`