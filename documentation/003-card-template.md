# Install Angular Flex Layout

[Angular Flex Layout](https://github.com/angular/flex-layout) provides a  responsive API that enables developers to easily specify different layouts, sizing, visibilities for different viewport sizes and display devices. 

To install follow the steps in the [guide](https://github.com/angular/flex-layout/wiki/Integration-with-Angular-CLI) for in an Angular-Cli project:

```sh
$ npm install --save @angular/flex-layout
```

Import the installed package on the file `src/app/app.module.ts`:

```
import { FlexLayoutModule } from '@angular/flex-layout';
// other imports 
@NgModule({
  imports: [FlexLayoutModule.forRoot()],
  ...
})
export class AppModule { }
```

### Change Angular Material theme colours
Delete the import statement from `src/styles.css`.
Create a new file `src/theme.scss` and paste the following to
set a orange and blue theme:

```
@import '~@angular/material/core/theming/all-theme';
@include md-core();
$primary: md-palette($md-orange, 800);
$accent:  md-palette($md-teal, 600, A100, A400);
$warn:    md-palette($md-red, 600);
$theme: md-light-theme($primary, $accent, $warn);
@include angular-material-theme($theme);
```

Include the new theme in `angular-cli.json`:
```
  "styles": [
    ...
    "theme.scss"
  ],
```

### Creating card attributes

First, let's create the attributes to be displayed in the cards. Edit the file `card.component.ts` and set some example data for the attributes that later we will get from a service.

```
...
export class CardComponent implements OnInit {

  userName: string = "Wilfried Ifland";
  avatarUrl: string;

  progress: number = 0;
  lesson: string = "Lesson 1 of 6";

  title: string = "Simple text";

  contentHTML: string = `
    <p>Ut nostrud nostrud laboris reprehenderit officia reprehenderit irure. Reprehenderit id magna irure sit. Incididunt aute elit dolore pariatur do irure. Mollit officia est adipisicing voluptate tempor pariatur quis nulla minim. Sint eiusmod sint deserunt laboris Lorem eu amet do nisi minim quis aliqua.</p>

    <p>Magna do veniam do commodo ad exercitation fugiat proident elit reprehenderit occaecat do. Consectetur consectetur eu voluptate Lorem consequat sit ipsum aute eu veniam. Nostrud consectetur amet ea enim magna velit duis minim. Fugiat nulla mollit laborum sunt magna laborum. Eu pariatur sit ea nulla incididunt exercitation qui mollit. Consectetur est ut exercitation cillum ut exercitation sunt.</p>
  `;
...
}
```

### Creating the layout for card header

Now let's display the card attributes we set. Open the file `card.component.html` and delete all the content. Replace with the following:

Look in the [flex-layout documentation](https://github.com/angular/flex-layout/wiki/API-Overview) for more information.

```

<!-- fxLayout row to contain the md-card centrally aligned (vertically and horizontally) -->
<div fxLayout="row" fxLayoutAlign="center center">

  <md-card>
    
    <!-- Card Header -->

    <!-- fxLayout row to contain the header fields -->
    <!-- The inner components will be aligned in the left and top of the fxLayout except
    for devices greated than medium, when they will align in the center and top  -->
    <div fxLayout="row" fxLayoutAlign="start start" fxLayoutAlign.gt-md="center start">

      <!-- this div will fill 100% of the fxLayot, except
      for devices greated than medium, when it will fill 80%  -->
      <div fxFlex fxFlex.gt-md="80%">

        <md-card-subtitle><i> {{ lesson }} </i></md-card-subtitle>
        <md-card-title> {{ title }} </md-card-title>  

        <!-- Card Header -->
        <!-- The components inside this row will be placed side by side aligned on the left vertically 
        and center horizontally -->
        <div fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="10px">
          <img *ngIf="avatarUrl" md-card-avatar [src]="avatarUrl">
          <md-icon *ngIf="!avatarUrl" style="font-size: 40px; height: 40px; width: 40px; color: #333;" >
            account_circle</md-icon>
          <span style="font-weight: 500;">{{ userName }}</span>
        </div>

        <!-- Divider -->
        <hr width="200px" size="5px" align="left" color="orange" style="margin-top: 50px;">

      </div>
    </div>

    <!-- Progress bar -->
    <md-progress-bar
      [value]="progress"
      style="margin-top: 50px; margin-bottom: 50px">
    </md-progress-bar> 

    <!-- Card Content -->
    <md-card-content>
    
      <!-- fxLayot follows the header definition -->
      <div fxLayout="row" fxLayoutAlign="start start" fxLayoutAlign.gt-md="center start">
        <div fxFlex fxFlex.gt-md="80%">
          <div [innerHTML]="contentHTML"></div>
        </div>
      </div>

    </md-card-content>

    <!-- Buttons -->
    <md-card-actions>
      <div fxLayout="row">
        <span fxFlex></span>
        <button color="primary" md-raised-button>Flip</button>
      </div>
    </md-card-actions>

  </md-card>
</div>
```

Your layout should be like this in big devices:
![](images/003.layout-big.png?raw=true)

And like this on small and mediuns:
![](images/003.layout-small.png?raw=true)

