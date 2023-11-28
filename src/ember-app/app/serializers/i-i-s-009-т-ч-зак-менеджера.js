import { Serializer as ТЧЗакМенеджераSerializer } from
  '../mixins/regenerated/serializers/i-i-s-009-т-ч-зак-менеджера';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧЗакМенеджераSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
