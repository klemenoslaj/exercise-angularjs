import angular from "angular";

import { appModule } from "./app.module";

angular.bootstrap(document, [appModule.name], { strictDi: true });
