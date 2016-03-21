import {Component} from 'angular2/core';
import {Dragula} from '../libs/directives/dragula.directive';
import {DragulaService} from '../libs/providers/dragula.provider';

@Component({
  selector: 'test-component',
  templateUrl: 'app///test-component/test-component.html',
  styleUrls: ['app///test-component/test-component.css'],
  viewProviders: [DragulaService],
  directives: [Dragula],
  pipes: []
})
export class TestComponent {

  constructor() {}

}
