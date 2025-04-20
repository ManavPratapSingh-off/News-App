import { lazy, Suspense, useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'

import axios from 'axios'
import NewsProvider, { NewsContext } from './contexts/NewsContext'
import Loader from "./components/Loader";

const Home = lazy(()=> import("./pages/Home"))
const SportsPage = lazy(()=> import("./pages/SportsPage"))
const BusinessPage = lazy(()=> import("./pages/BusinessPage"))


function App() {

  const API_KEY = "f0c2a9af25e9c692a2f70b8b8349491c";

  const query = useContext(NewsContext);

  const [newsArr, setNewsArr] = useState([]);

  const fetchGeneralData = useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/top-headlines?category=General&lang=en&apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => Array.isArray(data.articles)
      ? setNewsArr(data.articles)
      : setNewsArr([]))
      .catch((err) => console.log(`Manav Pratap Singh : ${err}`));
  }, [query]);

  const [sportsArr, setSportsArr] = useState([]);

  const fetchSportsData = useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/top-headlines?category=sports&lang=en&apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => Array.isArray(data.articles)
      ? setSportsArr(data.articles)
      : setSportsArr([]))
      .catch((err) => console.log(`Manav Pratap Singh : ${err}`));
  }, []);

  const [businessArr, setBusinessArr] = useState([]);

  const fetchData = useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/top-headlines?category=business&lang=en&apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>Array.isArray(data.articles)
      ? setBusinessArr(data.articles)
      : setBusinessArr([]))
      .catch((err) => console.log(`Manav Pratap Singh : ${err}`));
  }, []);


  return(
    <>
      <Suspense fallback={<Loader/>}>
        <NewsProvider>
          <BrowserRouter>
            <NavBar/>

            <Routes>
              <Route path='/' element={<Home articles={newsArr}/>}></Route>
              <Route path='/sports' element={<SportsPage articles={sportsArr} />}></Route>
              <Route path='/business' element={<BusinessPage articles={businessArr} />}></Route>
            </Routes>
          </BrowserRouter>
        </NewsProvider>
      </Suspense>    
    </>
  )
}

export default App
