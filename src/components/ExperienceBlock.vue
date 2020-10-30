<template>
    <div
        class="expereince"
    >
        <div class="text-area">
            <b-row class="justify-content-xs-center">
                <b-col
                    v-if="image !== ''"
                    class="px-sm-3 px-0"
                    cols="2"
                >
                    <img
                        class="preview-image"
                        :src="image"
                        :alt="title + ' preview image'"
                    >
                </b-col>
                <b-col>
                    <h2>{{ title }}</h2>
                    <p>{{ role }} <span v-if="startToEndText !== ''"> . {{ startToEndText }}</span></p>
                    <ul
                        :class="{'hide-bullet': hideBullet}"
                    >
                        <li
                            v-for="(description, index) in descriptions"
                            :key="index"
                        >
                            {{ description }}
                        </li>
                    </ul>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "ExperienceBlock",
    components: {
    },
    props: {
        title: {
            type: String,
            required: false,
            default: "This is title",
        },
        role: {
            type: String,
            required: false,
            default: "This is role",
        },
        descriptions: {
            type: Array,
            required: false,
            default: (): string[] => [
                "AAAAAAAAAAAAAAAAAA",
                "BBBBBBBBBBBBBBBBBB",
                "CCCCCCCCCCCCCCCCCC",
            ],
        },
        startDate: {
            type: String,
            required: false,
            default: "",
        },
        endDate: {
            type: String,
            required: false,
            default: "",
        },
        image: {
            type: String,
            required: false,
            default: "",
        },
        hideBullet: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    data() {
        return {
        };
    },
    computed: {
        startToEndText(): string {
            if (this.startDate === "") {
                return "";
            }
            if (this.endDate === "") {
                return `${this.startDate} - Present`;
            }
            if (this.startDate === this.endDate) {
                return this.startDate;
            }
            return `${this.startDate} - ${this.endDate}`;
        },
    },
});
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';

.experience {
    width: 100%;
}

.preview-image {
    width: 100%;
}
@media only screen and (max-width: 576px) {
}

@media only screen and (max-width: 768px) {

}
</style>
