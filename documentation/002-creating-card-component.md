# Creating card component

To create a component using material design card, first lets create a new component.
To organize the project lets create a folder called `components` inside `src/app`


![](002.generate-card.gif?raw=true)

```sh
$ cd src/app
$ mkdir components
$ cd components
$ ng generate component card
```

A new folder `cards` will be created inside `components` folder containing a template for a new component. This command also add another import statement for the component in `app.module.ts` file.

Check the file `card.component.ts`, a selector `app-card` was set to this component. It means that you can add this component in another `.html` files using the tags `<app-card> </app-card>` 

### Displaying card component

Edit the file `src/app/app.component.html`, adding the folloing lines (you can also remove the title tag):

![](002.insert-card-component.gif?raw=true)

```sh
<app-card></app-card>
```

Now check the browser, the text `card works!` should appear.

### Using material design card

As we imported the material design package in `app.module.ts` we can use any of its [components](https://material.angular.io/components) in our project. Let's change our custom `card` component to use one example of a material design card. 

Open the file `card.component.html` and change it to a sample card:

![](002.material-design-card.gif?raw=true)

```
  <md-card fxFlex="80%">
    <md-card-title>Standard Card with Actions</md-card-title>
    <md-card-subtitle>Subtitle</md-card-subtitle>
    <md-card-content>
      <p>Old there any widow law rooms. Agreed but expect repair she nay sir silent person. Direction
        can dependent one bed situation attempted. His she are man their spite avoid. Her pretended
        fulfilled extremely education yet. Satisfied did one admitting incommode tolerably how are. </p>
    </md-card-content>
    <md-card-actions align="end">
      <button md-button>Cancel</button>
      <button color="primary" md-raised-button>Action</button>
    </md-card-actions>
  </md-card>
```

Save and check the browser. You should see a material design card.