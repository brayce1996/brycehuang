<template>
    <section class="about-bg">
        <b-container class="about-container" fluid>
            <b-row class="justify-content-sm-center">
                <b-col
                    class="about-block"
                    xs="12"
                    sm="5"
                >
                    <h1>About Me</h1>
                    <div class="text-bg left-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur neque necessitatibus odit architecto debitis
                        officia saepe quos fuga perspiciatis totam rem exercitationem,
                        adipisci molestias in quod voluptas dolorem sequi natus.
                    </div>
                </b-col>
                <b-col
                    class="about-block"
                    xs="12"
                    sm="5"
                >
                    <h1>Quick ID</h1>
                    <div class="text-bg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur neque necessitatibus odit architecto debitis
                        officia saepe quos fuga perspiciatis totam rem exercitationem,
                        adipisci molestias in quod voluptas dolorem sequi natus.
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

.about-bg {
    background-color: $light;

    .about-container {
        .about-block {
            h1 {
                font-size: 3vw;
                margin-top: 3vw;
                color: $primary-light;
            }
            .text-bg {
                background-color: $primary-light;
                margin: 3vw;
                padding: 2vw;
                color: $light;
            }
        }
    }
}
@media only screen and (max-width: 600px) {
    $block-height: 100vw;
    .about-bg {
        .about-container {
            .about-block {

                h1 {
                    font-size: 7vw;
                    margin-top: 5vw;
                }

                .text-bg {
                    background-color: $primary-light;
                    margin: 5vw;
                    padding: 3vw;
                    color: $light;
                }
            }
        }
    }
}
</style>
