Schema.UserCountry = new SimpleSchema({
  name: {
    type: String,
    regEx: /^[A-Za-z _]*$/,
    label: 'Country'
  },
  code: {
    type: String,
    regEx: /^[A-Z]{2}$/
  }
});

Schema.UserProfile = new SimpleSchema({
  firstName: {
    type: String,
    label: 'First name',
    regEx: /^[A-Za-z _]*$/,
    max: 25
  },
  lastName: {
    type: String,
    label: 'Last name',
    regEx: /^[A-Za-z _]*$/,
    max: 25
  },
  address: {
    type: Schema.Address,
    optional: false
  },
  phone: {
    type: String,
    regEx: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    optional: true
  },
  fax: {
    type: String,
    regEx: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    optional: true
  },
  cell: {
    type: String,
    regEx: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    optional: true
  },
  birthday: {
    type: Date,
    optional: true
  },
  gender: {
    type: String,
    allowedValues: ['Male', 'Female'],
    optional: true
  },
  organization: {
    type: String,
    optional: true
  },
  website: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  bio: {
    type: String,
    optional: true
  },
  country: {
    type: Schema.UserCountry,
    optional: true
  }
});

Schema.UserForm = new SimpleSchema({
  username: {
    type: String,
    unique: true,
    custom: function() {
      if (Meteor.isClient && this.isSet) {
        Meteor.call("accountsIsUsernameAvailable", this.value, function(error, result) {
          if (!result) {
            Schema.UserForm.namedContext("authRegister").addInvalidKeys([{
              name: "username",
              type: "notUnique"
            }]);
          }
        });
      }
    },
    regEx: /^[a-zA-Z0-9]{2,25}$/,
  },
  email: {
    type: String,
    unique: true,
    custom: function() {
      if (Meteor.isClient && this.isSet) {
        Meteor.call("accountsIsEmailAvailable", this.value, function(error, result) {
          if (!result) {
            Schema.UserForm.namedContext("authRegister").addInvalidKeys([{
              name: "email",
              type: "notUnique"
            }]);
          }
        });
      }
    },
    regEx: SimpleSchema.RegEx.Email
  },
  password: {
    type: String,
    label: "Password",
    min: 6
  },
  passwordConfirmation: {
    type: String,
    min: 6,
    label: "Password Confirmation",
    custom: function() {
      if (this.value !== this.field('password').value) {
        return "passwordMissmatch";
      }
    }
  },

  profile: {
    type: Schema.UserProfile
  }
});
