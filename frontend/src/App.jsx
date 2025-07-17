import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from './pages/Home';
import Bio from './pages/Bio';
import Experience from "./pages/Experience";
import Projects from './pages/Projects';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bio" element={<Bio />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;