<template>
    <div class="home">
        <ImageBanner id="Home" />
        <AboutMe id="About" />
        <WorkExperience />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import ImageBanner from "@/components/ImageBanner.vue";
import AboutMe from "@/components/AboutMe.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Home",
    components: {
        AboutMe,
        ImageBanner,
        WorkExperience,
        Footer,
    },
};
</script>
