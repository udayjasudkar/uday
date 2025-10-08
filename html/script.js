document.getElementById("admissionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const student = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    gender: document.getElementById("gender").value,
    course: document.getElementById("course").value,
  };

  console.log("Form Submitted:", student);
  alert("Form submitted successfully!");

  // Optional: Reset form
  e.target.reset();
});

function handleAccept(button) {
  alert("User accepted!");
  // Add logic if needed
}

function handleReject(button) {
  alert("User rejected!");
  // Add logic if needed
}
