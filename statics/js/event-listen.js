
$(document).ready(function(){
    "use strict"; // Start of use strict
    
    /*********************************************
    *******hcheck.html********    **********************************************/
    // Show health check result when click check button
    $(document).on('click', '.btn-hcheck-hide',function(e) {
        $(this).parent().find('.div-hcheck-results').hide();
        $(this).hide();
        $(this).parent().find('.btn-hcheck-show').show();
    });
    
    $(document).on('click', '.btn-hcheck-show',function(e) {
        $(this).parent().find('.div-hcheck-results').show();
        $(this).hide();
        $(this).parent().find('.btn-hcheck-hide').show();
    });
    
    
    /*********************************************
    *******comparison.html********
    **********************************************/
    
    
    // Show graph and table
    $(document).on('click', '#btnShow',function(e) {
        $('#cardGraph').show();
    });

    
    /*********************************************
    *******simulation.html********
    **********************************************/
    
    
    // Show graph and table
    $(document).on('click', '#btnShow',function(e) {
        $('#cardGraph').show();
        $('#cardTable').show();
        
        showBar('#bar1');
        showBar('#bar2');
        showBar('#bar3');
        
        showGraph('#graph1');
        showGraph('#graph2');
        showGraph('#graph3');
    });
    
    // Hide Filter condition card
    $(document).on('click', '#btnFilterHide',function(e) {
        $('#cardFilter').find('.div-loc-options').hide();
        $('#cardFilter').find('.div-period-options').hide();
        $('#cardFilter').find('.div-snapshot-options').hide();
        $('#btnFilterShow').show();
        $(this).hide()
    });
    
    // Show Filter condition card
    $(document).on('click', '#btnFilterShow',function(e) {
        $('#cardFilter').find('.div-loc-options').show();
        $('#cardFilter').find('.div-period-options').show();
        $('#cardFilter').find('.div-snapshot-options').show();
        $('#btnFilterHide').show();
        $(this).hide()
    });
    
    // Hide Graph card
    $(document).on('click', '#btnGraphHide',function(e) {
        $('#cardGraph > .card-body').hide();
        $('#btnGraphShow').show();
        $(this).hide()
    });
    
    // Show Graph card
    $(document).on('click', '#btnGraphShow',function(e) {
        $('#cardGraph > .card-body').show();
        $('#btnGraphHide').show();
        $(this).hide()
    });
    
    // Hide table card
    $(document).on('click', '#btnTableHide',function(e) {
        $('#cardTable > .card-body').hide();
        $('#btnTableShow').show();
        $(this).hide()
    });
    
    // Show table card
    $(document).on('click', '#btnTableShow',function(e) {
        $('#cardTable > .card-body').show();
        $('#btnTableHide').show();
        $(this).hide()
    });
    
    
    /*********************************************
    *******apiconsole.html********
    **********************************************/
    
    
    // Show graph and table
    $(document).on('click', '#btnShow',function(e) {
        $('#cardRequest').show();
        $('#cardResponse').show();
    });

    
    
    /*********************************************
    *******common********
    **********************************************/
    
    $(document).on('click', '#btnItemPlus',function(e) {
        $('.div-item-options').append(`
            <select class="browser-default custom-select">
                <option value="12" selected disabled>Select Item</option>
                <option value="13">001_BLACK</option>
                <option value="14">002_WHITE</option>
            </select>
        `);
    });

    $(document).on('click', '#btnLocPlus',function(e) {
        $('.div-loc-options').append(`
            <select class="browser-default custom-select">
                <option value="12" selected disabled>Select Location</option>
                <option value="13">US</option>
                <option value="14">Japan</option>
            </select>
        `);
    });

}); // End of use strict


