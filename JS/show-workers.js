const wlist = document.getElementById("workerList");
let workers = JSON.parse(localStorage.getItem("workers")) || [];

if(workers.length === 0){
    wlist.innerHTML = "<p style='text-align:center;'>No workers registered.</p>";
}

workers.forEach(w => {
    const card = document.createElement("div");
    card.className = "worker-card";
    card.innerHTML = `
        <h3>${w.workerName}</h3>
        <p>Skill: ${w.skill}</p>
        <p>Experience: ${w.exp} years</p>
        <p>Location: ${w.wLocation}</p>
        <button onclick="window.location.href='tel:${w.wPhone}'">Call Worker</button>
    `;
    wlist.appendChild(card);
});
