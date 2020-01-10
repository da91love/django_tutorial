const service = {};

/******************
 * Select page send post *
 ******************/
const HOST_MAIN = "/main";

service.searchData = function(view, params) {
    service._syncSendJsonToServer(`/${view}/getGraph/`, 'text', params, 'get', function(data){
        //task after ajax success
        simulation.testFunction(JSON.parse(data));
    });
};

service.updateData = function(params) {
    service._syncSendJsonToServer('/main/update', 'json', params, 'post', function(data){
        //task after ajax success
        console.log('Data update complete!');
        simulationExecute.json2TableUpdate(data);
    });
};

service.saveData = function(params) {
    service._syncSendJsonToServer('/main/save', 'json', params, 'post', function(data){
        //task after ajax success
        global.openModal('pass','pass','Data save complete!');
        console.log('Data save complete!');
    });
};


/**
 * Ajax template
 */
service._syncSendJsonToServer = function(url, dataType, params,type,callback) {
    $.ajax({
        url : url,
        dataType : dataType,
        data : JSON.stringify(params),
        async: false,
        type : type,
        contentType : 'application/' + dataType,
        // error : errorHandler,
        success: callback
    });
};

service._asyncSendJsonToServer = function(url, dataType, params,type,callback) {
    $.ajax({
        url : url,
        dataType : dataType,
        data : JSON.stringify(params),
        type : type,
        contentType : 'application/' + dataType,
        // error : errorHandler,
        success: callback
    });
};

