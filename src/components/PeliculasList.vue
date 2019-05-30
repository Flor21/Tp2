<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Lista de Peliculas</h4>
      <ul>
        <li v-for="(pelicula, index) in peliculas" :key="index">
          <router-link :to="{
            name: 'pelicula-detalles',
            params: { pelicula: pelicula, id: pelicula._id }
            }">
            {{pelicula.nombre}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
     <router-view @refreshData="refreshList"></router-view>
    </div>
  </div>
</template>
 
<script>
import http from "../http-common";
import axios from "axios";
 
export default {
  name: "peliculas-list",
  data() {
    return {
      peliculas: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrievePeliculas() {
      http
        .get("/peliculas")
        .then(response => {
          this.peliculas = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    forzarActualizacion(){
      this.$forceUpdate();
    },
    //esto es para probar sin la api
    get(){
      axios.get("Pelicula.json")
      .then(response => {
        this.peliculas=response.data
      })
    },
    refreshList() {
      this.retrievePeliculas();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrievePeliculas();
    this.get();
  }
};
</script>
 
<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>