<template>
    <div id="app" class="container-fluid">
        <div class="site-info">
            <h1>daar project</h1>
            <h3>with elasticsearch</h3>
        </div>
        <nav>
            <router-link class="btn btn-primary" to="/">Documents</router-link>
            <router-link class="btn btn-primary" to="/add">Add</router-link>
            <router-link class="btn btn-primary" to="/search">Search</router-link>
        </nav>
        <br/>
        <router-view/>
        
    </div>
</template>

 <script type="application/x-javascript">
export default {
  name: "app"
};

    (function () {
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $(document).ajaxSend(function(e, xhr, options) {
           xhr.setRequestHeader(header, token);
        });
    });

</script>
 
<style>
.site-info {
  color: blue;
  margin-bottom: 20px;
}
 
.btn-primary {
  margin-right: 5px;
}
 
.container-fluid {
  text-align: center;
}
</style>
