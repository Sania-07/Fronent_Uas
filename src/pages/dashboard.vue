<template>
  <div class="home-container">
    <div class="image-container">
      <img src="https://lzd-img-global.slatic.net/g/p/e3152d1c2ebaca490379fcad4da5ae90.jpg_1200x1200q80.jpg_.webp" alt="Hotel Image" class="home-image">
    </div>
    <h3 class="home-title">Lotso_Bracalet</h3>
    <p><strong>Temukan keindahan dan keunikan dalam setiap helai manik-manik yang terjalin dengan cinta dan keahlian. Dapatkan gelang manik-manik berkualitas tinggi dengan desain eksklusif hanya di toko kami</strong></p>
  </div>
</template>

<style>
.home-container {
  padding: 8% 26rem;
  text-align: center;
  background-image: url('https://lzd-img-global.slatic.net/g/p/15a88f9772360d2a0fe32f74a370aa91.jpg_720x720q80.jpg_.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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

.home-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #f6f8fc;
}

.home-description {
  font-size: 1rem;
  color: #f6f6f7;
  margin-bottom: 2rem;
}

.sub-cats {
  transform: translate3d(0px, 0px, 0px);
  transition-duration: 0ms;
}

.sub-cat {
  width: 139.757px;
  margin-right: 8px;
}

.subcircle {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
