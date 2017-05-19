# CarouselFade
Multiple item Carousel Fade slider with responsive. Easy to build. Minor options.
<p><em><strong>the carousel for simply fade with responsive</strong></em></p>
<h4>Demo</h4>
<p><a href="http://192.168.1.82/r&d/practice/carousel-fade/CarouselFade/">http://192.168.1.82/r&d/practice/carousel-fade/CarouselFade/</a></p>
<h4>Description</h4>
<p>Here you can change location and structure of dots and arrows wherever and whatever name you want. <br>Manageable items in desktop as well as responsive with setting option. </p>
<div>
<p>Example</p>
<pre>
<code>
&lt;div class="ClassName"&gt;
  &lt;div class="item-slider"&gt;
    &lt;div class="single"&gt;&lt;img href="path"&gt;&lt;/div&gt;
    &lt;div class="single"&gt;&lt;img href="path"&gt;&lt;/div&gt;
    &lt;div class="single"&gt;&lt;img href="path"&gt;&lt;/div&gt;
    &lt;div class="single"&gt;&lt;img href="path"&gt;&lt;/div&gt;
    &lt;div class="single"&gt;&lt;img href="path"&gt;&lt;/div&gt;
    &lt;div class="single"&gt;&lt;img href="path"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="arrows"&gt;
    &lt;div class="left-arrow"&gt;LEFT&lt;/div&gt;
    &lt;div class="right-arrow"&gt;RIGHT&lt;/div&gt;
  &lt;/div/&gt;
  &lt;div class="dots"&gt;&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
</div>
<h4>Settings</h4>
<p>Here you can set your responsive screen also. And also set items for that screen viewport.  </p>
<pre>
<code>
$(document).ready(function(){   
  $('.ClassName').CarouselFade({
    // options...
    desktopItem : 8,  //Greater than 1024  
    tabletItem : 6,  //1023 to 768  
    bigMobileItem : 4, //768 to 420  
    mobileItem : 2, //420 to 0  
    tabletScreen : 1024,
    bigMobileScreen : 768,
    mobileScreen : 420,
    autoplayTime : 3000 //autoplay speed in milisecond
  }); 
}); 
</code>
</pre>
<h4>Browser support</h4>
<p>Works on  modern browsers such as Chrome, Firefox, and Safari</p>
<h4>Dependencies</h4>
<p>jQuery 1.9 <br> jQuery touchSwipe</p>
