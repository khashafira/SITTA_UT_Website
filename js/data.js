const dataUsers= [
  {
    id: 1,
    nama: "Shafira Khairunisa",
    email: "shafira@ut.ac.id",
    password: "shafira123",
    role: "Mahasiswa",
    lokasi: "UPBJJ Bandung"
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar"
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat"
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP"
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat"
  }
];

const dataBahanAjar = [
  {
    kode: "ASIP4301",
    nama: "Pengantar Ilmu Komunikasi",
    stok: 548,
    gambar: "assets/img/pengantar_komunikasi.jpg"
  },
  {
    kode: "EKMA4216",
    nama: "Manajemen Keuangan",
    stok: 392,
    gambar: "assets/img/manajemen_keuangan.jpg"
  },
  {
    kode: "EKMA4310",
    nama: "Kepemimpinan",
    stok: 278,
    gambar: "assets/img/kepemimpinan.jpg"
  },
  {
    kode: "BIOL4211",
    nama: "Mikrobiologi Dasar",
    stok: 165,
    gambar: "assets/img/mikrobiologi.jpg"
  },
  {
    kode: "PAUD4401",
    nama: "Perkembangan Anak Usia Dini",
    stok: 204,
    gambar: "assets/img/paud_perkembangan.jpeg"
  }
];

const dataTracking = {
  "2023001234": {
    nomorDO: "2023001234",
    nama: "Shafira Khairunisa",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan:[
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },      
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan"
      },
    ]
  },
  "2023005678": {
    nomorDO: "2023005678",
    nama: "Agus Pranoto",
    status: "Dikirim",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan:[
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },      
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Kota Bandung"
      },
      {
        waktu: "2025-08-26 12:15:33",
        keterangan: "Tiba di Hub: Kota BANDUNG"
      },
      {
        waktu: "2025-08-26 15:06:12",
        keterangan: "Proses antar ke Cimahi"
      },
      {
        waktu: "2025-08-26 20:00:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto"
      }
    ]
  }
};
