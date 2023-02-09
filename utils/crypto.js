import { gcd, totient } from "./math.js";

export function generateExponent(n, totient) {
  const possibleNumbers = Array.from({ length: totient - 2 }, (_, i) => i + 2);

  for (let num of possibleNumbers) {
    if (gcd(num, n) === 1 && gcd(num, totient) === 1) {
      return num;
    }
  }
}

export class Crypto {
  constructor(p, q) {
    this.pq = p * q;
    this.ϕ = totient(p, q);
    this.e = generateExponent(this.pq, this.ϕ);
    this.encryptionKey = this.generateEncryptionKey();
    this.decryptionKey = this.generateDecryptionKey();
  }

  generateEncryptionKey() {
    return [this.e, this.pq];
  }

  generateDecryptionKey() {
    let d;

    for (let i = 1; i <= this.ϕ; i++) {
      const currentTerm = this.e * i;
      if (currentTerm % this.ϕ === 1) {
        d = i + this.ϕ;
      }
    }

    return [d, this.pq];
  }

  encrypt(value) {
    const [power, mod] = this.encryptionKey;
    return value ** power % mod;
  }

  decrypt(value) {
    const [power, mod] = this.decryptionKey;
    return value ** power % mod;
  }
}
