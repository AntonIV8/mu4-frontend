import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AtestyE', 'i-i-s-mu4-atesty', {
    
  });

  modelClass.defineProjection('AtestyL', 'i-i-s-mu4-atesty', {
    
  });
};
