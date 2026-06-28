import { useLocation, useNavigate } from "react-router-dom";
import StatCard from "../Components/StatCard";
import latte from "../assets/latte.jpg";
import cappuccino from "../assets/capuccino.jpg";
import espresso from "../assets/espresso.jpg";
import mocha from "../assets/mocha.jpg";

import { useState } from "react";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "Guest";
  const currentTime = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});

 const activities = [
  {
    id: 1,
    email,
    action: "Logged In",
    time: currentTime,
  },
  {
    id: 2,
    email,
    action: "Ordered Coffee",
    time: currentTime,
  },
];
  const [selectedCoffee, setSelectedCoffee] = useState(null);

const coffees = [
  {
    name: "Latte",
    price: "₹180",
    image: latte,
    description: "Smooth espresso blended with steamed milk."
  },
  {
    name: "Cappuccino",
    price: "₹200",
    image: cappuccino,
    description: "Espresso topped with thick milk foam."
  },
  {
    name: "Espresso",
    price: "₹140",
    image: espresso,
    description: "Strong and rich Italian coffee shot."
  },
  {
    name: "Mocha",
    price: "₹220",
    image: mocha,
    description: "Chocolate flavored espresso with milk."
  }
]

  return (
    <div>

      {/* ---------- Navbar ---------- */}

      <nav className="navbar">
        <h2>Brew Haven ☕</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
  onClick={() => {
    const logoutTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    console.log("Logged Out at:", logoutTime);

    navigate("/");
  }}
>
  Logout
</button>
      </nav>

      {/* ---------- Home ---------- */}

      <section id="home" className="section">

        <h1 className="welcome-title">
          Welcome Back,
        </h1>

        <h2 className="welcome-email">
          {email}
        </h2>

        <p className="tagline">
          Welcome to Brew Haven ☕
          <br />
          Freshly brewed happiness
          <br />
          in every cup.
        </p>

      </section>
        <hr className="section-divider" />


      {/* ---------- Menu ---------- */}

      <section id="menu" className="section">

<h2>Our Coffee Menu</h2>

<div className="menu-grid">

{coffees.map((coffee,index)=>(
<div
key={index}
className="menu-card"
onClick={()=>setSelectedCoffee(coffee)}
>

<img src={coffee.image} alt={coffee.name}/>

<h3>{coffee.name}</h3>

<p>{coffee.price}</p>

</div>
))}

</div>

</section>
            <hr className="section-divider" />


      {/* ---------- About ---------- */}

      <section id="about" className="section">

        <h2>About Brew Haven</h2>

        <p className="about-text">
          Brew Haven is more than just a coffee shop.
          <br /><br />
          We believe every cup tells a story.
          Our carefully selected coffee beans and freshly brewed drinks
          create unforgettable moments for every customer.
          Whether you're studying, working, or spending time with friends,
          Brew Haven offers the perfect atmosphere filled with warmth,
          comfort, and delicious coffee.
        </p>

      </section>
            <hr className="section-divider" />


      {/* ---------- Reviews ---------- */}

      <section id="reviews" className="section">

        <h2>Customer Reviews ⭐</h2>

        <div className="cards">

          <div className="card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>"Best coffee I've ever had!"</p>
            <strong>- Priya</strong>
          </div>

          <div className="card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>"Amazing ambience and delicious desserts."</p>
            <strong>- Rahul</strong>
          </div>

          <div className="card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>"Perfect place for coffee lovers."</p>
            <strong>- Sneha</strong>
          </div>

        </div>

      </section> 
            <hr className="section-divider" />

      {/* ---------- Contact ---------- */}

      <section id="contact" className="section">

        <h2>Contact Us</h2>

        <p>📧 brewhaven@gmail.com</p>

        <p>📞 +91 98765 43210</p>

        <p>📍 FC Road, Pune, Maharashtra</p>

        <p>🕗 Open Daily: 8:00 AM – 10:00 PM</p>

      </section>
            <hr className="section-divider" />


      {/* ---------- Recent Activity ---------- */}

      <section className="section">

        <h2>Recent Activity</h2>

        {activities.map((activity) => (
          <div key={activity.id}>
            <p>
  <strong>{activity.email}</strong> — {activity.action} — {activity.time}
</p>
          </div>
        ))} 
       </section>

      <hr className="section-divider" />

        
      {/* ---------- Statistics ---------- */}

      <div className="cards">

        <StatCard
          title="Coffee Orders"
          value="120"
          subtitle="Today's Orders"
          icon="☕"
        />

        <StatCard
          title="Customers"
          value="85"
          subtitle="Daily Visitors"
          icon="👥"
        />

        <StatCard
          title="Revenue"
          value="₹12,500"
          subtitle="Today's Earnings"
          icon="💰"
        />

      </div>
            <hr className="section-divider" />


      {/* ---------- Footer ---------- */}

      <footer className="footer">

        <h2>Brew Haven ☕</h2>

        <p>Crafted with ❤️ and Coffee</p>

        <p>© 2026 Brew Haven. All Rights Reserved.</p>

      </footer>


    {selectedCoffee && (

<div className="popup-overlay">

<div className="popup">

<img
src={selectedCoffee.image}
alt={selectedCoffee.name}
/>

<h2>{selectedCoffee.name}</h2>

<p>{selectedCoffee.description}</p>

<h3>{selectedCoffee.price}</h3>

<button
onClick={()=>setSelectedCoffee(null)}
>
Close
</button>

</div>

</div>

)}
    </div>
  );
}

export default Dashboard;