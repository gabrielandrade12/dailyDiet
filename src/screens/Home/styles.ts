import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

import { Feather } from '@expo/vector-icons';

type Props = {
    percentageInsideDiet: number;
}

export const Container = styled(SafeAreaView)`
    flex: 1;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    padding: 24px;
`;

export const HomeHeader = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const ProfilePhoto = styled.Image`
    width: 40px;
    height: 40px;

    border: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.GRAY_2};
    border-radius: 50px;
`;

//Estilização da área que mostra a porcentagem de refeições dentro da dieta.

export const StatisticsContainer = styled.View<Props>`
    width: 100%;

    background-color: ${({ theme, percentageInsideDiet }) => percentageInsideDiet >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

    padding: 8px 16px 20px 16px;
    justify-content: center;
    align-items: center;

    border-radius: 8px;

    margin-top: 36px;
    margin-bottom: 40px;
`;

export const StatisticsTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXL}px;
        color: ${theme.COLORS.GRAY_1};
    `};
    
`

export const StatisticsSubtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_2};
    `};
`

export const Form = styled.View`
    width: 100%;

    background-color: red;
    flex-direction: row;
    justify-content: center;
`

export const StatisticsButton =  styled.TouchableOpacity`
`;

export const StatisticsIcon = styled(Feather).attrs<Props>(({ theme, percentageInsideDiet }) => ({
    size: 24,
    color: percentageInsideDiet >= 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
    margin-left: 310px
`;

// Área que lista as refeições

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_1};
    `};

    margin-bottom: 8px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.RED_DARK
}))`
    margin-top: 12px;
`;

export const DateTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_1};
    `};
    margin-top: 24px;
    margin-bottom: 8px
`;

export const TrashButton = styled(Pressable)`
    width: 55px;
    height: 55px;

    background-color: ${({ theme }) => theme.COLORS.RED_DARK};

    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export const TrashIcon = styled(Feather).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.WHITE
}))``