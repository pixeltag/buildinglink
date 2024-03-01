const useSortDataByCounterValue = (data: { [key: string]: number }) => {
    // sort the counted object by counter value
    return Object.keys(data)
        .sort((key1, key2) => data[key2] - data[key1])
        .reduce(
            (obj, key) => ({
                ...obj,
                [key]: data[key]
            }),
            {}
        )
}

export default useSortDataByCounterValue;