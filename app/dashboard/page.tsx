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
                    <li className="current"><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                  </ul>
                </nav>
              </div>
            </header>

      <section id="showcase">
        <div className="container">
          <h1>Find your favorite comfort books with us!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus et augue vitae iaculis. Suspendisse fringilla ex ut odio ultrices, vel aliquam nulla mollis.</p>
        </div>
      </section>

      <section id="newsletter">
        <div className="container">
          <h1>Subscribe to our Newsletter</h1>
          <form>
            <input type="email" id="email" autoComplete="off" placeholder="Enter your Email..." />
            <button type="submit" className="button_1">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="boxes">
        <div className="container">
                    <div className="box">
                      <Image src="/img/fantasy.png" alt="Fantasy" width={400}
      height={100} />  {/* Added alt text for accessibility */}
                      <h3>Fantasy</h3>
                      <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
                    </div>

          <div className="box">
          <Image src="/img/romance.png" alt="Romance book" width={400}
      height={100} />  {/* Added alt text for accessibility */}
            <h3>Romance</h3>
            <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
          </div>

          <div className="box">
            <Image src="/img/mystery.png" alt="Mystery" width={400}
      height={100} />  {/* Added alt text for accessibility */}
            <h3>Mystery</h3>
            <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Legendary Books, Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Home;