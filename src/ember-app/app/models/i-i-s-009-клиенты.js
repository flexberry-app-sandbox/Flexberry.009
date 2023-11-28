import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as КлиентыMixin
} from '../mixins/regenerated/models/i-i-s-009-клиенты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КлиентыMixin, Validations, {
});

export default Model;
