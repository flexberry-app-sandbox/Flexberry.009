import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-009-т-ч-отчет-о-тест-п-к', 'Unit | Model | i-i-s-009-т-ч-отчет-о-тест-п-к', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
