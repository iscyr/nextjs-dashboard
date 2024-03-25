import React from 'react';
/* import './index.css'; */
import '../app/ui/global.css';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
    return (
      <div className="container">
              <header>
                <div className="container">
                  <div id="branding">
                    <h1><span className="highlight">Legendary</span> Books</h1>
                  </div>
                  <nav>
                    <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li className="current"><Link href="/services">Services</Link></li>
                    </ul>
                  </nav>
                </div>
              </header>
              <section id="newsletter">
      <div className="container">
        <h1>Subscribe To Our Newsletter</h1>
        <form>
          <input type="email" placeholder="Enter Email..."/>
          <button type="submit" className="button_1">Subscribe</button>
        </form>
      </div>
    </section>

    <section id="main">
      <div className="container">
        <article id="main-col">
            <h1 className="page-title">Services</h1>
            <ul id="services">
                <li>
                    <h3>Website Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus ornare lectus, varius euismod quam pulvinar eget. Nullam rhoncus sit amet magna vitae ullamcorper. Vivamus in mi turpis.</p>
                    <p>Pricing: $1,000 - $3,000</p>
                </li>
                <li>
                    <h3>Website Maintenance</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus ornare lectus, varius euismod quam pulvinar eget. Nullam rhoncus sit amet magna vitae ullamcorper. Vivamus in mi turpis.</p>
                    <p>Pricing: $250 per month</p>
                </li>
                <li>
                    <h3>Website Hosting</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus ornare lectus, varius euismod quam pulvinar eget. Nullam rhoncus sit amet magna vitae ullamcorper. Vivamus in mi turpis.</p>
                    <p>Pricing: $25 per month</p>
                </li>
            </ul>
        </article>

        <aside id="sidebar">
            <div className="dark">
            <h3>Get a quote</h3>
            <form className="quote">
                <div>
                    <label><br>Name</br></label>
                    <input type="text" placeholder="Name"/>
                </div>
                <div>
                    <label><br>Email</br></label>
                    <input type="email" placeholder="Email Address"/>
                </div>
                <div>
                    <label><br>Message</br></label>
                    <textarea placeholder="Message"></textarea>
                </div>
                <button className="button_1" type="submit">Send</button>
            </form>
        </div>
        </aside>
      </div>
    </section>
              <footer>
        <p>Legendary Books, Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};
export default Home;
