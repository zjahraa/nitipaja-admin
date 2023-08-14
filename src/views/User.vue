<template>
    <div>
      <main class="listadmin">
        <div class="card-header">
          <h3>Data User</h3>
          <br /><br />
        </div>
        <div class="card-body">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Profile</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in usersData" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                  <img :src="imageUrl" alt="Profile" class="avatar" />
                </td>
                <td>{{ user.nama }}</td>
                <td>{{ user.email }}</td>
                <td>
                  <button v-if="user.role === 'Driver'" class="red-button">Driver</button>
                  <button v-else-if="user.role === 'Customer'" class="blue-button">Customer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  const imageUrl = 'https://shopper.nitipaja.online/storage/images/profile.png';
  
  // Sample data for users (replace this with your actual data)
  const usersData = [
    { nama: 'Idgar Raka', email: 'Idgar Raka@gmail.com', role: 'Driver' },
    { nama: 'Rania listasya', email: 'Rania listasya@gmail.com', role: 'Customer' },
    { nama: 'Santika dewi', email: 'santika.dewi@gmail.com', role: 'Driver' },
    { nama: 'Sandy falata', email: 'Sandy falata@gmail.com', role: 'Customer' },
    { nama: 'Regantara', email: 'Regantara@gmail.com', role: 'Driver' },
    { nama: 'Revana', email: 'Revana@gmail.com', role: 'Customer' },
    { nama: 'Rendan', email: 'Rendan@gmail.com', role: 'Driver' },
    { nama: 'Fanya', email: 'Fanya@gmail.com', role: 'Customer' },
    { nama: 'Faisya', email: 'Faisya@gmail.com', role: 'Driver' },
    { nama: 'Enzano', email: 'sEnzano@gmail.com', role: 'Customer' },
    // Add more user objects with their respective roles
  ];
  </script>
  
  <style>
  .listadmin {
    margin-top: 60px;
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 60px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
  .listadmin table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .listadmin table tbody tr td {
    padding: 10px;
    border-bottom: 1px solid #000000;
  }
  
  .listadmin table tbody tr:nth-child(even) {
    background-color: #ecf0f1;
  }
  
  .listadmin table tbody tr:hover {
    background-color: #bdc3c7;
  }
  
  .card-header {
    text-align: left;
    padding: 10px 0;
  }
  
  .card-header h3 {
    margin: 0;
    font-size: 24px;
    color: #4677d5;
  }
  
  .tmbhadmin button {
    margin: start;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  /* Add spacing to the table cells */
  .listadmin table td {
    padding: 10px 20px;
  }
  
  /* Styling for the red button with border radius */
  .red-button {
    background-color: red;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 8px 16px;
    cursor: pointer;
  }
  
  /* Styling for the blue button with border radius */
  .blue-button {
    background-color: blue;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 8px 16px;
    cursor: pointer;
  }
  </style>