import {
  defineNamespace,
  Model as ЗакМенеджераMixin
} from '../mixins/regenerated/models/i-i-s-009-зак-менеджера';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗакМенеджераMixin, {
});

defineNamespace(Model);

export default Model;
