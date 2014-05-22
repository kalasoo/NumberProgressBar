NumberProgressBar [Demo](http://kalasoo.github.io/NumberProgressBar/)
=====================================================================

> A lovely progressbar. Inspired by [daimajia](https://github.com/daimajia/NumberProgressBar).

![demo](http://imageshack.com/a/img838/9281/urq.gif)

### To-do List

- [ ] Support multiple number styles
  - [x] percentage
  - [x] Numerator / denominator
  - [ ] negative number
  - [ ] customizable
- [ ] Fix bug of multiple reach operations
- [ ] Add color option


### Installation

```
bower install NumberProgressBar [--save]
```

### Usage

##### HTML

```HTML
<div class="number-pb">
  <div class="number-pb-shown"></div>
  <div class="number-pb-num">0%</div>
</div>
```

##### CSS
You can refer to the file `number-pb.css` and make your own modifications.

```CSS
.number-pb {
  position: relative;
  height: 3px;
  background-color: #ddd;
}

.number-pb .number-pb-shown {
  position: absolute;
  background-color: #176785;
  background-image: linear-gradient(to right, #176785, #499989);
  top: -1px;
  left: 0;
  height: 5px;
  -moz-box-shadow:    0 0 3px 0 #499989;
  -webkit-box-shadow: 0 0 3px 0 #499989;
  box-shadow:         0 0 3px 0 #499989;
}

.number-pb .number-pb-num {
  position: absolute;
  background-color: #fff;
  left: 0;
  top: -0.45em;
  padding: 0 5px; 
}
```

##### javaScript

```javascript
var basicBar = $basic.find('.number-pb').NumberProgressBar({
  style: 'basic',
  min: A_MIN_NUMBER,
  max: A_MAX_NUMBER
})
var percentageBar = $('#percentage .number-pb').NumberProgressBar({
  style: 'percentage'  
})
var stepBar = $('#step .number-pb').NumberProgressBar({
  style: 'step',
  max: maxStep
})
/* For stepBar:
   min is set to 0 automatically,
   max is supposed to be > 0 */
bars.reach(dest, reachOptions);  //dest is the progress # at which you want to reach
```


### Options

#### barOptions

These are the options you can configure when initializing a progressbar.

| Option        | Default              | Usage                                     |
| ------------- | -------------------- | ----------------------------------------- |
| style         | `basic`              | [`basic`, `percentage`, `step`]           |
| duration      | `10000`              | The duration (in ms) needed from 0 to 100 |
| min           | `0`                  | The min # of the progress                 |
| max           | `100`                | The max # of the progress                 |
| current       | `0`                  | The initial # of the progress             |
| shownQuery    | `'.number-pb-shown'` | Your query string for the shown bar       |
| numQuery      | `'.number-pb-num'`   | Your query string for the number          |

#### reachOptions

These are the options for each reach operation: `bar.reach(dest, reachOptions)`.

| Option        | Default              | Usage                                       |
| ------------- | -------------------- | ------------------------------------------- |
| duration      | `null`               | The duration for a reach operation.         |
| complete      | `null`               | The callback when a reach operation is done.|
