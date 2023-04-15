//التكليف 06 تحدي

//  لديك حقل إدخال تقوم بكتابة عدد العناصر التي تريد إنشائها
//  لديك حقل آخر يحتوي على نوع العنصر سواء كان Div أو Section
//  لديك حقل إدخال لكتابة الكلمة التي ستظهر داخل العنصر
//  لديك زر لبدا عملية الإنشاء
//  عند الضغط على إنشاء العناصر تأكد أن اي عناصر قديمة تم إنشاءها سوف يتم إزالتها أولا
//  يمكنك عمل تنسيقات ال CSS بال JavaScript في حالة كنت تريد التمرين على التنسيق بال JavaScript
//  يمكنك عمل التنسيق بشكل طبيعي بال CSS بدون أي مشكلة
//  تأكد أن ال Form لا تقوم بإرسال البيانات حتى لا يتم عمل Refresh للصفحة
//  العنصر يحتوي على ID و Class وال ID يزداد رقم مع كل عنصر شاهد المثال المطلوب لتفهم

let inputNumber = document.getElementsByName("elements")[0];
let inputText = document.getElementsByName("texts")[0];
let selectElement = document.querySelector("select");
let create = document.querySelector("input[type='submit']");
let result = document.getElementsByClassName("results")[0];

document.forms[0].onsubmit = function (e) {
  e.preventDefault();
};

create.onclick = function () {
  let existingBoxes = document.querySelectorAll(".box");
  if (existingBoxes.length > 0) {
    // if there are, remove them
    for (let i = 0; i < existingBoxes.length; i++) {
      result.removeChild(existingBoxes[i]);
    }
  }
  for (let i = 0; i < inputNumber.value; i++) {
    let box = document.createElement("div");
    let myText = document.createTextNode(`${inputText.value}`);
    box.className = "box";
    box.setAttribute("title", "Element");
    box.setAttribute("id", `id-${i + 1}`);
    result.appendChild(box);
    box.appendChild(myText);
  }
  if (selectElement.value === "Div") {
    let lastElement = document.getElementById(`id-${result.children.length}`);
    lastElement.style.marginLeft = "auto";
  }
};
