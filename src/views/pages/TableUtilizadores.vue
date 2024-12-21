<template>
  <div>
    <TopMenu class="top-menu"/>
    <SideBar class="sidebar app-layout"/>
    <div class="conteiner">
      <CustomTable />
    </div>
  </div>
</template>

<script>
import TopMenu from '@/views/components/topMenu/TopMenu.vue'
import SideBar from '@/views/components/sideBar/SideBar.vue'
import CustomTable from '@/views/components/customTable/CustomTable.vue'
export default {
  name: 'TableUtilizadores',
  components: {
    TopMenu,
    SideBar,
    CustomTable,
  },
};
</script>