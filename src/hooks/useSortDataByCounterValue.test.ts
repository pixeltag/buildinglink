import useSortDataByCounterValue from "./useSortDataByCounterValue";

test('Should sort the givin object based on the value', () => {
    const obj = { "aliunde": 2, "beate": 1, "finem": 3, "verum": 1, "vivendi": 1 };
    const result = { "aliunde": 2, "finem": 3, "beate": 1, "verum": 1, "vivendi": 1 }
    expect(useSortDataByCounterValue(obj)).toEqual(result)
})
