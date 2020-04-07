import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISmu4Atest3LForm from './forms/i-i-s-mu4-atest3-l';
import IISmu4AtestyLForm from './forms/i-i-s-mu4-atesty-l';
import IISmu4Atest3EForm from './forms/i-i-s-mu4-atest3-e';
import IISmu4AtestyEForm from './forms/i-i-s-mu4-atesty-e';
import IISmu4Atest3Model from './models/i-i-s-mu4-atest3';
import IISmu4AtestyModel from './models/i-i-s-mu4-atesty';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-mu4-atest3': IISmu4Atest3Model,
    'i-i-s-mu4-atesty': IISmu4AtestyModel
  },

  'application-name': 'Mu4',

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
            caption: '',
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
        'application-name': 'Mu4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Mu4',
          title: 'Mu4'
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
        mu4: {
          caption: 'mu4',
          title: 'mu4',
          'i-i-s-mu4-atest3-l': {
            caption: 'Atest3',
            title: ''
          },
          'i-i-s-mu4-atesty-l': {
            caption: 'Atesty',
            title: ''
          }
        }
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
    'i-i-s-mu4-atest3-l': IISmu4Atest3LForm,
    'i-i-s-mu4-atesty-l': IISmu4AtestyLForm,
    'i-i-s-mu4-atest3-e': IISmu4Atest3EForm,
    'i-i-s-mu4-atesty-e': IISmu4AtestyEForm
  },

});

export default translations;
