function validateForm() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if (name === "" || phone === "" || email === "") {
        console.log("Please fill all fields.");
        alert("Please fill all fields")
        return false
    }

    console.log("Login Successful!");
    alert("Login Successful!");
    
}