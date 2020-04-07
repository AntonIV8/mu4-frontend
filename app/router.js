import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-mu4-atest3-l');
  this.route('i-i-s-mu4-atest3-e',
  { path: 'i-i-s-mu4-atest3-e/:id' });
  this.route('i-i-s-mu4-atest3-e.new',
  { path: 'i-i-s-mu4-atest3-e/new' });
  this.route('i-i-s-mu4-atesty-l');
  this.route('i-i-s-mu4-atesty-e',
  { path: 'i-i-s-mu4-atesty-e/:id' });
  this.route('i-i-s-mu4-atesty-e.new',
  { path: 'i-i-s-mu4-atesty-e/new' });
});

export default Router;
