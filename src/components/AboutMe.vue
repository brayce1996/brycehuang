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
                    md="6"
                    lg="5"
                >
                    <div class="text-area">
                        <h1>About Me</h1>
                        Hi, I am Hsin-Yu, or you can call me Bryce. I am interested in backend development and cloud infrastructure technology. I am actively seeking 2022 Software Engineer Intern.

                        <br><br>
                        I am pursuing a Master’s degree in Computer Science at University of Illinois Urbana-Champaign.
                        Prior to UIUC, I am co-founder of a startup company, QSticker, a company providing learning ability analysis services for students, where I built a SaaS web application with 1K daily active users based on Java, MongoDB and GCP.
                        Moreover, I collaborated with a non-profit organization to initiate the Rainform project, where he led a team of 3 people to create a web service using Firebase and Google APIs<br>
                    </div>
                </b-col>
                <b-col
                    class="about-block"
                    xs="12"
                    md="6"
                    lg="5"
                >
                    <div class="text-area">
                        <h1 class="hide-text">
                            Have a good day ;)
                        </h1>
                        <ul>
                            <li>Experienced in Javascript (expert), Java (proficient), Python (fluent), C++/C (fluent)</li>
                            <li>Familiar with modern web development stacks, such as Vue.js, Django, J2EE, Docker, Linux, AWS, and GCP</li>
                            <li>Interested in backend, cloud computing, distributed system and program security, crafting some projects at my leisure</li>
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
.hide-text {
    color: transparent !important;
}

.about-bg {
    background-color: $light;
    padding: 3vw 0;

    .about-container {
        .about-block {
            min-height: 20vw;
            display: flex;
            flex-direction: column;

            .text-area {
                background-color: $light;
                margin: 0 3vw;
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
@media only screen and (max-width: 576px) {
    .about-bg {
        padding: 10vw 0;
        .about-container {
            .about-block {

                .text-area {
                    background-color: transparent;
                    margin: 0 5vw;
                    padding: 3vw;
                    color: $primary-light;

                    h1 {
                        font-size: 7vw;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .hide-text {
        display: none;
    }
    .about-bg {
        padding: 5vw 0;
        .about-container {
            .about-block {
                min-height: 20vw;
            }
        }
    }
}
</style>
