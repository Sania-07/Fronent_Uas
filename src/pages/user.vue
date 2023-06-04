<template>
  <div class="px-15">
    <div class="font-bold text-4xl py-10">Lotso Bracalet</div>
    <div class="py-15">
      <table class="border-collapse border-2 w-full">
        <thead>
          <tr>
            <th class="border-2 p-3">No Pesanan</th>
            <th class="border-2 p-3">Nama Barang</th>
            <th class="border-2 p-3">Tipe Gelang</th>
            <th class="border-2 p-3">Alamat</th>
            <th class="border-2 p-3">Ulasan</th>
            <th class="border-2 p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in posts" :key="data.id">
            <td class="p-3">{{ data.id }}</td>
            <td class="p-3">{{ data.name }}</td>
            <td class="p-3">{{ data.description }}</td>
            <td class="p-3">{{ data.address }}</td>
            <td class="p-3">{{ data.review }}</td>
            <td class="p-3">
              <button class="px-4 py-2 border rounded bg-pink-500 text-white hover:bg-blue-400" @click="edit(data.id)">Edit</button>
              <button class="px-4 py-2 border rounded bg-gray-500 text-white hover:bg-red-400" @click="destroy(data.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-center items-center space-x-8 py-10">
      <button class="px-4 py-2 border rounded bg-gray-500 text-white hover:bg-blue-400" @click="modelAdd = true">Add</button>
    </div>
    <!-- Pop up modal add new -->
    <div class="flex w-full h-full justify-center item-center" v-show="modelAdd">
      <!-- Background -->
      <div class="w-screen h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0 left-0" @click="(modelAdd = false)"></div>
      <!-- Form -->
      <div class="flex justify-center items-center top-[30%] fixed sticky-0 left-[40%]">
        <div class="md:w-auto relative flex flex-col justify-center items-center bg-white p-8">
          <div class="my-5">
            <h1 role="main" class="text-xl font-semibold text-center text-gray-800">Add</h1>
          </div>
          <div class="mt-2 flex flex-col space-y-2">
            <input type="text" class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2" placeholder="Nama Barang" v-model="data.name">
            <input type="text" class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2" placeholder="Tipe Gelang" v-model="data.description">
            <input type="text" class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2" placeholder="Alamat" v-model="data.address">
            <input type="text" class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2" placeholder="Ulasan" v-model="data.review">
          </div>
          <button class="mt-2 px-4 py-2 border rounded bg-gray-500 text-white hover:bg-blue-400" @click="addNew">Create</button>
        </div>
      </div>
    </div>
    <!-- Pop up modal update -->
    <div class="flex w-full h-full justify-center item-center" v-show="modelUpdate">
      <!-- Background -->
      <div class="w-screen h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0 left-0" @click="(modelUpdate = false)"></div>
      <!-- Form -->
      <div class="flex justify-center items-center top-[30%] fixed sticky-0 left-[40%]">
        <div class="md:w-auto relative flex flex-col justify-center items-center bg-white p-8">
          <div class="my-5">
            <h1 role="main" class="text-xl font-semibold text-center text-gray-800">Update</h1>
          </div>
          <div class="mt-2 flex flex-col space-y-2">
            <input type="text" class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2" placeholder="Nama Barang" v-model="data.name">
            <input type="text" class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2" placeholder="Tipe Gelang" v-model="data.description">
            <input type="text" class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2" placeholder="Alamat" v-model="data.address">
            <input type="text" class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2" placeholder="Ulasan" v-model="data.review">
          </div>
          <button class="mt-2 px-4 py-2 border rounded bg-gray-500 text-white hover:bg-blue-400" @click="updatePost">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      modelAdd: false,
      modelUpdate: false,
      data: {
        id: "",
        name: "",
        description: "",
        address: "",
        review: ""
      }
    }
  },
  computed: {
    ...mapGetters({
      posts: 'post/posts'
    })
  },
  methods: {
    addNew() {
      this.$store.dispatch('post/ADD_NEW', this.data).then(response => {
        if (response) {
          this.modelAdd = false;
          // Reset data 
          this.data = {
            id: "",
            name: "",
            description: "",
            address: "",
            review: ""
          }
        }
      })
    },
    edit(data) {
      this.modelUpdate = true;
      // Set data model
      this.data.id = data.id;
      this.data.name = data.name;
      this.data.description = data.description;
      this.data.address = data.address;
      this.data.review = data.review;
    },
    updatePost() {
      this.$store.dispatch('post/UPDATE_POST', this.data).then(response => {
        if (response) {
          this.modelUpdate = false;
          // Reset data 
          this.data = {
            id: "",
            name: "",
            description: "",
            address: "",
            review: ""
          }
        }
      })
    },
    destroy(id) {
      this.$store.dispatch('post/DELETE_POST', id).then(response => {
        if (response) {
          alert("Ok");
        }
      })
    }
  }
}
</script>

<style>

</style>
