import Vue from "nativescript-vue";
import FourPlayerLayout from "./components/FourPlayerLayout";
import Pager from 'nativescript-pager/vue';

Vue.registerElement(
    'Fab',
    () => require('@nstudio/nativescript-floatingactionbutton').Fab
  );

require( "nativescript-platform-css" );
 
Vue.use(Pager);

new Vue({

    template: `
        <Frame>
            <FourPlayerLayout />
        </Frame>`,

    components: {
        FourPlayerLayout
    }
}).$start();
