import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  номер_Телефона: DS.attr('string'),
  фИО: DS.attr('string'),
  закМенеджера: DS.belongsTo('i-i-s-009-зак-менеджера', { inverse: null, async: false })
});

export let ValidationRules = {
  номер_Телефона: {
    descriptionKey: 'models.i-i-s-009-сотрудники.validations.номер_Телефона.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-009-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  закМенеджера: {
    descriptionKey: 'models.i-i-s-009-сотрудники.validations.закМенеджера.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
