import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray[500]};
    padding-top: 24px;
`;

export const Header = styled.View`
    width: '100%';
    justify-content: center;
    align-items: center;
    padding: 20px 24px 24px 24px;
`;

export const BackIconContainer = styled(TouchableOpacity)`
    position: absolute;
    left: 24px;
    top: 20px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme }) => theme.colors.gray[100]};
`;

export const MealInfoContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray[700]};
    padding: 24px;
    padding-top: 40px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const MealTitle = styled.Text`
    font-size: 20px;
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme }) => theme.colors.gray[100]};
    margin-bottom: 8px;
`;

export const MealText = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-bottom: 24px;
`;

export const HealthyIndicatorBox = styled.View` 
    align-self: flex-start;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.gray[600]};
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 50px;
`;

export const HealthyIndicator = styled.View`
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.green.dark};
    border-radius: 50px;
`;

export const HealthyIndicatorText = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: ${({ theme }) => theme.colors.gray[100]};
`;