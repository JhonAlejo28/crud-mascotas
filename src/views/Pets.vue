
<template>
    <div v-if="currentPet" class="edit-form">
      <h4>Pet</h4>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name"
            v-model="currentPet.name"
          />
        </div>
        <div class="form-group">
          <label for="breed">Breed</label>
          <input type="text" class="form-control" id="breed"
            v-model="currentPet.breed"
          />
        </div>
  
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" class="form-control" id="age"
            v-model="currentPet.age"
          />
        </div>

        <div class="form-group">
          <label for="weigth">Weigth</label>
          <input type="number" class="form-control" id="weigth"
            v-model="currentPet.weigth"
          />
        </div>
      </form>

  
      <button class="badge badge-danger mr-2"
        @click="deletePet"
      >
        Delete
      </button>
  
      <button type="submit" class="badge badge-success"
        @click="updatePet"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a Pet...</p>
    </div>
  </template>
  
  <script>
    /* eslint-disable */
  import ServiciosCrud from "../services/serviciosCrud";
  
  export default {
    name: "Pet",
    data() {
      return {
        currentPet: null,
        message: ''
      };
    },
    methods: {
      getPet(id) {
        ServiciosCrud.get(id)
          .then(response => {
            this.currentPet = response.data.data;
            console.log(response.data.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      
  
      updatePet() {
        ServiciosCrud.update(this.currentPet.id, this.currentPet)
          .then(response => {
            console.log(response.data.data);
            this.message = 'The Pet was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deletePet() {
        ServiciosCrud.delete(this.currentPet.id)
          .then(response => {
            console.log(response.data.data);
            this.$router.push({ name: "Pets" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getPet(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>