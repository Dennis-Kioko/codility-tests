function solution(A, K) {
    const N = A.length;

    // Handle edge cases where array is empty or K is 0
    if (N === 0 || K === 0) {
        return A;
    }

    // Perform rotations
    for (let i = 0; i < K; i++) {
        // Pop the last element and unshift it to the beginning
        const lastElement = A.pop();
        A.unshift(lastElement);
    }

    return A;
}

console.log(solution([1, 2, 3, 4], 4));
