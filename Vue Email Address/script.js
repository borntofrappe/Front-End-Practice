// check for an email address in the form of
// alphanumeric characters + @ sign + alphanumeric characters . + 2/3 alphanumeric characters
// someone@gmail.com
// imperfect, but a starting point
function isEmail(text) {
    return /\w+@\w+\.\w{2,3}/.test(text);
  }

  // target the form
  const app = new Vue({
    el: 'form',
    // variables to keep track of the input and the states of the application
    data: {
      input: '',
      valid: false,
      submitted: false
    },
    methods: {
      handleSubmit: function(e) {
        // switch submitted to true if the boolean describing a valid address confirms the value
        e.preventDefault()
        if(this.valid) {
          this.submitted = true
        }
      },
      handleInput: function(e) {
        // reset submitted to false
        this.submitted = this.submitted && false
        // update the valid boolean according to the input's value
        this.valid = isEmail(this.input)
      }
    }
  })