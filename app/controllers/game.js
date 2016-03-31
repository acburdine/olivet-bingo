import Ember from 'ember';

export default Ember.Controller.extend({
    index: Ember.inject.controller(),

    actions: {
        exitGame() {
            let activeCount = this.get('index.activeCount');

            this.get('index.activeCountRef').set(activeCount - 1);

            this.transitionToRoute('index');
        }
    }
});
