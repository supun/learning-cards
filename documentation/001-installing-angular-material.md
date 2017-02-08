# Installing Angular Material

Follow the steps in [Angular Material Guide](https://material.angular.io/guide/getting-started) to install Angular Material:

```sh
$ npm install --save @angular/material
```

Import the installed package on the file `src/app/app.module.ts`:

![](images/001.import-material-design.gif?raw=true)

```
import { MaterialModule } from '@angular/material';
// other imports 
@NgModule({
  imports: [MaterialModule.forRoot()],
  ...
})
export class AppModule { }
```

#### Install HammerJS

Installing hammerjs with npm:

```sh
$ npm install --save hammerjs 
$ npm install --save-dev @types/hammerjs
```

Import HammerJS on `app.module.js`

```
import 'hammerjs';
```

Add hammerjs to the types section of `tsconfig.json` file:
```
{
  "compilerOptions": {
    "types": [
      "hammerjs"
    ]
  }
}
```

#### Include a theme style

To use a pre-built material theme, open the file `src/styles.css` and add the following line: 

```sh
@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';
```

More information on the [guide](https://material.angular.io/guide/theming). 

#### Include material design icons

To use material design icons, change the file `src/index.html` adding the following line inside `<head> </head>` tags:

```sh
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
