const list = document.getElementById("jobList");
let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

if(jobs.length === 0){
    list.innerHTML = "<p style='text-align:center;'>No job found.</p>";
}

jobs.forEach(j => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.innerHTML = `
        <h3>${j.jobTitle}</h3>
        <p>Company: ${j.company}</p>
        <p>Salary: ₹${j.salary}/day</p>
        <p>Location: ${j.location}</p>
        <button onclick="window.location.href='tel:${j.phone}'">Call Now</button>
    `;
    list.appendChild(card);
});
