import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },

  },

});

export default translations;
