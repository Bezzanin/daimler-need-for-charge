var request = require("request");

var options = { method: 'GET',
  url: 'https://junctionev.enstoflow.com/api/v1/chargingPoint',
  headers: 
   { 'Postman-Token': '11739c07-e051-4977-88b7-9945158ca726',
     'Cache-Control': 'no-cache',
     Authorization: 'Basic anVuY3Rpb246anVuY3Rpb24yMDE4',
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  formData: {} 
};
let a;

class chargerAPI {

static getChargers(callback) {
//    request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//   // console.log(JSON.parse(body));
//    console.log(JSON.parse(body))
//    });
   // return a;
   request.get({
    url: 'https://junctionev.enstoflow.com/api/v1/chargingPoint',
    headers: { 
       'Cache-Control': 'no-cache',
       'Authorization': 'Basic anVuY3Rpb246anVuY3Rpb24yMDE4',
       'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
   }, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    callback(body)
  });
 }

//  static getChargersTest(callback) {
//     request.get({
//         url: REST_API_CONFIG.app_uri + '/diagnostics', 
//         headers: {
//           'Authorization': 'Bearer ' + jwtToken
//         } 
//       }, (error, response, body) => {
//         console.log('error:', error);
//         console.log('statusCode:', response && response.statusCode);
//         callback(body)
//       });
// }

}

export default chargerAPI;