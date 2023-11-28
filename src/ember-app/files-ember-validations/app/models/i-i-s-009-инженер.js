import {
  defineNamespace,
  Model as ИнженерMixin
} from '../mixins/regenerated/models/i-i-s-009-инженер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИнженерMixin, {
});

defineNamespace(Model);

export default Model;
