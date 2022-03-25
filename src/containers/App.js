import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

const App = () => {
  const [robots, setRobots] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchField, setSearchField] = useState('');
  const [filteredRobots, setFilteredRobots] = useState(null);

  useEffect(() => {
    if (loading) {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(robots => {
        console.log('Robots fetched!');
        setRobots(robots);
      })
      .catch(error => {
        console.error('Error fetching robots!', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    }
  }, [loading]);

  useEffect(() => {
    if (robots) {
      setFilteredRobots(robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField);
      }));
    }
  }, [robots, searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <ErrorBoundary>
        <Scroll>
          { loading && <h2>Loading...</h2> }
          { (!loading && error) && <h2>Error loading robots!</h2> }
          { (!loading && !error) && <CardList robots={filteredRobots} /> }
        </Scroll>
      </ErrorBoundary>
    </div>
  );
};

export default App;