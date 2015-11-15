Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'StaticHomeController',
  where: 'client'
});

Router.route('/about', {
  name: 'about',
  controller: 'StaticAboutController',
  where: 'client'
});

Router.route('/contact', {
  name: 'contact',
  controller: 'StaticContactController',
  where: 'client'
});

Router.route('/login', {
  name: 'login',
  controller: 'AuthLoginController',
  where: 'client'
});

Router.route('/register', {
  name: 'register',
  controller: 'AuthRegisterController',
  where: 'client'
});

Router.route('/users/:_id/profile', {
  name: 'users.profile',
  controller: 'UsersProfileController',
  where: 'client'
});

Router.route('/users/:_id/profile/edit', {
  name: 'users.profile.edit',
  controller: 'UsersProfileEditController',
  where: 'client'
});
