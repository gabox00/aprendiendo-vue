<template>
  <div class="hello">
    <h3>{{ title }} id: {{ this.id }}</h3>
    <button class="btn" @click="sumar()">+</button>
    <button class="btn" @click="restar()">-</button>
    <button class="btn btn-black" @click="redirect()">Redirigir a Home</button>
    <input type="text" v-model="textoReactivo">
    <span>El texto reactivo es el Siguiente: <strong>{{textoReactivo}}</strong></span>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  //HOOKS
  created() {
  },
  mounted() {
    this.id = this.$route.params.id
  },
  updated() {
    if(!this.id){
      this.id = 0;
      // eslint-disable-next-line no-console
      console.log(this.id);
    }
  },
  destroyed() {
  },
  methods: {
    sumar(){
      this.id++;
    },
    restar(){
      this.id--;
    },
    redirect(){
      this.$router.push("/home")
    }
  },
  data(){
    return {
      title: "Hola mundo desde MiComponente",
      id: Number,
      textoReactivo: ""
    }
  }
}
</script>

<style scoped>

</style>