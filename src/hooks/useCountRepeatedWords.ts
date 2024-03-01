const useCountRepeatedWords = (data: string) => {
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

export default useCountRepeatedWords;