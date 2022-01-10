<template>
  <header class="header">
    <div class="header-logo">
      <img class="logo" alt="Vue logo" src="../assets/logo.png">
      <span id="brand">
          <strong>Curso</strong>Vue
      </span>
    </div>
    <nav id="header-menu">
      <ul>
        <li>
          <router-link class="btn" active-class="active" to="/home">Inicio</router-link>
        </li>
        <li>
          <router-link class="btn" active-class="active" to="/blog">Blog</router-link>
        </li>
        <li>
          <router-link class="btn" active-class="active" to="/formulario">Formulario</router-link>
        </li>
        <li>
          <router-link class="btn" active-class="active" to="/MiComponente">Pagina 1</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>