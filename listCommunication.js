// "use strict"
const fs = require('fs');

var GetCustomer = GetCustomer;
function GetCustomer(id) {
return  new Promise((resolve,reject)=>{
    if (id) {
        fs.readFile('customerList.json', (err, data) => {
            if (err) {
                reject(err);
            }
            let list = JSON.parse(data);
            resolve(JSON.stringify(list[id]));
        });
    } else {
        fs.readFile('customerList.json', (err, data) => {
            if (err) {
                reject(err);
            }
            let list = JSON.parse(data);
            resolve(JSON.stringify(list));
        });
    }
});


    return customer;
}

module.exports = {
    GetCustomer
};
