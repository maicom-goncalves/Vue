<template>
  <div>
    <div class="topo">
    </div>
    <div class="login">
      <span>
        <img src="./img/login.png" />
        </span>
      <h2><b>LOGIN</b></h2>
      <input type="text" placeholder="Email" v-model="email" />
      <br />
      <input type="password" placeholder="Senha" v-model="senha" />
      <br />
      <div class="btn-login">
        <button @click="login">
          <b>ENTRAR</b>
        </button>
      </div>
    </div>
    <div class="errado" v-show="errado">
      <p><b>Senha ou Email que foram fornecidas são incorretas.</b></p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      senha: "",
      errado: false,
    };
  },
  methods: {
    login: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.senha)
        .then(
          (user) => {
            this.$router.replace("inicio");
            console.log(user.email);
          },
          (err) => {
            console.log(err);

            this.errado = true;
            this.limpaForm();
          }
        );
    },
    limpaForm() {
      (this.email = ""), (this.senha = "");
    },
  },
};
</script>

<style scoped>
.login {
  margin: 2% 18%;
  border-radius: 23px;
  background-color: #f1f0eabb;
  border: 1px solid #dfded8;
  box-shadow: 20px 20px 50px 15px grey;
  width: 47%;
  height: 26%;
  padding: 4% 6%;
  text-align: center;
}
.topo {
  text-align: center;
  margin-top: 5%;
}
img {
  width: 15%;
  height: 10%;
}
input {
  margin: 10px 2px;
  width: 75%;
  padding: 25px;
  font-size: larger;
  border-radius: 5px;
}

button {
  font-family: "Roboto", sans-serif;
  background-color: #0ABAB5;
  border: 1px solid #0ABAB5;
  box-shadow: 1px 2px #096b68;
  outline: 0;
  border-radius: 5px;
  padding: 25px;
  color: #fff;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  margin: 10px 2px;
  width: 82%;
  text-align: center;
}
p {
  margin-top: 20px;
  font-size: 33px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
.errado {
  color: red;
  text-align: center;
}
@media screen and (max-width: 600px) {
  img {
    width: 65%;
    height: auto;
  }
  .login {
    margin: 2% 1%;
    text-align: center;
    padding: 3% 5%;
    width: 88%;
  }
  input {
    margin: 1% 1%;
    width: 98%;
    height: 30%;
    padding: 1%;
    border-radius: 5px;
    font-size: x-large;
  }
  button {
    border: 1px;
    padding: 1%;
    width: 95%;
    height: auto;
    margin: 4% 1%;
    font-size: 3.5vh;
  }
}
</style>