import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import MoviePage from "./Moviepage/MoviePage";
import NotFound from "./component/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
