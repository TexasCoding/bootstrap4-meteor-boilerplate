/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
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
