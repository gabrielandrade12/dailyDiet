import { Pressable } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
    isHealthy: boolean;
}

export const Container = styled(Pressable)`
    width: 100%;
    flex-direction: row;

    padding: 14px 16px 14px 12px;

    border-radius: 6px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5};

    justify-content: center;
    align-items: center;

    margin-bottom: 10px;
`;

export const MealHour = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XSM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};
`;

export const Title = styled.Text`
    flex: 1;
    
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
    `};

    margin-left:12px;
    
    padding-left: 12px;
    
    border-left-width: 1px; 
    border-left-color: ${({ theme }) => theme.COLORS.GRAY_4}
`;

export const HealthyIndicator = styled.View<Props>`
    width: 14px;
    height: 14px;

    border-radius: 50px;

    background-color: ${({ theme, isHealthy }) => isHealthy ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;