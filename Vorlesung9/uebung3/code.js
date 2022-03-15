function isPrime(num) {
    for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
    return num > 1;
  }
  
  const primeElement = document.getElementById("prime");
  
  for (let j = 1000; j <= 3000000; j++) {
    if (isPrime(j)) {
      primeElement.innerHTML = j;
    }
  }
  