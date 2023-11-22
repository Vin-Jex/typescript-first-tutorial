"use strict";
/** @format */
function getCustomer(id) {
    return id === 0
        ? null
        : {
            birthday: new Date(),
        };
}
let customer = getCustomer(2);
console.log(customer?.birthday); /* This is called optional property access operator */
//# sourceMappingURL=index.js.map