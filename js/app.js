const input1 = document.getElementById("input1"); //От логинга
const input2 = document.getElementById("input2");//От пароля
const input3 = document.getElementById("input3");//Для проверки пароля
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");
const btn = document.getElementById("btn")

const set = new Set();
const set1 = new Set();

const output_title = "Этот логин уже используется другим пользователем ";
const output_title2 = "  ";
const output_title3 = "Заданные вами пароли не совпадают";

//Для проверки логина
let a = function checklogin(login) {
  if (set.has(input1.value)) output1.innerHTML = `<p>${output_title}</p>`;
  else set.add(input1.value), (output1.innerHTML = `<p>${output_title2}</p>`);
};

//Для ввода пароля
let b = function Password(password) {
  if (set1.has(input2.value)) output2.innerHTML = `<p>${output_title1}</p>`;
  else set1.add(input2.value), (output2.innerHTML = `<p>${output_title2}</p>`);
};

//Для проверки пароля
let c = function checkPassword(password) {
  if (input3.value !== input2.value) {
    output3.innerHTML = `<p>${output_title3}</p>`;
  } else output3.innerHTML = `<p>${output_title2}</p>`;
};

//Для продвинутой проверки пароля
let d = function checkPassword(password) {
  if (input2.value == input3.value) {
    output3.innerHTML = `<p>${output_title2}</p>`;
  }
  else if(input3.value == ""){
    output3.textContent == "";
  }
  else output3.innerHTML = `<p>${output_title3}</p>`;
};

  // input1.addEventListener("change", (e) => {
  //   a();
  // });
  
  // input2.addEventListener("change", (e) => {
  //   b();
  //   d()
  
  // });
  
  // input3.addEventListener("change", (e) => {
  //   c();
  // });


btn.addEventListener("click",()=>{
  a()
  b()
  c()
  d()
  input1.value = "";
  input2.value = ""; 
  input3.value = "";
})
