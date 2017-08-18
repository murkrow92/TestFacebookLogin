/**
 * Created by Murkrow on 5/23/2017.
 */

import LoginPage from "../components/LoginPage/index";
import { StackNavigator } from "react-navigation";
import ContentPage from "./ContentPage";

const AppRoute = StackNavigator(
    {
        Login: {
            screen: LoginPage
        },
        Content: {
            screen: ContentPage
        }
    },
    {
        headerMode: "none"
    }
);

export default AppRoute;
