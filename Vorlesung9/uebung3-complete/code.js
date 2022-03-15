function isPrime(num) {
    for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
    return num > 1;
  }
  
  for (let j = 1; j <= 8000000; j++) {
    if (isPrime(j)) {
      postMessage(j);
    }
  }
  