import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";

enableProdMode();

import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: `
    <div>
        <a href="https://github.com/plantain-00/pagination-js-component/tree/master/demo/angular/index.ts" target="_blank">the source code of the demo</a>
        <pagination [total]="total"
            [current]="current"
            [count]="count"
            (jump)="jump($event)">
        </pagination>
    </div>
    `,
})
export class MainComponent {
    total = 10;
    current = 1;
    count = 2;

    jump(page: number) {
        this.current = page;
    }
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { PaginationComponent } from "../../dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MainComponent, PaginationComponent],
    bootstrap: [MainComponent],
})
class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule);