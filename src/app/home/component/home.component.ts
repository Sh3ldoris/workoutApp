import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../common/services/storage.service';
import { ExampleDto } from '../object/example.interface';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
    examples: ExampleDto[];

    constructor(private storage: StorageService) {}

    ngOnInit(): void {
        this.loadData();
    }

    addData(): void {
        this.storage.addExample({ label: 'label', description: 'description' });
        this.loadData();
    }

    private loadData(): void {
        this.storage.getExamples().subscribe((examples: ExampleDto[]) => (this.examples = examples));
    }
}
