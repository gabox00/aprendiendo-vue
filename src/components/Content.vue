<template>
  <div id="content">
    <div id="main-content">
      <router-view></router-view>
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>

import Sidebar from "@/components/Sidebar";

export default {
  name: "Content",
  components: {
    Sidebar
  }
}
</script>

<style scoped>

</style>