import { useEffect, useState } from 'react'

export default function FileContentCounter({ data }: { data: string }) {

    const [countWords, setCountWords] = useState<{ [key: string]: number } | null>(null);

    useEffect(() => {
        const cache = countRepeatedWords(data)
        const sortableCache = sortDataByCounterValue(cache)
        setCountWords(sortableCache)
    }, [data])

    const countRepeatedWords = (data: string) => {
        const regex = /\w+/g
        // Remove all special characters and convert all characters to lowercase
        const words = data.toLowerCase().match(regex)
        const cache: { [key: string]: number } = {};

        // cache and count repeated words
        if (words) {
            words.forEach(w => {
                if (cache[w]) {
                    cache[w]++;
                } else {
                    cache[w] = 1
                }
            })
        }

        return cache;
    }

    const sortDataByCounterValue = (data: { [key: string]: number }) => {
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

    return (
        <div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th scope="col">
                            Word
                        </th>
                        <th scope="col">
                            Count
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {countWords ? Object.keys(countWords).map((key, index) => (
                        <tr key={index}>
                            <th>
                                {key}
                            </th>
                            <td>
                                {countWords[key]}
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <th>
                                No Data Found..
                            </th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
