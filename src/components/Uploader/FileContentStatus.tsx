import React, { useEffect, useState } from 'react'

export default function FileContentStatus({ data }: { data: string }) {

    const [countWords, setCountWords] = useState<{ [key: string]: number } | null>(null);

    useEffect(() => {
        const cache: { [key: string]: number } = {};
        // Remove all special characters
        const filteredString = data.replace(/[^A-Za-z 0-9]/g, ' ').toLowerCase() //
        // split all the words in array
        const dataArr = filteredString.split(' ');

        dataArr.forEach(w => {
            if (cache[w]) {
                cache[w]++;
            } else {
                cache[w] = 1
            }
        })

        setCountWords(cache)
        console.log(cache);

    }, [data])

    return (



        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full mt-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50">
                            Word
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Count
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {countWords && Object.keys(countWords).map(key => (

                        <tr className="border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                                {key}
                            </th>
                            <td className="px-6 py-4">
                                {countWords[key]}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
