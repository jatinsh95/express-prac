"use strict"
const fs = require('fs');

var GetCustomer = GetCustomer;
var CreateCustomer = CreateCustomer;
function GetCustomer(id) {
    return new Promise((resolve, reject) => {
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

function CreateCustomer(obj) {
    return new Promise((resolve, reject) => {
        if (typeof obj === 'object') {
            fs.readFile('customerList.json', (err, data) => {
                if (err) {
                    reject(err);
                }
                let list = JSON.parse(data);
                obj['id'] = list[list.length - 1].id + 1;
                list.push(obj);
                fs.writeFile('customerList.json', JSON.stringify(list),(err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(list);
                    }
                })
            });
        }
    })

}

module.exports = {
    GetCustomer,
    CreateCustomer
};
