import React, { useState, useEffect } from "react";
import styles from "./Notification.module.css";

const initialMockData = [
  { id: 1, message: "Welcome to the dashboard!" },
  { id: 2, message: "Don't forget to check your messages." },
];

const Notification = () => {
  // Notifications state
  const [notifications, setNotifications] = useState([]);
  
  // Form inputs
  const [newMessage, setNewMessage] = useState("");
  const [editId, setEditId] = useState(null);
  const [editMessage, setEditMessage] = useState("");

  // Simulate fetch from backend on mount
  useEffect(() => {
    // Simulated delay
    setTimeout(() => {
      setNotifications(initialMockData);
    }, 300);
  }, []);

  // Add new notification
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

  // Start editing a notification
  const startEdit = (notif) => {
    setEditId(notif.id);
    setEditMessage(notif.message);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditId(null);
    setEditMessage("");
  };

  // Save updated notification
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

  // Delete notification
  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className={styles.notificationWrapper}>
      <h2>Notifications</h2>

      {/* Add Notification Form */}
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

      {/* Notifications List */}
      {notifications.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        <ul className={styles.list}>
          {notifications.map((notif) => (
            <li key={notif.id} className={styles.item}>
              {editId === notif.id ? (
                // Edit Mode
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
                // Display Mode
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

export default Notification;
