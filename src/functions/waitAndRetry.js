/**
 * Delays execution of a function and retries it after the specified interval.
 * @param  {Function} func  - The function to execute after the delay.
 * @param  {number}   delay - The delay in milliseconds before executing the function.
 * @return {Promise}        A promise that resolves with the result of the executed function.
 */
export function waitAndRetry(func, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(func()), delay))
}
