$(document).ready(function(){

    /**
     * Hide Filter condition card
     */
    $(document).on('click', '#btnFilterHide',function(e) {
        $('#cardFilter').find('.div-loc-options').hide();
        $('#cardFilter').find('.div-period-options').hide();
        $('#cardFilter').find('.div-snapshot-options').hide();
        $('#btnFilterShow').show();
        $(this).hide()
    });

    /**
     * Show Filter condition card
     */
    $(document).on('click', '#btnFilterShow',function(e) {
        $('#cardFilter').find('.div-loc-options').show();
        $('#cardFilter').find('.div-period-options').show();
        $('#cardFilter').find('.div-snapshot-options').show();
        $('#btnFilterHide').show();
        $(this).hide()
    });

    /**
     * Hide Graph card
     */
    $(document).on('click', '#btnGraphHide',function(e) {
        $('#cardGraph > .card-body').hide();
        $('#btnGraphShow').show();
        $(this).hide()
    });

    /**
     * Show Graph card
     */
    $(document).on('click', '#btnGraphShow',function(e) {
        $('#cardGraph > .card-body').show();
        $('#btnGraphHide').show();
        $(this).hide()
    });

    /**
     * Hide table card
     */
    $(document).on('click', '#btnTableHide',function(e) {
        $('#cardTable > .card-body').hide();
        $('#btnTableShow').show();
        $(this).hide()
    });

    /**
     * Show table card
     */
    $(document).on('click', '#btnTableShow',function(e) {
        $('#cardTable > .card-body').show();
        $('#btnTableHide').show();
        $(this).hide()
    });


    /**
     * When click #btnItemPlus/#btnLocPlus, Plus Item/Location
     */
    $(document).on('click', '#btnItemPlus', function(){
        $(".div-item-options" ).append($(".select-item").first().clone());
    });

    $(document).on('click', '#btnLocPlus', function(){
        $(".div-loc-options" ).append($(".select-loc").first().clone());
    });

    $(document).on('click', '#btnSnapshotPlus', function(){
        $(".div-snapshot-options" ).append($(".select-snapshot").first().clone());
    });

    /**
     * When click the search btn, Send data to ajax
     */
    $(document).on('click', '#btnShow', function(){

        const srchReq= _createSrchReq();

        if(srchReq['item'].length == 0 || srchReq['location'].length == 0 || !srchReq['period_from'] || !srchReq['period_to']) {
            global.openModal({type: 'danger', headMsg: 'Error', bodyMsg: 'Not inserted necessary values'});
        }else{
            global.gReq4Srch = srchReq;
            service.searchData('comparison', srchReq);
            $('#cardGraph').show();
        }
    });





    /**
     Private functions
     **/
//    function _createSrchReq(){
//        // Declare each variable
//        const domain = global.searchParams.get('domain');
//
//        // Item
//        let lItems = global.getOptions('.div-item-options');
//
//        // Location
//        let lLoc = global.getOptions('.div-loc-options');
//
//        // Period
//        let period_from = $('#inputPeriodFrom').val();
//        let period_to = $('#inputPeriodTo').val();
//
//        // Snapshot
//        let lSnapshot = global.getOptions('.div-snapshot-options');
//
//        const req4Srch = {
//            domain : domain,
//            item : lItems,
//            lock : false,
//            location : lLoc,
//            period_from : period_from,
//            period_to : period_to,
//            snapshot : lSnapshot
//        };
//
//        return req4Srch;
//    }
});