import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS009ЗакМенеджераModel from './models/i-i-s-009-зак-менеджера';
import IIS009ИнженерModel from './models/i-i-s-009-инженер';
import IIS009КлиентыModel from './models/i-i-s-009-клиенты';
import IIS009НоменклатураModel from './models/i-i-s-009-номенклатура';
import IIS009ОтчетОТестПКModel from './models/i-i-s-009-отчет-о-тест-п-к';
import IIS009СотрудникиModel from './models/i-i-s-009-сотрудники';
import IIS009ТЧЗакМенеджераModel from './models/i-i-s-009-т-ч-зак-менеджера';
import IIS009ТЧОтчетОТестПКModel from './models/i-i-s-009-т-ч-отчет-о-тест-п-к';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-009-зак-менеджера': IIS009ЗакМенеджераModel,
    'i-i-s-009-инженер': IIS009ИнженерModel,
    'i-i-s-009-клиенты': IIS009КлиентыModel,
    'i-i-s-009-номенклатура': IIS009НоменклатураModel,
    'i-i-s-009-отчет-о-тест-п-к': IIS009ОтчетОТестПКModel,
    'i-i-s-009-сотрудники': IIS009СотрудникиModel,
    'i-i-s-009-т-ч-зак-менеджера': IIS009ТЧЗакМенеджераModel,
    'i-i-s-009-т-ч-отчет-о-тест-п-к': IIS009ТЧОтчетОТестПКModel
  },

  'application-name': '',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },

  },

});

export default translations;
