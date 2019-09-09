import Vue from "nativescript-vue";
import FourPlayerLayout from "./components/FourPlayerLayout";
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
import { Fontawesome } from 'nativescript-fontawesome';

Fontawesome.init();

console.log(Fontawesome);

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './font-awesome.css',
  'ion': './ionicons.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

new Vue({

    template: `
        <Frame>
            <FourPlayerLayout />
        </Frame>`,

    components: {
        FourPlayerLayout
    }
}).$start();
