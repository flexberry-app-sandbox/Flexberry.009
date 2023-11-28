import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ОтчетОТестПКMixin
} from '../mixins/regenerated/models/i-i-s-009-отчет-о-тест-п-к';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтчетОТестПКMixin, Validations, {
});

export default Model;
