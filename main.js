$(document).ready(function(){



var petUrl = "http://api.petfinder.com/pet.find";
var petApiKey = "aaf7ea34460505b8e7841f0512aae7a4"
$.ajax({
    url: petUrl,
    jsonp: "callback",
    dataType: "jsonp",
    data: {
        key: petApiKey,
        animal: "dog",
        "location": "32812",
        output: "basic",
        format: "json"
    }
}).then(response=> {
    var apiKey = "aaf7ea34460505b8e7841f0512aae7a4"
    $.ajax({
        url: petUrl,
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            key: petApiKey,
            animal: "dog",
            "location": "32812",
            output: "basic",
            format: "json"
        }
    }).then(response=> {
        var dogName = response.petfinder.pets.pet[1].name.$t;
        var dogAge = response.petfinder.pets.pet[1].age.$t;
        var dogSex = response.petfinder.pets.pet[1].sex.$t;
        var dogSize = response.petfinder.pets.pet[1].size.$t;
        var dogDescription = response.petfinder.pets.pet[1].description.$t;
        console.log(response);
        var largePic = response.petfinder.pets.pet[1].media.photos.photo[2].$t;
        // $("#dogModalPic").attr("src", largePic);
        $("#dogModalPic").addClass("img-responsive");
        $("#modalTitle").text(dogName);
        $("#description").html(dogDescription);
        $("#details").append($("<p>").addClass("col-md-4").text("Age: " + dogAge));
        $("#details").append($("<p>").addClass("col-md-4").text("Size: " + dogSize));
        $("#details").append($("<p>").addClass("col-md-4").text("Sex: " + dogSex));
    });
});

var searchstring = "medium dog toys";

var ebayURL = "http://svcs.ebay.com/services/search/FindingService/v1";
  ebayURL += "?OPERATION-NAME=findCompletedItems";
  ebayURL += "&SERVICE-VERSION=1.13.0";
  ebayURL += "&SERVICE-NAME=FindingService";
  ebayURL += "&SECURITY-APPNAME=TimothyB-MuttMatc-PRD-8ed499e41-2cbab10d";
  ebayURL += "&GLOBAL-ID=EBAY-US";
  ebayURL += "&RESPONSE-DATA-FORMAT=JSON";
  ebayURL += "&REST-PAYLOAD";
  ebayURL += "&paginationInput.pageNumber=1";
  ebayURL += "&paginationInput.entriesPerPage=10";
  ebayURL += "&keywords=" + searchstring;
  ebayURL += "&sortOrder=StartTimeNewest";

  $.ajax({
    type: "GET",
    url: ebayURL,
    dataType: "jsonp",
    // success: function(res){
    //   console.log(res);
      
    // }
  }).then(response => {
      console.log(response)
      for (i = 0; i < 3; i++){
        ebayItemImg = response.findCompletedItemsResponse[0].searchResult[0].item[i].galleryURL[0];
        console.log(response.findCompletedItemsResponse[0].searchResult[0].item[i].galleryURL[0]);
        var productImg = $("<img>");
        productImg.attr("src", ebayItemImg);
        $("#products").append(productImg)
    }
  });ebayURL += "&sortOrder=StartTimeNewest";

   
    // var myElement = document.getElementById(‘myCarousel’);
    // var mc = new Hammer(myElement);
    
    $("#myCarousel").on( "swipeleft", function( event )
    {
      $(this).carousel("prev");
      console.log("Here");
    } );
 
    $("#myCarousel").on( "swiperight", function( event )
    {
      $(this).carousel("next");
      console.log("Here")
    } );
    // $(‘#myCarousel’).hammer().on(‘swipeleft’, function(){
    //       $(this).carousel(‘next’);
    //   })
    //   $(‘#myCarousel’).hammer().on(‘swiperight’, function(){
    //       $(this).carousel(‘prev’);
    //   })
 
    // Hammer(myElement).on(“swipeleft”, function(){
    //     $(this).carousel(‘next’);
    //     console.log(“Swiped”);
    //     })
 
    //var hammer = new Hammer();
 
    // hammer($(myElement)).on(‘swiperight’, function(){
    //           $(this).carousel(‘next’);
    //     //   })
    // });
 

 $(".carousel-control-prev-icon").on( "click", function( event ) 
    {
      $("#myCarousel").carousel('prev');
      console.log("prev")
    } );

    $(".carousel-control-next-icon").on( "click", function( event ) 
    {
      $("#myCarousel").carousel('next');
      console.log("next")
    } )



})