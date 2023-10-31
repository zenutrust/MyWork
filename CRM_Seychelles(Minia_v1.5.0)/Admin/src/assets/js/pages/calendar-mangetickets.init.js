/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Calendar init js
*/

!function($) {
    "use strict";

    var CalendarPage = function() {};

    CalendarPage.prototype.init = function() {       
            var addEvent1=$("#event-modal");
            var modalTitle = $("#modal-title");
            var formEvent = $("#form-event");
            var selectedEvent = null;
            //var addEvent=null;
            var newEventData = null;
            var forms = document.getElementsByClassName('needs-validation');
            var selectedEvent = null;
            var newEventData = null;
            var eventObject = null;
            /* initialize the calendar */
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();
            var t=  date.getTime();
            var Draggable = FullCalendarInteraction.Draggable;
             
            var externalEventContainerEl = document.getElementById('external-events');
            // init dragable
            /*
           new Draggable(externalEventContainerEl, {
                itemSelector: '.external-event',
                eventData: function (eventEl) {
                    return {
                        title: eventEl.innerText,
                        className: $(eventEl).data('class')
                    };
                }
            });*/
            var defaultEvents = [{
                title: 'All Day Event',
                start: new Date(y, m, 1)
                },
                {
                    title: 'Long Event',
                    time: 'wqw',
                    start: new Date(y, m, d-5),
                    end: new Date(y, m, d-2),
                    className: 'bg-warning'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d-3, 16, 0),
                    allDay: false,
                    className: 'bg-info'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d+4, 16, 0),
                    allDay: false,
                    className: 'bg-primary'
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false,
                    className: 'bg-success'
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false,
                    className: 'bg-danger'
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d+1, 19, 0),
                    end: new Date(y, m, d+1, 22, 30),
                    allDay: false,
                    className: 'bg-success'
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: '',
                    className: 'bg-dark'
            }];

           // var draggableEl = document.getElementById('external-events');
           

            function addNewEvent(info) {
                addEvent1.modal('show');
                formEvent.removeClass("was-validated");
                formEvent[0].reset();
                
               
                //alert('Clicked on: ' + info.dateStr);
                //getTime()
            
                modalTitle.text('Add Event');
                newEventData = info;
                flatpickr('#event-timepicker', {
                    //inline: true,
                    allowInput:true,
                    altInput: true,
                    mode: "single",
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "H:i",
                    defaultDate:   new Date(newEventData.date.getFullYear(), newEventData.date.getMonth(), newEventData.date.getDay(), date.getHours(),  date.getMinutes()),
                });
                $("#event-timepicker").val();
                $("#event-title").val( );
                $('#event-category').val();
             
                //console.log(new Date(newEventData.date.getFullYear(), newEventData.date.getMonth(), newEventData.date.getDay(), newEventData.date.getHours(), 0));
               
            }
            document.addEventListener('DOMContentLoaded', function() {
                
                var calendarEl = document.getElementById('calendar');
                 var calendar = new FullCalendar.Calendar(calendarEl, {
                plugins: [ 'bootstrap', 'interaction', 'dayGrid', 'timeGrid'],
                
                editable: true,
                droppable: true,
                selectable: true,
                //defaultDate: date,
                defaultView: 'dayGridMonth',
                //timeZone: 'UTC',
                themeSystem: 'bootstrap',
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                },
               
                eventClick: function(info) {
                    //Show Model
                    addEvent1.modal('show');
                    //Form Reset
                    formEvent[0].reset();
                    selectedEvent = info.event;
                    //console
                        //console.log( selectedEvent.start.getTime() );
                        //console.log(selectedEvent.classNames[0]);
                        //$("#event-timepicker").val(selectedEvent.title);

                    //flat picker reset
                    flatpickr('#event-timepicker', {
                        //inline: true,
                        allowInput:true,
                        altInput: true,
                        mode: "single",
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: "H:i",
                        defaultDate: selectedEvent.start  ,
                        //new Date(newEventData.date.getFullYear(), newEventData.date.getMonth(), newEventData.date.getDay(), date.getHours(),  date.getMinutes(),
                    });
                    //resetform input
                    $("#event-title").val(selectedEvent.title);
                    $('#event-category').val(selectedEvent.classNames[0]);
                    //$('#event-timepicker').val(selectedEvent.start);
                    //newEventData = null;
                   
                    modalTitle.text('Edit Event');
                    newEventData = null;
                },
                dateClick: function(info) {
                    addNewEvent(info);
                    
                },
                eventTimeFormat: { // like '14:30:00'
                    hour: '2-digit',
                    minute: '2-digit',
                   // second: '2-digit',
                    meridiem: false
                },
               
                events : date,
                //events: addNewEvent(info),

                
            });
            calendar.render();

            
            $(formEvent).on('submit', function(ev) {
                ev.preventDefault();
                var inputs = $('#form-event :input');
                var updatedTime = $("#event-timepicker").val();
                var updatedTitle = $("#event-title").val();
                var updatedCategory =  $('#event-category').val();
                
                // validation
                if (forms[0].checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                        forms[0].classList.add('was-validated');
                } else {
                    if(selectedEvent){
                        var seldate= selectedEvent.start;
                        console.log( "sel date" + seldate.getDay());
                        console.log('updatedTime'+updatedTime.charAt(0)+updatedTime.charAt(1));
                        selectedEvent.setDates( new Date(seldate.getFullYear(), seldate.getMonth(), seldate.getDate(), updatedTime.charAt(0)+updatedTime.charAt(1), updatedTime.charAt(2)+updatedTime.charAt(3)),
                                                new Date(seldate.getFullYear(), seldate.getMonth(), seldate.getDate(), updatedTime.charAt(0)+updatedTime.charAt(1), updatedTime.charAt(2)+updatedTime.charAt(3)) ,
                                                 true );
                        selectedEvent.setProp("classNames", [updatedCategory]);
                        selectedEvent.setProp("title", updatedTitle );
                        
                    } else if (newEventData){   
                        //newEventData = null;


                        //console.log(  'newEventData'+ newEventData.date.getFullYear(), newEventData.date.getMonth(), newEventData.date.getDay(), date.getHours(),  date.getMinutes() );

                        //alert('newEventData'+ new Date(newEventData.date.getFullYear(), newEventData.date.getMonth(), newEventData.date.getDay(), date.getHours(),  date.getMinutes()));
                       console.log(newEventData.date);
                       
                        var newEvent = {
                           title: updatedTitle,
                           start: newEventData.date ,
                           //end:  newEventData.date ,
                           allDay: false,
                           displayEventTime: true,
                           className: [updatedCategory],
                        };
                        //newEventData.setDates( new Date(newEventData.date.getFullYear(), newEventData.date.getMonth(), newEventData.date.getDate(), updatedTime.charAt(0)+updatedTime.charAt(1), 0), new Date(newEventData.date.getFullYear(), newEventData.date.getMonth(), newEventData.date.getDate(), updatedTime.charAt(0)+updatedTime.charAt(1), 0), true );

                        calendar.addEvent(newEvent);
                       
                    }
                    addEvent1.modal('hide');
                }
            });

            $("#btn-delete-event").on('click', function(e) {
                if (selectedEvent) {
                    selectedEvent.remove();
                    selectedEvent = null;
                    addEvent1.modal('hide');
                }
            });

            
            
           // var start = event.start ;
           
            });
             /*Add new event*/
            // Form to add new event

            //$('a[href="#actions-reminders-tab"]').on('click',function(){

                //calendar.today();
               //})
           // $("#btn-new-event").on('click', function(e) {
                //addNewEvent({date: new Date(), allDay: true});
            //});

    },
    //init
    $.CalendarPage = new CalendarPage, $.CalendarPage.Constructor = CalendarPage
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.CalendarPage.init()
}(window.jQuery);

$( document ).ready(function() {
               
    //SetTimeout(calendar.render(), 5000);
    $('a[href="#actions-reminders-tab"]').on('click',function(){

      $('a[href="#actions-reminders-tab"]').trigger('click') ;
    })
   
});