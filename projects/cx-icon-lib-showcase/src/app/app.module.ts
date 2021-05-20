import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CxIconLibModule} from "../../../cx-icon-lib/src/lib/cx-icon-lib.module";
import {CxIconRegistryService} from "../../../cx-icon-lib/src/lib/cx-icon-registry.service";
import {completeIconSet} from "../../../cx-icon-lib/icons";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CxIconLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private cxIconsRegistry: CxIconRegistryService) {
    cxIconsRegistry.registerIcons(completeIconSet)
  }
}
