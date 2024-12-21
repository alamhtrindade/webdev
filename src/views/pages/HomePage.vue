<template>
  <div>
    <TopMenu class="top-menu"/>
    <SideBar class="sidebar app-layout"/>
    <div class="conteiner">
      <h1 class="mt-5 px-5 title-page"> Bem-vindo </h1>
    </div>
  </div>
</template>

<script>
import TopMenu from '@/views/components/topMenu/TopMenu.vue'
import SideBar from '@/views/components/sideBar/SideBar.vue'
export default {
  name: 'HomePage',
  components: {
    TopMenu,
    SideBar,
  }
};
</script>