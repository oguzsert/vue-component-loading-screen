const DEFAULTS = {
    defaultLOverlayBackgroundColor : "rgba(0,0,0,0.5)"
};

const OVERLAY_ELEMENT_DEFINITION= "VUE-COMPONENT-LOADING-OVERLAY-ELEMENT";
const OVERLAY_PARENT_ELEMENT_DEFINITION = "VUE-COMPONENT-LOADING-OVERLAY-PARENT";

const AXIOS_REQUEST_INTERCEPTOR = function(config) {
    this.COMPONENT_IS_BUSY();
    return config;
  }
const AXIOS_RESPONSE_INTERCEPTOR = function(response) {
    this.COMPONENT_IS_IDLE();
    return response;
}

const AXIOS_INTERCEPTOR_ERROR_HANDLER =  function (error) {
    this.COMPONENT_IS_IDLE();
    return Promise.reject(error);
  }

export default{
    
    install(Vue,options){
      

        Vue.mixin({
            data(){
                return {
                    COMPONENT_BUSY_STATUS:false
                    
                }
            },
            methods:{
                bindLoadingScreenToAxios (axiosInstance){
                       axiosInstance.interceptors.request.use(AXIOS_REQUEST_INTERCEPTOR.bind(this),AXIOS_INTERCEPTOR_ERROR_HANDLER.bind(this));
                       axiosInstance.interceptors.response.use(AXIOS_RESPONSE_INTERCEPTOR.bind(this),AXIOS_INTERCEPTOR_ERROR_HANDLER.bind(this));
                },
                COMPONENT_IS_BUSY(){

                    if(this.COMPONENT_BUSY_STATUS === true){
                        return;
                    }

                    this.COMPONENT_BUSY_STATUS = true;
                    var overlayElement = document.createElement("div");
                    var overlayImage = document.createElement("img");
                    
                    overlayElement.className = OVERLAY_ELEMENT_DEFINITION;
                    
                    //OVERLAY-STYLES
                    overlayElement.style.backgroundColor=options.overlayBackgroundColor || DEFAULTS.defaultLOverlayBackgroundColor;
                    overlayElement.style.width=`${this.$el.offsetWidth}px`;
                    overlayElement.style.height=`${this.$el.offsetHeight}px`;

                   
                    //OVERLAY-IMAGE
                    overlayImage.src=options.loadingImage;

                    overlayElement.appendChild(overlayImage);
                    this.$el.insertAdjacentElement('afterbegin',overlayElement);
                    this.$el.classList.add(OVERLAY_PARENT_ELEMENT_DEFINITION);

                },
                COMPONENT_IS_IDLE(){

                    if(this.COMPONENT_BUSY_STATUS === false){
                        return;
                    }

                    this.COMPONENT_BUSY_STATUS = false;
                    this.$el.removeChild(this.$el.querySelector(`.${OVERLAY_ELEMENT_DEFINITION}`));
                    this.$el.classList.remove(OVERLAY_PARENT_ELEMENT_DEFINITION);
                }
            }
        });
    }
    
}