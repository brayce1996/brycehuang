<template>
    <div
        class="expereince"
    >
        <div class="text-area">
            <h1>{{ title }}</h1>
            <p>{{ role }}</p>
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
});
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';

.experience {
    width: 100%;
}
@media only screen and (max-width: 576px) {

}

@media only screen and (max-width: 768px) {

}
</style>
