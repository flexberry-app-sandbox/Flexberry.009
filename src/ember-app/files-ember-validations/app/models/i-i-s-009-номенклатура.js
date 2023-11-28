import {
  defineNamespace,
  Model as НоменклатураMixin
} from '../mixins/regenerated/models/i-i-s-009-номенклатура';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НоменклатураMixin, {
});

defineNamespace(Model);

export default Model;
