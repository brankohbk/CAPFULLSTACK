Vue.component('navbar', {
  template: `      <header class="container-fluid">
  <a name="top"></a>
  <div class="d-flex justify-content-between">
    <div class="logo mr-auto"></div>
    <div class="contact col-xs-5  d-inline-flex justify-content-center align-items-center">
      <a href="mailto:info@tgif.net">
        <span class="fas fa-envelope mr-3"></span>
        <span>info@tgif.net</span>
      </a>
    </div>
  </div>

  <nav id="navbar" class="container-fluid">
    <ul class="nav">
      <li class="nav-item">
        <a href="index.html" class="nav-link">
          <div class="fas fa-home"></div> HOME
        </a>
      </li>
      <li class="nav-item dropdown ">
        <a href="#" class="nav-link dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Congress 113</a>
        <div class="dropdown-menu">
          <a href="senate.html" class="dropdown-item ">Senate</a>
          <a href="house.html" class="dropdown-item">House</a>
        </div>
      </li>
      <li class="nav-item dropdown ">
        <a href="senate.html" class="nav-link dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Attendance</a>
        <div class="dropdown-menu">
          <a href="attendance-senate.html" class="dropdown-item ">Senate</a>
          <a href="attendance-house.html" class="dropdown-item">House</a>
        </div>
      </li>
      <li class="nav-item dropdown ">
        <a href="#" class="nav-link dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Party Loyalty</a>
        <div class="dropdown-menu">
          <a href="loyalty-senate.html" class="dropdown-item ">Senate</a>
          <a href="loyalty-house.html" class="dropdown-item">House</a>
        </div>
      </li>

    </ul>
  </nav>

</header>`
});
new Vue({
  el: '#vue-app',
  data: {
    title: 'Esto es el titulo',
  },
  methods: {
    greet: function(param) {
      return 'Hola ' + param;
    }
  }
});