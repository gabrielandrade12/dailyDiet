import styled from "styled-components/native";

type Props = {
    isHealthy: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray[500]};
    padding-top: 24px;
`;

export const Title = styled.Text`
    flex: 1;
    font-size: 18px;
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme }) => theme.colors.gray[100]};
`;

export const CreateMealContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray[700]};
    padding: 24px;
    padding-top: 40px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: 24px;
    gap: 24px;
`;

export const HealthyButton = styled.TouchableOpacity<Props>`
    flex: 1;
    flex-direction: row;
    padding: 16px;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme, isHealthy }) => isHealthy ? theme.colors.green.light : theme.colors.gray[600]};
    border-radius: 6px;
    border-width: ${({ isHealthy }) => isHealthy ? 1 : 0}px;
    border-color: ${({ theme, isHealthy }) => isHealthy ? theme.colors.green.dark : null };
`;

export const NotHealthyButton = styled.TouchableOpacity<Props>`
    flex: 1;
    flex-direction: row;
    padding: 16px;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme, isHealthy }) => !isHealthy ? theme.colors.red.light : theme.colors.gray[600]};
    border-radius: 6px;
    border-width: ${({ isHealthy }) => !isHealthy ? 1 : 0}px;
    border-color: ${({ theme, isHealthy }) => !isHealthy ? theme.colors.red.dark : null };
`;

export const IsInsideDietIndicator = styled.View<Props>`
    width: 8px;
    height: 8px;
    border-radius: 50px;
    background-color: ${({ theme, isHealthy }) => isHealthy ? theme.colors.green.dark :  theme.colors.red.dark};
    margin-right: 8px;
`;