  <template>
      <nav class="sidebar">
          <ul>
              <router-link :to="{ path: 'vendas' }" tag="li" class="side-item">
                <a>
                  <img src="/static/icons/sales.png">
                  <span>Vendas</span>
                </a>
              </router-link>
              <router-link :to="{ path: 'compras' }" tag="li" class="side-item">
                <a>
                  <img src="/static/icons/purchase.png">
                  <span>Compras</span>
                </a>
              </router-link>
              </router-link>
              <router-link :to="{ path: 'costumers' }"  tag="li" class="side-item">
                <a>
                  <img src="/static/icons/sales.png">
                  <span>Clientes</span>
                </a>
              </router-link>
          </ul>
      </nav>
  </template>

  <script>
      export default {

      }
  </script>

  <style>

      ul {
          padding: 0;
          margin: 0;
      }
      .sidebar {
          position: fixed;
          top: 51px;
          bottom: 0;
          left: 0;
          z-index: 1000;
          display: block;
          overflow-x: hidden;
          overflow-y: auto;
          background-color: #383838;
          border-right: 1px solid #eee;
          width: 80px;
      }

      .side-item a{
          display: block;
          color: #fff;
          text-decoration: none;
          font-size: 12px;
      }
      .side-item span{
          display: block;
      }
      .side-item {
          text-align: center;
          padding: 10px 0;

      }

      .side-item.active {
        background-color: #ff3437;
      }

  </style>
