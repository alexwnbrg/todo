import React, { createContext, useState, useContext, useEffect } from "react";
import { app } from "../config/firebase";

import { UserContext } from "./UserContextProvider";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

export const TodoContext = createContext([]);

const TodoContextProvider = ({ children }) => {
  // initialize firestore and get collection
  const db = getFirestore(app);
  const todoCollection = collection(db, "todos");

  // Todo state
  const [todoData, setTodoData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  // User context for db
  const { getUserID } = useContext(UserContext);
  const userID = getUserID();

  // Fetch Todos and set Todo state
  useEffect(() => {
    if (!userID) {
      setTodoData([]);
      return;
    }
    const todoQuery = query(todoCollection, where("userID", "==", userID));
    const unsubscribe = onSnapshot(
      todoQuery,
      (snap) => {
        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodoData(data);
      },
      (error) => {
        console.error(error);
      }
    );
    return () => unsubscribe();
  }, [userID]);

  // Todo functions
  const handleAddTodo = async (e, todo, dateDue, important, userID) => {
    e.preventDefault();
    setIsModalOpen(false);
    await setDoc(doc(todoCollection), {
      dateDue: dateDue,
      important: important,
      isCompleted: false,
      todoDescription: todo,
      userID: userID,
    });
  };

  const handleDeleteTodo = async (id) => {
    const docRef = doc(todoCollection, id);
    await deleteDoc(docRef);
  };

  const toggleImportant = async (id, currentState) => {
    const docRef = doc(todoCollection, id);
    await updateDoc(docRef, { important: !currentState });
  };

  const toggleComplete = async (id, currentState) => {
    console.log(`completing ${id} with ${currentState}`);
    const docRef = doc(todoCollection, id);
    await updateDoc(docRef, { isCompleted: !currentState });
  };

  const searchTodos = (search) => {
    if (search) {
      setIsSearched(true);
      const filteredData = todoData.filter((todo) =>
        todo.todoDescription.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredList(filteredData);
    } else {
      setIsSearched(false);
      setFilteredList(todoData);
    }
  };

  const getTodoByID = (id) => todoData.find((todo) => todo.id === id);

  return (
    <TodoContext.Provider
      value={{
        todoData,
        isModalOpen,
        isSearched,
        filteredList,
        getTodoByID,
        handleAddTodo,
        handleDeleteTodo,
        setIsModalOpen,
        searchTodos,
        toggleImportant,
        toggleComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
