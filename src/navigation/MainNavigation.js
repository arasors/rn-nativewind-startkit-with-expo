import React, {memo} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {navigationRef} from "../components/navigationRef";
import HomeScreen from "../screens/HomeScreen/home";
import {TouchableOpacity,Text} from "react-native";
import {Badge, Icon} from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons';
import BasketScreen from "../screens/BasketScreen/basket";
import {t} from "../components/translate";

const NavHeader = memo(function NavHeader({type, title, ...props}){


    if(type==="title"){
        return(
            <Text {...props}>{title}</Text>
        )
    }

    if(type==="basket"){
        return(
            <TouchableOpacity
                onPress={() => navigationRef.navigate("Basket")}
                style={
                    {
                        color: "#dc0021"
                    }
                }
                color="#dc0021"
                {...props}
            >
                <>
                    <Badge label={1} />
                    <Ionicons name={props?.basket ? "ios-basket" : "ios-basket-outline"} size={24} color="black" />
                </>
            </TouchableOpacity>
        )
    }

    return(<></>)
});


const Stack = createNativeStackNavigator();
function MainNavigation() {

    return (
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator screenOptions={{
                    headerShown: true
                }}>

                    <Stack.Group screenOptions={{presentation: "card"}}>
                        <Stack.Screen
                            name="main"
                            component={HomeScreen}
                            options={{
                                title: t("menu.home"),
                                headerTitle: props => <NavHeader type={"title"} title={t("menu.home")} {...props} />,
                                headerRight: () => <NavHeader type={"basket"} />
                            }}
                        />
                        <Stack.Screen
                            name="Basket"
                            component={BasketScreen}
                            options={{
                                headerTitle: props => <NavHeader type={"title"} title={t("menu.basket")} {...props} />,
                                headerRight: () => <NavHeader type={"basket"} basket={true} />,
                                title: "Sepet"
                            }}
                        />
                    </Stack.Group>

                </Stack.Navigator>
            </NavigationContainer>
    );
}


export default memo(MainNavigation);
