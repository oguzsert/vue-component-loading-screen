<template>
  <div class="hello">
    
    <h1>
      Child Component
    </h1>
    <h3>Lorem ipsum dolor sit amet</h3>
    <ul>
      <li><a href="#" target="_blank" rel="noopener">consectetur adipiscing elit</a></li>
      <li><a href="#" target="_blank" rel="noopener"> Sed fermentum risus</a></li>
    </ul>
    <h3>quis imperdiet commodo</h3>
    <ul>
      <li><a href="#" target="_blank" rel="noopener">Ut hendrerit rutrum imperdiet</a></li>
      <li><a href="#" target="_blank" rel="noopener">Integer cursus pellentesque placerat</a></li>
     
    </ul>

    <div>
      <div class="btn-group">
           <button v-on:click="busy(5000)" class="btn btn-default">BUSY FOR 5 SECONDS</button>
           <button v-on:click="busy(3000)" class="btn btn-default">BUSY FOR 3 SECONDS</button>
           <button v-on:click="sendAjax" class="btn btn-default">SEND AJAX WITH AXIOS</button>
      </div>
    
    </div>
   
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  methods:{
    sendAjax(){
        var instance = axios.create({
              baseURL: 'https://reqres.in/api/users?delay=3'
        });

        this.bindLoadingScreenToAxios(instance);
        

        instance().then((response)=>{
            alert("AXIOS RESPONSE : "+JSON.stringify(response.data.data));
        });

    },
    busy(milliseconds){
      this.COMPONENT_IS_BUSY();

      setTimeout(()=> this.COMPONENT_IS_IDLE(),milliseconds);


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello{

  width:600px;
  margin: 0 auto;
  border:1px dashed #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
}
.btn-group{
  margin-bottom:20px;
}
</style>
