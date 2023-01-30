const Manager = require('../lib/manager');

const manager = new Manager('jose', '19766', 'jose@gmail.com', '10');

test('test if we can return the constructor values for manager', () => {
    expect(manager.name).toBe('jose');
    expect(manager.id).toBe('19766');
    expect(manager.email).toBe('jose@gmail.com');
    expect(manager.officeNumber).toBe('10');
});

test('test if we can return the name of employee from the getName() method', () => {
    expect(manager.getName()).toBe('jose');
});

test('test if we can return the getId() method', () => {
    expect(manager.getId()).toBe('19766');
});

test('test if we can return the getEmail() method', () => {
    expect(manager.getEmail()).toBe('jose@gmail.com');
});

test('test if we can return the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});