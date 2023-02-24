const Engineer = require('../lib/engineer');

test("Can create a github.", () => {
    const testGithub = "github.com/tomthompson";
    const employeeInstance = new Engineer("Tom", 12345, "tomthompson@gmail.com", "They only ever wear orange ties", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Gets GitHub through getGithub method.", () => {
    const testGithub = "github.com/tomthompson";
    const employeeInstance = new Engineer("Tom", 12345, "tomthompson@gmail.com", "They only ever wear orange ties", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing Role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Tom", 12345, "tomthompson@gmail.com", "They only ever wear orange ties", "github.com/tomthompson");
    expect(employeeInstance.getRole()).toBe(returnValue);
});