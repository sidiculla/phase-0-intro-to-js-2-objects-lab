const employee = {
    name: "ben",
    streetaddress: "123 abc",
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmp = { ...employee };

    newEmp[key] = value;

    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmp = { ...employee };

    delete newEmp.name;

    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;

    return employee;
}