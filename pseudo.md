FUNCTION memoize(fn)
    // Create a cache to store results of function calls
    CREATE cache (this can be an object or map)

    RETURN FUNCTION(...args)
        // Convert the arguments into a key (typically by converting it into a string)
        key = STRINGIFY(args)

        // Check if the result for this key exists in the cache
        IF key exists IN cache
            RETURN cache[key]  // Return the cached result
        ENDIF

        // Call the original function with the given arguments
        result = CALL fn with args

        // Store the result in the cache using the key
        cache[key] = result

        // Return the result
        RETURN result