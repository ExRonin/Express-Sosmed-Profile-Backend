import {
  ambilDataSiswa,
  cariDataSiswa,
  simpanDataSiswa,
  deleteDataSiswa,
  simpanEditDataSiswa,
  login
} from "./routersiswa";
import db from "./db";

import Express from "express";

export function Route(server) {
  server.get("/data", ambilDataSiswa);
  server.get("/cari/:nomor_induk", cariDataSiswa);
  server.post("/simpan", simpanDataSiswa);
  server.delete("/data/:nomor_induk", deleteDataSiswa);
  server.put("/simpandata/:nomor_induk", simpanEditDataSiswa);

  server.post("/login", (req, res ) => {
    db.query(
      `SELECT* FROM karyawan WHERE id_kode_jabatan ='${req.body.id_kode_jabatan}'`,
      {type:db.QueryTypes.SELECT})
      .then(data=>{
        if(data.length > 0){
          res.json({
            isLogin: true,
            message: "",
            data: data
          })
        }else{
          res.json({
            isLogin: false,
            message: "Login Gagal"
          })
        }
      })
      .catch(error=>{
        console.log(error);
        res.status(500).json(error);
      })
    });
    server.use("/foto", Express.static("./foto"));
}
