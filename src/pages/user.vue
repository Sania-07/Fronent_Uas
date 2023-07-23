<template>
  <div>
    <h1>List Product</h1>
    <button class="btn btn-primary" @click="editProduct(product)">Add</button>
    <div v-if="showAddForm" class="overlay">
      <div class="add-form">
        <h2>Add Product</h2>
        <form @submit.prevent="submitProduct">
          <div class="form-group">
            <label for="nama">Nama</label>
            <input type="text" class="form-control" id="nama" v-model="formData.nama">
          </div>
          <div class="form-group">
            <label for="tipe">Tipe</label>
            <input type="text" class="form-control" id="tipe" v-model="formData.tipe">
          </div>
          <div class="form-group">
            <label for="alamat">Alamat</label>
            <input type="text" class="form-control" id="alamat" v-model="formData.alamat">
          </div>
          <div class="form-group">
            <label for="ulasan">Ulasan</label>
            <input type="text" class="form-control" id="ulasan" v-model="formData.ulasan">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>

        </form>
        <button class="btn btn-secondary" @click="toggleAddForm">Cancel</button>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nama</th>
          <th scope="col">Tipe</th>
          <th scope="col">Alamat</th>
          <th scope="col">Ulasan</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ product.nama }}</td>
          <td>{{ product.tipe }}</td>
          <td>{{ product.alamat }}</td>
          <td>{{ product.ulasan }}</td>
          <td>
            <button class="btn btn-primary" @click="editProduct(product)">Edit</button>
            <button class="btn btn-danger" @click="deleteProduct(product.id)">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      showAddForm: false,
      formData: {
        nama: '',
        tipe: '',
        alamat: '',
        ulasan: ''
      }
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    toggleAddForm() {
      this.showAddForm = !this.showAddForm;
    },
    submitProduct() {
      if (this.formData.id) {
        // Update existing product
        axios.put(`http://localhost:3001/product/${this.formData.id}`, this.formData)
          .then(response => {
            console.log('Product updated:', response.data);
            this.fetchProducts();
            this.resetForm();
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        // Add new product
        axios.post('http://localhost:3001/product', this.formData)
          .then(response => {
            console.log('Product added:', response.data);
            this.fetchProducts();
            this.resetForm();
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    editProduct(product) {
      this.formData = { ...product };
      this.showAddForm = true;
    },
    deleteProduct(productId) {
      axios.delete(`http://localhost:3001/product/${productId}`)
        .then(() => {
          console.log('Product deleted with ID:', productId);
          this.fetchProducts();
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetchProducts() {
      axios.get('http://localhost:3001/product')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    resetForm() {
      this.formData = {
        nama: '',
        tipe: '',
        alamat: '',
        ulasan: ''
      };
      this.showAddForm = false;
    }
  }
};
</script>

<style>
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
}

.add-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

/* Add any additional styles here */
</style>
