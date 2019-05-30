import Vue from "vue";
import Router from "vue-router";
import PeliculasList from "./components/PeliculasList.vue";
import AgregarPelicula from "./components/AgregarPelicula.vue";
import BusquedaPelicula from "./components/BusquedaPelicula.vue";
import Pelicula from "./components/Pelicula.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "peliculas",
        alias: "/pelicula",
        component: PeliculasList,
        children:[
            {
                path: "/pelicula/:id",
                name: "pelicula-detalles",
                component: Pelicula,
                props: true
            }
        ]
    },
    {
        path: "/agregar",
        name: "agregar",
        component: AgregarPelicula
    },
    {
        path: "/buscar",
        name: "buscar",
        component: BusquedaPelicula
    }
    ]
});