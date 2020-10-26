const blurTokens = require('../index.json');

describe('blur tokens', () => {
  test(': matches snapshot', () => {
    expect(blurTokens).toMatchSnapshot();
  });
});
