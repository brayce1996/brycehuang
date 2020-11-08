<template>
    <section class="section-bg">
        <h1 class="section-title">
            {{ sectionTitle }}
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
                    <LogoTextBlock
                        :title="experience.title"
                        :role="experience.role"
                        :start-date="experience.startDate"
                        :end-date="experience.endDate"
                        :logo="experience.image"
                        :descriptions="experience.descriptions"
                        :hide-bullet="hideBullet"
                    />
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import LogoTextBlock from "@/components/blocks/LogoTextBlock.vue";
import experienceList from "@/assets/contents/WorkExperienceContent";

export default Vue.extend({
    name: "WorkExperienceSection",
    components: {
        LogoTextBlock,
    },
    props: {
    },
    data() {
        return {
            sectionTitle: "Work Experience",
            experienceList,
            imageType: "none",
            hideBullet: false,
        };
    },
    computed: mapState([
        "oneColumnGrid",
    ]),
});
</script>

<style lang="scss" scoped>
@import '../../styles/commons.scss';

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
