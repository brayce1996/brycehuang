<template>
    <div class="home">
        <RainbowBanner id="Home" />
        <AboutMe id="About" />
        <WorkExperienceSection id="Work" />
        <EducationSection id="Education" />
        <ProjectSection id="Projects" />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import RainbowBanner from "@/components/RainbowBanner.vue";
import AboutMe from "@/components/AboutMe.vue";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection.vue";
import EducationSection from "@/components/sections/EducationSection.vue";
import ProjectSection from "@/components/sections/ProjectSection.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Home",
    components: {
        AboutMe,
        RainbowBanner,
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
