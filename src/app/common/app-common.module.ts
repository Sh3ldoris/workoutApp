import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { HeaderService } from './services/header.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [HeaderComponent],
    imports: [IonicModule, CommonModule, TranslateModule],
    providers: [HeaderService, StorageService],
    exports: [HeaderComponent],
})
export class AppCommonModule {}
