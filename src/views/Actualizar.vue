<template>
  <div class="actualizar">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-4"></div>
            <br /><br /><br /><br />
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
          </div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-12">
                  <h1 class="text-primary text-center">
                    Actualizar Datos
                    <br />
                  </h1>
                  <form role="form">
                    <div class="form-group">
                      <label for="name" style="font-size: 150%"> Nombre </label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Sergio"
                        required
                        v-model="user_.name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="lastname" style="font-size: 150%">
                        Apellido
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastname"
                        placeholder="Montilla"
                        required
                        v-model="user_.lastname"
                      />
                    </div>
                    <div class="form-group">
                      <label for="password" style="font-size: 150%">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="*************"
                        required
                        v-model="user_.password"
                      />
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      variant="info"
                      v-on:click="actualiza"
                      @click="showDismissibleAlert = true"
                    >
                      Actualizar
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-4"></div>
          </div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <br /><br />
              <b-alert
                variant="info"
                dismissible
                fade
                :show="showDismissibleAlert"
                @dismissed="showDismissibleAlert = false"
              >
                {{ info }}
                <b-button variant="link" :to="{ name: 'usuario' }"
                  >Aceptar</b-button
                >
              </b-alert>
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Actualizar",
  data: function () {
    return {
      user_: {
        usser: "",
        name: "",
        lastname: "",
        password: "",
      },
      info: "",
      showDismissibleAlert: false,
    };
  },
  methods: {
    actualiza: function () {
      this.user_.usser = this.$route.params.usser;
      var self = this;
      axios
        .put(
          "https://book-it-backend.herokuapp.com/api/usuarios/" + self.user_.usser,
          this.user_,
          {
            headers: {},
          }
        )
        .then((result) => {
          this.info = result.data.message;
        })
        .catch((error) => {
          if (error.response.status == 404)
            alert("No se ha podido crear al usuario");
        });
    },
  },
};
</script>