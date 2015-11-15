/*****************************************************************************/
/* UsersProfileEdit: Event Handlers */
/*****************************************************************************/
Template.UsersProfileEdit.events({
  "submit #usersProfileUpdate": function(e, tmpl) {
    e.preventDefault();

    var profile = {
      firstName: $('[name="firstName"]').val(),
      lastName: $('[name="lastName"]').val(),
      phone: $('[name="phone"]').val(),
      fax: $('[name="fax"]').val(),
      cell: $('[name="cell"]').val(),
      address: {
        address1: $('[name="address.address1"]').val(),
        address2: $('[name="address.address2"]').val(),
        city: $('[name="address.city"]').val(),
        state: $('[name="address.state"]').val(),
        zip: $('[name="address.zip"]').val(),
      }
    };

    Meteor.call("usersProfileUpdate", profile, function(err, res){
      if(err){
        FlashMessages.clear();
        FlashMessages.sendSuccess('There were errors updating you profile.');
      }
      if(res){
        FlashMessages.clear();
        FlashMessages.sendSuccess('Your profile has been updated.');
        Router.go('users.profile', {_id: Meteor.userId()});
      }
    });


  }
});

/*****************************************************************************/
/* UsersProfileEdit: Helpers */
/*****************************************************************************/
Template.UsersProfileEdit.helpers({});

/*****************************************************************************/
/* UsersProfileEdit: Lifecycle Hooks */
/*****************************************************************************/
Template.UsersProfileEdit.onCreated(function() {});

Template.UsersProfileEdit.onRendered(function() {});

Template.UsersProfileEdit.onDestroyed(function() {});
