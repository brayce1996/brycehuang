<template>
    <div id="app">
        <NavBar />
        <router-view class="router-view" />
    </div>
</template>

<script lang='ts'>
import Vue from "vue";
import NavBar from "./components/NavBar.vue";

export default Vue.extend({
    components: {
        NavBar,
    },
});

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router-view {
  margin-top: $navbar-height;
}
</style>
