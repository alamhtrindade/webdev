<template>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="/">
            <img :src="image"  alt="Logo Web Dev" class="py-1 px-3"/>
        </b-navbar-brand>
    </b-navbar>
</template>
<script>
export default {
  name: 'TopMenu',

  data() {
    return {
      image: require('@/assets/LOGO-WDR.png'),
    };
  },

};
</script>