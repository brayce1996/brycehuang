<template>
    <div class="home">
        <ImageBanner id="Home" />
        <AboutMe id="About" />
        <WorkExperienceSection id="Work" />
        <EducationSection id="Education" />
        <ProjectSection id="Projects" />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import ImageBanner from "@/components/ImageBanner.vue";
import AboutMe from "@/components/AboutMe.vue";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection.vue";
import EducationSection from "@/components/sections/EducationSection.vue";
import ProjectSection from "@/components/sections/ProjectSection.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Home",
    components: {
        AboutMe,
        ImageBanner,
        WorkExperienceSection,
        EducationSection,
        ProjectSection,
        Footer,
    },
    data() {
        return {
        };
    },
};
</script>
