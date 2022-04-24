function generateCongruencialLineal() {
  let n = parseInt(document.getElementById("lineal-seed").value);
  const a = parseInt(document.getElementById("lineal-a").value);
  const c = parseInt(document.getElementById("lineal-c").value);
  const m = parseInt(document.getElementById("lineal-m").value);
  const iterations = parseInt(document.getElementById("lineal-iterations").value);
  const res = [];
  
  for (let i = 0; i < iterations; i++) {
    n = (a * n + c) % m;
    res.push(n / 100);
  }
  
  displayResult(res);
}


function generateCuadradosCentrales() {
  let n = parseInt(document.getElementById("centrales-seed").value);
  let iterations = parseInt(document.getElementById("centrales-iterations").value);
  let nPowered;
  let res = [];

  for (let i = 0; i < iterations; i++) {
    nPowered = n * n;
    nPowered = nPowered.toString().split("");

    while (nPowered.length < 4) {
      nPowered.unshift(0);
    }

    n = parseInt(nPowered[1] + nPowered[2]);
    res.push(n);
  }


  displayResult(res);
}

function generateAditivo() {
  let arr = document.getElementById("aditivo-seed").value.split(",");
  arr = arr.map((e) => parseInt(e));
  let n = arr.length;
  let m = parseInt(document.getElementById("aditivo-m").value);
  let iterations = parseInt(document.getElementById("aditivo-iterations").value);

  for (let i = 0; i < iterations; i++) {
    arr.push((arr[arr.length - 1] + arr[arr.length + 1 - n]) % m);
  }

  displayResult(arr);
}

function displayResult (data) {
  document.getElementById("result").innerHTML = data.join('<br>');
}