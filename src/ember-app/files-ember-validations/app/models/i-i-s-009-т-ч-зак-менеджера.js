import {
  defineNamespace,
  Model as ТЧЗакМенеджераMixin
} from '../mixins/regenerated/models/i-i-s-009-т-ч-зак-менеджера';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧЗакМенеджераMixin, {
});

defineNamespace(Model);

export default Model;
