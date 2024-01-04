import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";






const Display = (props) => {
  const { param } = useParams();
  const isNumber = !isNaN(param); // => return true if a number

  return (
    <h1>
      {isNumber ? `The Number is : ${param}` : `The World is : ${param}!`}
    </h1>
  );
};


const DisplayColor = (props) => {
  const { param1, param2, param3 } = useParams();

  return (
    <h1 style={{ color: param2, backgroundColor: param3 }}>
      The World is : {param1}
    </h1>
  );
};


const Home = (props) => {
  return <h1>Home Page</h1>;
};


function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/terra"> Terra </Link>
         | 
        <Link to="/5"> 5 </Link>
         | 
        <Link to="/hello/green/burlywood"> hello-green-burlywood </Link>
      </p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:param" element={<Display />} />
        <Route path="/:param1/:param2/:param3" element={<DisplayColor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
