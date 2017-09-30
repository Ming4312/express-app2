
$(document).ready(function(){
   var table = $('#testingTable').DataTable({
        ajax: "/api/getAllTradingHistory",
        columns: [
            {data: "id"},
            {data: "stock_number"},
            {data: "buy_value"},
            {data: "sell_value"},
            {
                data: "crt_date",
                render: function(data){
                    return formatDateTime(data);
                }
            },
            {
                data: "upd_date",
                render: function(data){
                    return formatDateTime(data);
                }
            }
        ],
        /*columnDefs: [
            {
                targets: [0,5],
                visible: false,
            }    
        ],*/
        paging: false,
        searching: false,
        responsive: true,
    });
})
function formatDateTime(data){
    return moment(data).format('MM/DD/YYYY HH:mm:ss');
}