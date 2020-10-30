<template>
    <div class="home">
        <ImageBanner id="Home" />
        <AboutMe id="About" />
        <ExperienceSection
            section-title="Work Experience"
            :experience-list="WorkExperienceContent"
        />
        <ExperienceSection
            section-title="Education"
            :experience-list="EducationContent"
        />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import ImageBanner from "@/components/ImageBanner.vue";
import AboutMe from "@/components/AboutMe.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import Footer from "@/components/Footer.vue";

import WorkExperienceContent from "@/assets/contents/WorkExperienceContent";
import EducationContent from "@/assets/contents/EducationContent";

export default {
    name: "Home",
    components: {
        AboutMe,
        ImageBanner,
        ExperienceSection,
        Footer,
    },
    data() {
        return {
            WorkExperienceContent,
            EducationContent,
        };
    },
};
</script>
