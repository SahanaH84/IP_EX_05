function id_valid() {
    let i = document.getElementById("eid").value;
    if (i.length == 0) {
      document.getElementById("iderror").innerHTML = "ID is required";
      return false;
    }
    if (!i.match(/^[a-zA-z]{2}[0-9]{4}/) || i.length > 6) {
      document.getElementById("iderror").innerHTML =
        "Enter Valid Employee ID";
      return false;
    }
  }
  function name_valid() {
    let name = document.getElementById("name").value;
    if (name.length == 0) {
      document.getElementById("name_error").innerHTML = "ENTER NAME!!!";
      return false;
    }
    if (!n.match(/^[A-z a-z]*\s{1}[A-Z a-z]/)) {
      document.getElementById("name_error").innerHTML = "Enter Valid Name";
      return false;
    }
    document.getElementById("name_error").innerHTML =
      '<i class="fa fa-check-circle"></i>';
    return true;
  }
  function add_valid() {
    let ad = document.getElementById("ead").value;
    let required = 25;
    let left = required - ad.length;
    if (ad.length == 0) {
      document.getElementById("aderror").innerHTML = "Error: Enter Address";
      return false;
    }
    if (left > 0) {
      document.getElementById("aderror").innerHTML =
        left + " characters required";
      return false;
    } else {
      document.getElementById("aderror").innerHTML = " ";
    }
  }
  function contact_valid() {
    let c = document.getElementById("contact").value;
    if (c.length == 0) {
      document.getElementById("contacterror").innerHTML =
        "Enter Contact Number";
      return false;
    }
    if (c.length > 10) {
      document.getElementById("contacterror").innerHTML =
        "Contact Number should be 10 digits";
      return false;
    }
    if (!c.match(/^[0-9]{10}/) || c.length > 10) {
      document.getElementById("contacterror").innerHTML =
        "Enter Valid Contact Number";
      return false;
    }
  }
  function int_valid() {
    let ai = document.getElementById("aoi").value;
    if (ai.length == 0) {
      document.getElementById("INTERESTerror").innerHTML =
        "Enter Area of Interest";
      return false;
    }
    if (!ai.match(/^[A-Z a-z]/)) {
      document.getElementById("INTERESTerror").innerHTML =
        "Enter Valid area of Interest";
      return false;
    }
  }
  function exp_valid() {
    let y = document.getElementById("EXP").value;
    if (y.length == 0) {
      document.getElementById("EXPerror").innerHTML =
        "Enter Year of Experiencce";
      return false;
    }
  }
  function submit_valid() {
    if (
      name_valid() == true &&
      id_valid() == true &&
      add_valid() == true &&
      contact_valid() == true &&
      int_valid() == true &&
      exp_valid() == true
    ) {
      alert("REGISTERED SUCCESSFULLY");
    } else {
      alert("Enter all the details to submit");
      return;
    }
  }
  function clear() {
    document.getElementById("form").reset();
  }