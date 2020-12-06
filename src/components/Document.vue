<template>
  <div v-if="this.document">
    <h4>Documents</h4>
    <div>
      <label>Title: </label> {{this.document.title}}
    </div>
    <div>
      <label>Type: </label> {{this.document.type}}
    </div>
    <div>
      <label>Active: </label> {{this.document.active}}
    </div>
  
    <span v-if="this.document.active"
      v-on:click="updateActive(false)"
      class="button is-small btn-primary">Inactive</span>
    <span v-else
      v-on:click="updateActive(true)"
      class="button is-small btn-primary">Active</span>
  
    <span class="button is-small btn-danger" v-on:click="deletedocument()">Delete</span>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a Document...</p>
  </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "document",
  props: ["document"],
  methods: {
    /* eslint-disable no-console */
    updateActive(status) {
      var data = {
        id: this.document.id,
        tile: this.document.title,
        type: this.document.type,
        active: status
      };
 
      http
        .put("/document/" + this.document.id, data)
        .then(response => {
          this.document.active = response.data.active;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deletedocument() {
      http
        .delete("/document/" + this.document.id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/');
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>