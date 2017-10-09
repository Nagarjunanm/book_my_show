$(document).ready(function() {
                $("#shree1").fadeToggle(6000);
                var nav = $('#main');
                var nav1 = $('#main1');
                var nav2 = $('#nav li a');

                $(window).resize(function() {
                    $('#shree').css('font-size', ($(window).width() * 0.01) + 'px');
                });

                $(window).scroll(function() {
                    if ($(this).scrollTop() > 60) {
                        nav.addClass("f-nav");
                        nav1.addClass("fav2");
                        nav2.addClass("fav3");
                    } else {
                        nav.removeClass("f-nav");
                        nav1.removeClass("fav2");
                        nav2.removeClass("fav3");
                    }
                });

                

            });
            var myCenter = new google.maps.LatLng(12.312833,76.642665);
                function initialize()
                {
                    var mapProp = {
                        center: myCenter,
                        zoom: 16,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };

                    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

                    var marker = new google.maps.Marker({
                        position: myCenter,
                    });

                    marker.setMap(map);
                }

                google.maps.event.addDomListener(window, 'load', initialize);

 var myCenter1 = new google.maps.LatLng(12.994815,77.539482);
                function initialize1()
                {
                    var mapProp1 = {
                        center: myCenter1,
                        zoom: 16,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };

                    var map1 = new google.maps.Map(document.getElementById("googleMap1"), mapProp1);

                    var marker1 = new google.maps.Marker({
                        position: myCenter1,
                    });

                    marker1.setMap(map1);
                }

                google.maps.event.addDomListener(window, 'load', initialize1);
/**
 * 
 */