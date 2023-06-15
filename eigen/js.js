
function filter1() {
    let x = document.querySelectorAll(".filter1");
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (element.style.display === "none") {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
    }
   
  }
  const birdBtn = document.querySelector('.btbirds');
  birdBtn.addEventListener('click', function() {
    filter1();
  });


  function filter2() {
    let x = document.querySelectorAll(".filter2");
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (element.style.display === "none") {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
    }
   
  }
  const mamalBtn = document.querySelector('.btmamals');
  mamalBtn.addEventListener('click', function() {
    filter2();
  });


  function filter3() {
    let x = document.querySelectorAll(".filter3");
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (element.style.display === "none") {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
    }
   
  }
  const reptileBtn = document.querySelector('.btreptile');
  reptileBtn.addEventListener('click', function() {
    filter3();
  });