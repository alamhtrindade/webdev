<template>
    <b-sidebar 
        id="sidebar-footer"
        aria-label="Sidebar"
        no-header
        shadow
        v-model="isSidebarVisible"
        bg-variant="dark"
        text-variant="light"
    >
      <template #footer>
       <div class="d-flex bg-dark text-light align-items-center footer-custom">
        <strong class="mr-auto">2019® Premium-minds.com</strong>
       </div>
      </template>
      <div class="custom-container">
        <b-nav vertical class="custom-nav">
            <b-nav-item>
              <div class="custom-font">
                <router-link to="/" class="no-decoration" active-class="route-active" exact>
                  Início
                </router-link>
               </div>
            </b-nav-item>
            <b-nav-item >
              <div class="custom-font"> 
                <router-link to="/utilizadores" class="no-decoration" active-class="route-active" exact>
                  Todos Utilizadores
                </router-link>
              </div>
            </b-nav-item>
            <b-nav-item>
              <div class="custom-font"> 
                <router-link to="/utilizador" class="no-decoration" active-class="route-active" exact>
                  Utilizador
                </router-link>
              </div>
            </b-nav-item>
            <b-nav-item >
              <div class="custom-font"> 
                <router-link to="/meus-dados" class="no-decoration" active-class="route-active" exact>
                  Marcus Tremer
                </router-link>
              </div>
            </b-nav-item>
        </b-nav>
      </div>
    </b-sidebar>
</template>

<script>
export default {
  name: 'SideBar',

  data() {
    return {
      isSidebarVisible: true,
    };
  },
};
</script>

<style>
.no-decoration{
  text-decoration: none;
  color: inherit;
}
.route-active{
  font-weight: 600;
}
</style>