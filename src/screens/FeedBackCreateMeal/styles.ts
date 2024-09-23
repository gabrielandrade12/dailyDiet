import styled, { css } from "styled-components/native";

type Props = {
    isHealthy?: boolean;
}

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    padding: 24px;

    align-items: center;
`;

export const Title = styled.Text<Props>`
    ${({ theme, isHealthy }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${isHealthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `};

    margin-top: 130px;
    margin-bottom: 8px
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1};
    `};
`;

export const FeedBackImage = styled.Image`
    width: 100%;

    margin-top: 40px;
    margin-bottom: 32px;
`;