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
                    v-for="(project, index) in projectList"
                    :key="index"
                    class="section-block-wrapper"
                    :md="oneColumnGrid.md"
                    :lg="oneColumnGrid.lg"
                >
                    <PhotoTextBlock
                        :title="project.title"
                        :role="project.role"
                        :start-date="project.startDate"
                        :end-date="project.endDate"
                        :photo="project.image"
                        :descriptions="project.descriptions"
                        :links="project.links"
                        :tags="project.tags"
                    />
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import PhotoTextBlock from "@/components/blocks/PhotoTextBlock.vue";
import projectList from "@/assets/contents/ProjectContent";

export default Vue.extend({
    name: "ProjectSection",
    components: {
        PhotoTextBlock,
    },
    props: {
    },
    data() {
        return {
            sectionTitle: "Projects",
            projectList,
            hideBullet: true,
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
