import { Component } from '@angular/core';
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  data = [];

  constructor(private storage: StorageService) {
    this.loadData();
  }

  private async loadData() {
      this.data = await this.storage.getSomeData();
  }

  async addData() {
      await this.storage.addData('To su nove data');
      this.loadData();
  }
}
