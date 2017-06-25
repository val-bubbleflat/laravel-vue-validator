import Errors from './Errors'
import ErrorComponent from './ErrorComponent.vue'


class Validator{

    install(Vue){

        Vue.component('error', ErrorComponent);

        if(Vue.http){
            Vue.http.interceptors.push((request, next) => {
                next(response => {
                    if(response.status === 422){
                        Errors.fill(response.body)
                    }
                });
            });
        }

        Vue.mixin({

            beforeCreate(){
                //errors
                this.$options.$errors = {};
                Vue.util.defineReactive(this.$options, '$errors', Errors);
                if(!this.$options.computed){
                    this.$options.computed = {}
                }
                this.$options.computed["$errors"] = function() {
                    return this.$options.$errors;
                };
            },

        })

    }

}

export default new Validator()