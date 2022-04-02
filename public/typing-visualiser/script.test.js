const script = require('../typing-visualiser/script');

test('gets input and splits it into seperate characters', () => {
    expect(script.SetupChars("test")).toBe(["t", "e", "s", "t"]);
});
