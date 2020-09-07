import "./app.component.css";

class AppComponent implements ng.IComponentController {
  static $inject: string[] = [];

  title = "AngularJS exercise 👋";

  constructor() {}
}

export const appComponent: ng.IComponentOptions = {
  controller: AppComponent,
  template: `
        <h1>{{ $ctrl.title }}</h1>
    `,
};
