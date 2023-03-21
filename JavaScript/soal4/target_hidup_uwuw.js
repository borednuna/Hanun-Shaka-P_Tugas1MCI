const readline = require("readline");

let impiankuh = [
  {
    title: "\nMenjadi admin MCI:D",
    desc: "\nTentu saja impian nomor satu adalah menjadi admin MCI\nItulah alasan saya mengikuti oprec ini"
  },
  {
    title: "\nMenaikkan IP",
    desc: "\nWell jujur, IP saya beberapa semester ke belakang tidak setinggi teman-teman yang lain\nMaka dari itu saya bertekad untuk meningkatkan IP semester-semester ke depan.\n\n\"Semakin late game semakin kuat bos\"\n- Tsun Zu, Art of War"
  },
  {
    title: "\nMenang KRI 2023 di Semarang",
    desc: "\nSetelah menang KRI tahun lalu, saya rasa mempertahankan gelarnya di tahun ini dan tahun-tahun berikutnya\nmemberi pressure yang lumayan, hehe\nSaya akan berusaha untuk terus mempertahankan semangat\nApalagi tahun ini KRI Nasional digelar di kampung halaman hiks"
  },
  {
    title: "\nIkut Robocup 2023",
    desc: "\nRobocup, whew ...\nAjang kompetisi humanoid robot paling bergengsi\nKalau  saya berkesempatan untuk ikut berangkat mengikutinya ...\nWhoa, *cheff's kiss"
  },
  {
    title: "\nIkutan Jadi Panitia Schematics NLC 2023",
    desc: "\nJadi, saya sekarang adalah staff ahli Schematics NLC 2023.\nTahun lalu saya tidak ikut jadi panitia sehingga saya fomo dan\nagak kurang pergaulan akibat terlalu lama di goa robotika.\nLooking forward to widen my network and make new friends:))"
  },
  {
    title: "\nDapat Gandengan:))",
    desc: "\nSebenarnya ga penting sih hehe. Tapi cape juga ditanyain emak mulu."
  }
]

const display = (order, title, desc) => {
  console.clear();
  console.log("Impian saya yang ke-" + order + "!");
  console.log(title);
  console.log(desc);
}

let overshare_seperti_biasa = (time, work) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(work());
    }
    , time);
  })
}

console.clear();
console.log("\nHlow mas mba admin MCI.\nKenalin aku Hanun Shaka Puspa biasa dipanggil Nuna.\nProgram ini dibuat untuk memenuhi penugasan nomor 4 mengenai\nimplementasi asynchronus di Javascript.\nStudy case-nya sendiri yaitu impian di tahun 2023 ini.");

setTimeout(() => {
  console.clear();
  console.log("Nungguin yak:3");
}, 5000);

overshare_seperti_biasa(5000, () => console.log("\n\nTeterett:"))
.then ( () => {
  return overshare_seperti_biasa(7000, () => display("1", impiankuh[0].title, impiankuh[0].desc));
})

.then ( () => {
  return overshare_seperti_biasa(7000, () => display("2", impiankuh[1].title, impiankuh[1].desc));
})

.then ( () => {
  return overshare_seperti_biasa(7000, () => display("3", impiankuh[2].title, impiankuh[2].desc));
})

.then ( () => {
  return overshare_seperti_biasa(7000, () => display("4", impiankuh[3].title, impiankuh[3].desc));
})

.then ( () => {
  return overshare_seperti_biasa(8000, () => display("5", impiankuh[4].title, impiankuh[4].desc));
})

.then ( () => {
  return overshare_seperti_biasa(7000, () => display("6", impiankuh[5].title, impiankuh[5].desc));
})

.finally ( () => {
  console.clear();
  console.log("Yak itulah impian saya di tahun ini. Do'a dan dukungannya ya mas mba admin MCI:)");
  console.log("Terima kasih sudah membaca sampai akhir:)");
  console.log("Salam, Nuna");
})
