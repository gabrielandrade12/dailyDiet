import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 38px;
    margin-bottom: 33px;
`;

export const Logo = styled.Image`
    height: 40px;
`;

export const ProfilePicture = styled.Image`
    width: 40px;
    height: 40px;

    border-radius: 50px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const ListTitle = styled.Text`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme }) => theme.colors.gray[100]};
    margin-top: 32px;
    margin-bottom: 8px;
`