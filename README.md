# Angular5Table

### A simple way to display data in a table with angular !!

## Installation

``` javascript
    npm i angular5-table
```

## Configuration step 

* Insert in your index.html the cdn link of bootstrap 4 or include the CSS style into angular-cli.json
* Import in your module the angular5TableModule.
* Insert the the angular5Table selector tag when you need insert it
* Configure the options data

## Usage and sample
If your want use npm for install bootsrap use:

```javascript
npm install bootstrap@4.0.0 font-awesome@4.7.0

and set the script into angular-cli.json

"styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/font-awesome/css/font-awesome.css",
        "styles.css"
      ]
```
This component require the css link and the font-awesome link of bootstrap 4. You can import this link in your index.html

Click [Here](https://getbootstrap.com/docs/4.1/getting-started/introduction/) for visit the bootstrap site and copy the cdn file.

### bootstrap css and font-awesome link **(recommanded)**

```html
<link rel="stylesheet"
href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
```

### import module

```javascript
import {Angular5TableModule} from 'angular5-table';
```

### selector tag 

```html
<angular5Table 
    [dataTable]="data"
    [dataColumn]="column"
    [itemsForPage]="10"
    [options]="options"
    [pagination]="true"
    [filter]="true"
    [sortable]="true"
    [functionDefault]="yourFunction">
</angular5Table>
```

<table style="width: 800px; border: 1px solid">
    <tr style="background-color: #e1e1e1">
        <th>Attribute</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>dataTable</td>
        <td>are the data to be displayed in the data</td>
    </tr>
    <tr>
        <td>dataColumn</td>
        <td>are the data column to be show in the data header</td>
    </tr>
    <tr>
        <td>itemsForPage</td>
        <td>are the number of items to display per page</td>
    </tr>
    <tr>
        <td>options</td>
        <td>this attribute is used to specify any additional columns, you can specify columns to add icons or buttons</td>
    </tr>
    <tr>
        <td>pagination</td>
        <td>is the option to display data pagination</td>
    </tr>
    <tr>
        <td>sortable</td>
        <td>is the option to use if your want data ordering asc/ desc</td>
    </tr>
    <tr>
        <td>functionDefault</td>
        <td>
        associating a function to this attribute if you want to interact with the data in the data, the associated function returns the oparations that will be performed with any icons or buttons included in the options
        </td>
    </tr>
</table>

The option attribute is an array of object. The object must contain the following keys:

* Name, that specific the name of the element
* type, that specific the type of the element
* class, to assign a specific style
* url, to pass the URL of the icon, which must be placed in the assets folder that is located inside the src folder (src/assets/..yourImages)

``` javascript
this.options = [
      {name: 'download', type: 'img', class: 'img-table', url: 'test.png'},
      {name: 'edit', type: 'img', class: 'btn-table', url: '../assets/test.png'},
      {name: 'delete', type: 'img', class: 'btn-table', url: '../assets/test.png'},
      {name: 'button', type: 'button', class: 'form-control', url: ''},
    ];
```

The function default attribute, is a function that manage the click event of a icons or button for this table.

#### Example
When you click edit icon the event return 4 params. You can pass function to selector attribute [functionDefault]="yourFunction" :

```javascript
 yourFunction(index: number, type: any, item: any, option: any){
   // ... 
 }
```

* index, is a row index
* type, is a type of a operation (edit,download,delete)
* Item, is a row data item
* option, return the option of a row click


# Browser Support
This table has been completely tested with chrome. The main support of the browser are:

* Chrome 
* IE 10 - 11
* Firefox