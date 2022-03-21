
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 10,
    rate: 4.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('103.64');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10050,
    years: 10,
    rate: 4.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('104.16')
});

it("should compute 0 interest rate", function() {
  // ..
  const values = {
    amount: 10050,
    years: 10,
    rate: 0
  }
  expect(calculateMonthlyPayment(values)).toEqual('NaN')
});