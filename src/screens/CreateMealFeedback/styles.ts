import styled from "styled-components/native";

type Props = {
    isHealthy: boolean
}

export const Container = styled.View`
    flex: 1;
    padding: 32px;
    background-color: ${({ theme }) => theme.colors.gray[700]};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text<Props>`
    font-size: 24px;
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme, isHealthy }) => isHealthy ? theme.colors.green.dark : theme.colors.red.dark};
    margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: ${({ theme }) => theme.colors.gray[100]};
    margin-bottom: 40px;
`;
