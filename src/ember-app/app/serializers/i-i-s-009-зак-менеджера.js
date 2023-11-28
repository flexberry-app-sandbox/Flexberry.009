import { Serializer as ЗакМенеджераSerializer } from
  '../mixins/regenerated/serializers/i-i-s-009-зак-менеджера';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗакМенеджераSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
