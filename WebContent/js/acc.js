 $(document).ready(function()
            {




                var nav = $('#main');
                var nav1 = $('#main1');
                var nav2 = $('#nav li a');

                /* $(window).scroll(function() {
                 if ($(this).scrollTop() > 60) {
                 nav.addClass("f-nav");
                 nav1.addClass("fav2");
                 nav2.addClass("fav3");
                 } else {
                 nav.removeClass("f-nav");
                 nav1.removeClass("fav2");
                 nav2.removeClass("fav3");
                 }
                 });*/
                var modl = document.getElementById('myModal');

// Get the image and insert it inside the modl - use its "alt" text as a cap
                var img = document.getElementById('images');
                var modlImg = document.getElementById("");
                var capText = document.getElementById("cap");
                img.onclick = function() {
                    modl.style.display = "block";
                    modlImg.src = this.src;
                    modlImg.alt = this.alt;
                    capText.innerHTML = this.alt;
                };

                var modl1 = document.getElementById('myModal1');

// Get the image and insert it inside the modl - use its "alt" text as a cap
                var img1 = document.getElementById('images1');
                var modlImg1 = document.getElementById("img02");
                var capText1 = document.getElementById("cap1");
                img1.onclick = function() {
                    modl1.style.display = "block";
                    modlImg1.src = this.src;
                    modlImg1.alt = this.alt;
                    capText1.innerHTML = this.alt;
                };

                var modl2 = document.getElementById('myModal2');

// Get the image and insert it inside the modl - use its "alt" text as a cap
                var img2 = document.getElementById('images2');
                var modlImg2 = document.getElementById("img03");
                var capText2 = document.getElementById("cap2");
                img2.onclick = function() {
                    modl2.style.display = "block";
                    modlImg2.src = this.src;
                    modlImg2.alt = this.alt;
                    capText2.innerHTML = this.alt;
                };

                var modl3 = document.getElementById('myModal3');

// Get the image and insert it inside the modl - use its "alt" text as a cap
                var img3 = document.getElementById('images3');
                var modlImg3 = document.getElementById("img04");
                var capText3 = document.getElementById("cap3");
                img3.onclick = function() {
                    modl3.style.display = "block";
                    modlImg3.src = this.src;
                    modlImg3.alt = this.alt;
                    capText3.innerHTML = this.alt;
                };

                var modl4 = document.getElementById('myModal4');

// Get the image and insert it inside the modl - use its "alt" text as a cap
                var img4 = document.getElementById('images4');
                var modlImg4 = document.getElementById("img05");
                var capText4 = document.getElementById("cap4");
                img4.onclick = function() {
                    modl4.style.display = "block";
                    modlImg4.src = this.src;
                    modlImg4.alt = this.alt;
                    capText4.innerHTML = this.alt;
                };

                var modl5 = document.getElementById('myModal5');

// Get the image and insert it inside the modl - use its "alt" text as a cap
                var img5 = document.getElementById('images5');
                var modlImg5 = document.getElementById("img06");
                var capText5 = document.getElementById("cap5");
                img5.onclick = function() {
                    modl5.style.display = "block";
                    modlImg5.src = this.src;
                    modlImg5.alt = this.alt;
                    capText5.innerHTML = this.alt;
                };
// Get the <span> element that clss the modl
                var span = document.getElementsByClassName("cls")[0];
                var span1 = document.getElementsByClassName("cls")[1];
                var span2 = document.getElementsByClassName("cls")[2];
                var span3 = document.getElementsByClassName("cls")[3];
                var span4 = document.getElementsByClassName("cls")[4];
                var span5 = document.getElementsByClassName("cls")[5];

// When the user clicks on <span> (x), cls the modl
                span.onclick = function() {
                    modl.style.display = "none";
                };

                span1.onclick = function() {
                    modl1.style.display = "none";
                };

                span2.onclick = function() {
                    modl2.style.display = "none";
                };

                span3.onclick = function() {
                    modl3.style.display = "none";
                };

                span4.onclick = function() {
                    modl4.style.display = "none";
                };

                span5.onclick = function() {
                    modl5.style.display = "none";
                };

            });/**
 * 
 */