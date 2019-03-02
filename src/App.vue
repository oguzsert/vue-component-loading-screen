<template>
  <div id="app">
    <h1>Parent Component</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <div class="btn-group">
          <button v-on:click="busy(5000)" class="btn btn-default">BUSY FOR 5 SECONDS</button>
           <button v-on:click="busy(3000)" class="btn btn-default">BUSY FOR 3 SECONDS</button>
           <button v-on:click="sendAjax" class="btn btn-default">SEND AJAX WITH AXIOS</button>
      </div>
    </div>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";
export default {
  name: 'app',
  components: {
    HelloWorld
  },
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:700px;
  margin:0 auto;
  border:1px dashed #ccc;
  margin-top:50px;
}
</style>
