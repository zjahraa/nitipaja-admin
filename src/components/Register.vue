<template>
    <div class="register-form">
        <div class="header">
            <img :src="logoImageUrl" alt="Logo" height="240" width="250"/>
            <h1>Daftar</h1>
        </div>
        <div class="input-box">
            <input v-model="form.username" placeholder="Username" class="input-field">
        </div>
        <div class="input-box">
            <input v-model="form.email" placeholder="Email" class="input-field" type="email">
        </div>
        <div class="input-box">
            <input v-model="form.phonenumber" placeholder="Phone Number" class="input-field">
        </div>
        <div class="input-box">
            <input v-model="form.birthdate" placeholder="Birth Date" class="input-field" type="date">
        </div>
        <div class="input-box">
            <input v-model="form.password" placeholder="Password" class="input-field" type="password">
        </div>
        <div class="input-box">
            <select v-model="selectedGender" id="gender" class="input-field">
                <option value="" disabled selected>Pilih Jenis Kelamin</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
            </select>
        </div>
        <br>
        <div class="register-btn">
            <button @click="registerUser" type="submit">Daftar</button>
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
        <p>Belum punya akun? <router-link to="/login">Masuk</router-link></p>
      </div>
    </div>
  </template>
  
<script>
//   import { auth, db } from '@/firebase';
  import { createUser } from '@/firebase'
  import { reactive } from 'vue'
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  export default {
    name: 'RegisterPage',
    data() {
      return {
        logoImageUrl: 'https://shopper.nitipaja.online/storage/images/nitipaja.png',
        username: '',
        email: '',
        phonenumber: '',
        birthdate: '',
        password: '',
        selectedGender: '',
      };
    },
    setup() {
        const form = reactive({ username: '', email: '', phonenumber: '', birthdate: '', password: '', selectedGender: ''})
  
        const onSubmit = async () => {
            await createUser({ ...form })
            form.username = ''
            form.email = ''
            form.phonenumber = ''
            form.birthdate = ''
            form.password = ''
            form.selectedGender = ''
        }

        return { form, onSubmit }
    },
    methods: {
        async loginWithGoogle() {
            const provider = new GoogleAuthProvider();
            const auth = getAuth();
            signInWithPopup(auth, provider)
            .then((result) => {
                this.user = result.user.displayName;
                console.log(result.user.displayName);
            }).catch((error) => {
                console.log(error);
            });
        },
    }
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
    .register-form{
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
    .forgot a{
        color: #333;
        font-size: 15px;
        text-decoration: none;
    }
    .register-btn button{
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
  .register-btn button:hover{
      background-color: #333;
  }
  .register-btn{
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