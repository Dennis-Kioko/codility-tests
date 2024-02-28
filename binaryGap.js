function solution(N) {
    // Convert N to binary
    const binaryString = N.toString(2);

    let longestGap = 0;
    let currentGap = 0;
    let counting = false;

for (let x of binaryString) {
    if(x === "1") {
        // if "1" is found and you're currently counting, check whether the current gap is the largest
        if(counting) {
            longestGap = Math.max(longestGap, currentGap);
        } else {
            // if find "1" and we ain't counting, we start counting
            counting = true;
        }
        // Reset current gap for the next sequence
        currentGap = 0;
    } else {
        if(counting) {
            // if counting and find"0", increment the current gap
            currentGap +=1;
        }
    }
}

return longestGap;

}
console.log(solution(529));