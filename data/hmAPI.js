var _ = require('lodash');
var jwt = require('jsonwebtoken')
var uuid4 = require('uuid4');
var fs = require('fs')
var request = require('request');

var REST_API_CONFIG = {
  version: "1.0",
  type: "rest_api",
  private_key_id: "9bcbc9b5-c8db-49a7-9fd8-3fece5b60048",
  private_key: "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIG4Wt8MAyH5fcalW04+XMJUPGQovJ52t490nXztKLcGIoAoGCCqGSM49\nAwEHoUQDQgAE29ByQsqOdpfOI+MaBieyS2UEkZnY8cr297AcF+klXnvyzlVbUNg3\niPtFQCMQVJZXUGL9uykXqfIbIgBDl5Z43Q==\n-----END EC PRIVATE KEY-----\n\n",
  app_uri: "https://rest-api.high-mobility.com/auto/v1",
  app_id: "5FBCDBF6531353B3E2BC3B9B"
}

var payload = {
  'api_version': REST_API_CONFIG.version,
  'app_id': REST_API_CONFIG.app_id,
  'aud': REST_API_CONFIG.app_uri,
  'iat': Math.round(Date.now()/1000),
  'jti': uuid4(),
  'access_token': "tRTva4AjNeJybf3-xn6vRODdTYWfBwTyeHs_u39_an4Fgbc3Ej9tXG2tBKaYjaylu6w2AbViCDyCyhVnZvcWPfVkg6CiHHtosc9ggMiBjVh3hFm1NeL1yiIh1sXz9flA9g",
};

var privateKey = Buffer.from(REST_API_CONFIG.private_key, 'utf8')
var jwtToken = jwt.sign(payload, privateKey, { algorithm: 'ES256' })

class hmAPI {

    static getCarDiagnostics(callback) {
        request.get({
            url: REST_API_CONFIG.app_uri + '/diagnostics', 
            headers: {
              'Authorization': 'Bearer ' + jwtToken
            } 
          }, (error, response, body) => {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log(jwtToken)
            callback(body)
          });
    }


}

export default hmAPI;