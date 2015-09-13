Router.route('/', {
  name: 'home',

  action: function () {
    this.render('home');
  }
});

Router.route('/switch', {
  name: 'admin',

  action: function () {
    this.render('admin');
  }
});
