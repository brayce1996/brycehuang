<template>
    <section class="banner-container ranbowlize">
        <h1 class="title ranbowlize">
            Bryce Huang
        </h1>
        <h2 class="subtitle">
            Software Engineer /
            <br>
            Incomming Master's Student in Computer Science @ UIUC
        </h2>

        <MyLinks class="my-link-wrapper" />
        <ProfileImage
            class="my-profile-image"
            alt-text="Bryce Huang"
            :src="require('@/assets/myProfileImage2.jpg')"
        />
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import MyLinks from "./MyLinks.vue";
import ProfileImage from "./ProfileImage.vue";

export default Vue.extend({
    components: {
        ProfileImage,
        MyLinks,
    },
    data() {
        return {
        };
    },
});
</script>

<style lang="scss" scoped>

.ranbowlize {
    background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
    background-size: 1800% 1800%;

    -webkit-animation: rainbow 30s ease infinite;
    -z-animation: rainbow 30s ease infinite;
    -o-animation: rainbow 30s ease infinite;
    animation: rainbow 30s ease infinite;

    @-webkit-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @-moz-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @-o-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
}

.banner-container {
    position: relative;
    height: 43vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
        font-size: 9vw;

        color: transparent;

        -webkit-background-clip: text;
        background-clip: text;
    }

    .subtitle {
        color: $primary;
        font-size: 2.5vw;
        margin-bottom: 3vw;
    }

    .my-link-wrapper {
        margin-bottom: 5vw;
    }

    .my-profile-image {
        position: absolute;
        bottom: -$profile-image-size-half;
        z-index: 1;
    }
}

@media only screen and (max-width: 600px) {
.ranbowlize {
    background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
    background-size: 1800% 900%;

    -webkit-animation: rainbow 30s ease infinite;
    -z-animation: rainbow 30s ease infinite;
    -o-animation: rainbow 30s ease infinite;
    animation: rainbow 30s ease infinite;

    @-webkit-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @-moz-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @-o-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
}

.banner-container {
    height: 160vw;
    justify-content: unset;

    .title {
        font-size: 13vw;
        margin-top: 21vw;
        margin-bottom: 5vw;
    }

    .subtitle {
        font-size: 4.6vw;
        margin-bottom: 10vw;
    }

    .my-link-wrapper {
        margin-bottom: 19vw;
    }

    .my-profile-image {
        position: relative;
        bottom: unset;
    }
}
}
</style>
