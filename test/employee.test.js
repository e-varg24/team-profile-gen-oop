const Employee = require('../lib/employee');
// new employee creation
const employee = new Employee('scotty', '1919', 'scotty@yahoo.com');

// return the values for the new employee object testing
test('test if we can return the constructor values for the employee object', () => {
    expect(employee.name).toBe('scotty');
    expect(employee.id).toBe('1919');
    expect(employee.email).toBe('scotty@yahoo.com');
});

// testing if methods work properly
test('test if we can return the name of employee from the getName() method', () => {
    expect(employee.getName()).toBe('scotty');
});

test('test if we can return the getId() method', () => {
    expect(employee.getId()).toBe('1919');
});

test('test if we can return the getEmail() method', () => {
    expect(employee.getEmail()).toBe('scotty@yahoo.com');
});

test('test if we can return the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});