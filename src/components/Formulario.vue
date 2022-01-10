<template>
  <div id="formulario">
    <h2>Formulario</h2>
    <div class="center">
      <form @submit.prevent="mostrarNombre()">
        <div class="formulario-item">
          <label for="nombre">Nombre:</label>
          <input type="text" name="nombre" v-model="user.nombre"/>
          <div class="error" v-if="submitted && !$v.user.nombre.required">El campo es requerido</div>
          <div class="error" v-if="submitted && !$v.user.nombre.minLength">Mínimo 2 letras</div>
        </div>
        <div class="formulario-item">
          <label for="apellidos">Apellidos:</label>
          <input type="text" name="apellidos" v-model="user.apellidos"/>
          <div class="error" v-if="submitted && !$v.user.apellidos.required">El campo es requerido</div>
          <div class="error" v-if="submitted && !$v.user.apellidos.minLength">Mínimo 2 letras</div>
        </div>
        <div class="formulario-item">
          <label for="biografia">Biografía:</label>
          <textarea name="biografia" v-model="user.biografia"></textarea>
          <div class="error" v-if="submitted && !$v.user.biografia.required">El campo es requerido</div>
          <div class="error" v-if="submitted && !$v.user.biografia.minLength">Mínimo 10 letras</div>
        </div>
        <div class="radio-btns">
          <div class="radio-item">
            <input type="radio" name="hombre" value="hombre" v-model="user.sexo"/>
            <label for="hombre">Hombre</label>
          </div>
          <div class="radio-item">
            <input type="radio" name="mujer" value="mujer" v-model="user.sexo"/>
            <label for="mujer">Mujer</label>
          </div>
          <div class="radio-item">
            <input type="radio" name="otro" value="otro" v-model="user.sexo"/>
            <label for="otro">Otro</label>
          </div>
        </div>
        <button class="btn btn-green">Enviar</button>
      </form>
    </div>
    <p v-if="user.nombre && user.apellidos" id="formulario-result">{{user.nombre}} {{user.apellidos}}</p>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators"

export default {
  name: "Formulario",
  validations: {
    user:{
      nombre: {
        required,
        minLength: minLength(2)
      },
      apellidos: {
        required,
        minLength: minLength(2)
      },
      biografia: {
        required,
        minLength: minLength(10)
      }
    }
  },
  methods: {
    mostrarNombre(){
      this.submitted = true
      // eslint-disable-next-line no-console
      console.log(this.user)

      this.$v.$touch();
      if(this.$v.$invalid){
        return false
      }

      alert("validación pasada")
    }
  },
  data(){
    return {
      user: {
        nombre: "",
        apellidos: "",
        biografia: "",
        sexo: ""
      },
      submitted: false
    }
  }
}
</script>

<style scoped>

</style>