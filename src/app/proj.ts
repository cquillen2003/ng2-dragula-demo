import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {TestComponent} from './test-component/test-component';


@Component({
  selector: 'proj-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/proj.html',
  directives: [ROUTER_DIRECTIVES, TestComponent],
  pipes: []
})
@RouteConfig([

])
export class ProjApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
