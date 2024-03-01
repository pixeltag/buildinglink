import useCountRepeatedWords from "./useCountRepeatedWords";

test('It should return object of repeated words and their count', () => {
    const text = 'This is a test. This is only a test.'
    const result = useCountRepeatedWords(text);
    expect(result).toEqual({ 'this': 2, 'is': 2, 'a': 2, 'test': 2, 'only': 1 });
})


test('It should return object of repeated words and their count (test2)', () => {
    const text = 'verum aliunde finem beate finem vivendi aliunde finem'
    const result = useCountRepeatedWords(text);
    expect(result).toEqual({ "aliunde": 2, "beate": 1, "finem": 3, "verum": 1, "vivendi": 1 });
});