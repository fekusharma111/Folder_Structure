import Folder from "./Components/Folder";
import { explorer } from "./Data/Dummydata";

export default function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}
