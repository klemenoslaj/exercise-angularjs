import angular from "angular";

import { appComponent } from "./app.component";

export const appModule = angular
  .module("appModule", [])
  .component("appRoot", appComponent);
