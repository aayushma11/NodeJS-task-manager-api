const { calculateTip, FarenheitToCelsius, CelsiusToFarenheit, add } = require('../src/math')

test('Should calculate the total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
});


test('Should calculate default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
});

test('Should convert Farenheit to Celsius', () => {
    const converted = FarenheitToCelsius(32)
    expect(converted).toBe(0);
})

test('Should convert Celsius to Farenheit', () => {
    const convert = CelsiusToFarenheit(0)
    expect(convert).toBe(32)
})

test('Should add two numbers', (done) => {
  add(2,3).then((sum)  => {
    expect(sum).toBe(5)
    done()
  })
})

test('Should add two numbers async/await', async() => {
   const sum = await add(10,22)
      expect(sum).toBe(32)
  })