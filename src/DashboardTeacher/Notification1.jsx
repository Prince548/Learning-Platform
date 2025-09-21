import React, { useState, useEffect } from "react";
import styles from "../Dashboard/Notification.module.css";

const initialMockData = [
  { id: 1, message: "New course module added to HTML & CSS!" },
  { id: 2, message: "Reminder: Grade student assignments by Friday." },
];

const Notification1 = () => {
  const [notifications, setNotifications] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [editId, setEditId] = useState(null);
  const [editMessage, setEditMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setNotifications(initialMockData);
    }, 300);
  }, []);

  const addNotification = (e) => {
    e.preventDefault();
    const trimmed = newMessage.trim();
    if (!trimmed) return;

    const newNotif = {
      id: Date.now(),
      message: trimmed,
    };

    setNotifications((prev) => [newNotif, ...prev]);
    setNewMessage("");
  };

  const startEdit = (notif) => {
    setEditId(notif.id);
    setEditMessage(notif.message);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditMessage("");
  };

  const saveEdit = (e) => {
    e.preventDefault();
    const trimmed = editMessage.trim();
    if (!trimmed) return;

    setNotifications((prev) =>
      prev.map((n) => (n.id === editId ? { ...n, message: trimmed } : n))
    );
    setEditId(null);
    setEditMessage("");
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className={styles.notificationWrapper}>
      <h2>Notifications</h2>
      <form onSubmit={addNotification} className={styles.form}>
        <input
          type="text"
          placeholder="Add notification message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>
          Add
        </button>
      </form>
      {notifications.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        <ul className={styles.list}>
          {notifications.map((notif) => (
            <li key={notif.id} className={styles.item}>
              {editId === notif.id ? (
                <form onSubmit={saveEdit} className={styles.editForm}>
                  <input
                    type="text"
                    value={editMessage}
                    onChange={(e) => setEditMessage(e.target.value)}
                    className={styles.input}
                    autoFocus
                  />
                  <button type="submit" className={styles.saveButton}>
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className={styles.cancelButton}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <span>{notif.message}</span>
                  <button
                    className={styles.editButton}
                    onClick={() => startEdit(notif)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteNotification(notif.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification1;