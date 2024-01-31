var http = require('http'),
fs = require('fs'),
ccav = require('../../utils/ccavutil'),
qs = require('querystring');

module.exports ={
ccavRequestHandler:(request,response)=>{
        console.log(request.body,"bdy")
        var body = '',
        // workingKey = '828078A3C7E40E8582EA9CDD0E0A8831',	//Put in the 32-Bit key shared by CCAvenues.
        // accessCode = 'AVFF45LA56AD78FFDA',			//Put in the Access Code shared by CCAvenues.
        workingKey = '7AD18F22AF9F5000FA9085372B0601C2',	//Put in the 32-Bit key shared by CCAvenues.
        accessCode = 'AVUR05LA48CE95RUEC',			
        encRequest = '',
        formbody = '';
                    
        request.on('data', function (data) {
        body += data;
        encRequest = ccav.encrypt(body,workingKey); 
        formbody = '<form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' + encRequest + '"><input type="hidden" name="access_code" id="access_code" value="' + accessCode + '"><script language="javascript">document.redirect.submit();</script></form>';
        });
                    
        request.on('end', function () {
            response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(formbody);
        response.end();
        });
       return; 
    }
} 
