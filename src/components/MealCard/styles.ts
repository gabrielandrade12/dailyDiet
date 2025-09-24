import styled from "styled-components/native";

type Props = {
    isHealthy?: boolean
}

export const Container = styled.TouchableOpacity`
    width: '100%';
    flex-direction: row;
    padding: 14px 16px 14px 12px;

    align-items: center;

    border-radius: 6px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.gray[500]};

    margin-bottom: 8px;
`;

export const Hour = styled.Text`
    font-size: 12px;
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme }) => theme.colors.gray[100]};

`;

export const Line = styled.View`
    height: 14px;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.gray[400]};
    margin-right: 12px;
    margin-left: 12px;
`;

export const Title = styled.Text`
    flex:1;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: ${({ theme }) => theme.colors.gray[200]};
`

export const Indicator = styled.View<Props>`
    height: 14px;
    width: 14px;

    border-radius: 50px;

    background-color: ${({ theme, isHealthy = true}) => isHealthy ? theme.colors.green.light : theme.colors.red.light };
`;