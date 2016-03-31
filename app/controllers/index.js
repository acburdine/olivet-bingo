import Ember from 'ember';

const {
    inject: {service},
    Controller
} = Ember;

export default Controller.extend({
    firebase: service(),

    activeCount: 0,
    activeCountRef: null,

    init() {
        this._super(...arguments);
        this.set('activeCountRef', this.get('firebase').child('activeUsers'));

        this.get('activeCountRef').on('value', (snapshot) => {
            this.set('activeCount', snapshot.val());
        });
    },

    destroy() {
        this._super(...arguments);

        this.get('activeCountRef').off('value');
    },

    actions: {
        toGame() {
            let activeCount = this.get('activeCount');

            this.get('activeCountRef').set(activeCount + 1);

            this.transitionToRoute('game');
        }
    }
});
