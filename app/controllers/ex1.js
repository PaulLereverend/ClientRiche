import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    save(note){
      note.set('alertVisible', true);
      note.set('info', 'Notes sauvegardées !');
    },
    clear(note){
      note.set('content', '');
    }
  }
});
