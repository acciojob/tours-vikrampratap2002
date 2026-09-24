import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './../styles/App.css';
import toursData from './toursData';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

    const fetchTours = () => {
    setLoading(true);
    // 0.8 second का delay ताकि Loading state दिखे
    setTimeout(() => {
      setTours(toursData);
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;