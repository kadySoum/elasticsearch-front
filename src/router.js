import Vue from "vue";
import Router from "vue-router";
import DocumentsList from "./components/DocumentsList.vue";
import AddDocument from "./components/AddDocument.vue";
import SearchDocuments from "./components/SearchDocuments.vue";
import Document from "./components/Document.vue";

Vue.use(Router);
 
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "documents",
      alias: "/document",
      component: DocumentsList,
      children: [
        {
          path: "/document/:id",
          name: "document-details",
          component: Document,
          props: true
        }
      ]
    },
    {
      path: "/uploadFiles",
      name: "add",
      component: AddDocument
    },
    {
      path: "/search",
      name: "search",
      component: SearchDocuments
    }
  ]
});