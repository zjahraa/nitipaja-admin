<template>
    <aside class="sidebar" :class="{ 'is-expanded': isExpanded }">
        <div class="logo">
            <img :src="imageUrl" alt="Logo">
        </div>
        <nav class="menu">
            <router-link to="/home" class="menu-item" :class="{ active: activeItem === 'home' }">
                <span class="material-symbols-outlined">house</span>
                Home
            </router-link>
            <br>
            <router-link to="/user" class="menu-item" :class="{ active: activeItem === 'user' }">
                <span class="material-symbols-outlined">group</span>
                User
            </router-link>
            <br>
            <router-link to="/report" class="menu-item" :class="{ active: activeItem === 'report' }">
                <span class="material-symbols-outlined">report</span>
                Laporan
            </router-link>
            <br>
            <router-link to="/admin" class="menu-item" :class="{ active: activeItem === 'admin' }">
                <span class="material-symbols-outlined">admin_panel_settings</span>
                Admin
            </router-link>
        </nav>
    </aside>
</template>
  
<script>
  export default {
    name: 'SidebarPage',
    data() {
      return {
        imageUrl: 'https://shopper.nitipaja.online/storage/images/nitipaja.png',
        activeItem: 'home',
        isExpanded: false
      };
    }
  };
</script>
  
<style>
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 250px;
    background-color: #fff;
    color: #fff;
    padding: 20px;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
    transition: width 0.3s;
  }
  
  .logo img {
    width: 100px;
    display: block;
    margin: 0 auto;
  }
  
  .menu {
    margin-top: 20px;
  }
  
  .menu-item {
    display: block;
    padding: 10px;
    color: #000;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .menu-item:hover {
    background-color: #4677D5;
  }
</style>