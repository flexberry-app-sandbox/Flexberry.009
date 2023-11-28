import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ТЧОтчетОТестПКMixin
} from '../mixins/regenerated/models/i-i-s-009-т-ч-отчет-о-тест-п-к';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧОтчетОТестПКMixin, Validations, {
});

export default Model;
