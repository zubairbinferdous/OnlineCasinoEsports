import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer-wrapper">
  <div className="container">
    {/* <!-- Newsletter --> */}
    <div className="newsletter-bar mb-4">
      <div className="row align-items-center">
        <div className="col-md-6 mb-2 mb-md-0">
          <h6 className="mb-0">Subscribe to our Newsletter</h6>
          <small>Get news about exclusive bonuses and promotions.</small>
        </div>
        <div className="col-md-6">
          <input type="email" className="newsletter-input" placeholder="Enter your email address."/>
          <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" value="" id="agreeCheck" />
            <label className="form-check-label" htmlFor="agreeCheck">
              I’m over 18, and I wish to receive the latest updates and promotions.
            </label>
          </div>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>

    {/* <!-- Footer Content --> */}
    <div className="row">
      {/* <!-- Logo & About --> */}
      <div className="col-md-3 mb-4">
        <div className="footer-logo mb-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Online_Casino_Reports_logo.png" alt="OCR Logo"/>
        </div>
        <p>
          OnlineCasinoReports is a leading independent online gambling site reviews provider, delivering trusted
          online casino reviews, news, guides and gambling information since 1997.
        </p>
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" className="app-store-badge" alt="App Store"/>
        <div className="social-icons mt-2"/>
          <img src="https://img.icons8.com/ios-filled/50/rss.png" alt="RSS" />
          <img src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="X Icon"/>
        </div>

              {/* <!-- About Us --> */}
      <div className="col-md-2 mb-4">
        <div className="footer-section-title">ABOUT US</div>
        <a href="#" className="footer-link">Who We Are</a>
        <a href="#" className="footer-link">Contact Us</a>
        <a href="#" className="footer-link">How We Rate</a>
        <a href="#" className="footer-link">Blacklisted Casinos</a>
        <a href="#" className="footer-link">Add Your Brand</a>
        <a href="#" className="footer-link">Apps</a>
      </div>

      {/* <!-- Top 10 --> */}
      <div className="col-md-2 mb-4">
        <div className="footer-section-title">TOP 10</div>
        <a href="#" className="footer-link">Megapari Casino</a>
        <a href="#" className="footer-link">22BET Casino</a>
        <a href="#" className="footer-link">Stake Casino</a>
        <a href="#" className="footer-link">Win.Casino</a>
        <a href="#" className="footer-link">Vulkan Vegas Casino</a>
        <a href="#" className="footer-link">1xBet Casino</a>
        <a href="#" className="footer-link">LuckyHunter Casino</a>
        <a href="#" className="footer-link">Fairspin Casino</a>
        <a href="#" className="footer-link">20BET Casino</a>
        <a href="#" className="footer-link">BetLabel Casino</a>
      </div>

      {/* <!-- Game Guides --> */}
      <div className="col-md-2 mb-4">
        <div className="footer-section-title">GAME GUIDES</div>
        <a href="#" className="footer-link">Online Slots</a>
        <a href="#" className="footer-link">Crash Games</a>
        <a href="#" className="footer-link">Online Blackjack</a>
        <a href="#" className="footer-link">Online Roulette</a>
        <a href="#" className="footer-link">Online Craps</a>
        <a href="#" className="footer-link">Online Baccarat</a>
        <a href="#" className="footer-link">Online Video Poker</a>
        <a href="#" className="footer-link">Gridders Slots</a>
        <a href="#" className="footer-link">Online Poker</a>
        <a href="#" className="footer-link">Live Game Shows</a>
      </div>

      {/* <!-- Popular --> */}
      <div className="col-md-3 mb-4">
        <div className="footer-section-title">POPULAR</div>
        <a href="#" className="footer-link">Top Online Casinos</a>
        <a href="#" className="footer-link">No Deposit Casino Bonuses</a>
        <a href="#" className="footer-link">Real Money Casinos</a>
        <a href="#" className="footer-link">Online Casino Reviews</a>
        <a href="#" className="footer-link">Bitcoin Casinos</a>
        <a href="#" className="footer-link">Live Casinos</a>
        <a href="#" className="footer-link">Bonuses and Promotions</a>
        <a href="#" className="footer-link">Free Casino Games</a>
        <a href="#" className="footer-link">Mobile Casinos</a>
        <a href="#" className="footer-link">New Online Casinos</a>
        <a href="#" className="footer-link">Gambling Guides</a>
        <a href="#" className="footer-link">Live Streams</a>
      </div>
      </div>
    </div>
  </div>
</div>
        
    );
};

export default Footer;