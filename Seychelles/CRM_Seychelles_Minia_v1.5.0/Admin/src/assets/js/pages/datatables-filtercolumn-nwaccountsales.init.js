/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Conact: themesbrand@gmail.com
File: Datatables Js File
*/


$(document).ready(function () {

   // var minDate,maxDate;

   
   // console.log(i);
    // Setup - add a text input to each footer cell
    $('#datatableleads1 thead tr')
    .clone(true)
    .addClass('filters')
    .appendTo('#datatableleads1 thead');



     //var tableid;
var table=$('#datatableleads1').DataTable({
    responsive: true,
    orderCellsTop: true,
 
    fixedHeader: true,
  
    initComplete: function () {
        var api = this.api();
        // For each column
        api
            .columns()
            .eq(0)
            .each(function (colIdx) {
                var column = this;
                // Set the header cell to contain the input element
 
                var cell = $('.filters th').eq(
                    $(api.column(colIdx).header()).index()
                );
                var title = $(cell).text();
                var id = $(cell).attr('data-id');
                //var datatext=$(cell).attr('data-text');
                var select1 = $('<select   id="' + id + '" placeholder="' + title + '"  class="fs-14 form-control w-100"><option value=""></option></select>');
                if ($(cell).attr('data-text') == 'select') {
                    //console.log($(cell).index());
                    api.column($(cell).index())
                        .data()
                        .unique()
                        .sort()
                        .each(function (d, j) {
 
 
                            select1.append('<option value="' + d + '">' + d + '</option>');
 
                        });
                    $(cell).html(select1);
 
 
 
 
                } else {
                    $(cell).html('<input type="text" id="' + id + '" placeholder="' + title + '"  class="fs-14"   />');
                }
 
 
                // On every keypress in this input
                $(
                    'input',
                    $('.filters th').eq($(api.column(colIdx).header()).index())
                )
                    .off('keyup change')
                    .on('change', function (e) {
 
                        if ($(this).attr('id') == 'datepicker-range') {
                            console.log("Heloooo");
 
                            //var vals=this.value ;
 
 
 
                        } else {
                            //console.log($(this).attr('id'));
 
 
                            // Get the search value
                            $(this).attr('title', $(this).val());
 
                            //var vals=this.value ;
 
                            var regexr = '({search})'; //$(this).parents('th').find('select').val();
 
                            var cursorPosition = this.selectionStart;
                            // Search the column for that value
                            api
                                .column(colIdx)
                                .search(
                                    this.value != ''
                                        ? regexr.replace('{search}', '(((' + this.value + ')))')
                                        : '',
                                    this.value != '',
                                    this.value == ''
                                )
                                .draw();
 
                        }
 
 
 
 
 
 
 
                    })
                    .on('keyup', function (e) {
                        e.stopPropagation();
 
                        $(this).trigger('change');
                        $(this)
                            .focus()[0]
                            .setSelectionRange(cursorPosition, cursorPosition);
                    });
 
                $(
                    'select',
                    $('.filters th').eq($(api.column(colIdx).header()).index())
                )
                    .off('keyup change')
                    .on('change', function (e) {
 
                        if ($(this).attr('id') == 'datepicker-range') {
                            console.log("Heloooo");
 
                            //var vals=this.value ;
 
 
 
                        } else {
                            //console.log($(this).attr('id'));
 
 
                            // Get the search value
                            $(this).attr('title', $(this).val());
 
                            //var vals=this.value ;
 
                            var regexr = '({search})'; //$(this).parents('th').find('select').val();
 
                            var cursorPosition = this.selectionStart;
                            // Search the column for that value
                            api
                                .column(colIdx)
                                .search(
                                    this.value != ''
                                        ? regexr.replace('{search}', '(((' + this.value + ')))')
                                        : '',
                                    this.value != '',
                                    this.value == ''
                                )
                                .draw();
 
                        }
 
 
 
 
 
 
 
                    })
                    .on('keyup', function (e) {
                        e.stopPropagation();
 
                        $(this).trigger('change');
                        $(this)
                            .focus()[0]
                            .setSelectionRange(cursorPosition, cursorPosition);
                    });
            });
 
    },

    
    
 
 });


 
 
 
 
    

  
    //addColor($class);
    //dataTables('.table-responsive');
    //dataTables('#datatableleads2');


    //Flat Picker Date

    flatpickr('#datepicker-range', {

        //const fp = flatpickr(".test-calendar", {  altFormat: "F j, Y", dateFormat: "Y-m-d", showMonths: 3, disableMobile: true, inline: true, mode: "range", 
        //altInput: true,
        "allowInput":true,
        dateFormat:"Y-m-d",
        mode: "range",
        altInput: true, // Human Readable
        //minDate: new Date().fp_incr(-60), // 60 days from today
        //maxDate: defaultEnd,
        locale: { firstDayOfWeek: 1},

        onChange:
         function (selectedDates, dateStr, instance) { 
            
            console.log('dateStronChange'+dateStr); 
        
        }, 
        onReady: function(selectedDates, dateStr, instance){ 
            console.log('dateStronReady'+dateStr);
         } ,

        onClose: function(selectedDates, dateStr, instance) {
              minDate =  selectedDates[0].toISOString().slice(0, 10);
              maxDate  = selectedDates[1].toISOString().slice(0, 10);
              //this.$emit('change', {  minDate, maxDate });  
            console.log('minDate'+minDate);
            console.log('maxDate'+maxDate);

             // Custom filtering function which will search data in column four between two values
           
        }
    });



    
});
var addColor=function ($this,$class,$textcolor,$displaytab){
    
    console.log($this);
    if($($this).hasClass($class)){
        $($this).removeClass($class);
        $($this).addClass($textcolor);
    }
    else{
        $($this).addClass($class);
        $($this).removeClass($textcolor);
        $($this).siblings().removeClass($class);
        $($this).siblings().addClass($textcolor);
    }

    if($($displaytab).hasClass('d-block')){
        //$($displaytab).addClass('d-block');
    
        $($displaytab).removeClass('d-none');
        $($displaytab).siblings().addClass('d-none');

    }
    else{
        $($displaytab).addClass('d-block');
        $($displaytab).removeClass('d-none');
        $($displaytab).siblings().addClass('d-none');

    }

    //$($displaytab).siblings().removeClass('d-block');  
       
        
        
    
    //switchtab($displaytab);

}
//addColor();

//Switch Tabs

