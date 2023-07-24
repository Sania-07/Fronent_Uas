<template>
  <div class="product-container">
    <div class="font-bold text-4xl py-3">Lotso Bracelet</div>
    <div class="image-container">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="image-wrapper"
        @click="selectProduct(index)"
      >
        <img class="product-image" :src="product.image" :alt="product.name">
        <div class="image-caption">
          <p><strong>{{ product.name }}</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    const token = localStorage.getItem('token');
    console.log(token);

    if (!token) {
      this.$router.push("/login");
    }
    return {
      products: [
        { name: 'Rainbow Bracelet', image: require('@/assets/images4.jpeg') },
        { name: 'MutiaraLove Bracelet', image: require('@/assets/images3.jpeg') },
        { name: 'Sunflower Bracelet', image: require('@/assets/tipe1.jpeg') },
        { name: 'Butterfly Bracelet', image: require('@/assets/images6.jpeg') },
        { name: 'Daisy Rainbow Bracelet', image: require('@/assets/images4.jpeg') },
        { name: 'Blue Pearl Bracelet', image: require('@/assets/Tipe3.jpeg') },
        { name: 'Crystal Pendant Bracelet', image: require('@/assets/image7s.jpeg') },
        { name: 'Pearl Animals Bracelet', image: require('@/assets/images12.jpg') },
        { name: 'Crystal Chain Bracelet', image: require('@/assets/images8.jpg') },
        { name: 'Fish Shell Bracelet', image: require('@/assets/Gemoy.jpg') }
      ],
      selectedProduct: null
    };
  },
  methods: {
    selectProduct(index) {
      if (this.selectedProduct === index) {
        this.selectedProduct = null; // Batal memilih gambar jika sudah dipilih sebelumnya
      } else {
        this.selectedProduct = index;
      }
    }
  }
};
</script>

<style>
.product-container {
  text-align: center;
}

.image-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 23px;
  justify-content: center;
}

.image-wrapper {
  position: relative;
  flex: 2;
  margin: 0 12px;
  cursor: pointer;
}

.product-image {
  width: 260px;
  height: 260px;
  border: 1px solid #af176b;
  border-radius: 20px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.7);
  object-fit: cover;
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
  text-align: center;
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
