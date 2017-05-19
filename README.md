# Fadder Slider
A jQuery plugin to be used on touch devices such as iPad, iPhone, Android etc.

Multiple item Carousel Fade slider with responsive. Easy to build. Minor options.

Carousel for simply fade with responsive.

Fadder Slider, Here you can setting of dots and arrows. <br>Manageable items in desktop as well as responsive with setting option.


### Example
````html
<div class="ClassName">
    <div class="item-slider">
        <div class="single"><img href="path"></div>
        <div class="single"><img href="path"></div>
        <div class="single"><img href="path"></div>
        <div class="single"><img href="path"></div>
        <div class="single"><img href="path"></div>
        <div class="single"><img href="path"></div>
    </div>
</div>
````

## Settings
Here you can set your responsive screen also. And also set items for that screen viewport. 
Following shows the for Fadder. 
````javascript
$(document).ready(function(){   
    $('.ClassName').fadder({
        // options...
        desktopItem : 8,  //Greater than 1024  
        tabletItem : 6,  //1023 to 768  
        bigMobileItem : 4, //768 to 420  
        mobileItem : 2, //420 to 0  
        tabletScreen : 1024,
        bigMobileScreen : 768,
        mobileScreen : 420,
        autoplayTime : 3000, //autoplay speed in milisecond
        dots : true, //true or false
        arrows : true, //true or false
    }); 
});
````

### Browser support:
Here you can set your responsive screen also. And also set items for that screen viewport.
Following shows the for Fadder.
