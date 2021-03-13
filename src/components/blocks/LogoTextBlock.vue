<template>
    <div
        class="expereince"
    >
        <div class="text-area">
            <b-row class="justify-content-xs-center">
                <b-col
                    v-if="logo !== ''"
                    class="px-sm-3 px-0"
                    cols="2"
                >
                    <img
                        class="preview-image"
                        :src="logo"
                        :alt="title + ' logo'"
                    >
                </b-col>
                <b-col>
                    <h2>{{ title }}</h2>
                    <p>
                        {{ role }}
                        <span v-if="role && startToEndDateText">.</span>
                        <span v-if="startToEndDateText"> {{ startToEndDateText }}</span>
                    </p>
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
    name: "LogoTextBlock",
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
        logo: {
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
    },
});
</script>

<style lang="scss" scoped>
.experience {
    width: 100%;
}

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
            font-size: 4vw;
            font-weight: 700;
        }

        p, li {
            font-size: 4vw;
        }
    }
}
</style>
