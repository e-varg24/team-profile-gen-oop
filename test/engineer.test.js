const Engineer = require('../lib/engineer');

const engineer = new Engineer('jasmine', '1717', 'j@gmail.com', 'jasmine17');

test('test if we can return the constructor values for engineer', () => {
    expect(engineer.name).toBe('jasmine');
    expect(engineer.id).toBe('1717');
    expect(engineer.email).toBe('j@gmail.com');
    expect(engineer.github).toBe('jasmine17');
});

test('test if we can return the name of employee from the getName() method', () => {
    expect(engineer.getName()).toBe('jasmine');
});

test('test if we can return the getId() method', () => {
    expect(engineer.getId()).toBe('1717');
});

test('test if we can return the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('j@gmail.com');
});

test('test if we can return the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

test('test if we can return the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('jasmine17')
});