Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
  }
});

Router.route('/admin', {
  name: 'admin',
  action: function () {
    this.render('admin');
  }
});
