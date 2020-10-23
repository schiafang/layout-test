<template>
  <div id="app">
    <Navbar />
    <div class="main-container">
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="main-content">
        <router-view />
      </div>
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
  }
}
</script>

<style lang="scss" >
$main-color: #004989;
$background-blue: #2f3a4f;

body {
  margin: 0;
  width: 100%;
  background-color: $main-color;
}

.main-container {
  display: grid;
  grid-template-columns: 230px 1fr;
  height: 100vh;

  .sidebar {
    grid-column: 1 / 2;
    background-color: $background-blue;
  }

  .main-content {
    grid-column: 2 / 3;
    height: auto;
  }
}
</style>
