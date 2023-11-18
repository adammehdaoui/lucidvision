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

export const initiateDB = async (db: SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS DREAMS (
    ID	INTEGER NOT NULL,
    TITLE	TEXT,
    DATE DATE DEFAULT CURRENT_DATE,
    DESC	TEXT,
    ISNIGHTMARE BOOLEAN DEFAULT 0,
    PRIMARY KEY(ID AUTOINCREMENT)
  );`;

  await db.executeSql(query);
};

export const insertDream = async (
  db: SQLiteDatabase,
  title: string,
  desc: string,
  isNightmare: boolean,
) => {
  const query = `INSERT INTO DREAMS (TITLE, DESC, ISNIGHTMARE) VALUES ('${title}', '${desc}', ${isNightmare})`;
  await db.executeSql(query, [title, desc, isNightmare]);
};

export const deleteDream = async (db: SQLiteDatabase, id: number) => {
  const query = `DELETE FROM DREAMS WHERE ID = ${id}`;
  console.log(query);
  await db.executeSql(query, [id]);
};

export const getDreamByID = async (db: SQLiteDatabase, ID: number) => {
  const query = `SELECT * FROM DREAMS WHERE ID = ${ID}`;
  const [results] = await db.executeSql(query);
  return results.rows.raw();
};

export const getDreams = async (db: SQLiteDatabase, isNightmare: boolean) => {
  const query = `SELECT * FROM DREAMS WHERE ISNIGHTMARE = ${isNightmare}`;
  const [results] = await db.executeSql(query);
  return results.rows.raw();
};
