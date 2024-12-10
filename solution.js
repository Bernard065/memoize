function memoize(fn) {
    const cache = {}  // Store the results in a Map for efficient lookups
    return function(...args) {
        // Create a unique key for the cache using JSON.stringify on the arguments
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key]
        }

        // Call the original function and store the result in the cache before returning it
        const result = fn(...args); 
        cache[key] = result;
        return result;
    }
}

