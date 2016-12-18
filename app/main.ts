// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ComponentsModule, routes } from "./components/components.module";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        ComponentsModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);