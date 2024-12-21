<template>
  <div>
    <TopMenu class="top-menu"/>
    <SideBar class="sidebar app-layout"/>
    <div class="conteiner">
      <TipoUtilizador />
    </div>
    
  </div>
</template>
<script>
import TopMenu from '@/views/components/topMenu/TopMenu.vue'
import SideBar from '@/views/components/sideBar/SideBar.vue'
import TipoUtilizador from '@/views/components/tipoUtilizador/TipoUtilizador.vue'
export default {
  name: 'FormUtilizador',
  components: {
    TopMenu,
    SideBar,
    TipoUtilizador,
  },
};
</script>