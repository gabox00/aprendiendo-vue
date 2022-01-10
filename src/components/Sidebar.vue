<template>
  <aside id="sidebar">
    <Todo></Todo>
    <Search></Search>
  </aside>
</template>

<script>

import Todo from "@/components/Todo";
import Search from "@/components/Search";

export default {
  name: "Sidebar",
  components: {
    Todo,
    Search
  }

}
</script>

<style scoped>

</style>