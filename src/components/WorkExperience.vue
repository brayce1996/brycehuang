<template>
    <section class="section-bg">
        <h1 class="section-title">
            Section Title
        </h1>
        <b-container
            class="section-container"
            fluid
        >
            <b-row class="justify-content-sm-center">
                <b-col
                    v-for="(experience, index) in experienceList"
                    :key="index"
                    class="section-block-wrapper"
                    :md="oneColumnGrid.md"
                    :lg="oneColumnGrid.lg"
                >
                    <ExperienceBlock />
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import ExperienceBlock from "@/components/ExperienceBlock.vue";

export default Vue.extend({
    components: {
        ExperienceBlock,
    },
    data() {
        return {
            experienceList: [1, 1, 1],
        };
    },
    computed: mapState([
        "oneColumnGrid",
    ]),
});
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';

.hide-text {
    color: transparent !important;
}

@media only screen and (max-width: 576px) {
}

@media only screen and (max-width: 768px) {
    .hide-text {
        display: none;
    }
}
</style>
