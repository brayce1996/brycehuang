import "./styles/custom-bootstrap.scss";
import { BootstrapVue } from "bootstrap-vue";
import VueScrollTo from "vue-scrollto";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

library.add(
    faFacebookF,
    faLinkedinIn,
    faGithub,
    faFileAlt,
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);

// Install VueScrollTo
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: -56, // the height of navbar
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
