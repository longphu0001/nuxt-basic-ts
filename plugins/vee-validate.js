import { extend } from 'vee-validate'
import { email, required } from 'vee-validate/dist/rules'

// Override the default message.
extend('email', {
  ...email,
  message: 'validate.email'
})

extend('required', {
  ...required,
  message: 'validate.required'
})
