class Errors {

    constructor(){
        this.errors = {};
    }

    has(key){
        return this.errors[key] !== undefined
    }

    first(key){
        if(this.has(key)){
            return this.errors[key][0]
        }
    }

    get(key){
        if(this.has(key)){
            return this.errors[key]
        }
    }

    all(){
        return this.errors
    }

    fill(values){
        this.errors = values
    }

    flush() {
        this.errors = {};
    }

}

export default new Errors()