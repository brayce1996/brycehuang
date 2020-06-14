<template>
    <section class="footer">
        <b-container class="footer-container">
            <b-row
                class="justify-content-sm-center"
                align-v="center"
            >
                <b-col
                    xs="12"
                    md="5"
                    class="block"
                >
                    <b-button
                        variant="outline-light"
                        href="http://brycehuang.com/static/Bryce_Huang.pdf"
                        target="_blank"
                    >
                        DOWNLOAD MY FULL RESUME
                    </b-button>
                </b-col>
                <b-col
                    xs="12"
                    md="5"
                    class="block"
                >
                    Feel Free To Reach Me Out!
                    <MyLinks icon-style="light" />
                </b-col>
            </b-row>
            <p>© Copyright 2020 Hsin-Yu Bryce Huang</p>
        </b-container>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import MyLinks from "@/components/MyLinks.vue";

export default Vue.extend({
    components: {
        MyLinks,
    },

});
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    background-color: $primary;
    padding: 3vw 0 1vw 0;
    color: $primary-light;
}

@media only screen and (max-width: 576px) {
    .footer {
        padding: 8vw 0 2vw 0;
        .block {
            margin: 4vw 0;
        }
    }
}

@media only screen and (max-width: 768px) {
    .footer {
        padding: 4vw 0 2vw 0;
        .block {
            margin: 2vw 0;
        }
    }
}
</style>
