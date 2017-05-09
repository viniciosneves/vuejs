<template lang="html">
  <section>

    <h1>Clientes</h1>

    <Grid :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery"></Grid>

  </section>
</template>

<script>

import Grid from '../../../components/grid/Grid.vue'

export default {
  name: 'costumers',
  components: { Grid },
  data: function () {
    return {
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ]
    }
  }

}

</script>

<style lang="css">

</style>
