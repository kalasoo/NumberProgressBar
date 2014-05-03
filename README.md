NumberProgressBar
=================

> A lovely progressbar. Inspired by [daimajia](https://github.com/daimajia/NumberProgressBar).

![demo](https://camo.githubusercontent.com/9ddcc7baf5f6289701c8f932a9acfa3f24e506dd/687474703a2f2f696d616765736861636b2e636f6d2f612f696d673834312f313839392f7a6b35302e676966)


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
var bars = $('.number-pb').NumberProgressBar(options);
bars.reach(num);  //num is the percentage at which you want to reach
```

### Options