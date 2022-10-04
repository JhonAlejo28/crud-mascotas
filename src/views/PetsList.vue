<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search by name"
            v-model="name"/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              @click="searchName"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h4>Pet List</h4>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(pet, index) in pets"
            :key="index"
            @click="setActivepet(pet, index)"
          >
            {{ pet.name }}
          </li>
        </ul>
  
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllpets">
          Remove All
        </button>
      </div>
      <div class="col-md-6">
        <div v-if="currentPet">
          <h4>Pet</h4>
          <div>
            <label><strong>Name:</strong></label> {{ currentPet.name }}
          </div>
          <div>
            <label><strong>Breed:</strong></label> {{ currentPet.breed }}
          </div>
          <div>
            <label><strong>Age:</strong></label> {{ currentPet.age }}
          </div>
          <div>
            <label><strong>Weight:</strong></label> {{ currentPet.weight }}
          </div>
  
          <router-link :to="'/pets/' + currentPet.id" class="badge badge-warning">Edit</router-link>
        </div>
        <div v-else>
          <br />
          <p>Please click on a pet...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    /* eslint-disable */
  import ServiciosCrud from "../services/serviciosCrud";
  
  export default {
    name: "pets-list",
    data() {
      return {
        pets: [],
        currentPet: null,
        currentIndex: -1,
        name: ""
      };
    },
    methods: {
      retrievepets() {
        ServiciosCrud.getAll()
          .then(response => {
            this.pets = response.data.data;
            console.log(response.data.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      refreshList() {
        this.retrievepets();
        this.currentPet = null;
        this.currentIndex = -1;
      },
  
      setActivepet(pet, index) {
        this.currentPet = pet;
        this.currentIndex = index;
      },
  
      removeAllpets() {
        ServiciosCrud.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      searchName() {
        ServiciosCrud.findByName(this.name)
          .then(response => {
            this.pets = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.retrievepets();
    }
  };
  </script>
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>