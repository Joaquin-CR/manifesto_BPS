import SQLiteDatabase from '../lib/database';
import { User } from '../types';

export async function deleteUser(id: string, dbPath: string) {
  const db = new SQLiteDatabase(dbPath);

  const query = `DELETE FROM usuario WHERE id = ${id}`;

  const deleteUseres: User[] = await new Promise(() =>
    db.db.run(query, (err: any) => {
      if (err) {
        console.error(err.message);
        return 'Error';
      }
      return 'Delete user successfully';
    })
  );

  db.closeConnection();
  return deleteUseres;
}
