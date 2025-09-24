import styled from "styled-components/native";

type CardColor = 'GREEN' | 'RED' | 'GRAY';

type Props = {
    color: CardColor
}

export const Container = styled.View<Props>`
    width: '100%';
    background-color: ${({ theme, color }) => 
                        color === 'GREEN' ? theme.colors.green.light : 
                        color==='RED' ? theme.colors.red.light : 
                        theme.colors.gray[600]
                    };
    justify-content: center;
    align-items: center;
    padding: 20px 16px;
    border-radius: 8px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fontFamily.bold};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]};
`;

export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.fontFamily.regular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[200]};
`;