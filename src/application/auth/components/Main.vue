<template lang="html">
  <div>
    <h1>Auth</h1>
    <Login/>
  </div>
</template>

<script>

  import Login from './forms/Login'
  import { mapGetters } from 'vuex'

  export default {
    name: 'auth',
    components: { Login },
    computed: {
      ...mapGetters(['isLogged'])
    }
  }
</script>

<style lang="css">
</style>
