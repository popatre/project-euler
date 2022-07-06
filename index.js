/** Brute force method 78ms */

function bruteFindLowestCommonMultiple(maxNum) {
    for (let int = maxNum; ; int += maxNum) {
        let num = 1;
        if (maxNum > 10) {
            num = 11;
        }

        while (int % num === 0) {
            if (num === maxNum) return int;
            else num++;
        }
    }
}

/************************************************/

//Prime factor method. 1ms

function findPrimeFactors(maxNum) {
    const primes = [19, 17, 13, 11, 7, 5, 3, 2];

    const primeFactors = [];

    for (let int = maxNum; int > 1; int--) {
        let currentNum = int;

        for (let i = 0; i < primes.length; i++) {
            if (currentNum % primes[i] === 0) {
                primeFactors.push(primes[i]);
                currentNum = currentNum / primes[i];

                //end of primes array, but still not reached one - loop back around

                if (currentNum !== 1 && i === 7) i = 0;
            } else if (currentNum !== 1 && i === 7) {
                i = 5;
            }
        }
    }
    return primeFactors;
}

function findLowestCommonMultiple(maxNum) {
    const primeFactors = findPrimeFactors(maxNum);
    const primes = [19, 17, 13, 11, 7, 5, 3, 2];

    let lowestCommentMultiple = 1;

    for (let i = 0; i < primes.length; i++) {
        let exponent = 0;

        const mostMultiplesInARow = primeFactors.reduce(
            (mostFoundTogether, num) => {
                if (num === primes[i]) {
                    exponent++;
                } else {
                    exponent = 0;
                }
                if (exponent > mostFoundTogether) mostFoundTogether = exponent;
                return mostFoundTogether;
            },
            0
        );

        lowestCommentMultiple *= Math.pow(primes[i], mostMultiplesInARow);
    }
    return lowestCommentMultiple;
}

module.exports = {
    bruteFindLowestCommonMultiple,
    findPrimeFactors,
    findLowestCommonMultiple,
};
