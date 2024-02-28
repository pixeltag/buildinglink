import React, { useEffect, useState } from 'react'

export default function FileContentStatus({ data }: { data: string }) {

    const [countWords, setCountWords] = useState<{ [key: string]: number } | null>(null);

    useEffect(() => {
        const regex = /\w+/g
        // Remove all special characters and convert all characters to lowercase
        const words = data.toLowerCase().match(regex)
        const cache: { [key: string]: number } = {};

        if (words) {
            words.forEach(w => {
                if (cache[w]) {
                    cache[w]++;
                } else {
                    cache[w] = 1
                }
            })
        }

        const sortableCache = Object.entries(cache)
            .sort(([, a], [, b]) => b - a)
            .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

        setCountWords(sortableCache)
    }, [data])

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
                    {countWords && Object.keys(countWords).map((key, index) => (
                        <tr key={index}>
                            <th>
                                {key}
                            </th>
                            <td>
                                {countWords[key]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
