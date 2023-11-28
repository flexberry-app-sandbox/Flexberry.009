import {
  defineNamespace,
  Model as КлиентыMixin
} from '../mixins/regenerated/models/i-i-s-009-клиенты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлиентыMixin, {
});

defineNamespace(Model);

export default Model;
