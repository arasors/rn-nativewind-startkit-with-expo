import React, {memo} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/home";




const BottomTab = createBottomTabNavigator();
function BottomTabNavigation() {

    return(
        <BottomTab.Navigator>
            <BottomTab.Screen name={"home"} component={HomeScreen} />
        </BottomTab.Navigator>
    )
}

export default memo(BottomTabNavigation);
