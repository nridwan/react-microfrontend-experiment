import { BrowserRouter } from "react-router-dom";
import {
  LocalStorageListener,
  StorageProvider,
} from "./components/storage/StorageProvider";
import Router from "./router.component";

export default function Root(props) {
  return (
    <StorageProvider storageKey="stor">
      <LocalStorageListener />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StorageProvider>
  );
}
