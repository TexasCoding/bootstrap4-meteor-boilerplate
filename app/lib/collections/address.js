Schema.Address = new SimpleSchema({
  address1: {
    type: String,
    label: 'Address 1',
    regEx: /^[A-Za-z0-9 _]*$/,
    max: 60
  },
  address2: {
    type: String,
    label: 'Address 2',
    regEx: /^[A-Za-z0-9 _]*$/,
    max: 60,
    optional: true
  },
  city: {
    type: String,
    label: 'City',
    regEx: /^[A-Za-z _]*$/,
    max: 50
  },
  state: {
    type: String,
    autoform: {
      options: STATES_ARRAY
    },
    regEx: /^[A-Z]{2}$/,
  },
  zip: {
    type: String,
    label: "Zip code",
    regEx: /(^\d{5}$)|(^\d{5}-\d{4}$)/
  }
});
