const global = {};

/*****************************
 global variables
 *****************************/
global.searchParams = new URLSearchParams(window.location.search);
global.lockId = null;
global.Req4Srch = null;
global.gReq4Updt = null;
global.idxTbObj = null;

/**
 *  global functions
 */

/**
 * @param {string} selector
 * @return {list} option tags
 */
global.getOptions = (selector) => {
    let lOptions = [];
    const $selector = $(selector);

    // Item
    $selector.find('option').each(function(i){
        if($(this).is(':selected') && $(this).val()){
            lOptions.push($(this).text());
        }
    });

    return lOptions;
}

/**
 * @param {string} type
 * @param {string} headMsg
 * @param {string} bodyMsg
 */
global.openModal = ({type, headMsg=null, bodyMsg} = {}) => {
    const $modal = $('#modal-temp');
    if(type == 'danger'){
        $modal.find('.modal-body > i').attr('class','fa fa-exclamation-triangle');
        $modal.find('.modal-body > i').css('color','red');
        $modal.find('.modal-footer > button').attr('class','btn btn-danger');
    }else if(type == 'success'){
        $modal.find('.modal-body > i').attr('class','fa fa-check-circle');
        $modal.find('.modal-body > i').css('color','green');
        $modal.find('.modal-footer > button').attr('class','btn btn-success');
    }
    $modal.find('.modal-header > h4').text(headMsg);
    $modal.find('.modal-body > i').text(bodyMsg);
    $modal.modal("show");
}