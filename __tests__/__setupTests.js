beforeEach(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
  expect(console.log.mock.calls.length).toBe(0);
});

it('does nothing', () => {
  return expect(Promise.resolve('nothing')).resolves.toBe('nothing')
})