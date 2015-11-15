Meteor.startup(function() {
  if (Meteor.isClient) {
    return SEO.config({
      title: SITE_TITLE,
      meta: {
        'description': SITE_DESCRIPTION
      },
      og: {
        'image': ''
      }
    });
  }
});
