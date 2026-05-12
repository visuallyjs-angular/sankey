import { Component, signal } from '@angular/core';
import { SankeyOptions } from "@visuallyjs/browser-ui";
import { VisuallyJsModule } from "@visuallyjs/browser-ui-angular";

@Component({
  selector: 'app-root',
  imports: [VisuallyJsModule],
  templateUrl: './app.html'
})
export class App {
  pivot = signal('');

  options:SankeyOptions = {
    linkColorStrategy: "source-target",
    labelProperty: "name",
    labels: {
      padding: 5,
      backgroundColor: "#FFFFFF56"
    },
    tooltipSuffix: "TWh"
  };

  onPivotChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.pivot.set(target.value);
  }
}
