import React, {memo} from "react";
import MainNavigation from "./src/navigation/MainNavigation";
import {initialWindowMetrics, SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import {store} from "./src/context/store";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {IconComponentProvider} from "@react-native-material/core";
import {StatusBar} from "expo-status-bar";

function App() {

  return(
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
          <StatusBar style={"auto"}/>
          <SafeAreaProvider initialMetrics={initialWindowMetrics} independent={true}>
              <Provider store={store}>
                <MainNavigation />
              </Provider>
          </SafeAreaProvider>
      </IconComponentProvider>
  );
}

export default memo(App);
