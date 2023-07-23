<template>
  <div class="w-full bg-white-100">
    <div class="flex justify-between items-center h-[50px]">
      <div class="p-4 cursor-pointer  hover:bg-white-50" @click="clickHambuger">
        <i class="pi pi-bars"></i>
      </div>
      <div class="py-2">
        <InputText type="text" v-model="value" class="h-[40px]" placeholder="Search.." />
      </div>
      <div class="flex space-x-3 items-center justify-center px-3">
        <div class="text-md">Akun</div>
        <Avatar icon="pi pi-user" class="mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataOpenSideBar: Boolean,
    clickHambuger: Function
  },
  data() {
    return {
      items: [
        {
          label: 'Logout',
          icon: 'pi pi-refresh',
          command: this.logout
        },
        {
          label: 'Change Password',
          icon: 'pi pi-times',
          command: this.changePassword
        },
      ]
    }
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    logout() {
      // Lakukan proses logout di sini
      // Misalnya hapus data autentikasi atau status login
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('password'); // Hapus password dari penyimpanan lokal

      // Redirect ke halaman login
      this.$router.push('/login');
    },
    changePassword() {
      // Lakukan proses penggantian password di sini
      // Contoh implementasi sederhana:
      // - Menampilkan dialog atau form untuk mengisi password lama, password baru, dan konfirmasi password
      // - Validasi password lama
      // - Validasi password baru dan konfirmasi password
      // - Jika validasi berhasil, lakukan penggantian password sesuai logika aplikasi Anda
      // - Tampilkan pesan sukses atau gagal

      // Contoh implementasi sederhana:
      const oldPassword = prompt("Enter your old password:");
      const newPassword = prompt("Enter your new password:");
      const confirmPassword = prompt("Confirm your new password:");

      // Validasi password lama
      if (oldPassword !== "2100016116") {
        alert("Invalid old password");
        return;
      }

      // Validasi password baru dan konfirmasi password
      if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match");
        return;
      }

      // Lakukan penggantian password sesuai logika aplikasi Anda
      // Misalnya, simpan password baru ke penyimpanan lokal atau kirim permintaan ke server
      localStorage.setItem('password', newPassword); // Simpan password baru ke penyimpanan lokal

      // Tampilkan pesan sukses atau gagal
      alert("Password changed successfully");
    },
  }
}
</script>

<style>

</style>
