# responsive-vertical-navigation
a jq responsive-vertical-navigation

## Setup
```javascript
   <script src="https://cdn.bootcss.com/jquery/2.0.2/jquery.min.js"></script>
   <script src="js/main.js"></script>
```
## Use

```javascript
  $('.g-nav').verticalNav({
    contentSections: $('.m-section'),
    advanceAmount: $(window).height()/2     // How many distances are triggered in advance
  });
```
