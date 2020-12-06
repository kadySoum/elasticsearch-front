<template>
  <div class="searchform">
    <h4>Find by Type</h4>
    <div class="form-group">
      <input type="text" class="form-control" id="type" required v-model="type" title="type">
    </div>
 
    <div class="btn-group">
      <button v-on:click="searchDocuments" class="btn btn-success">Search</button>
    </div>
 
    <ul class="search-result">
      <li v-for="(document, index) in documents" :key="index">
        <h6>{{document.title}} ({{document.type}})</h6>
      </li>
    </ul>
   
  
  </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  title: "search-document",
  data() {
    return {
      type: "pdf",
      documents: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    searchDocuments() {
      http
        .get("http://localhost:8080/api/alldocument?documentType=" + this.type)
        .then(response => {
          this.documents = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};

</script>
 
<style>
.searchform {
  max-width: 300px;
  margin: auto;
}
.search-result {
  margin-top: 20px;
  text-align: left;
}
</style>