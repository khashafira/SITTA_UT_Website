// js/stok.js
console.log("stok.js connected");

// Ambil user login
const userLogin = JSON.parse(localStorage.getItem("userLogin") || "null");
const tabelBody = document.querySelector("#tableStok tbody");
const formTambah = document.getElementById("formTambah");
const sectionTambah = document.getElementById("sectionTambah");
const billingSection = document.getElementById("billingSection");
const billingTable = document.querySelector("#tableBilling tbody");

// Role check
const isAdmin = userLogin && userLogin.role === "Administrator";

// Show/hide form tambah dan billing
if (sectionTambah) sectionTambah.style.display = isAdmin ? "block" : "none";
if (billingSection) billingSection.style.display = isAdmin ? "none" : "block";

// Ambil data billing dari localStorage
let billingData = JSON.parse(localStorage.getItem("billingData") || "[]");

// ======== Fungsi render data bahan ajar ========
function renderTable() {
  tabelBody.innerHTML = "";
  dataBahanAjar.forEach((item) => {
    const kode = item.kode || item.kodeLokasi || "N/A";
    const nama = item.nama || item.judul || "Unknown";
    const stok = Number(item.stok) || 0;
    const gambar = item.gambar || item.cover || "";

    const actionHtml = isAdmin
      ? `<button class="delete-btn" data-code="${kode}">Delete</button>`
      : `<button class="order-btn" data-code="${kode}">Order</button>`;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="assets/${gambar}" alt="${nama}" class="book-img" onerror="this.src='assets/default_book.jpg'"></td>
      <td>${kode}</td>
      <td style="text-align:left;">${nama}</td>
      <td>${stok}</td>
      <td>${actionHtml}</td>
    `;
    tabelBody.appendChild(row);
  });
}
renderTable();

// ======== Fungsi render billing ========
function renderBilling() {
  if (!billingTable) return;
  billingTable.innerHTML = "";

  const userBills = billingData.filter(
    (b) => b.user === userLogin.name || b.user === userLogin.nama
  );

  if (userBills.length === 0) {
    billingTable.innerHTML = `<tr><td colspan="5">No transactions yet.</td></tr>`;
    return;
  }

  userBills.forEach((b, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${b.kode}</td>
      <td style="text-align:left;">${b.nama}</td>
      <td>${b.tanggal}</td>
      <td>${b.status}</td>
      <td>
        ${
          b.status === "Pending Payment"
            ? `<button class="pay-btn" data-idx="${idx}">Pay</button>`
            : `<small>Paid</small>`
        }
      </td>
    `;
    billingTable.appendChild(tr);
  });
}
renderBilling();

// ======== Admin - tambah bahan ajar ========
if (formTambah && isAdmin) {
  formTambah.addEventListener("submit", function (e) {
    e.preventDefault();
    const kode = document.getElementById("kode").value.trim();
    const nama = document.getElementById("nama").value.trim();
    const stok = parseInt(document.getElementById("stok").value.trim(), 10);
    const gambar = document.getElementById("gambar").value.trim();

    if (!kode || !nama || isNaN(stok)) {
      alert("Please fill in all fields!");
      return;
    }

    dataBahanAjar.push({ kode, nama, stok, gambar });
    formTambah.reset();
    renderTable();
    alert("New material added!");
  });
}

// ======== Event listener ========
document.addEventListener("click", function (e) {
  // Delete - admin
  if (e.target.classList.contains("delete-btn")) {
    const code = e.target.getAttribute("data-code");
    const idx = dataBahanAjar.findIndex((it) => (it.kode || it.kodeLokasi) === code);
    if (idx !== -1 && confirm("Delete this material?")) {
      dataBahanAjar.splice(idx, 1);
      renderTable();
    }
  }

  // Order - mahasiswa
  if (e.target.classList.contains("order-btn")) {
    const code = e.target.getAttribute("data-code");
    const item = dataBahanAjar.find((it) => (it.kode || it.kodeLokasi) === code);
    if (!item) return alert("Item not found!");

    if (item.stok <= 0) return alert("Out of stock!");

    item.stok -= 1;
    renderTable();

    const billingItem = {
      kode: item.kode || item.kodeLokasi,
      nama: item.nama || item.judul,
      tanggal: new Date().toLocaleString(),
      status: "Pending Payment",
      user: userLogin.name || userLogin.nama,
    };

    billingData.push(billingItem);
    localStorage.setItem("billingData", JSON.stringify(billingData));
    renderBilling();
    alert(`Order created for "${billingItem.nama}"`);
  }

  // Pay button
  if (e.target.classList.contains("pay-btn")) {
    const idx = parseInt(e.target.getAttribute("data-idx"));
    if (billingData[idx]) {
      billingData[idx].status = "Paid";
      localStorage.setItem("billingData", JSON.stringify(billingData));
      renderBilling();
      alert("Payment successful!");
    }
   if (e.target.classList.contains("pay-btn")) {
   const idx = parseInt(e.target.getAttribute("data-idx"));
   if (billingData[idx]) {
    billingData[idx].status = "Paid";
    localStorage.setItem("billingData", JSON.stringify(billingData));
    renderBilling();

    const bill = billingData[idx];
    // invoice pop-up sederhana
    const invoice = `
      <div class="invoice-modal">
        <div class="invoice-box">
          <h3>🧾 Payment Receipt</h3>
          <p><strong>Material:</strong> ${bill.nama}</p>
          <p><strong>Code:</strong> ${bill.kode}</p>
          <p><strong>Date:</strong> ${bill.tanggal}</p>
          <p><strong>Status:</strong> <span style="color:green;">${bill.status}</span></p>
          <button onclick="document.querySelector('.invoice-modal').remove()">Close</button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", invoice);
  }
}
  }
});
