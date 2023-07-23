<template>
  <div class="login-container">
    <h2 class="welcome">Welcome</h2>
    <div class="login-form">
      <input type="text" v-model="email" placeholder="Enter Email" class="input-field" />
      <input type="password" v-model="password" placeholder="Enter Password" class="input-field" />
      <button v-on:click="login" class="login-button">Login</button>
      <button v-on:click="showRegisterForm = true" class="register-button">Register</button>
    </div>
    <div class="overlay" v-if="showRegisterForm">
      <div class="card">
        <h3>Register</h3>
        <input type="text" v-model="registerName" placeholder="Enter Name" class="input-field" />
        <input type="text" v-model="registerEmail" placeholder="Enter Email" class="input-field" />
        <input type="password" v-model="registerPassword" placeholder="Enter Password" class="input-field" />
        <input type="password" v-model="registerConfPassword" placeholder="Confirm Password" class="input-field" />
        <div class="button-container">
          <button v-on:click="register" class="signup-button">Register</button>
          <button v-on:click="showRegisterForm = false" class="close-button">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      showRegisterForm: false,
      registerName: "",
      registerEmail: "",
      registerPassword: "",
      registerConfPassword: ""
    };
  },
  methods: {
    login() {
      const userData = {
        email: this.email,
        password: this.password
      };

      axios.post("https://backend-uas.vercel.app/user/login", userData)
        .then(response => {
          // Save the token to localStorage
                const token = response.data.token;
                localStorage.setItem('token', token);

          this.$router.push("/dashboard");
        })
        .catch(error => {
          console.error("Login error:", error);
          // Tangani kesalahan atau tampilkan pesan kesalahan kepada pengguna
        });
    },
    register() {
      if (this.registerPassword !== this.registerConfPassword) {
        alert("Password and Confirm Password do not match");
        return;
      }

      const userData = {
        nama: this.registerName,
        email: this.registerEmail,
        password: this.registerPassword,
        confpassword: this.registerConfPassword
      };

      axios.post("https://backend-uas.vercel.app/user/register", userData)
        .then(response => {
          console.log("Register successful:", response.data);
          // Lakukan tindakan setelah berhasil register, misalnya menampilkan pesan sukses
          alert("Registration successful");
          // Reset form
          this.registerName = "";
          this.registerEmail = "";
          this.registerPassword = "";
          this.registerConfPassword = "";
          // Tutup form registrasi
          this.showRegisterForm = false;
        })
        .catch(error => {
          console.error("Register error:", error);
          // Tangani kesalahan atau tampilkan pesan kesalahan kepada pengguna
          alert("Registration failed");
        });
    }
  }
};
</script>

<style>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('https://sc04.alicdn.com/kf/Hd3ed56c9f62b4eed9344ffebaff61dbfY.jpg') no-repeat center center fixed;
  background-size: cover;
  flex-direction: column;
}

.welcome {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.input-field {
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #9c2e72;
  border-radius: 4px;
  font-size: 1rem;
}

.login-button {
  padding: 0.5rem 1rem;
  background-color: #aa4ae2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.login-button:hover {
  background-color: #3877c6;
}

.register-button {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #ddd;
  color: #333;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.register-button:hover {
  background-color: #ccc;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin-bottom: 1rem;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.signup-button {
  padding: 0.5rem 1rem;
  background-color: #aa4ae2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.signup-button:hover {
  background-color: #3877c6;
}

.close-button {
  padding: 0.5rem 1rem;
  background-color: #ccc;
  color: #333;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.close-button:hover {
  background-color: #999;
}
</style>
