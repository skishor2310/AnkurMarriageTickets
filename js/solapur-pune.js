const tickets = [
    {
        date: "19th December 2025 - Friday",
        time: "05:50 PM",
        train: "12157 / HUTATMA EXPRESS",
        pdf: "downloads/Pune-Solapur/1_19-12-2025Kishor-Sagar-Rupa(5.50PM).pdf",
        passengers: [
            { name: "Sagar", photo: "images/sagar.jpg" },
            { name: "Rupa", photo: "images/rupa.jpg" },
            { name: "Harshu", photo: "images/harshu.jpg" },
            { name: "Khushi", photo: "images/khushi.jpg" }
        ]
    },
    {
        date: "20th December 2025 - Saturday",
        time: "07:15 PM",
        train: "22225 / SUR VANDE BHARAT",
        pdf: "downloads/Pune-Solapur/2_20-12-2025Kishor-Anu(7.15PM).pdf",
        passengers: [
            { name: "Kishor", photo: "images/kishor.jpg" },
            { name: "Anu", photo: "images/anu.jpg" }
        ]
    },
    {
        date: "24th December 2025 - Wednesday",
        time: "05:50 PM",
        train: "12157 / HUTATMA EXPRESS",
        pdf: "downloads/Pune-Solapur/3_24-12-2025Sagar-Anu-Harsha(5.50PM).pdf",
        passengers: [
            { name: "Sagar", photo: "images/sagar.jpg" },
            { name: "Anu", photo: "images/anu.jpg" },
            { name: "Harshu", photo: "images/harshu.jpg" }
        ]
    },
    {
        date: "17th January 2026 - Friday",
        time: "06:10 PM",
        train: "22732 / HYDERABAD EXP",
        pdf: "downloads/Pune-Solapur/4_17-01-2026All(6.10PM).pdf",
        passengers: [
            { name: "Kishor", photo: "images/kishor.jpg" },
            { name: "Rupa", photo: "images/rupa.jpg" },
            { name: "Sagar", photo: "images/sagar.jpg" },
            { name: "Anu", photo: "images/anu.jpg" },
            { name: "Harshu", photo: "images/harshu.jpg" },
            { name: "Khushi", photo: "images/khushi.jpg" }
        ]
    },
    {
        date: "22nd January 2026 - Thursday",
        time: "06:10 PM",
        train: "11019 / KONARK EXPRESS",
        pdf: "downloads/Pune-Solapur/5_22-01-2026Rupa(6.10PM).pdf",
        passengers: [
            { name: "Rupa", photo: "images/rupa.jpg" },
            { name: "Khushi", photo: "images/khushi.jpg" }
        ]
    },
    {
        date: "24th January 2026 - Saturday",
        time: "10:20 AM",
        train: "18520 / LTT VSKP EXPRESS",
        pdf: "downloads/Pune-Solapur/6_24-01-2026Anu(10.20AM).pdf",
        passengers: [
            { name: "Anu", photo: "images/Anu.jpg" },
        ]
    },
    {
        date: "27th January 2026 - Tuesday",
        time: "05:50 AM",
        train: "12157 / HUTATMA EXPRESS",
        pdf: "downloads/Pune-Solapur/7_27-01-2026Sagar-Anu(5.50PM).pdf",
        passengers: [
            { name: "Sagar", photo: "images/Sagar.jpg" },
            { name: "Anu", photo: "images/Anu.jpg" },
            { name: "Harshu", photo: "images/Harshu.jpg" },
        ]
    },
    {
        date: "2nd Feburary 2026 - Monday",
        time: "07:00 AM",
        train: "16588 / BKN YPR EXP",
        pdf: "downloads/Pune-Solapur/8_02-02-2026Anu(7.00PM).pdf",
        passengers: [
            { name: "Anu", photo: "images/Anu.jpg" },
        ]
    }
];

const container = document.getElementById("ticketContainerReturn");

tickets.forEach(ticket => {
    const passengerHTML = ticket.passengers.map(p => `
    <div class="image-wrapper">
        <img src="${p.photo}" class="profile-picture" alt="${p.name}">
            <span class="image-text">${p.name}</span>
    </div>
    `).join("");

    container.innerHTML += `
    
        <div class="card ticket-card">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <span>${ticket.date}</span>
                    <a href="${ticket.pdf}" download class="btn btn-sm btn-download">
                        Download Ticket
                    </a>
                </div>
            </div>
            <div class="card-body pt-2">
                <div class="train-time">
                    <span class="text-secondary">${ticket.time}</span>
                    <span class="text-success">${ticket.train}</span>
                </div>
                <div class="d-flex gap-1 flex-wrap">
                    ${passengerHTML}
                </div>
            </div>
        </div>
    `;
});
