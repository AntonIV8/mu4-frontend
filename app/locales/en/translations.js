import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
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
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
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
        mu4: {
          caption: 'mu4',
          title: 'mu4',
          'i-i-s-mu4-atest3-l': {
            caption: 'i-i-s-mu4-atest3-l',
            title: 'i-i-s-mu4-atest3-l'
          },
          'i-i-s-mu4-atesty-l': {
            caption: 'i-i-s-mu4-atesty-l',
            title: 'i-i-s-mu4-atesty-l'
          }
        }
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
    'i-i-s-mu4-atest3-l': IISmu4Atest3LForm,
    'i-i-s-mu4-atesty-l': IISmu4AtestyLForm,
    'i-i-s-mu4-atest3-e': IISmu4Atest3EForm,
    'i-i-s-mu4-atesty-e': IISmu4AtestyEForm
  },

});

export default translations;
