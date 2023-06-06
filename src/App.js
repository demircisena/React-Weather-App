import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Weather from "./component/weather";
import ApiKeyPage from "./component/ApiKey";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<ApiKeyPage />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;



