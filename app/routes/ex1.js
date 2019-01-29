import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Note = EmberObject.extend({
  content: "Entrez votre texte",
  max: 100,
  info: "",
  alertVisible: false,

  size: computed('content', function() {
    return this.get('content').length;
  }),

  style: computed('size', function () {
    if (this.get('size') >= 80){
      return 'alert-danger';
    }else if (this.get('size') >= 50){
      return 'alert-warning';
    }else{
      return 'alert-primary';
    }
  })
});

export default Route.extend({
  model(){
    return Note.create();
  }
});
