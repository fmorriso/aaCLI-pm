import { Component, VERSION as ngVersion} from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aaCLI-pm';
  public get angularVersion(): string {
    return ngVersion.full;
  }
}
