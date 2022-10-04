<template>
  
    <div class="submit-form">
      
      <h1 class="title">Ingrese un nuevo Perro</h1>
  
      <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="pet.name"
            name="name"
            placeholder="Name"
          />
        </div>
        <br>
        <div class="form-group">
          <label for="breed">Breed</label>
          <input
            class="form-control"
            id="breed"
            required
            v-model="pet.breed"
            name="breed"
            placeholder="Breed"
          />
        </div>
        <br>
        <div class="form-group">
          <label for="age">Age</label>
          <input
            class="form-control"
            id="age"
            required
            v-model="pet.age"
            name="age"
            placeholder="Age"
          />
        </div>
        <br>
        <div class="form-group">
          <label for="weight">Weight</label>
          <input
            class="form-control"
            id="weight"
            required
            v-model="pet.weight"
            name="weight"
          />
        </div>
        <br>
        <button @click="savePet" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newPet">Add</button>
      </div>
    </div>
  </template>
  
  <script>
    /* eslint-disable */
  import ServiciosCrud from "../services/serviciosCrud";
  
  export default {
    name: "add",
    data() {
      return {
        pet: {
          id: null,
          name: "",
          breed: "",
          age: 0,
          weight: 0

        },
      };
    },
    methods: {
      savePet() {
        var data = {
          name: this.pet.name,
          breed: this.pet.breed,
          age: this.pet.age,
          weight: this.pet.weight
        };
  
        ServiciosCrud.create(data)
          .then(response => {
            this.pet.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newPet() {
        this.submitted = false;
        this.pet = {};
      }
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>