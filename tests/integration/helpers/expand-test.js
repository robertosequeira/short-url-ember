import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | expand', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{expand inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'http://localhost:3000/1234');
  });
});
