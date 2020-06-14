<template>
    <div class="links-container">
        <a
            href="https://github.com/brayce1996"
            target="_blank"
            :class="{ light: iconStyle !== 'dark' }"
        >
            <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
            href="https://www.facebook.com/bryce.hy.huang/"
            target="_blank"
            :class="{ light: iconStyle !== 'dark' }"
        >
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </a>
        <a
            href="https://www.linkedin.com/in/hsinyuhuang/"
            target="_blank"
            :class="{ light: iconStyle !== 'dark' }"
        >
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </a>
        <a
            href="http://brycehuang.com/static/Bryce_Huang.pdf"
            target="_blank"
            :class="{ light: iconStyle !== 'dark' }"
        >
            <font-awesome-icon :icon="['fas', 'file-alt']" />
        </a>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        iconStyle: {
            type: String,
            default: "dark",
            required: false,
        },
    },
});
</script>

<style lang="scss" scoped>
.links-container {
    a {
        margin: 0 16px;
        font-size: 30px;
        &.light {
            color: $light;
            &:hover {
                color: $secondary;
            }
        }
        color: $primary;
        &:hover {
            color: $primary-light;
        }

    }
}

@media only screen and (max-width: 576px) {
    .links-container {
        a {
            margin: 0 4vw;
            font-size: 6vw;
        }
    }
}

</style>
