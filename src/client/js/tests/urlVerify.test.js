import { verifyURL } from '../urlVerify'

test('Testing that verifyURL is a function', () => {
    expect(verifyURL).toBeInstanceOf(Function);
})

test('Testing that we should return true for a good URL', () => {
  expect(verifyURL("http://www.google.com/")).toBeTruthy();
})

test('Testing that we should show an alert for a bad URL', () => {
  window.alert = jest.fn();
  verifyURL("abc");
  expect(global.alert).toHaveBeenCalledTimes(1);
})
