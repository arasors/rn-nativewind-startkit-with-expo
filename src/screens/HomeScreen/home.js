import React, {memo, useEffect} from "react";
import {updateSite} from "../../context/actions/siteAction";
import {useSelector} from "react-redux";
import {t} from "../../components/translate";
import Icon from "../../svg/ico.svg";
import {View, Text} from "react-native";
// import {View, Text} from "../../components/element";

function HomeScreen({navigation}) {

    return (
        <View className={"flex-1 items-center justify-center"}>
            <Text>{t("welcome-back", {name: "Aras"})}</Text>
            <Icon width={100} height={100} />

        </View>
    );
}

export default memo(HomeScreen);
