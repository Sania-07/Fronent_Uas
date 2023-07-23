<template>
  <div class="home-container">
    <header class="header">
      <h1 class="header-title">Lotso_Bracalet</h1>
    </header>
    <div class="image-container">
      <img src="https://lzd-img-global.slatic.net/g/p/e3152d1c2ebaca490379fcad4da5ae90.jpg_1200x1200q80.jpg_.webp" alt="Bracelet Image" class="home-image">
    </div>
    <div class="content-container">
      <p class="home-description"><strong>Temukan keindahan dan keunikan dalam setiap helai manik-manik yang terjalin dengan cinta dan keahlian. Dapatkan gelang manik-manik berkualitas tinggi dengan desain eksklusif hanya di toko kami.</strong></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  mounted() {
    const token = localStorage.getItem('token');
    console.log(token);

    if (!token) {
      this.$router.push("/login");
    }

    axios.get('https://api.example.com/data')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
</script>

<style>
.home-container {
  padding: 6% 25rem;
  text-align: center;
  background-image: url('https://lzd-img-global.slatic.net/g/p/15a88f9772360d2a0fe32f74a370aa91.jpg_720x720q80.jpg_.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.header {
  background-color: #4a90e2;
  padding: 1rem;
}

.header-title {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: #fff;
}

.image-container {
  width: 100%;
  height: 0;
  padding-bottom: 60%; /* Adjust this value to change the aspect ratio */
  position: relative;
  overflow: hidden;
}

.home-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.content-container {
  margin-top: 2rem;
}

.home-description {
  font-size: 1rem;
  color: #f6f6f7;
  margin-bottom: 2rem;
}
</style>
