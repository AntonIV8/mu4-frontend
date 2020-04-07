import { Serializer as AtestySerializer } from
  '../mixins/regenerated/serializers/i-i-s-mu4-atesty';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(AtestySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
