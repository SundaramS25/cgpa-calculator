$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".header").toggleClass("toggle");
  });
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".header").removeClass("toggle");
  });
});

function onClick() {
  const inputValue = document.getElementById("sub_count").value;
  if (inputValue <= 0) alert("invalid subject count");
  else if (inputValue > 20) alert("Too many subjects");
  else {
    const textboxesContainer = document.getElementById("textboxes-container");
    textboxesContainer.innerHTML = "";
    for (let i = 0; i < inputValue; i++) {
      var division = document.createElement("DIV");
      var label = document.createElement("LABEL");
      label.innerHTML = "Subject " + (i + 1);
      division.appendChild(label);
      var division1 = document.createElement("DIV");
      division1.className = "radio_div";
      var radio = document.createElement("INPUT");
      radio.type = "RADIO";
      radio.name = "credit" + i;
      radio.id = "radio0";
      radio.value = "0";
      division1.appendChild(radio);
      var rad_label = document.createElement("LABEL");
      rad_label.for = "radio0";
      rad_label.innerHTML = "0";
      division1.appendChild(rad_label);
      var radio = document.createElement("INPUT");
      radio.type = "RADIO";
      radio.name = "credit" + i;
      radio.id = "radio1";
      radio.value = "1";
      division1.appendChild(radio);
      var rad_label = document.createElement("LABEL");
      rad_label.for = "radio1";
      rad_label.innerHTML = "1";
      division1.appendChild(rad_label);
      var radio = document.createElement("INPUT");
      radio.type = "RADIO";
      radio.name = "credit" + i;
      radio.id = "radio2";
      radio.value = "1.5";
      division1.appendChild(radio);
      var rad_label = document.createElement("LABEL");
      rad_label.for = "radio2";
      rad_label.innerHTML = "1.5";
      division1.appendChild(rad_label);
      var radio = document.createElement("INPUT");
      radio.type = "RADIO";
      radio.name = "credit" + i;
      radio.id = "radio5";
      radio.value = "2";
      division1.appendChild(radio);
      var rad_label = document.createElement("LABEL");
      rad_label.for = "radio5";
      rad_label.innerHTML = "2";
      division1.appendChild(rad_label);
      var radio = document.createElement("INPUT");
      radio.type = "RADIO";
      radio.name = "credit" + i;
      radio.id = "radio3";
      radio.value = "3";
      division1.appendChild(radio);
      var rad_label = document.createElement("LABEL");
      rad_label.for = "radio3";
      rad_label.innerHTML = "3";
      division1.appendChild(rad_label);
      var radio = document.createElement("INPUT");
      radio.type = "RADIO";
      radio.name = "credit" + i;
      radio.id = "radio4";
      radio.value = "4";
      division1.appendChild(radio);
      var rad_label = document.createElement("LABEL");
      rad_label.for = "radio4";
      rad_label.innerHTML = "4";
      division1.appendChild(rad_label);
      division.appendChild(division1);
      var selector = document.createElement("SELECT");
      selector.id = "select" + i;
      var option0 = document.createElement("OPTION");
      option0.value = "0";
      option0.innerHTML = "---";
      selector.appendChild(option0);
      var option1 = document.createElement("OPTION");
      option1.value = "10";
      option1.innerHTML = "O";
      selector.appendChild(option1);
      var option2 = document.createElement("OPTION");
      option2.value = "9";
      option2.innerHTML = "A+";
      selector.appendChild(option2);
      var option3 = document.createElement("OPTION");
      option3.value = "8";
      option3.innerHTML = "A";
      selector.appendChild(option3);
      var option4 = document.createElement("OPTION");
      option4.value = "7";
      option4.innerHTML = "B+";
      selector.appendChild(option4);
      var option5 = document.createElement("OPTION");
      option5.value = "6";
      option5.innerHTML = "B";
      selector.appendChild(option5);
      division.appendChild(selector);
      textboxesContainer.appendChild(division);
    }
  }
}

function calculateGPA() {
  var sum = 0;
  var cre_sum = 0;
  var inputValue = document.getElementById("sub_count").value;
  for (var i = 0; i < inputValue; i++) {
    var x = document.getElementById("select" + i).selectedIndex;
    var y = document.getElementById("select" + i).options;
    var grade_point = parseFloat(y[x].value);
    var credit = 0;
    var z = document.getElementsByName("credit" + i);
    for (var j = 0; j < 6; j++) {
      if (z[j].checked) {
        credit = parseFloat(z[j].value);
        cre_sum += parseFloat(z[j].value);
      }
    }
    // console.log(cre_sum);
    sum += grade_point * credit;
  }
  // var div = document.getElementById("resultgpa");
  var hp = document.getElementById("resultStr");
  hp.innerText = "Your GPA is " + (sum / cre_sum).toPrecision(2);

  // div.appendChild(hp);
}

function onClick1() {
  const textboxesContainer2 = document.getElementById("textboxes-container2");
  textboxesContainer2.hidden = true;
  textboxesContainer2.innerHTML = "";
  const textboxesContainer1 = document.getElementById("textboxes-container1");
  textboxesContainer1.hidden = false;
  const inputValue = document.getElementById("sem_count").value;
  if (inputValue <= 0) alert("invalid subject count");
  else if (inputValue > 8) alert("Too many subjects");
  else {
    const textboxesContainer = document.getElementById("textboxes-container1");
    textboxesContainer.innerHTML = "";
    for (let i = 0; i < inputValue; i++) {
      semCalc(i);
    }
  }
}

function semCalc(i) {
  const textboxesContainer = document.getElementById("textboxes-container1");
  var br = document.createElement("br");
  textboxesContainer.appendChild(br);
  var br1 = document.createElement("br");
  textboxesContainer.appendChild(br1);
  var br2 = document.createElement("br");
  textboxesContainer.appendChild(br2);
  var hp = document.createElement("label");
  hp.id = "subCount";
  hp.innerText = "Enter the No of Subjects in Semester " + (i + 1) + ": ";
  const text = document.createElement("input");
  text.type = "text";
  text.id = "text_sub" + i;
  textboxesContainer.appendChild(hp);
  textboxesContainer.appendChild(text);
}

function onClick2() {
  const inputValue = document.getElementById("sem_count").value;
  var fl1 = 0;
  for (let i = 0; i < inputValue; i++) {
    if (
      document.getElementById("text_sub" + i).value <= 0 ||
      document.getElementById("text_sub" + i).value > 20
    ) {
      fl1 = i + 1;
      break;
    }
  }
  if (fl1 != 0) {
    alert("invalid subject on semester " + fl1);
  } else {
    const textboxesContainer1 = document.getElementById("textboxes-container1");
    textboxesContainer1.hidden = true;
    const textboxesContainer2 = document.getElementById("textboxes-container2");
    textboxesContainer2.hidden = false;
    textboxesContainer2.innerHTML = "";
    for (let i = 0; i < inputValue; i++) {
      var br = document.createElement("br");
      textboxesContainer2.appendChild(br);
      var br1 = document.createElement("br");
      textboxesContainer2.appendChild(br1);
      var hp = document.createElement("label");
      hp.id = "semseter-no";
      hp.innerHTML = "SEMESTER " + (i + 1) + " : ";
      textboxesContainer2.appendChild(hp);
      const text = document.getElementById("text_sub" + i);

      for (let j = 0; j < text.value; j++) {
        var division = document.createElement("DIV");
        var label = document.createElement("LABEL");
        label.innerHTML = "Subject " + (j + 1);
        division.appendChild(label);
        var division1 = document.createElement("DIV");
        division1.className = "radio_div";
        var radio = document.createElement("INPUT");
        radio.type = "RADIO";
        radio.name = "credit" + i + j;
        radio.id = "radio0";
        radio.value = "0";
        division1.appendChild(radio);
        var rad_label = document.createElement("LABEL");
        rad_label.for = "radio0";
        rad_label.innerHTML = "0";
        division1.appendChild(rad_label);
        var radio = document.createElement("INPUT");
        radio.type = "RADIO";
        radio.name = "credit" + i + j;
        radio.id = "radio1";
        radio.value = "1";
        division1.appendChild(radio);
        var rad_label = document.createElement("LABEL");
        rad_label.for = "radio1";
        rad_label.innerHTML = "1";
        division1.appendChild(rad_label);
        var radio = document.createElement("INPUT");
        radio.type = "RADIO";
        radio.name = "credit" + i + j;
        radio.id = "radio2";
        radio.value = "1.5";
        division1.appendChild(radio);
        var rad_label = document.createElement("LABEL");
        rad_label.for = "radio2";
        rad_label.innerHTML = "1.5";
        division1.appendChild(rad_label);
        var radio = document.createElement("INPUT");
        radio.type = "RADIO";
        radio.name = "credit" + i + j;
        radio.id = "radio5";
        radio.value = "2";
        division1.appendChild(radio);
        var rad_label = document.createElement("LABEL");
        rad_label.for = "radio5";
        rad_label.innerHTML = "2";
        division1.appendChild(rad_label);
        var radio = document.createElement("INPUT");
        radio.type = "RADIO";
        radio.name = "credit" + i + j;
        radio.id = "radio3";
        radio.value = "3";
        division1.appendChild(radio);
        var rad_label = document.createElement("LABEL");
        rad_label.for = "radio3";
        rad_label.innerHTML = "3";
        division1.appendChild(rad_label);
        var radio = document.createElement("INPUT");
        radio.type = "RADIO";
        radio.name = "credit" + i + j;
        radio.id = "radio4";
        radio.value = "4";
        division1.appendChild(radio);
        var rad_label = document.createElement("LABEL");
        rad_label.for = "radio4";
        rad_label.innerHTML = "4";
        division1.appendChild(rad_label);
        division.appendChild(division1);
        var selector = document.createElement("SELECT");
        selector.id = "select" + i + j;
        var option0 = document.createElement("OPTION");
        option0.value = "0";
        option0.innerHTML = "---";
        selector.appendChild(option0);
        var option1 = document.createElement("OPTION");
        option1.value = "10";
        option1.innerHTML = "O";
        selector.appendChild(option1);
        var option2 = document.createElement("OPTION");
        option2.value = "9";
        option2.innerHTML = "A+";
        selector.appendChild(option2);
        var option3 = document.createElement("OPTION");
        option3.value = "8";
        option3.innerHTML = "A";
        selector.appendChild(option3);
        var option4 = document.createElement("OPTION");
        option4.value = "7";
        option4.innerHTML = "B+";
        selector.appendChild(option4);
        var option5 = document.createElement("OPTION");
        option5.value = "6";
        option5.innerHTML = "B";
        selector.appendChild(option5);
        division.appendChild(selector);
        textboxesContainer2.appendChild(division);
      }
      var hp1 = document.createElement("p");
      hp1.id = "end-line";
      hp1.innerHTML =
        "----------------------------------------------------------------------------";
      textboxesContainer2.appendChild(hp1);
    }
  }
}

function calculateCGPA() {
  var sum = 0;
  var cre_sum = 0;
  const textboxesContainer2 = document.getElementById("textboxes-container2");
  const inputValue = document.getElementById("sem_count").value;
  for (let i = 0; i < inputValue; i++) {
    const text = document.getElementById("text_sub" + i);
    for (let j = 0; j < text.value; j++) {
      var x = document.getElementById("select" + i + j).selectedIndex;
      var y = document.getElementById("select" + i + j).options;
      var grade_point = parseFloat(y[x].value);
      var credit = 0;
      var z = document.getElementsByName("credit" + i + j);
      for (var k = 0; k < 6; k++) {
        if (z[k].checked) {
          credit = parseFloat(z[k].value);
          cre_sum += parseFloat(z[k].value);
        }
      }
      sum += grade_point * credit;
    }
  }
  var hp = document.getElementById("resultStr1");
  hp.innerText = "Your CGPA is " + (sum / cre_sum).toPrecision(2);
}
