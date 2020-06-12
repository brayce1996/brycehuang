<template>
    <section class="banner-container">
        <h1 class="title">
            Bryce Huang
        </h1>
        <h2 class="subtitle">
            Incomming Master Studuent @ UIUC MCS
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
    background: url("../assets/banner4.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .title {
        font-size: 9vw;
        color: $primary;
        text-shadow: 0px 1px 3px rgba(0, 0, 0, .8);
    }

    .subtitle {
        color: #d8f4ec;
        font-size: 2.5vw;
        text-shadow: 0px 1px 3px rgba(0, 0, 0, .3);
    }
}

@media only screen and (max-width: 600px) {
.banner-container {
    height: 120vw;
    background: url("../assets/mb_banner4.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .title {
        font-size: 15vw;
    }

    .subtitle {
        font-size: 4.2vw;
    }
}
}
</style>
