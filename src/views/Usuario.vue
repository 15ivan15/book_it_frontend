<template>
  <div class="usuario">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-4">
          <br /><br />
          <img
            alt="Bootstrap Image Preview"
            src="../assets/profile.png"
            class="rounded-circle"
          />
          <dl>
            <br />
            <dt>Nombre completo:</dt>
            <dd>{{ info.name }} {{ info.lastname }}</dd>
            <dt>Usuario:</dt>
            <dd>
              {{ info.usser }}
            </dd>
            <dt>Correo electrónico:</dt>
            <dd>{{ info.email }}</dd>
          </dl>
          <br />
          <b-button pill variant="danger" :to="{ name: 'eliminar' }"
            >Eliminar cuenta</b-button
          >
          <br /><br />
          <b-button pill variant="info" :to="{ name: 'actualizar' }"
            >Actualizar datos</b-button
          >
        </div>
        <div class="col-md-7"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Usuario",
  data: function () {
    return {
      user_: {
        usser: "none",
      },
      info: "",
    };
  },
  computed: {
    ...mapState(["is_auth"]),
  },
  methods: {
    ...mapMutations(["seguir", "salir"]),
  },
  created: function () {
    this.user_.usser = this.$route.params.usser;
    localStorage.setItem("user", this.user_.usser);
    var self = this;
    axios
      .get("https://book-it-backend.herokuapp.com/api/usuarios/" + self.user_.usser, {
        headers: {},
      })
      .then((result) => {
        this.info = result.data.data;
      })
      .catch((error) => {
        if (error.response.status == 404)
          alert("No se ha podido crear al usuario");
      });
  },
};
</script>
