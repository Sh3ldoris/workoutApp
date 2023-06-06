import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { AppCommonModule } from './common/app-common.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EnTranslation } from './translation/i18n/en.json';

@NgModule({
    declarations: [AppComponent],
    imports: [
        TranslateModule.forRoot({
            defaultLanguage: 'en',
        }),
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot({
            name: 'WorkoutDatabase',
            driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage],
        }),
        AppCommonModule,
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private translateService: TranslateService) {
        this.translateService.setTranslation('en', EnTranslation.translations);
    }
}
