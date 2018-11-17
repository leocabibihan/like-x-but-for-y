var app = new Vue({
  el: "#app",
  data: {
    i: 0,
    startups: []
  },
  created: function() {
    this.loadStartup();
  },
  methods: {
    loadStartup: function() {
      fetch("startups.json")
        .then(res => res.json())
        .then(data =>
          data.forEach(startup => {
            this.startups.push(startup);
          })
        );
    }
  }
});
console.log(app.startups);
