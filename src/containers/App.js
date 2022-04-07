import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField, requestRobots } from "../actions";

const App = () => {
  const [filteredRobots, setFilteredRobots] = useState([]);
  const robots = useSelector(state => state.requestRobots.robots);
  const error = useSelector(state => state.requestRobots.error);
  const isPending = useSelector(state => state.requestRobots.isPending);
  const searchField = useSelector(state => state.searchRobots.searchField);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  useEffect(() => {
    if (robots) {
      setFilteredRobots(robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField);
      }));
    }
  }, [searchField, robots]);

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <ErrorBoundary>
        <Scroll>
          { isPending
            ? <h2>Loading...</h2>
            : error
              ? <h2>Error loading robots!</h2>
              : <CardList robots={filteredRobots} />
          }
        </Scroll>
      </ErrorBoundary>
    </div>
  );
};

export default App;