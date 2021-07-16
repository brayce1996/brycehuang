<template>
    <section class="banner-container">
        <video
            class="video-bg"
            src="@/assets/banner5.mp4"
            autoplay
            muted
            loop
        />
        <h1 class="title">
            Bryce Huang
        </h1>
        <h2 class="subtitle">
            Incoming Master Studuent @ UIUC MCS
        </h2>
    </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
});
</script>

<style lang="scss" scoped>
.banner-container {
    position: relative;
    height: 52vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .video-bg {
        position: absolute;
        top: 0;
        min-width: 100%;
        min-height: 100%;
        z-index: -1;
    }

    .title {
        font-size: 9vw;
        color: $secondary;
    }

    .subtitle {
        color: #d8f4ec;
        font-size: 2.5vw;
    }
}

@media only screen and (max-width: 600px) {
.banner-container {
    height: 90vw;

    .title {
        font-size: 15vw;
    }

    .subtitle {
        font-size: 4.2vw;
    }
}
}
</style>
