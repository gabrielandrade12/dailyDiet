import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.green.light};
    padding-top: 24px;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme }) => theme.colors.gray[100]};
`;

export const Subtitle = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: ${({ theme }) => theme.colors.gray[200]};
`;

export const StatisticsContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray[700]};
    padding: 24px;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: 34px;
`;