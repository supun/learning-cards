# Installing Angular Material
Install [Angular Material Design](https://material.angular.io/guide/getting-started) using npm:

```sh
$ npm install --save @angular/material
```

Import the installed package on the file `src/app/app.module.ts`:

![](001.import-material-design.gif?raw=true)

```
import { MaterialModule } from '@angular/material';
// other imports 
@NgModule({
  imports: [MaterialModule.forRoot()],
  ...
})
export class AppModule { }
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
