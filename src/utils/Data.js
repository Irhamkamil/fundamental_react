let getData = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "2022-04-14",
    archived: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 6,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

function getNotes() {
  return getData;
}

function FoundNote(id) {
  const foundedNote = getData.find((note) => note.id === id);
  return foundedNote;
}

function deleteNotes(id) {
  getData = getData.filter((getData) => getData.id !== id);
}

function addNotes({ title, body }) {
  getData = [
    ...getData,
    {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    },
  ];
}

function getActiveNotes() {
  const activeNotes = getData.filter((note) => !note.archived);
  return activeNotes;
}

function getArchivedNotes() {
  const archivedNotes = getData.filter((note) => note.archived);
  return archivedNotes;
}

function archiveNote(id) {
  getData = getData.map((note) => {
    if (note.id === id) {
      return { ...note, archived: true };
    }
    return note;
  });
}

function unarchiveNote(id) {
  getData = getData.map((note) => {
    if (note.id === id) {
      return { ...note, archived: false };
    }

    return note;
  });
}

export {
  getNotes,
  showFormattedDate,
  deleteNotes,
  addNotes,
  getActiveNotes,
  getArchivedNotes,
  unarchiveNote,
  archiveNote,
  FoundNote,
};
