import SQLiteDatabase from '../lib/database';
import { User } from '../types';

export async function insertUser(user: User, dbPath: string) {
  const db = new SQLiteDatabase(dbPath);
  const query = `INSERT INTO usuario (name, phone, email, emergency_name, emergency_phone) VALUES (${user.name}, ${user.phoneNumber}, ${user.mail}, ${user.emergencyName} ${user.emergencyName} ${user.emergencyPhone})`;

  const insertUser = db.db.run(query, function (err: any) {
    if (err) {
      console.error(err);
      return;
    }
    return 'Nuevo usuario insertado';
  });

  db.closeConnection();
  return insertUser;
}
// ? AGREAGAR
// const usuario = {
//   name: "usuario",
//   phone: "1234567890",
//   mail: "joaquin@gmail.com",
//   emergency_name: "test emergency name",
//   emergency_phone: "1234567890",
// };
// db.run(
//   "INSERT INTO usuario (name, phone, email, emergency_name, emergency_phone) VALUES (?, ?, ?, ?, ?)",
//   [
//     usuario.name,
//     usuario.phone,
//     usuario.mail,
//     usuario.emergency_name,
//     usuario.emergency_phone,
//   ],
//   function (err: any) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("Nuevo usuario insertado");
//   }
// );
