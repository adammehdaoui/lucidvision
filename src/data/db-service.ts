import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({
    name: 'app_db.db',
    location: 'Library',
  });
};

export const createDreams = async (db: SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS "DREAMS" (
    "ID"	INTEGER NOT NULL,
    "TITLE"	TEXT,
    "DATE" DATE DEFAULT CURRENT_DATE,
    "DESC"	TEXT,
    PRIMARY KEY("ID" AUTOINCREMENT)
  );`;

  await db.executeSql(query);
};

export const insertDream = async (
  db: SQLiteDatabase,
  title: string,
  desc: string,
) => {
  const query = `INSERT INTO DREAMS (TITLE, DESC) VALUES ('${title}', '${desc}')`;

  await db.executeSql(query, [title, desc]);
};

export const deleteDream = async (db: SQLiteDatabase, id: number) => {
  const query = `DELETE FROM DREAMS WHERE ID = ${id}`;

  console.log(query);

  await db.executeSql(query, [id]);
};

export const getDreams = async (db: SQLiteDatabase) => {
  const query = 'SELECT * FROM DREAMS';

  const [results] = await db.executeSql(query);

  return results.rows.raw();
};
