<template>
    <div
        class="profile-image-container"
    >
        <img
            :src="src"
            :alt="altText"
            class="profile-image"
        >
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        src: {
            type: String,
            required: true,
        },
        altText: {
            type: String,
            default: "My Profile Image",
            required: false,
        },
        size: {
            type: Number,
            default: 10,
            required: false,
        },
    },
});
</script>

<style lang="scss" scoped>
.profile-image-container {
    background-color: $light;
    border-radius: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: $profile-image-size;
    height: $profile-image-size;

    .profile-image {
        background-color: $primary-light;
        border-radius: 100vw;
        object-fit: cover;
        width: 95%;
        height: 95%;
    }

}

@media only screen and (max-width: 600px) {
    .profile-image-container {
        width: $profile-image-size-sm;
        height: $profile-image-size-sm;
        .profile-image {
            width: 90%;
            height: 90%;
        }
    }
}
</style>
