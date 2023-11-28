import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-009-отчет-о-тест-п-к', 'Unit | Serializer | i-i-s-009-отчет-о-тест-п-к', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-009-отчет-о-тест-п-к',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-009-зак-менеджера',
    'model:i-i-s-009-инженер',
    'model:i-i-s-009-клиенты',
    'model:i-i-s-009-номенклатура',
    'model:i-i-s-009-отчет-о-тест-п-к',
    'model:i-i-s-009-сотрудники',
    'model:i-i-s-009-т-ч-зак-менеджера',
    'model:i-i-s-009-т-ч-отчет-о-тест-п-к',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
