<template>
    <section class="banner-container rainbowlize bg">
        <h1 class="title rainbowlize word">
            Bryce Huang
        </h1>
        <h2 class="subtitle">
            Software Engineer | Master of CS @ UIUC
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

.rainbowlize {
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

.rainbowlize.bg {
    background: linear-gradient(124deg, #4FA3F8, #01BAEF, #1DDDE8, #33DDAA,#1DDDE8, #01BAEF, #4FA3F8);
    background-size: 1800% 1800%;
}

.rainbowlize.word {
    background: linear-gradient(124deg, $primary, $primary-light, #5F8DEB, #268AE7,#33DDAA, #268AE7, #5F8DEB, $primary-light, $primary );
    background-size: 1800% 1800%;
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

        -webkit-background-clip: text !important;
        background-clip: text !important;
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
.rainbowlize.bg {
    background: linear-gradient(124deg, #4FA3F8, #01BAEF, #1DDDE8, #33DDAA,#1DDDE8, #01BAEF, #4FA3F8);
    background-size: 1800% 900%;
}

.rainbowlize.word {
    background: linear-gradient(124deg, $primary, $primary-light, #5F8DEB, #268AE7,#33DDAA, #268AE7, #5F8DEB, $primary-light, $primary );
    background-size: 1800% 900%;
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
