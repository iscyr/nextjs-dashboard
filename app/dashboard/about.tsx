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
                      <li><Link href="/home">Home</Link></li>
                      <li className="current"><Link href="/">About</Link></li>
                      <li><Link href="/services">Services</Link></li>
                    </ul>
                  </nav>
                </div>
              </header>
  
  <body>
    <header>
      <div className="container">
        <div id="branding"></div>
          <h1><span className="highlight">Legendary</span> Books</h1>
      </div>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li className="current"><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
        </ul>
      </nav>
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
            <h1 className="page-title">About Us</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus ornare lectus, varius euismod quam pulvinar eget. Nullam rhoncus sit amet magna vitae ullamcorper. Vivamus in mi turpis. Donec volutpat tortor viverra mauris aliquam tincidunt. Donec commodo nunc sit amet ligula volutpat varius. Mauris a mauris in dui auctor tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur quam quam, quis laoreet metus suscipit sit amet. Etiam blandit bibendum quam et aliquet. Nulla ultricies velit eget orci luctus pellentesque. Aliquam sed consectetur nisl, et facilisis tellus. In eu nibh eu magna rhoncus dignissim. Pellentesque mollis congue justo, molestie volutpat lectus aliquet a. Morbi non auctor nulla, nec commodo leo.
            </p>
            <p className="dark">
                Vestibulum sed laoreet ligula, et vehicula ante. Nulla pharetra lobortis dolor ut efficitur. Nulla laoreet eleifend blandit. Cras dictum elit vitae vestibulum consequat. Maecenas elementum, risus non fringilla facilisis, nisl nibh hendrerit augue, id tincidunt nisi mi semper enim. Integer faucibus metus sit amet ligula dapibus pretium. Donec porta leo eu urna congue, in venenatis sem gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse id egestas lorem. Ut fringilla turpis et faucibus pretium. Aliquam lacus ex, molestie sit amet dui ac, molestie pharetra dolor. Vivamus aliquet dapibus tincidunt. 
            </p>
        </article>

        <aside id="sidebar">
            <div className="dark">
            <h3>What We Do</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus ornare lectus, varius euismod quam pulvinar eget. Nullam rhoncus sit amet magna vitae ullamcorper. Vivamus in mi turpis.</p>
        </div>
        </aside>
      </div>
    </section>

    <footer>
        <p>Legendary Books, Copyright &copy; 2024</p>
      </footer>
    </body>
    </div>
  );
};

export default Home;
