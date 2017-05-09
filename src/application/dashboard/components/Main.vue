<template lang="html">
  <h1>Dashboard</h1>
</template>

<script>

import http from 'src/http'

export default {
  mounted () {
    http.get('http://pokeapi.co/api/v2/pokemon/1/')
      .then(response => response.data)
      .then(data => {
        console.log(data)
      })
  }
}

</script>

<style lang="css">
</style>
