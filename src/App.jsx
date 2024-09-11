import MainContent from "./components/layout/MainContent";
import Sidebar from "./components/layout/Sidebar";
import AddTodoModal from "./components/todo/AddTodoModal";
import TodoContextProvider from "./contexts/TodoContextProvider";
import UserContextProvider from "./contexts/UserContextProvider";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./util/PrivateRoutes";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <TodoContextProvider>
          <AddTodoModal />
          <div className="py-10 h-screen w-full bg-PurpleLightShade  flex justify-center items-center font-sans  ">
            <main className="grid grid-cols-[1fr_12fr] h-full w-[1080px]  overflow-hidden rounded-3xl shadow-lg ">
              <Sidebar />
              <Routes>
                <Route path="login" element={<Login />} />
                <Route element={<PrivateRoutes />}>
                  <Route path="/" element={<MainContent />} />
                </Route>
              </Routes>
            </main>
          </div>
        </TodoContextProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
