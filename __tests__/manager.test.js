const Manager = require('../lib/manager');

test("Can create office number.", () => {
    const testOffice = 67;
    const employeeInstance = new Manager("Tom", 12345, "tomthompson@gmail.com", "They only ever wear orange ties", testOffice);
    expect(employeeInstance.office).toBe(testOffice);
});

test("Gets office number through getOffice method.", () => {
    const testOffice = 67;
    const employeeInstance = new Manager("Tom", 12345, "tomthompson@gmail.com", "They only ever wear orange ties", testOffice);
    expect(employeeInstance.getOffice()).toBe(testOffice);
});

test("Testing Role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Tom", 12345, "tomthompson@gmail.com", "They only ever wear orange ties", 67);
    expect(employeeInstance.getRole()).toBe(returnValue);
});