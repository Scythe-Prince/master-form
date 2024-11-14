//**************************************FORM VALIDATION*******************************/

const form = document.querySelector("#formtag");
const fullname = document.getElementById("fullname"); //name element
const email = document.getElementById("email"); //email element
const uniName = document.getElementById("uniName");
const nationalNumber = document.getElementById("Nationalnumber");
const phonenumber = document.getElementById("phonenumber");
// const grade = document.getElementById("grade");

const speciality = document.getElementById("speciality");
const speciality2 = document.getElementById("speciality2");
const speciality3 = document.getElementById("speciality3");

const smltxt = document.getElementById("sml-txt");
const smltxt2 = document.getElementById("sml-txt4");
const smltxt3 = document.getElementById("sml-txt3");



let uname = document.getElementById("user-name");
let umail = document.getElementById("user-mail");
let uUni = document.getElementById("user-uni");
let uPhone = document.getElementById("user-phone");
let uNnumber = document.getElementById("user-nNumber");
let uDeprt = document.getElementById("deprt");
let uDeprt2 = document.getElementById("av-d");
let uDeprt3 = document.getElementById("av-d2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();

  if (
    uname.classList.contains("success") &&
    umail.classList.contains("success") &&
    uUni.classList.contains("success") &&
    uPhone.classList.contains("success") &&
    uNnumber.classList.contains("success") &&
    uDeprt.classList.contains("success") &&
    uDeprt2.classList.contains("success") &&
    uDeprt3.classList.contains("success")
  ) {
    form.submit();
  } else {
    e.preventDefault();
  }
});
//******************************************************************************** */
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
//******************************************************************************** */

// var grade = document.getElementById("grade");
// if (grade.value == "d") {
//   //If the "Please Select" option is selected display error.
//   alert("لاي يمكن للحاصلين على مقبول التقديم على ماجستير");
//   // return false;
// }
// //******************************************************************************** */

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const uniNameValue = uniName.value.trim();
  const phoneValue = phonenumber.value.trim();
  const nationalNumberValue = nationalNumber.value.trim();
  //******************************************************************************** */

  if (fullnameValue === "") {
    setError(fullname, "ادخل الاسم ");
  } else {
    setSuccess(fullname);
  }
  //******************************************************************************** */

  if (uniNameValue === "") {
    setError(uniName, "ادخل اسم الكلية");
  } else {
    setSuccess(uniName);
  }
  //******************************************************************************** */

  if (emailValue === "") {
    setError(email, "ادخل البريد الالكتروني ");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "ادخل بريد الكتروني صحيح");
  } else {
    setSuccess(email);
  }
  //******************************************************************************** */

  if (phoneValue === "") {
    setError(phonenumber, "ادخل رقم الهاتف");
  } else if (phoneValue.length != 11) {
    setError(phonenumber, "رقم الهاتف يجب ان يتكون من 11 رقم");
  } else {
    setSuccess(phonenumber);
  }
  //******************************************************************************** */

  if (nationalNumberValue === "") {
    setError(nationalNumber, "ادخل الرقم القومي");
  } else if (nationalNumberValue.length != 14) {
    setError(nationalNumber, "الرقم القومي يجب ان يتكون من 14 رقم");
  } else {
    setSuccess(nationalNumber);
  }
  if (speciality.value === "القسم") {
    smltxt.innerHTML = "";
    smltxt.innerHTML = "برجاء التأكد من اختيار القسم و الضغط علي تأكيد!";
    smltxt.classList.add("error");
    smltxt.classList.remove("success");

    uDeprt.classList.add("error");
    uDeprt.classList.remove("success");

    smltxt.style.color = "#ff3860";
    smltxt.style.fontSize = "15px";
    smltxt.style.marginTop = "10px";
    smltxt.style.marginBottom = "7px";
    smltxt.style.fontWeight = "bold";
  } else {
    uDeprt.classList.add("success");
    uDeprt.classList.remove("error");
    smltxt.classList.remove("error");
    smltxt.classList.add("success");

    smltxt.innerHTML = "";
  }
  if (speciality2.value === "الماجستير") {
    smltxt2.innerHTML = "";
    smltxt2.innerHTML = "برجاء التأكد من اختيار الماجستير و الضغط علي تأكيد !";
    smltxt2.classList.add("error");
    uDeprt2.classList.add("error");
    uDeprt2.classList.remove("success");
    smltxt2.classList.remove("success");

    smltxt2.style.color = "#ff3860";
    smltxt2.style.fontSize = "15px";
    smltxt2.style.marginTop = "10px";
    smltxt2.style.marginBottom = "7px";
    smltxt2.style.fontWeight = "bold";
  } else {
    smltxt2.classList.remove("error");
    smltxt2.classList.add("success");
    uDeprt2.classList.remove("error");
    uDeprt2.classList.add("success");

    smltxt2.innerHTML = "";
  }
  if (speciality3.value === "الدكتوراة") {
    smltxt3.innerHTML = "";
    smltxt3.innerHTML = "برجاء التأكد من اختيار الدكتوراة  !";
    smltxt3.classList.add("error");
    smltxt3.classList.remove("success");
    uDeprt3.classList.add("error");
    uDeprt3.classList.remove("success");

    smltxt3.style.color = "#ff3860";
    smltxt3.style.fontSize = "15px";
    smltxt3.style.marginTop = "10px";
    smltxt3.style.marginBottom = "7px";
    smltxt3.style.fontWeight = "bold";
  } else {
    smltxt3.classList.remove("error");
    smltxt3.classList.add("success");
    uDeprt3.classList.remove("error");
    uDeprt3.classList.add("success");
    smltxt3.innerHTML = "";
  }
};

//**************************************FORM VALIDATION*******************************/

function getOption() {
  var select = document.getElementById("speciality2");
  var length = select.options.length;
  for (i = length - 1; i >= 0; i--) {
    select.options[i] = null;
  }

  selectElement = document.querySelector("#speciality");
  output = selectElement.value;

  if (output == "قسم الرياضيات و علوم الحاسب") {
    var option = document.createElement("option");
    option.text = "الرياضيات البحتة";
    option.value = "الرياضيات البحتة";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الرياضيات التطبيقية";
    option.value = "الرياضيات التطبيقية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الاحصاء الرياضي";
    option.value = "الاحصاء الرياضي";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "علوم الحاسب";
    option.value = "علوم الحاسب";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الحوسبة و المعلوماتية الحيوية";
    option.value = "الحوسبة و المعلوماتية الحيوية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    // for the second select option
  } else if (output == "قسم الكيمياء") {
    var option = document.createElement("option");
    option.text = "الكيمياء الحيوية";
    option.value = "الكيمياء الحيوية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الكيمياء التحليلية";
    option.value = "الكيمياء التحليلية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الكيمياء الفيزيائية ";
    option.value = "الكيمياء الفيزيائية ";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الكيمياء العضوية";
    option.value = "الكيمياء العضوية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الكيمياء غير العضوية";
    option.value = "الكيميا غير  العضوية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الكيمياء الحيوية و الميكروبيولوجي";
    option.value = "الكيمياء الحيوية و الميكروبيولوجي";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);
  } else if (output == "قسم الفيزياء") {
    // option.remove();
    var option = document.createElement("option");
    option.text = "الفيزياء النظرية";
    option.value = "الفيزياء النظرية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "فيزياء المواد";
    option.value = "فيزياء المواد";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الفيزياء الجوية و البيئية";
    option.value = "الفيزياء الجوية و البيئية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الفيزياء الاشعاعية الطبية";
    option.value = "الفيزياء الاشعاعية الطبية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);
  } else if (output == "قسم النبات") {
    // option.remove();
    var option = document.createElement("option");
    option.text = "الميكروبيولوجيا و المناعة";
    option.value = "الميكروبيولوجيا و المناعة";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "ميكروبيولوجيا تطبيقية";
    option.value = "ميكروبيولوجيا تطبيقية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "بيولوجيا الخلية والوراثة";
    option.value = "بيولوجيا الخلية والوراثة";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "البيئة النباتية";
    option.value = "البيئة النباتية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "فسيولوجيا النبات";
    option.value = "فسيولوجيا النبات";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الطحالب وعلوم البحيرات";
    option.value = "الطحالب وعلوم البحيرات";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "تصنيف النباتات والفلورا المصرية";
    option.value = "تصنيف النباتات والفلورا المصرية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "النباتات الطبية";
    option.value = "النباتات الطبية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "التكنولوجيا الحيوية النباتية";
    option.value = "التكنولوجيا الحيوية النباتية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);
  } else if (output == "قسم علم الحيوان") {
    // option.remove();
    var option = document.createElement("option");
    option.text = "علم الاجنة و التشريح المقارن";
    option.value = "علم الاجنة و التشريح المقارن";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الخلية و الانسجة و الوراثة";
    option.value = "الخلية و الانسجة و الوراثة";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "التكنولوجيا الحيوية ";
    option.value = "التكنولوجيا الحيوية ";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "فسيولوجي و كيمياء حيوية";
    option.value = "فسيولوجي و كيمياء حيوية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "اللافقاريات";
    option.value = "اللافقاريات";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الطفيليات و المناعة";
    option.value = "الطفيليات و المناعة";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الحشرات";
    option.value = "الحشرات";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "التحاليل المعملية البيولوجية و الطبية";
    option.value = "التحاليل المعملية البيولوجية و الطبية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "السموم الطبيعية و الاكتشافات الحيوية";
    option.value = "السموم الطبيعية و الاكتشافات الحيوية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);
  } else if (output == "قسم الجيولوجيا") {
    // option.remove();
    var option = document.createElement("option");
    option.text = "جيولوجيا البترول";
    option.value = "جيولوجيا البترول";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "علم الصخور النارية والمتحولة";
    option.value = "علم الصخور النارية والمتحولة";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الترسيب والصخور الرسوبية";
    option.value = "الترسيب والصخور الرسوبية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الجيولوجيا التركيبية";
    option.value = "الجيولوجيا التركيبية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الجيولوجيا الهندسية";
    option.value = "الجيولوجيا الهندسية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الحفريات والطبقات";
    option.value = "الحفريات والطبقات";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الجيولوجيا الاقتصادية";
    option.value = "الجيولوجيا الاقتصادية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الجيوكيمياء";
    option.value = "الجيوكيمياء";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الجيوفيزياء";
    option.value = "الجيوفيزياء";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "جيولوجيا المياة الارضية";
    option.value = "جيولوجيا المياة الارضية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الجيولوجيا البيئية";
    option.value = "الجيولوجيا البيئية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "تطبيقات الاستشعار عن بعد ونظم المعلومات الجغرافية";
    option.value = "تطبيقات الاستشعار عن بعد ونظم المعلومات الجغرافية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);
  } else if (output == "قسم علوم البحار") {
    // option.remove();
    var option = document.createElement("option");
    option.text = "البيولوجيا و الايكولوجيا البحرية";
    option.value = "البيولوجيا و الايكولوجيا البحرية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "تكنولوجيا الاستزراع المائي";
    option.value = "تكنولوجيا الاستزراع المائي";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "إداره المصايد وحمايتها";
    option.value = "إداره المصايد وحمايتها";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "علوم البحار الكيميائية والتلوث البحري";
    option.value = "علوم البحار الكيميائية والتلوث البحري";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "علوم البحار الجيولوجية";
    option.value = "علوم البحار الجيولوجية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "علوم البحار الفيزيائية والارصاد البحرية";
    option.value = "علوم البحار الفيزيائية والارصاد البحرية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "علوم البحار التطبيقية";
    option.value = "علوم البحار التطبيقية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);
  } else if (output == "قسم علوم البيئة") {
    // option.remove();
    var option = document.createElement("option");
    option.text = "الادارة البيئية";
    option.value = "الادارة البيئية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "ادارة السواحل و البيئة البحرية";
    option.value = "ادارة السواحل و البيئة البحرية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "التلوث البيئي";
    option.value = "التلوث البيئي";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الرصد البيئي";
    option.value = "الرصد البيئي";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "السلامة و الصحة المهنية";
    option.value = "السلامة و الصحة المهنية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);

    var option = document.createElement("option");
    option.text = "الصحة البيئية";
    option.value = "الصحة البيئية";
    option.className = "option-item";
    var select = document.getElementById("speciality2");
    select.appendChild(option);
  }
}
function getSecondOption() {
  var select2 = document.getElementById("speciality3");
  var length2 = select2.options.length;
  for (i = length2 - 1; i >= 0; i--) {
    select2.options[i] = null;
  }
  var option = document.createElement("option");
  option.text = document.querySelector("#speciality2").value;
  option.value = document.querySelector("#speciality2").value;
  option.className = "option-item";
  var select = document.getElementById("speciality3");
  select.appendChild(option);
}
