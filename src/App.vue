<template>
  <div id="app">
    <Navbar />
    <div class="main-container">
      <transition name="expand">
        <Sidebar v-if="sidebarToggle" />
      </transition>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Navbar, Sidebar
  },
  data() {
    return {
      sidebarToggle: true,
    }
  },
  mounted() {
    this.$bus.$on('toggleSidebar', () => {
      this.sidebarToggle = !this.sidebarToggle
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/_base.scss';

.main-container {
  display: flex;
  margin-top: 60px;
  width: 100%;
}

.expand-enter-active {
  transition: all 0.5s ease-out;
}

.expand-enter,
.expand-leave-to {
  transform: translateX(-250px);
}
</style>
