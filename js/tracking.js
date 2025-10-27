console.log("tracking.js connected");

const formTracking = document.getElementById("formTracking");
const resultBox = document.getElementById("resultTracking");

formTracking.addEventListener("submit", function (e) {
  e.preventDefault();
  const doNumber = document.getElementById("doNumber").value.trim();

  if (!doNumber) {
    resultBox.innerHTML = `<p class="not-found">Please enter a valid DO number.</p>`;
    return;
  }

  // Karena dataTracking adalah OBJECT, bukan array
  const found = dataTracking[doNumber];

  if (found) {
    // Buat tampilan perjalanan pengiriman
    const perjalananHTML = found.perjalanan
      .map(
        (step) => `
          <li><strong>${step.waktu}</strong> — ${step.keterangan}</li>
        `
      )
      .join("");

    resultBox.innerHTML = `
      <div class="status-card">
        <h3>📦 Delivery Information</h3>
        <p><strong>DO Number:</strong> ${found.nomorDO}</p>
        <p><strong>Recipient:</strong> ${found.nama}</p>
        <p><strong>Status:</strong> <span class="status" data-status="${found.status}">${found.status}</span></p>
        <p><strong>Courier:</strong> ${found.ekspedisi}</p>
        <p><strong>Shipment Date:</strong> ${found.tanggalKirim}</p>
        <p><strong>Package Code:</strong> ${found.paket}</p>
        <p><strong>Total:</strong> ${found.total}</p>
        <h4>📍 Shipment Journey:</h4>
        <ul class="tracking-list">${perjalananHTML}</ul>
      </div>
    `;
  } else {
    resultBox.innerHTML = `<p class="not-found">❌ DO number not found. Please check again.</p>`;
  }

  formTracking.reset();
});
