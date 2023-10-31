/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Datatables Js File
*/


$(document).ready(function () {

    
    
    
    // Setup - add a text input to each footer cell
    $('#datatableleads thead tr')
        .clone(true)
        .addClass('filters')
        .appendTo('#datatableleads thead');
 
    var table = $('#datatableleads').DataTable({
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
                   
                    // Set the header cell to contain the input element
                  
                    var cell = $('.filters th').eq(
                        $(api.column(colIdx).header()).index()
                    );
                    var title = $(cell).text();
                    var id = $(cell).attr('data-id');
                    
                    $(cell).html('<input type="text" id="'+id+'" placeholder="' + title + '"  class="fs-14" />');
                    
                    // On every keypress in this input
                    $(
                        'input',
                        $('.filters th').eq($(api.column(colIdx).header()).index())
                    )
                        .off('keyup change')
                        .on('change', function (e) {

                            console.log(this.index());
                            // Get the search value
                            $(this).attr('title', $(this).val());
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
    

    //Flat Picker Date

  
 
   
    flatpickr('#datepicker-range', {
        dateFormat:"d-m-Y",
        mode: "range",
        defaultDate: new Date(),

        onClose: function(selectedDates, dateStr, instance) {
             var minDate = instance.formatDate(selectedDates[0], "d-m-Y");
             var maxDate = instance.formatDate(selectedDates[1], "d-m-Y");
        
            console.log(minDate);
            console.log(maxDate);

             // Custom filtering function which will search data in column four between two values
           
        }
    });

    

    
});
