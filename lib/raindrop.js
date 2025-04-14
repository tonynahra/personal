// "client_id": "5e1c589cf6f48c0211311383",
// "redirect_uri": "https://oauthdebugger.com/debug",
// "client_secret": "c3363988-9d27-4bc6-a0ae-d126ce78dc09",
    
var client_id = 'AIzaSyD7XIk7Bu3xc_1ztJl6nY6gDN4tFWq4_tY'  ;
var client_secret = 'c3363988-9d27-4bc6-a0ae-d126ce78dc09' ;
var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

// var Cat ;

PARAMa = PARAM.split(",") ;

if ( PARAMa.length < 2 ) {
    PARAMa[1] = "general" ;
    PARAMa[2] = "ccc" ;
}

$(document).ready(function () {
  
  loadVids( PARAMa[0] , PARAMa[1] , PARAMa[2] );
   
  mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


});

/*
 function loadCat(Cat) {
    for ( i=1 ; i< Object.keys(Cat).length + 1; i++ ) {
        // console.log( Cat[i][0] + ".." + Cat[i][1] ) ;
        $('#my-id').append(`<li data-uk-filter="` +  Cat[i][1] + `"><a href="#"><font color='`+Cat[i][3]+`' size='+3' >&#9607;</font>&nbsp;&nbsp;` +  Cat[i][2] + `</a></li><br>`);
        loadVids( Cat[i][0] , Cat[i][1] , Cat[i][3] );
    }    
 }
*/

 // ["PLjfDEkXKdbvhdEK9dGFwSnmNnxS7QQWbQ","Programming","Programming","#cde"]

    function loadVids(PL,Category,BKcol) {

        var options = {
            part: 'snippet',
            key: key,
            maxResults: 20,
            playlistId: PL
        }
    
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            // mainVid(id);
            resultsLoop(data,Category,BKcol);
        });
    }

   
		
    function resultsLoop(data,Cat,BKcol) {

        // $('main').append(`<div data-uk-grid="{controls: '#my-id'}" class="topContainer" >`) ;

        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.snippet.resourceId.videoId;

            $('#Grid').append(`

            <div  data-uk-filter="` + Cat + `" class="item" style="background:#`+ BKcol +`" >
              <a href="https://www.youtube.com/embed/${vid}" data-uk-lightbox  data-lightbox-type="iframe"  >
               <img class="YTi" src="${thumb}" alt="" >
               <h2>${title}</h2>
               <p>${desc}</p>
              </a>
            </div>
						`);
        });

        // $('main').append(`</div>`); 
    }

		// CLICK EVENT
    /*    
    $('main').on('click', 'article', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });
    */



function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  
