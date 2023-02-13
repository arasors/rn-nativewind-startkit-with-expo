import React from "react"
import * as Localisation from 'expo-localization';
import {I18n} from 'i18n-js';
import {resources} from "./language"
import {store} from "../context/store";

const i18n = new I18n(resources);


i18n.defaultLocale  = "tr";
i18n.locale = Localisation.locale;
i18n.fallbacks = true;
i18n.enableFallback = true;
i18n.localize.no = "tr";

export const t = (text, options) => i18n.t(text, options);

export default i18n;
