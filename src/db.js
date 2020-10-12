import SequeLize from "sequelize";

const db = new SequeLize("prafit", "root", "", {
  host: "localhost",
  dialect: "mysql",

});

function auth() {
  db.authenticate()
    .then(() => {
      console.log("DB Connected");
    })
    .catch(e => {
      console.log(e);
      setTimeout(() => {
        auth();
      }, 2000);
    });
}
auth();

export default db;
