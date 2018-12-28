const flattenDeep = l => l.reduce((a,c)=>Array.isArray(c)?a.concat(flattenDeep(c)):a.concat(c),[]);
/**
 * Returns a function that accepts values to check divisibility by
 * @param {...number} divisors The divisors
 * @example
 * dividend / divisor = result
 */
const isDivisibleBy = (...divisors) => {
    divisors = flattenDeep(divisors);
    
    /**
     * Returns whether each dividend is divisible by each divisor that was provided earlier
     * @param {...number} dividends The values to check whether divisible or not
     * @example
     * dividend / divisor = result
     */
    const divisibilityCheck = (...dividends) => {
        dividends = flattenDeep(dividends);
        if (!dividends.length || !divisors.length) return false;

        return divisors.every( divisor => (typeof divisor === 'number') && dividends.every( dividend => (typeof dividend === 'number') && (dividend % divisor === 0) ) );
    }
    return divisibilityCheck;
}
module.exports = isDivisibleBy;
