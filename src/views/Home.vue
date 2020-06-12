<template>
    <div class="home">
        <ImageBanner id="Home" />
        <AboutMe id="About" />
    </div>
</template>

<script>
// @ is an alias to /src
import ImageBanner from "@/components/ImageBanner.vue";
import AboutMe from "@/components/AboutMe.vue";

export default {
    name: "Home",
    components: {
        AboutMe,
        ImageBanner,
    },
};
</script>
