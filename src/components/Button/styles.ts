import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { EvilIcons } from '@expo/vector-icons';

export type ButtonStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    flex-direction: row;

    padding: 16px 24px;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};

    border-radius: 6px;
`;

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    `};
`;

export const Icon = styled(EvilIcons).attrs<Props>(({ theme, type }) => ({
    size: 18,
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1
}))`
    margin-right: 12px;
`