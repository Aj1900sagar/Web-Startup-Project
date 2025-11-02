// ✅ Dummy saved data
let savedWorkers = [
    { name: "Amit", skill: "Plumber", exp: "2 Years", location: "Lucknow", phone: "9876543210" },
    { name: "Raju", skill: "Electrician", exp: "3 Years", location: "Kanpur", phone: "9234567891" },
    { name: "Karan", skill: "Painter", exp: "4 Years", location: "Agra", phone: "9123456780" },
    { name: "Sonu", skill: "Security", exp: "2 Years", location: "Bareilly", phone: "9123456789" },
    { name: "Manoj", skill: "Carpenter", exp: "3 Years", location: "Aligarh", phone: "9988776655" }
];

// ✅ Display data
function showData(list) {
    let tbody = document.getElementById("savedData");
    tbody.innerHTML = "";
    list.forEach(w => {
        tbody.innerHTML += `
            <tr>
                <td>${w.name}</td>
                <td>${w.skill}</td>
                <td>${w.exp}</td>
                <td>${w.location}</td>
                <td><a href="tel:${w.phone}">Call</a></td>
            </tr>`;
    });
}
showData(savedWorkers);

// ✅ Search filter
document.getElementById("searchInput").addEventListener("input", e => {
    let value = e.target.value.toLowerCase();
    let filtered = savedWorkers.filter(w =>
        w.name.toLowerCase().includes(value) ||
        w.skill.toLowerCase().includes(value) ||
        w.location.toLowerCase().includes(value)
    );
    showData(filtered);
});

// ✅ Skill Filter
document.getElementById("skillFilter").addEventListener("change", e => {
    let value = e.target.value;
    let filtered = value ? savedWorkers.filter(w => w.skill === value) : savedWorkers;
    showData(filtered);
});

// ✅ Download as PDF
document.getElementById("downloadPDF").addEventListener("click", () => {
    const text = JSON.stringify(savedWorkers, null, 4);
    const blob = new Blob([text], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "saved_jobs_workers.pdf";
    link.click();
});

// ✅ Send Email
document.getElementById("sendEmail").addEventListener("click", () => {
    let body = encodeURIComponent(JSON.stringify(savedWorkers, null, 4));
    window.location.href = `mailto:?subject=Saved Workers List&body=${body}`;
});
