<template>
  <div class="product-container">
    <div class="font-bold text-4xl py-3">Lotso Bracalet</div>
    <div class="image-container">
      <div class="image-wrapper">
        <img class="product-image" src="@/assets/images4.jpeg" alt="Gambar Product">
        <div class="image-caption">
          <p><strong>Rainbow Bracalet</strong></p>
        </div>
      </div>
      <div class="image-wrapper">
        <img class="product-image" src="@/assets/images3.jpeg" alt="Gambar Product">
        <div class="image-caption">
          <p><strong>MutiaraLove Bracalet</strong></p>
        </div>
      </div>
      <div class="image-wrapper">
        <img class="product-image" src="@/assets/tipe1.jpeg" alt="Gambar Product">
        <div class="image-caption">
          <p><strong>Sunflawer Bracalet</strong></p>
        </div>
       </div>
       <div class="image-wrapper">
        <img class="product-image" src="@/assets/images6.jpeg" alt="Gambar Product">
        <div class="image-caption">
          <p><strong>Butterfly Bracalet</strong></p>
        </div>
      </div>
      <div class="image-wrapper">
        <img class="product-image" src="@/assets/images4.jpeg" alt="Gambar Product">
        <div class="image-caption">
          <p><strong>Daisyrainbow Bracalet</strong></p>
        </div>
      </div>
      <div class="image-wrapper">
        <img class="product-image" src="@/assets/Tipe3.jpeg" alt="Gambar Product">
        <div class="image-caption">
          <p><strong>Bluepearl Bracalet</strong></p>
        </div>
      </div>
      <div class="image-wrapper">
        <img class="product-image" src="@/assets/image7s.jpeg" alt="Gambar Product">
        <div class="image-caption">
          <p><strong>Crystalpendant Bracalet</strong></p>
        </div>
      </div>
      <div class="image-wrapper">
        <img class="product-image" src="@/assets/images12.jpg" alt="Gambar Product">
        <div class="image-caption">
          <p><strong>Pearlanimals Bracalet</strong></p>
        </div>
      </div>
      <div class="image-wrapper">
        <img class="product-image" src="@/assets/images8.jpg" alt="Gambar Product">
        <div class="image-caption">
          <p><strong>Crystalchain Bracalet</strong></p>
        </div>
      </div>
      <div class="image-wrapper">
        <img class="product-image" src="@/assets/Gemoy.jpg" alt="Gambar Product">
        <div class="image-caption">
          <p><strong>Fishshell Bracalet</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.product-container {
  text-align: center;
}

.image-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 9fr));
  gap: 23px;
  justify-content: space-between; /* Memberikan ruang di antara gambar */
}

.image-wrapper {
  position: relative;
  flex: 2;
  margin: 0 12px; /* Memberikan ruang di antara gambar */
}

.product-image {
  width: 260px;
  height: 260px;
  border: 1px solid #af176b;
  border-radius: 20px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.7);
  object-fit: cover; /* Mengatur gambar agar sesuai dengan ukuran container */
  margin-top: 16px;
}

.image-caption {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 12px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #c25488;
  padding: 4px;
  border-radius: 7px;
  box-sizing: border-box;
  text-align: center; /* Tengahkan teks deskripsi */
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-wrapper:hover .image-caption {
  opacity: 1;
}

.image-caption p {
  margin: 0;
}
</style>