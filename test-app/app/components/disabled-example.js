import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DisabledExampleComponent extends Component {
  @tracked
  disabled = true;

  @action
  toggleDisabled() {
    this.disabled = !this.disabled;
  }
}
