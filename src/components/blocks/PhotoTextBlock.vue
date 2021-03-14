<template>
    <div class="expereince">
        <div class="text-area">
            <b-row class="justify-content-xs-center">
                <b-col
                    class="py-sm-0 py-3"
                    sm="5"
                    cols="12"
                >
                    <img
                        class="preview-image"
                        :src="photo"
                        :alt="title"
                    >
                </b-col>
                <b-col>
                    <h2><a :href="mainLink">{{ title }}</a></h2>
                    <p class="m-0">
                        {{ role }}
                        <span v-if="role && startToEndDateText">.</span>
                        <span v-if="startToEndDateText"> {{ startToEndDateText }}</span>
                    </p>
                    <div class="tags-wrapper mb-3">
                        <b-badge
                            v-for="(val, key) in tags"
                            :key="key"
                            variant="primary-light"
                            class="mr-2"
                        >
                            {{ val }}
                        </b-badge>
                    </div>
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
                    <div class="links-wrapper">
                        <a
                            v-for="(link, key) in links"
                            :key="key"
                            :href="link.url"
                            class="mr-2"
                        >{{ link.label }}</a>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script lang="ts">
import { LinkModel } from "@/assets/contents/ProjectContent";
import Vue from "vue";

export default Vue.extend({
    name: "PhotoTextBlock",
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
        photo: {
            type: String,
            required: true,
        },
        links: {
            type: Array as () => Array<LinkModel>,
            required: false,
            default: (): LinkModel[] => [],
        },
        tags: {
            type: Array as () => Array<string>,
            required: false,
            default: (): string[] => [],
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
        startToEndDateText(): string {
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
        mainLink(): string {
            if (this.links.length > 0) return this.links[0].url;
            return "#";
        },
    },
});
</script>

<style lang="scss" scoped>

.preview-image {
    width: 100%;
    border-radius: 10px;
}

.text-area {
    background-color: transparent;
    margin: 0 3vw;
    padding: 2vw;
    color: $primary-light;
    text-align: left;
    flex: 1;

    h2 {
        font-size: 25px;
        color: $primary-light;
    }

    ul {
        padding-inline-start: 0;
        list-style-position: inside;
    }

    .links-wrapper {
        a {
            color: $link;
        }
    }

    ul.hide-bullet {
        list-style-type: none;
    }
}

@media only screen and (max-width: 768px) {
    .text-area {
        h2 {
            font-weight: 700;
        }
    }
}

@media only screen and (max-width: 576px) {
    .text-area {
        background-color: transparent;
        margin: 0 5vw;
        padding: 3vw;
        color: $primary-light;

        h2 {
            font-size: 5vw;
            font-weight: 700;
        }

        p, li {
            font-size: 4vw;
        }
    }
}
</style>
