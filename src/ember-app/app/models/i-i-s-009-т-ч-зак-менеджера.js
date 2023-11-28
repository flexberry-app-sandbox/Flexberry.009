import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ТЧЗакМенеджераMixin
} from '../mixins/regenerated/models/i-i-s-009-т-ч-зак-менеджера';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧЗакМенеджераMixin, Validations, {
});

export default Model;
