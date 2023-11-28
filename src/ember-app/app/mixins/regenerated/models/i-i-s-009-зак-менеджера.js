import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  дата: DS.attr('string'),
  номер_заявки: DS.attr('number'),
  операционная_система: DS.attr('string'),
  описание_проблемы: DS.attr('string')
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-009-зак-менеджера.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер_заявки: {
    descriptionKey: 'models.i-i-s-009-зак-менеджера.validations.номер_заявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  операционная_система: {
    descriptionKey: 'models.i-i-s-009-зак-менеджера.validations.операционная_система.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание_проблемы: {
    descriptionKey: 'models.i-i-s-009-зак-менеджера.validations.описание_проблемы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
