"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var components_module_1 = require("./components/components.module");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    return AppComponentModule;
}());
AppComponentModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        imports: [
            components_module_1.ComponentsModule,
            router_1.NativeScriptRouterModule.forRoot(components_module_1.routes)
        ],
    }),
    __metadata("design:paramtypes", [])
], AppComponentModule);
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=main.js.map