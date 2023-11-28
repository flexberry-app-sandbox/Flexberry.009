import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as НоменклатураMixin
} from '../mixins/regenerated/models/i-i-s-009-номенклатура';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НоменклатураMixin, Validations, {
});

export default Model;
