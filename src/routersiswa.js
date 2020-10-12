import db from './db';


export function ambilDataSiswa(request, response) {
  db.query("SELECT * FROM siswa", { type: db.QueryTypes.SELECT })
    .then(data => {
      response.json(data);
    })
    .catch(error => {
      response.status(500).json(error);
    });
}
export function cariDataSiswa(req, res,) {
  db.query(`SELECT * FROM siswa WHERE nomor_induk LIKE '%${req.params.nomor_induk}%'`)
  .then(data=>{
    res.json(data);

  })
  .catch(err => {
    res.status(500).json(err);
  });
}
export function simpanDataSiswa(req, res) {
  db.query(
    `INSERT INTO siswa (nomor_induk, nama, jenkel, alamat, kelas)
  values
  (
  '${req.body.nomor_induk}',
  '${req.body.nama}',
  '${req.body.jenkel}',
  '${req.body.alamat}',
  '${req.body.kelas}')`
  )
    .then(() => {
      res.status(201).end();
    })
    .catch(e => {
      res.status(500).json(e);
    });

}
export function simpanEditDataSiswa(req, res) {
  db.query(
    `
        UPDATE siswa SET
        nama= '${req.body.nama}',
        jenkel= '${req.body.jenkel}',
        alamat= '${req.body.alamat}',
        kelas= '${req.body.kelas}'
        WHERE nomor_induk= ${req.params.nomor_induk}

        `
  )
    .then(() => {
      res.status(202).end();
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
}
export function deleteDataSiswa(req, res) {
  db.query(
    `DELETE FROM siswa
      where nomor_induk = ${req.params.nomor_induk}`
  )
    .then(() => {
      res.status(202).end();
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
}


