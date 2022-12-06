import React from "react";
const nylas = window.nylas;
const Appoinment = () =>{
    const renderCalendar =() =>{
        var btn = document.getElementById('schedule-editor');
         btn.addEventListener('click', function() {
        // Prompt the Schedule Editor when a user clicks on the button
        nylas.scheduler.show({
          auth: {
            // Account <ACCESS_TOKEN> with active calendar scope
            accessToken: "<ACCESS_TOKEN>", 
          },
          style: {
            // Style the Schedule Editor
            tintColor: '#32325d',
            backgroundColor: 'white',
          },
          defaults: {
            event: {
              title: '30-min Coffee Meeting',
              duration: 30,
            },
          },
        });
      });
    }
    return(
        <div>
             <button type="button" id="schedule-editor" onClick={renderCalendar}>Open Schedule Editor</button>
        </div>
    )
}

export default Appoinment;