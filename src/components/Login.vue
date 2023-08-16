<template>
    <div class="login-form">
      <div class="header">
        <img :src="logoImageUrl" alt="Logo" height="240" width="250"/>
        <h1>Masuk</h1>
      </div>
      <div class="input-box">
          <input v-model="email" placeholder="Email" class="input-field">
      </div>
      <div class="input-box">
          <input v-model="password" type="password" placeholder="Password" class="input-field">
      </div>
      <div class="forgot"> 
            <section>
                <input type="checkbox" id="check">
                <label for="check">Ingatkan Saya</label>
            </section>
            <section>
                <textbutton @click="handleClick" class="text-button">Lupa Kata Sandi</textbutton>
            </section>
        </div>
        <div class="login-btn">
            <button @click="loginUser" type="submit">Masuk</button>
        </div>
        <div class="login-with-google">
            <p>atau</p>
            <br>
            <button class="login-google-btn" @click="loginWithGoogle">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" width="20" height="20">
                Google
            </button>
        </div>
        <br>
        <div class="dont-have-account">
          <p>Belum punya akun? <router-link to="/register">Daftar</router-link></p>
        </div>
    </div>
  </template>
  
  <script>
  // import { auth } from '@/firebase'; // Import Firebase auth instance\
  import router from '@/router';
  
  export default {
    name: 'LoginPage',
    data() {
      return {
        logoImageUrl: 'https://shopper.nitipaja.online/storage/images/nitipaja.png',
        // Other data properties for login fields
      };
    },
    methods: {
      async loginUser() {
          router.push('/Sidebar');
      },
      async loginWithGoogle() {
        
      },
    },
  };
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins',sans-serif;
    }
    .login-form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 440px;
        height: 480px;
        padding: 30px;
        margin-bottom: 100px;
    }
    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .header h1{
        color: #333;
        font-size: 30px;
        font-weight: 500;
        margin-top: 10px;
    }
    .input-field{
        width: 90%;
        height: 50px;
        font-size: 17px;
        padding: 0 25px;
        margin-bottom: 15px;
        border-radius: 30px;
        border: none;
        box-shadow: 0px 5px 10px 1px rgba(0,0,0, 0.05);
        outline: none;
        transition: .3s;
        margin-left: 13px;
    }
    .input-field:focus{
        width: 90%;
    }
    ::placeholder{
        font-weight: 500;
        color: #373737;
    }
    .forgot{
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        align-items: center;
    }
    section{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #555;
    }
    #check{
        margin-right: 10px;
    }
    a{
        text-decoration: none;
        color: #555;
    }
    a:hover{
        text-decoration: underline;
    }
    section a{
        color: #555;
    }
    .text-button{
        cursor: pointer;
    }
    .login-btn button{
        width: 100%;
        height: 50px;
        border-radius: 30px;
        border: none;
        background-color: #4677D5;
        color: #fff;
        font-size: 17px;
        font-weight: 500;
        cursor: pointer;
        transition: .3s;
    }
    .login-btn button:hover{
        background-color: #333;
    }
    .login-btn{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    .login-with-google {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .login-google-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 40px;
        background-color: #fff;
        color: #000;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
    }
    .login-google-btn img {
        margin-right: 10px;
    }
    .login-google p{
        font-size: 17px;
        color: #000;
        font-weight: 500;
    }
    .dont-have-account{
        display: flex;
        justify-content: center;
        font-size: 17px;
        color: #000;
        font-weight: 500;
    }
    .dont-have-account a{
        color: #4677D5;
        margin-left: 5px;
  
    }
    .dont-have-account a:hover{
        text-decoration: underline;
    }
  
  </style>