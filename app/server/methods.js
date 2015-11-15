/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  usersProfileUpdate: function(profile) {

    return Meteor.users.update({
      _id: Meteor.userId
    }, {
      $set: {
        profile: {
          firstName: profile.firstName,
          lastName: profile.lastName,
          phone: profile.phone,
          fax: profile.fax,
          cell: profile.cell,
          address: {
            address1: profile.address.address1,
            address2: profile.address.address2,
            city: profile.address.city,
            state: profile.address.state,
            zip: profile.address.zip
          }
        }
      }
    });


  },
  accountsIsUsernameAvailable: function(username) {
    var user = Meteor.users.findOne({
      username: username
    });

    return user ? false : true;
  },
  accountsIsEmailAvailable: function(email) {
    var user = Meteor.users.findOne({
      "emails.address": email
    });

    return user ? false : true;
  }
});
