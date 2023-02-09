export function gcd(k, n) {
  return k ? gcd(n % k, k) : n;
}

export function totient(p, q) {
  return (p - 1) * (q - 1);
}
