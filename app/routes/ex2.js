import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Services = EmberObject.extend({

  services: [],

  countActive: computed('services', function() {
    var tmp = 0;
    this.get('services').forEach(function (element) {
      if (element.active){
        tmp++;
      }
    })
    return tmp;
  }),
  sumActive: computed('services', function() {
    var tmp = 0;
    this.get('services').forEach(function (element) {
      if (element.active){
        tmp += element.price;
      }
    })
    return tmp;
  }),
});


export default Route.extend({
  model(){
    return Services.create({services:
        [
          {
            "name": "Web Development",
            "price": 300,
            "active":true
          },{
          "name": "Design",
          "price": 400,
          "active":false
        },{
          "name": "Integration",
          "price": 250,
          "active":false
        },{
          "name": "Formation",
          "price": 220,
          "active":false
        }
        ]
    });
  }
});
