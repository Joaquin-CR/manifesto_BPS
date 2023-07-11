import sqlite3 from "sqlite3";
class SQLiteDatabase {
  public db: sqlite3.Database;

  constructor(private dbPath: string) {
    this.db = new sqlite3.Database(dbPath, (err: any) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log("Coneccion establecida");
    });
  }

  public createTable() {
    const sql =
      "CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone TEXT, email TEXT, emergency_name TEXT, emergency_phone TEXT)";
    this.db.run(sql, (err: any) => {
      if (err) {
        console.log(err.message);
      }
      console.log("Tabla creada correctamente");
    });
  }

  public closeConnection() {
    this.db.close((err: any) => {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log("Coneccion cerrada");
    });
  }
}

export default SQLiteDatabase;
