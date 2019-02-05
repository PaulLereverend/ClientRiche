import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';
import { set } from '@ember/object';
import Ember from 'ember';

const Services = EmberObject.extend({

  services: [],
  promo: {
    "B22":0.05,
    "AZ":0.01,
    "UBOAT":0.02
  },
  inputPromo: "",
  checked: false,

  countActive: computed('services.@each.active', function() {
    var tmp = 0;
    this.get('services').forEach(function (element) {
      if (element.active){
        tmp++;
      }
    })
    return tmp;
  }),
  sumActive: computed('services.@each.active', function() {
    var tmp = 0;
    this.get('services').forEach(function (element) {
      if (element.active){
        tmp += element.price;
      }
    })
    return tmp;
  }),
  affichePromo: computed('sumActive','inputPromo','checked', function() {
  if (this.inputPromo == "" || this.checked == false){
    return this.sumActive;
  }else if (this.checked == true){
    if (this.promo.hasOwnProperty(this.inputPromo.toUpperCase())){
      return this.sumActive - this.sumActive * this.promo[this.inputPromo.toUpperCase()];
    }else{
      return 'Code incorrect';
    }
  }else {
    return this.sumActive;
  }
}),
  reduction: computed('affichePromo', function() {
    if (Number.isInteger(Math.floor(this.get('affichePromo')))){
      return this.get('sumActive') - this.get('affichePromo');
    }else{
      return 0;
    }
  })
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
          "price": 250.5,
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
