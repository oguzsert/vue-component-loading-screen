# VUE-COMPONENT-LOADING-SCREEN PLUGIN


Vue Component Loading screen is a simple plugin for show an indicator when your component is busy.

  - You can activate/disable loading screens manually
  - You can bind your screen states to [Axios].

### Installation

```sh
$ npm install vue-component-loading-screen
```

### Demonstration page
```sh
$ npm run serve
```
### Implementation

```javascript
import Vue from 'vue'
import App from './App.vue'
import VueComponentLoading from "./VueComponentLoadingScreenPlugin";
import "./vue-component-loading-screen.css";

Vue.use(VueComponentLoading,{
  loadingImage:"[YOUR LOADING IMAGE PATH]", //-> Required
  overlayBackgroundColor:"rgba(0,0,0,0.3)" //-> Optional (RGB OR HEX)
});
```

### Manual Screen Activation
```javascript
export default {
  name: 'HelloWorld',
  methods:{
      exampleMethod(){
          this.COMPONENT_IS_BUSY(); //->Activates loading screen
          /*
          Bunch of code doing something.
          ..................
          ..............................
          .........................................
          */
          this.COMPONENT_IS_IDLE(); // -> Disables loading screen
      }
  }
}
```

### Binding Screen States To Axios Instance
Loading screen activates before request sent and disables when response received or error occured.
```javascript
import axios from "axios";
export default {
  name: 'HelloWorld',
  methods:{
    sendAjax(){
        var yourAxiosInstance = axios.create({
              baseURL: '[SOME API PATH]'
        });
        this.bindLoadingScreenToAxios(yourAxiosInstance);
        yourAxiosInstance();
    }
  }
}
```
### OPTIONS
Option | Description | Is Required | Default Value
------------ | ------------- | ------------- | -------------
loadingImage | Path of your loading image | true | -
overlayBackgroundColor | Loading screen background color. You can set HEX or RGB value | false | rgba(0,0,0,0.5)
License
----

MIT