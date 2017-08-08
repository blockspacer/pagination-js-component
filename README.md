[![Dependency Status](https://david-dm.org/plantain-00/pagination-js-component.svg)](https://david-dm.org/plantain-00/pagination-js-component)
[![devDependency Status](https://david-dm.org/plantain-00/pagination-js-component/dev-status.svg)](https://david-dm.org/plantain-00/pagination-js-component#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/pagination-js-component.svg?branch=master)](https://travis-ci.org/plantain-00/pagination-js-component)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/pagination-js-component?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/pagination-js-component/branch/master)
[![npm version](https://badge.fury.io/js/pagination-js-component.svg)](https://badge.fury.io/js/pagination-js-component)
[![Downloads](https://img.shields.io/npm/dm/pagination-js-component.svg)](https://www.npmjs.com/package/pagination-js-component)

# pagination-js-component

A vuejs, angular, reactjs pagination component

#### features

+ vuejs component
+ reactjs component
+ angular component
+ previous/next page
+ home/end page

#### install

`npm i pagination-js-component`

#### link css

```html
<link rel="stylesheet" href="./node_modules/pagination-js-component/pagination.min.css" />
```

#### vuejs component demo

`npm i vue vue-class-component`

```ts
import "pagination-js-component/vue";
```

```html
<pagination :total="total"
    :current="current"
    :count="count"
    @jump="jump($event)"></pagination>
```

the online demo: https://plantain-00.github.io/pagination-js-component/demo/vue/index.html

#### reactjs component demo

```ts
import { Pagination } from "pagination-js-component/react";
```

```html
<Pagination total={this.total}
    current={this.current}
    count={this.count}
    jump={page => this.jump(page)}></Pagination>
```

the online demo: https://plantain-00.github.io/pagination-js-component/demo/react/index.html

#### angular component demo

```ts
import { PaginationModule } from "pagination-js-component/angular";

@NgModule({
    imports: [BrowserModule, FormsModule, PaginationModule],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
class MainModule { }
```

```html
<pagination [total]="total"
    [current]="current"
    [count]="count"
    (jump)="jump($event)"></pagination>
```

the online demo: https://plantain-00.github.io/pagination-js-component/demo/angular/index.html

#### properties and events of the component

name | type | description
--- | --- | ---
total | number | total page count
current | number | current page
count | number | page count around current page, eg, if `current` is 5, `count` is 2, then `3 4 5 6 7` will be displayed
jump | (page: number) => void | triggered when click a page
mode | number? | mode

#### change logs

```ts
// v2
import "pagination-js-component/vue";

// v1
import "pagination-js-component/dist/vue";
```
