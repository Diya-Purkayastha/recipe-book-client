// src/Pages/Dashboard/Overview.jsx
import { useEffect, useState } from "react";
import Profile from "./Profile";

const Overview = () => {
  const [stats, setStats] = useState({ total: 0, myItems: 0 });

  useEffect(() => {
    fetch("https://recipe-book-server-iota.vercel.app/recipe")
      .then(res => res.json())
      .then(data => {
        const all = data.length;
        const currentUser = JSON.parse(localStorage.getItem("user"))?.email;
        const mine = data.filter(r => r.creatorEmail === currentUser).length;
        setStats({ total: all, myItems: mine });
      });
  }, []);

  return (
    <div className="space-y-6">
        <Profile></Profile>
      <h2 className="text-2xl font-bold">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-primary text-white rounded p-10 shadow">
          <h3 className="text-xl">Total Recipes</h3>
          <p className="text-3xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-secondary text-white rounded p-10 shadow">
          <h3 className="text-xl">My Recipes</h3>
          <p className="text-3xl font-bold">{stats.myItems}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
