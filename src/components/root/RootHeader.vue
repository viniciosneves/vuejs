<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/">Home</router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <router-link :to="{ path: 'auth' }" tag="li">
              <a>
                <span>Logar</span>
              </a>
            </router-link>
            <router-link :to="{ path: 'sales' }" tag="li">
              <a>
                <span>Sales</span>
              </a>
            </router-link>
            <router-link :to="{ path: 'quotes' }" tag="li">
              <a>
                <span>Quotes</span>
              </a>
            </router-link>
            </router-link>
            <router-link :to="{ path: 'costumers' }"  tag="li">
              <a>
                <span>Costumes</span>
              </a>
            </router-link>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form>
        </div>
      </div>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style>

  body {
    padding-top: 50px;
  }

  .navbar-inverse {
    background-color: #025ba7;
    border-color: #025ba7;
  }

</style>
