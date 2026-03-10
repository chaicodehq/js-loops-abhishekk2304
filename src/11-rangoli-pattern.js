/**
 * 🎨 Priya ki Diwali Rangoli
 *
 * Priya Diwali pe rangoli banati hai. Uska pattern ek diamond shape mein
 * hota hai stars (*) ka. Tu usse help kar pattern generate karne mein!
 *
 * Rules (use nested for loops):
 *   - Input n determines the size of the diamond
 *   - The diamond has 2n - 1 rows total
 *   - Row i (1-indexed) of the top half has i stars
 *   - Row i of the bottom half mirrors the top
 *   - Stars are separated by a single space
 *   - Each row has leading spaces for center alignment
 *   - The widest row has n stars: "* * * ... *" (2n-1 chars wide)
 *   - No trailing spaces on any row
 *
 * Pattern for n=3:
 *     *
 *   * *
 *   * * *
 *   * *
 *     *
 *
 * (Each row is a string in the returned array)
 *
 * Validation:
 *   - Agar n positive integer nahi hai (0, negative, decimal, non-number),
 *     return empty array []
 *
 * @param {number} n - Size of the diamond (number of stars in the widest row)
 * @returns {string[]} Array of strings forming the diamond pattern
 *
 * @example
 *   rangoli(1) // => ["*"]
 *   rangoli(2) // => [" *", "* *", " *"]
 *   rangoli(3) // => ["  *", " * *", "* * *", " * *", "  *"]
 */
export function rangoli(n) {
  // Validate input
  if (!Number.isInteger(n) || n <= 0) {
    return [];
  }

  const result = [];
  const totalRows = 2 * n - 1;
  const maxWidth = 2 * n - 1; // widest row has n stars with spaces between

  // Use nested for loops
  for (let row = 1; row <= totalRows; row++) {
    let starsInRow;

    // Determine number of stars in this row
    if (row <= n) {
      // Top half (including middle)
      starsInRow = row;
    } else {
      // Bottom half - mirror the top
      starsInRow = totalRows - row + 1;
    }

    // Build the row string
    let rowStr = "";
    for (let star = 1; star <= starsInRow; star++) {
      rowStr += "*";
      if (star < starsInRow) {
        rowStr += " "; // Space between stars
      }
    }

    // Calculate leading spaces for center alignment
    const leadingSpaces = (maxWidth - rowStr.length) / 2;
    const finalRow = " ".repeat(leadingSpaces) + rowStr;

    result.push(finalRow);
  }

  return result;
}
