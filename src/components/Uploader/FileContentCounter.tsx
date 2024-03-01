import { useEffect, useState } from 'react'
import useCountRepeatedWords from '../../hooks/useCountRepeatedWords';
import useSortDataByCounterValue from '../../hooks/useSortDataByCounterValue';

export default function FileContentCounter({ data }: { data: string }) {

    const [countWords, setCountWords] = useState<{ [key: string]: number } | null>(null);
    const cache = useCountRepeatedWords(data)
    const sortableCache = useSortDataByCounterValue(cache)
    useEffect(() => setCountWords(sortableCache), [])

    return (
        <div>
            <table className="styled-table" data-testid="words-table">
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
                        <tr key={index} data-testid="table-rows">
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
