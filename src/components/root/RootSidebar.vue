  <template>
      <nav class="sidebar">
          <ul>
              <router-link :to="{ path: 'sales' }" tag="li" class="side-item">
                <a>
                  <i class="icon-bar-chart icon-2x"></i>
                  <span>Sales</span>
                </a>
              </router-link>
              <router-link :to="{ path: 'quotes' }" tag="li" class="side-item">
                <a>
                  <i class="icon-money icon-2x"></i>
                  <span>Quotes</span>
                </a>
              </router-link>
              </router-link>
              <router-link :to="{ path: 'costumers' }"  tag="li" class="side-item">
                <a>
                  <i class="icon-group icon-2x"></i>
                  <span>Costumers</span>
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
