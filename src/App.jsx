import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import PhotoList from './components/PhotoList/PhotoList';
import Loading from './components/Loading/Loading';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import apiKey from './config/config';

const App = () => {
  // State variables
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("Dogs");
  const [loading, setLoading] = useState(true);

  /**
 * Fetches data from the Flickr API based on the search query.
 *
 * @param {string} searchQuery - The search query to fetch images for.
 * @returns {Function} A cleanup function to cancel the fetch if the component unmounts.
 */
  const fetchData = (searchQuery) => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`
    let activeFetch = true;
    axios.get(url)
      .then(res => {
        if (activeFetch) {
          setImages(res.data.photos.photo);
          setLoading(false);
        }
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
    return () => { activeFetch = false };
  };

  /**
 * useEffect hook to fetch data whenever the query changes.
 *
 * @param {Function} fetchData - The function to fetch data.
 * @param {string} query - The search query to fetch images for.
 */
  useEffect(() => {
    fetchData(query);
  }, [query]);

  /**
 * Updates the query state with the provided search text.
 *
 * @param {string} searchText - The new search text to set as the query.
 */
  const handleQueryChange = searchText => {
    setQuery(searchText);
  }

  /**
 * Component to handle route changes and fetch data based on the query parameter.
 *
 * @returns {JSX.Element} The loading component or the PhotoList component with the fetched data.
 */
  const RouteHandler = () => {
    const { query } = useParams();
    useEffect(() => {
      if (query) {
        handleQueryChange(query);
      }
    }, [query]);
    return loading ? <Loading /> : <PhotoList data={images} title={query} />;
  };

  return (
    <div className="container">
      <div className="main-header">
        <h1 className="main-title">Photo Explorer</h1>
        <Search fetchData={fetchData} />
      </div>
      <Nav />
      <div className="main-content">
        {
          (loading)
            ? <Loading />
            : <Outlet />
        }
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/dogs" />} />
        <Route path="/:query" element={<RouteHandler />} />
        <Route path="/search/:query" element={<RouteHandler />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;