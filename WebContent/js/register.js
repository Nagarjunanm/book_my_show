 $(document).ready(function() {

     
                $("#booking").show();
                $("#mysurubook").hide();
                $("#mysurupartybook").hide();
                $("#mysurutypes").hide();
                $("#bengalurubook").hide();
                $("#mysurupartybook1").hide();
                $("#title1").hide();
                $("#title2").hide();
                $("#mysuru").click(function() {
                    $("#booking").hide();
                    $("#mysurutypes").show();
                    $("#title1").show();
                });

                $("#mysururoom").click(function() {
                    $("#booking").hide();
                    $("#mysurutypes").hide();
                    $("#mysurubook").show();
                });

                $("#mysuruparty").click(function() {
                    $("#booking").hide();
                    $("#mysurutypes").hide();
                    $("#mysurupartybook").show();
                });

                $("#mysuruparty1").click(function() {
                    $("#booking").hide();
                    $("#mysurutypes").hide();
                    $("#mysurupartybook1").show();
                });

                $("#bengaluru").click(function() {
                    $("#booking").hide();
                    $("#bengalurubook").show();
                    $("#title2").show();
                });


                $(".type1").focusout(function() {
                    var x = document.getElementById("type1").value;
                    switch (x)
                    {
                        case '1':
                            $("#type2").text("max capacity is 3 per room and above will be extra");
                            break;
                        case '2':
                            $("#type2").text("max capacity is 4 per room and above will be extra");
                            break;
                        case '3':
                            $("#type2").text("max capacity is 3 per room and above will be extra");
                            break;
                        case '4':
                            $("#type2").text("max capacity is 3 per room and above will be extra");
                            break;

                    }
                });

                $(".type3").focusout(function() {
                    var x = document.getElementById("type3").value;
                    switch (x)
                    {
                        case '1':
                            $("#type4").text("max capacity is 3 per room and above will be extra");
                            break;
                        case '2':
                            $("#type4").text("max capacity is 4 per room and above will be extra");
                            break;
                        case '3':
                            $("#type4").text("max capacity is 3 per room and above will be extra");
                            break;
                        case '4':
                            $("#type4").text("max capacity is 3 per room and above will be extra");
                            break;

                    }
                });
                /*              $("#cdate").focusin(function() {
                 var r = document.getElementById("adate").value;
                 var q=$.datepicker.formatDate('mm/dd/yy', new Date());
                 //alert(q);
                 //  alert(q+"\n"+r);
                 if ((new Date(q).getDate() > new Date(r).getDate()))
                 {
                 //alert(q+"\n"+r);
                 
                 
                 }
                 
                 */


                $("#submit").click(function(e) {
                    var r = document.getElementById("adate").value;
                    var q = $.datepicker.formatDate('M/dd/yy', new Date());
                    //alert(q);
                 // alert(q+"\n"+r);
                    if (new Date(r).valueOf()>new Date().valueOf())
                    {
                        var startDt = document.getElementById("adate").value;
                        var endDt = document.getElementById("cdate").value;

                        if (new  Date(startDt).valueOf() >new Date(endDt).valueOf())
                        {
                            alert("ENTERED WRONG DETAILS OF DATE");
                            e.preventDefault(e);
                        }
                       
                       
                    }

                    else
                    {
                        alert("ENTERED out of date DETAILS OF DATE");
                        e.preventDefault(e);
                    }
                    
                   
                 
                    
                });

                
                $("#submit1").click(function(e) {
                    var r = document.getElementById("adate1").value;
                    var q = $.datepicker.formatDate('M/dd/yy', new Date());
                    //alert(q);
                      alert(q+"\n"+r);
                    if (new Date(r).valueOf() >  new Date().valueOf())
                    {
                        var startDt = document.getElementById("adate1").value;
                        var endDt = document.getElementById("cdate1").value;

                        if (new Date(startDt).valueOf() > new Date(endDt).valueOf())
                        {
                            alert("ENTERED WRONG DETAILS OF DATE");
                            e.preventDefault(e);
                        }
                    }

                    else
                    {
                        alert("ENTERED out of date DETAILS OF DATE");
                        e.preventDefault(e);
                    }

                });

                $("#submit2").click(function(e) {
                    var r = document.getElementById("partydate").value;
                    var q = $.datepicker.formatDate('M/dd/yy', new Date());
                    //alert(q);
                    //  alert(q+"\n"+r);
                    if (new Date().valueOf()>new Date(r).valueOf())
                    {
                        alert("ENTERED out of date DETAILS OF DATE");
                        e.preventDefault(e);
                    }

                });

                $("#submit3").click(function(e) {
                    var r = document.getElementById("party-date2").value;
                    var q = $.datepicker.formatDate('M/dd/yy', new Date());
                    //alert(q);
                    //  alert(q+"\n"+r);
                    if (new Date().valueOf()>new Date(r).valueOf())
                    {
                        alert("ENTERED out of date DETAILS OF DATE");
                        e.preventDefault(e);
                    }

                });

                var nav = $('#main');
                var nav1 = $('#main1');
                var nav2 = $('#nav li a');

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

            });/**
 * 
 */