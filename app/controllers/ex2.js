import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    toggleActive(service){
      if (service.active == true){
        set(service, 'active', false);
      }else {
        set(service, 'active', true);
      }
    }
  }
});
