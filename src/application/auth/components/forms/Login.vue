<template lang="html">

  <div class="row">
    <div class="col-md-6">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" v-model="user.email" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" v-model="user.password" placeholder="Password">
        </div>
        <button type="submit" @click="doLogin" class="btn btn-default" :disabled="!formIsValid">Submit</button>
      </form>
    </div>
  </div>

</template>

<script>

import { isEmpty } from 'lodash'
import { mapActions } from 'vuex'

export default {

  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    formIsValid () {
      return !isEmpty(this.user.email) && !isEmpty(this.user.password)
    }
  },
  methods: {
    ...mapActions(['attemptLogin']),
    doLogin (ev) {
      ev.preventDefault()
      const user = this.user
      this.attemptLogin(...user)
        .then(() => {
          this.$router.push('/')
        })
    }
  }

}
</script>

<style lang="css">
</style>
