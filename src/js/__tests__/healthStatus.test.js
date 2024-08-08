import healthStatus from '../getHealthStatus';

describe('getHealthStatus', () => {
  test('returns healthy when health is more than 50', () => {
    expect(healthStatus({ health: 70 })).toBe('healthy');
  });

  test('returns wounded when health is between 15 and 49', () => {
    expect(healthStatus({ health: 30 })).toBe('wounded');
  });

  test('returns critical when health is less than 15', () => {
    expect(healthStatus({ health: 5 })).toBe('critical');
  });
});
