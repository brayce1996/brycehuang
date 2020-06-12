<template>
    <b-navbar
        toggleable="lg"
        type="dark"
        variant="primary"
        fixed="top"
    >
        <b-navbar-brand
            to="/"
            class="brand"
        >
            Bryce Huang
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse
            id="nav-collapse"
            is-nav
        >
            <b-navbar-nav>
                <b-nav-item
                    v-scroll-to="'#Home'"
                    to="/"
                >
                    Home
                </b-nav-item>
                <b-nav-item
                    v-scroll-to="'#About'"
                    to="/"
                >
                    About
                </b-nav-item>
                <b-nav-item
                    v-scroll-to="'#Resume'"
                    to="/"
                >
                    Resume
                </b-nav-item>
                <b-nav-item
                    v-scroll-to="'#Contact'"
                    to="/"
                >
                    Contact
                </b-nav-item>
                <b-nav-item to="/blog">
                    Blog
                </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-button variant="outline-light">
                    DOWNLOAD MY FULL RESUME
                </b-button>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
});
</script>

<style lang="scss" scoped>

.brand {
    color: $name;
}
</style>
