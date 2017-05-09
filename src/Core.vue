<template>
  <div id="app">

    <root-header></root-header>

    <div class="row">

      <root-sidebar></root-sidebar>

      <div id="main">
        <router-view></router-view>
      </div>

    </div>

  </div>
</template>

<script>

import RootHeader from './components/root/RootHeader.vue'
import RootSidebar from './components/root/RootSidebar.vue'

export default {
  name: 'nestor',
  components: { RootHeader, RootSidebar }
}

</script>

<style  lang="sass" >

  $bootstrap-sass-asset-helper: true;
  @import "~bootstrap-sass/assets/stylesheets/bootstrap";
  @import "assets/sass/app.scss";

</style>
