<template>
  <div class="login">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-4"></div>
            <br /><br /><br /><br /><br /><br /><br />
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
          </div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-12">
                  <h1 class="text-primary text-center">
                    Inicio de Sesión
                    <br /><br />
                  </h1>
                  <form role="form">
                    <div class="form-group">
                      <label for="usser" style="font-size: 150%">
                        Usuario
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="usser"
                        v-model="user_.usser"
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
                        v-model="user_.password"
                      />
                    </div>

                    <button
                      type="button"
                      class="btn btn-primary"
                      v-on:click="login"
                      variant="info"
                      @click="salir()"
                    >
                      Iniciar
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

                <b-button
                  variant="link"
                  @click="seguir()"
                  :to="{ name: 'inicio' }"
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
import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  name: "Login",
  data: function () {
    return {
      user_: {
        usser: "",
        password: "",
      },
      info: "",
      showDismissibleAlert: false,
    };
  },
  computed: {
    ...mapState(["is_auth"]),
  },
  methods: {
    ...mapMutations(["seguir", "salir"]),
    login: function () {
      this.showDismissibleAlert = true;
      var self = this;
      axios
        .post("https://book-it-backend.herokuapp.com/api/auth/login", self.user_, {
          headers: {},
        })
        .then((result) => {
          this.info = result.data.message;
          this.user_.usser = result.data.data.usser;
          let usser = this.user_.usser;
          let token = this.info;
          localStorage.setItem("token", token);
          this.$router.push({
            name: "usuario",
            params: { usser },
            headers: { token },
          });
        })
        .catch((error) => {
          if (error.response.status == 404)
            alert("No se ha podido crear al usuario");
        });
    },
  },
};
</script>

