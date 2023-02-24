const Intern = require('../lib/intern');

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Tom", 12345, "tomthompson@gmail.com", "They only ever wear orange ties", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Gets school through getSchool method.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Tom", 12345, "tomthompson@gmail.com", "They only ever wear orange ties", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing Role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Tom", 12345, "tomthompson@gmail.com", "They only ever wear orange ties", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});