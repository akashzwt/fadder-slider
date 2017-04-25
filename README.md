# Fadder Slider
<h2>The Multiple Carousel Fade slider</h2>
<h3>Multiple item Carousel Fade slider with responsive. Easy to build. Minor options.</h3>
<p><em><strong>the carousel for simply fade with responsive</strong></em></p>
<h4>Demo</h4>
<p><a href="#">UPCOMING</a></p>
<h4>Description</h4>
<p>Fadder Slider, Here you can setting of dots and arrows. <br>Manageable items in desktop as well as responsive with setting option.</p>
<div>
<p>Example</p>
<pre>
&lt;div class="ClassName"&gt;
    &lt;div class="item-slider"&gt;
        &lt;div class="single"&gt;&lt;img href="path"&gt;&lt;/div&gt;
        &lt;div class="single"&gt;&lt;img href="path"&gt;&lt;/div&gt;
        &lt;div class="single"&gt;&lt;img href="path"&gt;&lt;/div&gt;
        &lt;div class="single"&gt;&lt;img href="path"&gt;&lt;/div&gt;
        &lt;div class="single"&gt;&lt;img href="path"&gt;&lt;/div&gt;
        &lt;div class="single"&gt;&lt;img href="path"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>
</div>
<h4>Settings</h4>
<p>Here you can set your responsive screen also. And also set items for that screen viewport. <br>Following shows the <strong>default options</strong> for Fadder. </p>  </p>
<pre>
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
</pre>
<h4>Browser support</h4>
<p>Works on  modern browsers such as Chrome, Firefox, and Safari</p>
<h4>Dependencies</h4>
<p>jQuery 1.9 <br> jQuery touchSwipe</p>
