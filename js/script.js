document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const role = document.getElementById("role").value;
  
  if (role === "admin") {
    window.location.href = "admin-dashboard.html";
  } else if (role === "teacher") {
    window.location.href = "teacher-dashboard.html";
  } else if (role === "student") {
    window.location.href = "student-dashboard.html";
  } else if (role === "parent") {
    window.location.href = "parent-dashboard.html";
  }
});
