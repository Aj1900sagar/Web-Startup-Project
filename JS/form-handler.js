// ✅ Employer Job Post Form
document.getElementById("jobPostForm").addEventListener("submit", function(e){
    e.preventDefault();

    const job = {
        company: document.getElementById("company").value,
        jobTitle: document.getElementById("jobTitle").value,
        location: document.getElementById("location").value,
        salary: document.getElementById("salary").value,
        phone: document.getElementById("phone").value
    };

    let allJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    allJobs.push(job);
    localStorage.setItem("jobs", JSON.stringify(allJobs));

    alert("✅ Job Posted Successfully!");
    this.reset();
});

// ✅ Worker Registration Form
document.getElementById("workerForm").addEventListener("submit", function(e){
    e.preventDefault();

    const worker = {
        workerName: document.getElementById("workerName").value,
        skill: document.getElementById("skill").value,
        exp: document.getElementById("exp").value,
        wLocation: document.getElementById("wLocation").value,
        wPhone: document.getElementById("wPhone").value
    };

    let allWorkers = JSON.parse(localStorage.getItem("workers")) || [];
    allWorkers.push(worker);
    localStorage.setItem("workers", JSON.stringify(allWorkers));

    alert("✅ Worker Registered Successfully!");
    this.reset();
});
