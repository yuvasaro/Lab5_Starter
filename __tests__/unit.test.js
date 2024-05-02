// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('tests if (123) 456-7890 is a phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('tests if 123-456-7890 is a phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('tests if 123-456-789 is not a phone number', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
});

test('tests if 000/123/9876 is not a phone number', () => {
  expect(isPhoneNumber('000/123/9876')).toBe(false);
});

test('tests if abcd@gmail.com is an email', () => {
  expect(isEmail('abcd@gmail.com')).toBe(true);
});

test('tests if weird_email@somerandomsite.net is an email', () => {
  expect(isEmail('weird_email@somerandomsite.net')).toBe(true);
});

test('tests if notanemail@notanemail is not an email', () => {
  expect(isEmail('notanemail@notanemail')).toBe(false);
});

test('tests if com.gmail@abcd is not an email', () => {
  expect(isEmail('com.gmail@abcd')).toBe(false);
});

test('tests if sup3rl0ngpass is a strong password', () => {
  expect(isStrongPassword('sup3rl0ngpass')).toBe(true);
});

test('tests if undecipherable is a strong password', () => {
  expect(isStrongPassword('undecipherable')).toBe(true);
});

test('tests if abc is not a strong password', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

test('tests if p1 is not a strong password', () => {
  expect(isStrongPassword('p1')).toBe(false);
});

test('tests if 5/2/2024 is a date', () => {
  expect(isDate('5/2/2024')).toBe(true);
});

test('tests if 12/1/0001 is a date', () => {
  expect(isDate('12/1/0001')).toBe(true);
});

test('tests if 1/11/1 is not a date', () => {
  expect(isDate('1/11/1')).toBe(false);
});

test('tests if 3-4-5005 is not a date', () => {
  expect(isDate('3-4-5005')).toBe(false);
});

test('tests if #AD20F5 is a hex color', () => {
  expect(isHexColor('#AD20F5')).toBe(true);
});

test('tests if #abc is a hex color', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('tests if #1526374 is not a hex color', () => {
  expect(isHexColor('#1526374')).toBe(false);
});

test('tests if #AD20G5 is not a hex color', () => {
  expect(isHexColor('#AD20G5')).toBe(false);
});
