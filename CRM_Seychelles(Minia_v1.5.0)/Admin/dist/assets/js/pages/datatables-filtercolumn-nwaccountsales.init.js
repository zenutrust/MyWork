$(document).ready(function(){$("#datatableleads1 thead tr").clone(!0).addClass("filters").appendTo("#datatableleads1 thead");$("#datatableleads1").DataTable({responsive:!0,orderCellsTop:!0,fixedHeader:!0,initComplete:function(){var n=this.api();n.columns().eq(0).each(function(t){var e=$(".filters th").eq($(n.column(t).header()).index()),a=$(e).text(),o=$(e).attr("data-id"),s=$('<select   id="'+o+'" placeholder="'+a+'"  class="fs-14 form-control w-100"><option value=""></option></select>');"select"==$(e).attr("data-text")?(n.column($(e).index()).data().unique().sort().each(function(e,t){s.append('<option value="'+e+'">'+e+"</option>")}),$(e).html(s)):$(e).html('<input type="text" id="'+o+'" placeholder="'+a+'"  class="fs-14"   />'),$("input",$(".filters th").eq($(n.column(t).header()).index())).off("keyup change").on("change",function(e){"datepicker-range"==$(this).attr("id")?console.log("Heloooo"):($(this).attr("title",$(this).val()),this.selectionStart,n.column(t).search(""!=this.value?"({search})".replace("{search}","((("+this.value+")))"):"",""!=this.value,""==this.value).draw())}).on("keyup",function(e){e.stopPropagation(),$(this).trigger("change"),$(this).focus()[0].setSelectionRange(cursorPosition,cursorPosition)}),$("select",$(".filters th").eq($(n.column(t).header()).index())).off("keyup change").on("change",function(e){"datepicker-range"==$(this).attr("id")?console.log("Heloooo"):($(this).attr("title",$(this).val()),this.selectionStart,n.column(t).search(""!=this.value?"({search})".replace("{search}","((("+this.value+")))"):"",""!=this.value,""==this.value).draw())}).on("keyup",function(e){e.stopPropagation(),$(this).trigger("change"),$(this).focus()[0].setSelectionRange(cursorPosition,cursorPosition)})})}});flatpickr("#datepicker-range",{allowInput:!0,dateFormat:"Y-m-d",mode:"range",altInput:!0,locale:{firstDayOfWeek:1},onChange:function(e,t,a){console.log("dateStronChange"+t)},onReady:function(e,t,a){console.log("dateStronReady"+t)},onClose:function(e,t,a){minDate=e[0].toISOString().slice(0,10),maxDate=e[1].toISOString().slice(0,10),console.log("minDate"+minDate),console.log("maxDate"+maxDate)}})});var addColor=function(e,t,a,o){console.log(e),$(e).hasClass(t)?($(e).removeClass(t),$(e).addClass(a)):($(e).addClass(t),$(e).removeClass(a),$(e).siblings().removeClass(t),$(e).siblings().addClass(a)),$(o).hasClass("d-block")||$(o).addClass("d-block"),$(o).removeClass("d-none"),$(o).siblings().addClass("d-none")};