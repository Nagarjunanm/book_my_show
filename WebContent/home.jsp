<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
        <title>BOOK MY SHOW </title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/home.css">
          <link rel="stylesheet" href="css/search.css">
        <script src="js/bootstrap.min.js" ></script>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script src="http://maps.googleapis.com/maps/api/js">
        </script>
        <script type="text/javascript" src="js/home.js"></script>
         <link rel="stylesheet" href="css/acc.css"/>
        <script src="js/acc.js"></script>
            </head>
    <body>

       <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    
    <ul class="nav navbar-nav" id="nav">
      <li class="active"><a href="#"><span class="glyphicon glyphicon-home"></span></a></li>
      <li><a href="#"><b>Experience</b></a></li>
      <li><a href="#"><b>Movies</b></a></li>
      <li><a href="#"><b>Events</b></a></li>
       <li><a href="#"><b>PLays</b></a></li>
        <li><a href="#"><b>Sports</b></a></li>
    </ul>
    
              <ul class="nav navbar-nav pull-right" id="nav">
             <li><a href="#"><b>Support</b></a></li>
      <li><a href="#"><b>SignIn</b></a></li>
      <li><a href="#"><b>Location</b></a></li>
            </ul>
  </div>
</nav>

        <div id="main">
            <div class="navbar-wrapper">
                <div class="container-fluid">
                    <div class="navbar navbar-inverse">
                        <div id="main1">
                            <div class="navbar-header">
                                <a class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </a>
                                <a class="navbar-brand" style="color:limegreen;" href="#">&nbsp;&nbsp;&nbsp;&nbsp;BOOK MY SHOW</a>
                            </div>
                            <div class="navbar-collapse collapse" id="myNavbar">
                              
                                <form action="" class="search-form">
                <div class="form-group has-feedback">
            		<label for="search" class="sr-only">Search</label>
            		<input type="text" class="form-control" name="search" id="search" placeholder="search">
              		<span class="glyphicon glyphicon-search form-control-feedback"></span>
            	</div>
            </form>
                            </div>
                        </div>
                    </div>
                </div><!-- /container -->
            </div><!-- /navbar wrapper -->
        </div>

        <!-- Carousel
        ================================================== -->
        <!--<div class="overlay"><h1>Overlay Text</h1></div>-->
        <div id="myCarousel" class="carousel slide gal" id="gal" >
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="item active">
                    <img src="images/paster1.jpg" class="img-responsive">
                    <div class="container">
                        <div class="carousel-caption">
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="images/poster2.jpg" class="img-responsive">
                    <div class="container">
                        <div class="carousel-caption">
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="images/poster3.jpg" class="img-responsive">
                    <div class="container">
                        <div class="carousel-caption">

                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="images/index_backgro.jpg" class="img-responsive">
                    <div class="container">
                        <div class="carousel-caption">

                        </div>
                    </div>
                </div>
            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <i class="glyphicon glyphicon-chevron-left"></i>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <i class="glyphicon glyphicon-chevron-right"></i>
            </a>  
        </div>


        <div class="row">

            <div id="shree"><p style="color:green;font-family:Ravie;font-size:25px;"><b>BOOK MY SHOW</b></p></div>
        </div>
        
       

    <div class="container">
        <div class="colls">
            <ul class="prc">
                <li class="header">Tarak</li>
                <li><img id="images" class="images" src="images/tarak.jpg" height="200px;" width="100%" /></li>
                <li class="grey">timings</li>
                <li>Morning</li>
                <li>11.30pm</li>
                
                <li class="grey"><a href="" class="button">BOOK</a></li>
            </ul>
        </div>

        <div class="colls">
            <ul class="prc">
                <li class="header">Barjari</li>
                <li><img id="images1" class="images" src="images/bar.jpg" height="200px;" width="100%" ></li>
                               <li class="grey">timings</li>
                <li>Morning</li>
                <li>11.30pm</li>
                <li class="grey"><a href="" class="button">BOOK</a></li>
            </ul>
        </div>

        <div class="colls">
            <ul class="prc">
                <li class="header">Mugulu Nage</li>
                 <li><img id="images2" class="images" src="images/mugu.jpg" height="200px;" width="100%" /></li>
                <li class="grey">timings</li>
                <li>Morning</li>
                <li>11.30pm</li>
                <li class="grey"><a href="" class="button">BOOK</a></li>
            </ul>
        </div>

        <div class="colls">
            <ul class="prc">
                <li class="header">IT</li>
                <li><img id="images3" class="images" src="images/it.jpg" height="200px;" width="100%" /></li>
                <li class="grey">timings</li>
                <li>Morning</li>
                <li>11.30pm</li>
                <li class="grey"><a href="" class="button">BOOK</a></li>
            </ul>
        </div>

        <div class="colls">
            <ul class="prc">
                <li class="header">RajaKumara</li>
                <li><img id="images4" class="images" src="images/raj.jpg" height="200px;" width="100%" /></li>
               <li class="grey">timings</li>
                <li>Morning</li>
                <li>11.30pm</li>
                <li class="grey"><a href="" class="button">BOOK</a></li>
            </ul>
        </div>

        <div class="colls">
            <ul class="prc">
                <li class="header">KGF</li>
                <li><img id="images5" class="images"src="images/it.jpg" height="200px;" width=it"100%"></li>
               <li class="grey">timings</li>
                <li>Morning</li>
                <li>11.30pm</li>
                <li class="grey"><a href="" class="button">BOOK</a></li>
            </ul>
        </div>
        
        <div class="colls">
            <ul class="prc">
                <li class="header">KGF</li>
                <li><img id="images5" class="images"src="images/it.jpg" height="200px;" width=it"100%"></li>
               <li class="grey">timings</li>
                <li>Morning</li>
                <li>11.30pm</li>
                <li class="grey"><a href="" class="button">BOOK</a></li>
            </ul>
        </div>
        
        <div class="colls">
            <ul class="prc">
                <li class="header">KGF</li>
                <li><img id="images5" class="images"src="images/it.jpg" height="200px;" width=it"100%"></li>
               <li class="grey">timings</li>
                <li>Morning</li>
                <li>11.30pm</li>
                <li class="grey"><a href="" class="button">BOOK</a></li>
            </ul>
        </div>

        <div id="myModal" class="modl">
            <span class="cls">×</span>
            <img class="modl-content" id="img01">
            <div class="cap" id="cap"></div>
        </div>
        <div id="myModal1" class="modl">
            <span class="cls">×</span>
            <iframe class="modl-content" id="img02"></iframe>
            <div class="cap" id="cap1"></div>
        </div>

        <div id="myModal2" class="modl">
            <span class="cls">×</span>
            <iframe class="modl-content" id="img03"></iframe>
            <div class="cap" id="cap2"></div>
        </div>

        <div id="myModal3" class="modl">
            <span class="cls">×</span>
            <img class="modl-content" id="img04">
            <div class="cap" id="cap3"></div>
        </div>

        <div id="myModal4" class="modl">
            <span class="cls">×</span>
            <img class="modl-content" id="img05">
            <div class="cap" id="cap4"></div>
        </div>

        <div id="myModal5" class="modl">
            <span class="cls">×</span>
            <img class="modl-content" id="img06">
            <div class="cap" id="cap5"></div>
        </div>
    </div><br>


        <section class="foter" id="foter">
            <p class="text-center">
                <a href="#wrapper" class="top"><i class="fa fa-angle-double-up fa-2x"></i></a>
            </p>
            <br>
            <div class="container">
                <ul>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>

                </ul>
                
                <div class="row">
                <div class="col-sm-3"></div>
                 <div class="col-sm-3">
               <p>  Company Aims to provide Excellent Movie Booking <br>
                 	Thank You for the Support</p>
                 </div>
                  <div class="col-sm-3"><p>Headquaters @
                  <br>
                  Bengaluru<br>
                  Mysore</p></div>
                   <div class="col-sm-3"></div>
                </div>
                <p>
                    Book My Show<br>
                </p>
                <div class="row" style="background-color: gray;">
                    <div class="col-sm-3"><p>copy right (c) BOOK MY SHOW</p>
                    </div>
                </div>
            </div>
        </section>

        <script>
            $(document).ready(function() {
                $("#gal").carousel({interval: 2800});

                $(".item1").click(function() {
                    $("#gal").carousel(0);
                });
                $(".item2").click(function() {
                    $("#gal").carousel(1);
                });
                $(".item3").click(function() {
                    $("#gal").carousel(2);
                });
                $(".item4").click(function() {
                    $("#gal").carousel(3);
                });

                $(".left").click(function() {
                    $("#gal").carousel("prev");
                });
                $(".right").click(function() {
                    $("#gal").carousel("next");
                });
            });
        </script>


        <script>

        </script>
    </body>
</html>