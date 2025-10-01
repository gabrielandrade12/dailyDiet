import styled from "styled-components/native";

export type ButtonType = 'Black' | 'White'

type Props = {
    buttonType: ButtonType
}

export const Container = styled.TouchableOpacity<Props>`
    width: '100%';
    padding: 16px 24px;

    flex-direction: row;
    gap: 12px;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, buttonType }) => buttonType === 'Black' ? theme.colors.gray[200] : theme.colors.gray[700]};
    border-radius: 6px;
    border-width: ${({ buttonType }) => buttonType === 'Black' ? 0 : 1}px;
    border-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const Title = styled.Text<Props>`
    font-size: 14px;
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme, buttonType }) => buttonType === 'Black' ? theme.colors.white : theme.colors.gray[100]};
`;

