$(document).ready(function() {
    var apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url





    Object.keys(state_info).forEach(function(state) {
           // var stateAbbr = state_info[state].lat;
           // console.log(state, stateAbbr);

           var latitude = state_info[state].lat.toString();
           var longitude = state_info[state].lng.toString();

          // var url = 'https://api.forecast.io/forecast/a721d9b15e115c08cb34d2184cc025b7/' + latitude + ',' + longitude;
          var url =`https://api.weatherstack.com/forecast?access_key=${apiKey}&query=${latitude},${longitude}`;



           $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
              var temperature = getFarenheitTemp(data.current.temperature);
              var temp;

              function getFarenheitTemp(temp){
                  return Math.round((9*temp/5)+32);
              }

               if (temperature <= 10){
                   $(`#${state}`).css('fill', '#6495ED');
               } else if(temperature >= 11 && temperature <= 20){
                   $(`#${state}`).css('fill', '#7FFFD4');
               } else if(temperature >= 21 && temperature <= 30){
                   $(`#${state}`).css('fill', '#0000FF');
               } else if(temperature >= 31 && temperature <= 40){
                   $(`#${state}`).css('fill', '#008B8B');
               } else if(temperature >= 41 && temperature <= 50){
                   $(`#${state}`).css('fill', '#00BFFF');
               } else if(temperature >= 51 && temperature <= 60){
                   $(`#${state}`).css('fill', '#F08080');
               } else if(temperature >= 61 && temperature <= 70){
                   $(`#${state}`).css('fill', '#CD5C5C');
               } else if(temperature >= 71 && temperature <= 80){
                   $(`#${state}`).css('fill', '#8B0000');
               } else if(temperature >= 81 && temperature <= 90){
                   $(`#${state}`).css('fill', '#B22222');
               } else if(temperature >= 90){
                   $(`#${state}`).css('fill', '#FF0000');
               } else {
                  $(`#${state}`).css('fill', '#808080');
               }
           });

    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    // var state_obj = state_info['CO']
    // var url =`https://api.weatherstack.com/forecast?access_key=<apiKey>&query=<latitude>,<longitude>`;
    //
    // $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
    //
    //             console.log(data)
    //             var temperature = null
    //             // TODO
    //             // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9. Remember to convert it into farenheit.
    //             // var temperature =
    //
    //             console.log(temperature)
    //
    //             //TODO
    //             // Default color gray
    //             // Create a series of if else blocks to set the color for the state based on the temperature
    //             // Less than equal to 10F	#6495ED
    //             // Between 11F and 20F	#7FFFD4
    //             // Between 21F and 30F	#0000FF
    //             // Between 31F and 40F	#008B8B
    //             // Between 41F and 50F	#00BFFF
    //             // Between 51F and 60F	#F08080
    //             // Between 61F and 70F	#CD5C5C
    //             // Between 71F and equal to 80F	#8B0000
    //             // Between 81F and equal to 90F	#B22222
    //             // Greater than 90F	#FF0000
    //
    //             $('#CO').css('fill', "#F08080");   // Example on how to fill colors for your state.
    // }
  });
});
