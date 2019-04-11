# Laravel Vue Validator

By [bubbleflat.com](https://bubbleflat.com)

This package allow to display errors from laravel validation rules

# Requirements
[Vue Resource](https://github.com/pagekit/vue-resource) or [Axios](https://github.com/axios/axios)

# Installation

```
npm install --save laravel-vue-validator
```

```javascript
import LaravelVueValidator from 'laravel-vue-validator'
  
Vue.use(LaravelVueValidator)
```

# Usage Example

If you have in your laravel validation rule :

  `'name' => 'required|min:2|max:20'`

You can display the error using in vue :

  `<error input="name" />`

This error will only be displayed if a 422 error is produced by laravel when the form is submited (when the rule is not satisfied)
  
To flush errors in a vue component: 

  `this.$errors.flush()`

# Full Example

```html
<template>
	<input type='text' v-model='name' />
	<!-- 
	error do not need v-if,
	its content is displayed only if "name" has error after validation"
	-->
	<error input="name" />
	<button @click="submit">Submit</button>
</template>
<script>

export default {

	data(){
		return{
			name: ''
		}
	},

	methods : {
		// Error are displayed if Laravel backend return 422 Http code with name as error
		submit() {
			// submit via vue resource
			this.$http.post('/submit', {name: this.name});
	
			// submit via axios
			axios.post('/submit', {name: this.name});
		}
	}

}

</script>
```
