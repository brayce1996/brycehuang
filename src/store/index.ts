import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        resumeLink: "http://brycehuang.com/static/Bryce_Huang_resume.pdf",

        // for bootstrap grid system
        oneColumnGrid: {
            sm: "12",
            md: "12",
            lg: "10",
        },
        twoColumnGrid: {
            sm: "12",
            md: "6",
            lg: "5",
        },
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    },
});
