import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import DashboardHead from './components/DashboardHead.jsx';
import AddPotion from './components/AddPotion.jsx';
import CardPotion from './components/PotionCard.jsx';
import PotionFilter from './components/PotionFilter.jsx';
import ResetPotion from './components/resetPotion.jsx';

function App() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <DashboardHead />

        <div className="content-wrapper">
          <aside className="sidebar">
            <AddPotion />
            <PotionFilter
              category={category}
              setCategory={setCategory}
              search={search}
              setSearch={setSearch}
              sort={sort}
              setSort={setSort}
            />
            <ResetPotion />
          </aside>

          <section className="potions-list">
            <CardPotion category={category} search={search} sort={sort} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
