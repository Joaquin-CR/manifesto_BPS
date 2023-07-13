import SQLiteDatabase from '../lib/database';
import { User } from '../types';

export async function insertUser(user: User, dbPath: string) {
  const db = new SQLiteDatabase(dbPath);
  const query = `UPDATE usuario (name, phone, email, emergency_name, emergency_phone) VALUES (${user.name}, ${user.phoneNumber}, ${user.mail}, ${user.emergencyName} ${user.emergencyName} ${user.emergencyPhone})`;

  const updateUser = db.db.exec(query, function (err: any) {
    if (err) {
      console.error(err);
      return;
    }
    return 'Nuevo usuario insertado';
  });

  db.closeConnection();
  return insertUser;
}
