import * as SQLite from 'expo-sqlite/legacy';
const db = SQLite.openDatabase(
    { name: 'database.db', location: 'default' },
    () => console.log('Database connected'),
    (error) => console.error('Error connecting to database', error)
  );
  export const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS notes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          content TEXT
        );`
      );
    });
  };
  export const getNotes = (callback) => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM notes;', [], (tx, results) => {
        const rows = results.rows;
        let notes = [];
        for (let i = 0; i < rows.length; i++) {
          notes.push(rows.item(i));
        }
        callback(notes);
      });
    });
  };
  export const addNote = (title, content, callback) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO notes (title, content) VALUES (?, ?);',
        [title, content],
        () => callback(),
        (error) => console.error(error)
      );
    });
  };

  export const updateNote = (id, title, content, callback) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE notes SET title = ?, content = ? WHERE id = ?;',
        [title, content, id],
        () => callback(),
        (t, error) => console.log('Error updating note', error)
      );
    });
  };
  export const deleteNote = (id, callback) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM notes WHERE id = ?;',
        [id],
        () => callback(),
        (t, error) => console.log('Error deleting note', error)
      );
    });
  };



