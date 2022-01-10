<template>
  <div id="app">
    <Header></Header>
    <Slider title="Aprendiendo Vue"></Slider>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MiComponente from "@/components/MiComponente";

import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Content,
    Footer
    // MiComponente,
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

@import "./assets/css/styles.css";
</style>
