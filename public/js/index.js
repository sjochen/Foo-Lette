$(document).ready(function(){
  console.log("ready");


  $("#submit").on("click", () => {
    console.log("Clicked");
    $.ajax({
      url: "/api/examples",
      type: "GET"
    }).then(function(data){
      console.log(data);

      var pick = Math.floor(Math.random() * data.length);
      console.log(pick)
      var name = data[pick].name;
      console.log("this is results for name: " + name)

          // var div = $('<div>');
          // var map = $('<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?' + name + '&key=AIzaSyAqGzyDwZXtg3v10ZpY4cPVRyHDVHU7T0w" allowfullscreen>');

          //  div.append(map);
          //  $('.randomChoice').append(div);
          //initMap(lat, long, data)
        $('.randomChoice').empty();
         var head = $('<h1>')

         head.append(name);
         $('.randomChoice').append(head);


     

    })
    

  });



});









