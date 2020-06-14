<template>
    <section class="about-bg">
        <b-container
            class="about-container"
            fluid
        >
            <b-row class="justify-content-sm-center">
                <b-col
                    class="about-block"
                    xs="12"
                    sm="5"
                >
                    <div class="text-area">
                        <h1>About Me</h1>
                        Hi there, this is Bryce, an incoming Master's Student in Computer Science at UIUC in Fall 2020.<br><br>
                        I'm seeking 2021 summer software engineer intern.<br>
                    </div>
                </b-col>
                <b-col
                    class="about-block"
                    xs="12"
                    sm="5"
                >
                    <div class="text-area">
                        <h1 class="hide-text">
                            Hi, How are you?
                        </h1>
                        <ul>
                            <li>Experienced in Software development in C++/C, Python, Javascript</li>
                            <li>Familiar with modern web development stacks, such as Vue.js, Django, Docker, Linux, and AWS</li>
                            <li>Interested in web security and reverse engineering, playing CTFs at my leisure</li>
                        </ul>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    components: {
    },
    data() {
        return {
        };
    },
});
</script>

<style lang="scss" scoped>

$block-height: 30vw;

.hide-text {
    color: transparent !important;
}

.about-bg {
    background-color: $light;

    .about-container {
        .about-block {
            min-height: 30vw;
            display: flex;
            flex-direction: column;

            .text-area {
                background-color: $light;
                margin: 3vw;
                padding: 2vw;
                color: $primary-light;
                text-align: left;
                flex: 1;

                h1 {
                    font-size: 3vw;
                    color: $primary-light;
                }

                ul {
                    padding-inline-start: 0;
                }
            }
        }
    }
}
@media only screen and (max-width: 600px) {
    $block-height: 100vw;
    .about-bg {
        .about-container {
            .about-block {

                .text-area {
                    background-color: transparent;
                    margin: 5vw;
                    padding: 3vw;
                    color: $primary-light;

                    h1 {
                        font-size: 7vw;

                        &.hide-text {
                            display: none;
                        }
                    }
                }
            }
        }
    }
}
</style>
