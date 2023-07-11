import SQLiteDatabase from '../lib/database';
import { User } from '../types';

export async function getAllUsers(dbPath: string): Promise<User[]> {
  const db = new SQLiteDatabase(dbPath);

  const query = 'SELECT * FROM usuario';

  const useres: User[] = await new Promise(() =>
    db.db.all(query, (err: any, rows: any) => {
      if (err) {
        console.error(err);
        return;
      }
      return rows.map((row: any) => ({
        id: row.id,
        name: row.name,
        phoneNumber: row.phone,
        mail: row.mail,
        emergencyName: row.emergency_name,
        emergencyPhone: row.emergency_phone,
      }));
    })
  );

  db.closeConnection();
  return useres;
}
