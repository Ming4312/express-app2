$(document).ready(function(){
    var calendar = $('#calendar').fullCalendar({
        dayClick: function(date, jsEvent, view){
            $('#addingModal').modal('show');
            $('#addingModal #date').val(date.format());
        },
        events: function(start, end, timezone, callback){
            $.ajax({
                url: "/api/getEventsByMonth",
                dataType: 'json',
                data: {
                    start: getFirstDay(),
                    end: getLastDay()
                },
                success: function(data){
                    var events = [];
                    $.each(data, function(i){
                        $.each(data[i], function(key, value) {
                            events.push({
                                id: value.id,
                                title: "$" + value.spending_out,
                                start: value.date,
                                color: value.color,
                                textColor: value.text_color
                            });
                        })                      
                        
                    });
                    callback(events);
                }
            })
        },
        eventClick: function(event) {
            if (event.id) {
                $.ajax({
                    url: '/api/getEventById',
                    dataType: 'json',
                    data: {
                        eventId: event.id
                    },
                    success: function(data){
                        $('#updatingModal #eventId').val(event.id);
                        $('#updatingModal #date').val(event.start);
                        $.each(data, function(i){
                            $.each(data[i], function(key, value) {
                                $('#updatingModal #spending_out').val(value.spending_out);
                                $('#updatingModal #datetimepicker').data("DateTimePicker").date(event.start);
                                if(value.remark==undefined)
                                     $('#updatingModal #remark').val('');
                                $('#updatingModal #remark').val(value.remark);
                                $('#updatingModal select[name=type]').val(value.type);
                            })                      
                        
                        });
                        
                        $('#updatingModal').modal('show');
                    }
                })
            }
        },
        timeFormat: 'HH:mm',
        contentHeight: 800
        
    });
    $('#addingModal #datetimepicker').datetimepicker({
        format: 'HH:mm',
        //use24hours: true
    });
    $('#updatingModal #datetimepicker').datetimepicker({
        format: 'HH:mm',
        //use24hours: true
    });
    $("#deleteButton").click(function(){
        $.ajax({
            type: "POST",
            url: '/api/deleteById',
            data: {
                eventId: $("#updatingModal #eventId").val()
            },
            success: function(data){
                if(data.data.affectedRows > 0)
                    location.reload()
            }
        })
    })
    function getFirstDay(){
        var cdate = $('#calendar').fullCalendar('getDate');
        var date = new Date(cdate.format());
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var firstDayWithSlashes = firstDay.getFullYear() + '-' + (firstDay.getMonth() + 1) + '-' + (firstDay.getDate());
        return firstDayWithSlashes;
        
    }
    function getLastDay(){
        var cdate = $('#calendar').fullCalendar('getDate');
        var date = new Date(cdate.format());
        var lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0);
        var lastDayWithSlashes = lastDay.getFullYear() + '-' + (lastDay.getMonth() + 2) + '-' + (1) ;
        return lastDayWithSlashes;
    }
})

    
