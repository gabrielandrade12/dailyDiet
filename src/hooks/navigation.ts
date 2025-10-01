import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../routes/routesType";

type RootNavigationProp = NavigationProp<RootStackParamList>;

export const useRootNavigation = () => useNavigation<RootNavigationProp>();