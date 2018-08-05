$(document).ready(function(){
    var $carousel = $('.carousel').flickity()
  .flickity('next')
  .flickity( 'select', 4 );
    var smallDogItem = [];
    var mediumDogItem = [];
    var largeDogItem = [];

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
            console.log(response);
            // var dogName = response.petfinder.pets.pet[1].name.$t;
            // var dogAge = response.petfinder.pets.pet[1].age.$t;
            // var dogSex = response.petfinder.pets.pet[1].sex.$t;
            // var dogSize = response.petfinder.pets.pet[1].size.$t;
            // var dogDescription = response.petfinder.pets.pet[1].description.$t;
            // var largePic = response.petfinder.pets.pet[1].media.photos.photo[2].$t;
            // var photoGallery = response.petfinder.pets.pet[1].media.photos.photo;
            // console.log(response.petfinder.pets.pet[1].media.photos.photo)


            //Loops through each dog pulled back from ajax request
            response.petfinder.pets.pet.forEach(function(j){
                //This loop goes through the first 5 images for each dog
                //Each image pulled from the API has the same image in 5 different sizes
                //This for loop looks for the first full sized image of the dog
                for (l = 0; l < 5 ; l++){
                    if (j.media.photos.photo[l]["@size"] == "x"){
                        //Sets the first full size image of the dog to uniqueDogImg
                        var uniqueDogImg = j.media.photos.photo[l].$t;
                        //Creatin a div to hold the iamge
                        var uniqueDogDiv = $("<div>");
                        var newImg = $("<img>");
                        //Adds class to work with carousel
                        uniqueDogDiv.addClass("carousel-cell");
                        //setting src of the image of the first full sized image of the dog
                        newImg.attr("src", uniqueDogImg);
                        uniqueDogDiv.html(newImg);
                        //Appends the image to the carousel
                        $carousel.flickity( 'append', uniqueDogDiv )
                    }
                }

            })
            // photoGallery.forEach(function(i){
            //     // THIS LOOP IS WORKING ON photoGallery VARIABLE
            //     //VARIABLE IS ONLY SET TO 1 DOG IN THE ARRAY OF 25 DOGS
            //     //THIS LOOP IS MEANT TO PUSH EVERY ADDITIONAL IMAGE OF ONE SPECIFIC DOG
            //     //TO THE INNER CAROUSEL INSIDE THE MODAL
            //     if (i["@size"] == "x"){
            //         console.log(i.$t)
            //         var newCarouselDiv = $("<div>");
            //         var newCarImg = $("<img>");
            //         newCarouselDiv.addClass("carousel-cell");
            //         newCarImg.attr("src", i.$t);
            //         newCarouselDiv.html(newCarImg);
            //         // $carousel.flickity( 'append', newCarouselDiv )
            //     }
            // })

            // $("#dogModalPic").addClass("img-responsive");
            // $("#modalTitle").text(dogName);
            // $("#description").html(dogDescription);
            // $("#details").append($("<p>").addClass("col-md-4").text("Age: " + dogAge));
            // $("#details").append($("<p>").addClass("col-md-4").text("Size: " + dogSize));
            // $("#details").append($("<p>").addClass("col-md-4").text("Sex: " + dogSex));
        });
    });

    var searchString;
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
      ebayURL += "&sortOrder=StartTimeNewest";

      //This ajax request seems useless but the following requests to ebay API fail without it
      //no idea why
      searchString = "medium dog leash";
      ebayURL += "&keywords=" + searchString;
      $.ajax({
        type: "GET",
        url: ebayURL,
        dataType: "jsonp",
      }).then(response => {
          mediumDogItem.push({
              imageURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].galleryURL[0],
              itemURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].viewItemURL[0]
          })
      });

      ebayURL = "http://svcs.ebay.com/services/search/FindingService/v1";
      ebayURL += "?OPERATION-NAME=findCompletedItems";
      ebayURL += "&SERVICE-VERSION=1.13.0";
      ebayURL += "&SERVICE-NAME=FindingService";
      ebayURL += "&SECURITY-APPNAME=TimothyB-MuttMatc-PRD-8ed499e41-2cbab10d";
      ebayURL += "&GLOBAL-ID=EBAY-US";
      ebayURL += "&RESPONSE-DATA-FORMAT=JSON";
      ebayURL += "&REST-PAYLOAD";
      ebayURL += "&paginationInput.pageNumber=1";
      ebayURL += "&paginationInput.entriesPerPage=10";
      ebayURL += "&sortOrder=StartTimeNewest";

      searchString = "medium dog food";
      ebayURL += "&keywords=" + searchString;
      $.ajax({
        type: "GET",
        url: ebayURL,
        dataType: "jsonp",
      }).then(response => {
          mediumDogItem.push({
            imageURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].galleryURL[0],
            itemURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].viewItemURL[0]
        })
      });
      
      
      ebayURL = "http://svcs.ebay.com/services/search/FindingService/v1";
      ebayURL += "?OPERATION-NAME=findCompletedItems";
      ebayURL += "&SERVICE-VERSION=1.13.0";
      ebayURL += "&SERVICE-NAME=FindingService";
      ebayURL += "&SECURITY-APPNAME=TimothyB-MuttMatc-PRD-8ed499e41-2cbab10d";
      ebayURL += "&GLOBAL-ID=EBAY-US";
      ebayURL += "&RESPONSE-DATA-FORMAT=JSON";
      ebayURL += "&REST-PAYLOAD";
      ebayURL += "&paginationInput.pageNumber=1";
      ebayURL += "&paginationInput.entriesPerPage=10";
      ebayURL += "&sortOrder=StartTimeNewest";

      searchString = "medium dog flea medicine";
      ebayURL += "&keywords=" + searchString;
      $.ajax({
        type: "GET",
        url: ebayURL,
        dataType: "jsonp",
      }).then(response => {
          mediumDogItem.push({
            imageURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].galleryURL[0],
            itemURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].viewItemURL[0]
        })
        console.log(mediumDogItem)
      });

      ebayURL = "http://svcs.ebay.com/services/search/FindingService/v1";
      ebayURL += "?OPERATION-NAME=findCompletedItems";
      ebayURL += "&SERVICE-VERSION=1.13.0";
      ebayURL += "&SERVICE-NAME=FindingService";
      ebayURL += "&SECURITY-APPNAME=TimothyB-MuttMatc-PRD-8ed499e41-2cbab10d";
      ebayURL += "&GLOBAL-ID=EBAY-US";
      ebayURL += "&RESPONSE-DATA-FORMAT=JSON";
      ebayURL += "&REST-PAYLOAD";
      ebayURL += "&paginationInput.pageNumber=1";
      ebayURL += "&paginationInput.entriesPerPage=10";
      ebayURL += "&sortOrder=StartTimeNewest";

      searchString = "small dog food";
      ebayURL += "&keywords=" + searchString;
      $.ajax({
        type: "GET",
        url: ebayURL,
        dataType: "jsonp",
      }).then(response => {
          smallDogItem.push({
            imageURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].galleryURL[0],
            itemURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].viewItemURL[0]
        })
      });
      ebayURL = "http://svcs.ebay.com/services/search/FindingService/v1";
      ebayURL += "?OPERATION-NAME=findCompletedItems";
      ebayURL += "&SERVICE-VERSION=1.13.0";
      ebayURL += "&SERVICE-NAME=FindingService";
      ebayURL += "&SECURITY-APPNAME=TimothyB-MuttMatc-PRD-8ed499e41-2cbab10d";
      ebayURL += "&GLOBAL-ID=EBAY-US";
      ebayURL += "&RESPONSE-DATA-FORMAT=JSON";
      ebayURL += "&REST-PAYLOAD";
      ebayURL += "&paginationInput.pageNumber=1";
      ebayURL += "&paginationInput.entriesPerPage=10";
      ebayURL += "&sortOrder=StartTimeNewest";

      searchString = "small dog leash";
      ebayURL += "&keywords=" + searchString;
      $.ajax({
        type: "GET",
        url: ebayURL,
        dataType: "jsonp",
      }).then(response => {
          smallDogItem.push({
            imageURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].galleryURL[0],
            itemURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].viewItemURL[0]
        })
      });
      ebayURL = "http://svcs.ebay.com/services/search/FindingService/v1";
      ebayURL += "?OPERATION-NAME=findCompletedItems";
      ebayURL += "&SERVICE-VERSION=1.13.0";
      ebayURL += "&SERVICE-NAME=FindingService";
      ebayURL += "&SECURITY-APPNAME=TimothyB-MuttMatc-PRD-8ed499e41-2cbab10d";
      ebayURL += "&GLOBAL-ID=EBAY-US";
      ebayURL += "&RESPONSE-DATA-FORMAT=JSON";
      ebayURL += "&REST-PAYLOAD";
      ebayURL += "&paginationInput.pageNumber=1";
      ebayURL += "&paginationInput.entriesPerPage=10";
      ebayURL += "&sortOrder=StartTimeNewest";

      searchString = "small dog flea medicine";
      ebayURL += "&keywords=" + searchString;
      $.ajax({
        type: "GET",
        url: ebayURL,
        dataType: "jsonp",
      }).then(response => {
          smallDogItem.push({
            imageURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].galleryURL[0],
            itemURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].viewItemURL[0]
        })
        console.log(smallDogItem)
      });

      ebayURL = "http://svcs.ebay.com/services/search/FindingService/v1";
      ebayURL += "?OPERATION-NAME=findCompletedItems";
      ebayURL += "&SERVICE-VERSION=1.13.0";
      ebayURL += "&SERVICE-NAME=FindingService";
      ebayURL += "&SECURITY-APPNAME=TimothyB-MuttMatc-PRD-8ed499e41-2cbab10d";
      ebayURL += "&GLOBAL-ID=EBAY-US";
      ebayURL += "&RESPONSE-DATA-FORMAT=JSON";
      ebayURL += "&REST-PAYLOAD";
      ebayURL += "&paginationInput.pageNumber=1";
      ebayURL += "&paginationInput.entriesPerPage=10";
      ebayURL += "&sortOrder=StartTimeNewest";

      searchString = "large dog leash";
      ebayURL += "&keywords=" + searchString;
      $.ajax({
        type: "GET",
        url: ebayURL,
        dataType: "jsonp",
      }).then(response => {
          largeDogItem.push({
            imageURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].galleryURL[0],
            itemURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].viewItemURL[0]
        })
      });
      ebayURL = "http://svcs.ebay.com/services/search/FindingService/v1";
      ebayURL += "?OPERATION-NAME=findCompletedItems";
      ebayURL += "&SERVICE-VERSION=1.13.0";
      ebayURL += "&SERVICE-NAME=FindingService";
      ebayURL += "&SECURITY-APPNAME=TimothyB-MuttMatc-PRD-8ed499e41-2cbab10d";
      ebayURL += "&GLOBAL-ID=EBAY-US";
      ebayURL += "&RESPONSE-DATA-FORMAT=JSON";
      ebayURL += "&REST-PAYLOAD";
      ebayURL += "&paginationInput.pageNumber=1";
      ebayURL += "&paginationInput.entriesPerPage=10";
      ebayURL += "&sortOrder=StartTimeNewest";

      searchString = "large dog food";
      ebayURL += "&keywords=" + searchString;
      $.ajax({
        type: "GET",
        url: ebayURL,
        dataType: "jsonp",
      }).then(response => {
          largeDogItem.push({
            imageURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].galleryURL[0],
            itemURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].viewItemURL[0]
        })
      });
      ebayURL = "http://svcs.ebay.com/services/search/FindingService/v1";
      ebayURL += "?OPERATION-NAME=findCompletedItems";
      ebayURL += "&SERVICE-VERSION=1.13.0";
      ebayURL += "&SERVICE-NAME=FindingService";
      ebayURL += "&SECURITY-APPNAME=TimothyB-MuttMatc-PRD-8ed499e41-2cbab10d";
      ebayURL += "&GLOBAL-ID=EBAY-US";
      ebayURL += "&RESPONSE-DATA-FORMAT=JSON";
      ebayURL += "&REST-PAYLOAD";
      ebayURL += "&paginationInput.pageNumber=1";
      ebayURL += "&paginationInput.entriesPerPage=10";
      ebayURL += "&sortOrder=StartTimeNewest";

      searchString = "large dog flea medicine";
      ebayURL += "&keywords=" + searchString;
      $.ajax({
        type: "GET",
        url: ebayURL,
        dataType: "jsonp",
      }).then(response => {
          largeDogItem.push({
            imageURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].galleryURL[0],
            itemURL: response.findCompletedItemsResponse[0].searchResult[0].item[0].viewItemURL[0]
        })
        console.log(largeDogItem)
      });

    
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