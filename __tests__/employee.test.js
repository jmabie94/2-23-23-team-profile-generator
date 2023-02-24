const Employee = require('../lib/employee');

test("Can create a new Employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
});

test("Testing name.", () => {
    const name = "Tom";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
});

test("Testing ID.", () => {
    const id = 12345;
    const employeeInstance = new Employee("Tom", id);
    expect(employeeInstance.id).toBe(id);
});

test("Testing email.", () => {
    const email = "tomthompson@gmail.com";
    const employeeInstance = new Employee("Tom", 12345, email);
    expect(employeeInstance.email).toBe(email);
});

test("Testing fact.", () => {
    const fact = "They only ever wear orange ties";
    const employeeInstance = new Employee("Tom", 12345, "tomthompson@gmail.com", fact);
    expect(employeeInstance.fact).toBe(fact);
});

test("Gets name through getName method.", () => {
    const testName = "Tom";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
});

test("Gets ID through getID method.", () => {
    const testID = 12345;
    const employeeInstance = new Employee("Tom", testID);
    expect(employeeInstance.getID()).toBe(testID);
});

test("Gets email through getEmail method.", () => {
    const testEmail = "tomthompson@gmail.com";
    const employeeInstance = new Employee("Tom", 12345, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
});

test("Gets fact through getFact method.", () => {
    const testFact = "They only ever wear orange ties";
    const employeeInstance = new Employee("Tom", 12345, "tomthompson@gmail.com", testFact);
    expect(employeeInstance.getFact()).toBe(testFact); 
});

test("Testing Role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Tom", 12345, "tomthompson@gmail.com", "They only ever wear orange ties");
    expect(employeeInstance.getRole()).toBe(returnValue);
});