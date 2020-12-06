<template>

  <div class="submitform">
      
    <div v-if="!submitted">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" required v-model="document.title" title="title">
        </div>
    
        <div class="form-group">
          <label for="type">Type</label>
          <input type="number" class="form-control" id="type" required v-model="document.type" title="type">
        </div>
    
        <button v-on:click="saveDocument" class="btn btn-success">Submit</button>
        <form id="uploadFiles" name="uploadFiles" method="post" th:action=@{/uploadFiles} encType="multipart/form-data">
       <input type="file" name="files" multiple required />
       <button type="submit">Submit</button>
     </form>
    </div>
    
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newDocument">Add</button>
    </div>
  </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  title: "add-document",
  data() {
    return {
      document: {
        id: 0,
        title: "",
        type: 0,
        active: false
      },
      submitted: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveDocument() {
      var data = {
        title: this.document.title,
        type: this.document.type
      };
 
      http
        .post("http://localhost:8080/api/upload", data)
        .then(response => {
          this.document.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
 
      this.submitted = true;
    },
    newDocument() {
      this.submitted = false;
      this.document = {};
    }
    /* eslint-enable no-console */
  }
};