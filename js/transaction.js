// js/transaction.js
console.log("transaction.js connected");

const userLogin = JSON.parse(localStorage.getItem("userLogin") || "null");
const billingData = JSON.parse(localStorage.getItem("billingData") || "[]");
const tableBody = document.querySelector("#tableHistory tbody");

function renderHistory() {
  if (!tableBody) return;
  tableBody.innerHTML = "";

  const isAdmin = userLogin && userLogin.role === "Administrator";
  const filtered = isAdmin
    ? billingData
    : billingData.filter(
        (b) => b.user === userLogin.name || b.user === userLogin.nama
      );

  if (filtered.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5">No transactions yet.</td></tr>`;
    return;
  }

  filtered.forEach((bill) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${bill.kode}</td>
      <td style="text-align:left;">${bill.nama}</td>
      <td>${bill.tanggal}</td>
      <td>${bill.status}</td>
      <td>${bill.user}</td>
    `;
    tableBody.appendChild(tr);
  });
}

renderHistory();
