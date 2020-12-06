<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Documents List</h4>
            <ul>
                <li v-for="(document, index) in documents" :key="index">
                    <router-link :to="{
                            name: 'documents-details',
                            params: { document: document, id: document.id }
                        }">
                            {{document.docTitle}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div>
    </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "documents-list",
  data() {
    return {
      documents: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    
    retrieveDocuments() {
      http
        .get("http://localhost:8080/api/alldocument")
        .then(response => {
          this.documents = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveDocuments();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveDocuments();
  }
};
</script>
 
<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>