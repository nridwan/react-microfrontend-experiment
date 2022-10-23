import "./App.css";
import {
  LocalStorageListener,
  StorageProvider,
} from "./components/storage/StorageProvider";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";

function App() {
  return (
    <StorageProvider storageKey="stor">
      <LocalStorageListener />
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </StorageProvider>
  );
}

export default App;
