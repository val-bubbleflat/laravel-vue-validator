# Laravel Vue Validator

This package allow to display errors from laravel validation rules

! This package works with vue-resource !

# Installation

  `npm install --save laravel-vue-validator`

  `import LaravelVueValidator from 'laravel-vue-validator'`
  
  `Vue.use(LaravelVueValidator)`

# Usage Example

If you have in your laravel validation rule :

  `'name' => 'required|min:2|max:20'`

You can display the error using in vue :

  `<error input="name" />`
  
To flush errors in a vue component: 

  `this.$errors.flush()`
