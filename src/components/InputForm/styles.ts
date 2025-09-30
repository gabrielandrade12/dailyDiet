import styled from "styled-components/native";

export const Container = styled.View`
    gap: 4px
`;

export const Input = styled.TextInput`
    width: '100%';
    padding: 14px;

    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.gray[500]};
    border-radius: 6px;
`;

export const Title = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme }) => theme.colors.gray[200]};
`;