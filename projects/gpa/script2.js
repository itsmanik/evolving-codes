let calcBtn = document.querySelector(".calcBtn");
let result = document.querySelector(".sgpaResult");

calcBtn.addEventListener("click", function () {
  let mat = document.querySelector("#sub1").value;
  let chem = document.querySelector("#sub2").value;
  let ced = document.querySelector("#sub3").value;
  let pws = document.querySelector("#sub4").value;
  let ico = document.querySelector("#sub5").value;
  let sfh = document.querySelector("#sub6").value;
  let plc = document.querySelector("#sub7").value;
  let esc = document.querySelector("#sub8").value;
  mat = Math.ceil(Number(mat) / 10) * 4;
  chem = Math.ceil(Number(chem) / 10) * 4;
  ced = Math.ceil(Number(ced) / 10) * 3;
  pws = Math.ceil(Number(pws) / 10) * 3;
  ico = Math.ceil(Number(ico) / 10) * 3;
  sfh = Math.ceil(Number(sfh) / 10);
  plc = Math.ceil(Number(plc) / 10);
  esc = Math.ceil(Number(esc) / 10);
  let scoreSum = mat + chem + ced + pws + ico + sfh + plc + esc;
  let sgpa = scoreSum / 20;
  result.innerHTML = sgpa;
});
