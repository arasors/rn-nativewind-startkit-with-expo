import React, {memo, useEffect} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {updateSite} from "../../context/actions/siteAction";
import {useSelector} from "react-redux";
import {t} from "../../components/translate";
import Icon from "../../svg/ico.svg";

function BasketScreen() {

    return (
        <View className={"flex-1 items-center justify-center"}>
            <Text className={"color-purple-500"}>Sepettesin</Text>
        </View>
    );
}

export default memo(BasketScreen);
