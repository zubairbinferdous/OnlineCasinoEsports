import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const ReviewPage = () => {
  return (
    <>
      <Header></Header>

      <div className="container py-5">
        <div className="row mb-4 align-items-center">
          <div className="col-md-8">
            <div className="d-flex align-items-center gap-3">
              <img src="casino1.png" alt="22BET" />
              <div>
                <h4 className="mb-1 fw-bold">
                  22BET Casino{" "}
                  <span className="badge bg-success">Approved</span>
                </h4>
                <div className="text-muted small">
                  #2 of 550 in <a href="#">Online Casino Reviews</a>
                </div>
                <div className="text-warning h5 mb-0">⭐⭐⭐⭐⭐ 9.7</div>
                <div className="mt-1">
                  <a
                    href="#"
                    className="text-success text-decoration-none me-3"
                  >
                    ✔ Instant Play
                  </a>
                  <a href="#" className="text-success text-decoration-none">
                    ✔ Safe & Secured
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <button className="btn btn-warning btn-lg">Play Here</button>
            <div className="text-muted small">
              18+ Only. GambleAware.org, T&C Apply.
            </div>
          </div>
        </div>

        {/* <!-- Top Bonus --> */}
        <div className="card shadow-sm mb-4">
          <div className="card-body d-md-flex justify-content-between align-items-center">
            <div className="mb-3 mb-md-0">
              <div className="text-white bg-success px-3 py-2 rounded mb-2">
                Up to $300
              </div>
              <strong>100% Match Bonus up to $300</strong>
              <br />
              Cashable: Yes • Min. Deposit: $1 • WR: 50x (Bonus + Deposit)
            </div>
            <div>
              <a href="#" className="btn btn-warning">
                Get My Bonus
              </a>
              <div className="text-muted small mt-1">
                18+ Only. GambleAware.org, T&C Apply.
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* <!-- At a glance --> */}
          <div className="col-md-8">
            <h5>At a glance</h5>
            <div className="row mb-3">
              <div className="col-md-4">
                <strong>Licenses</strong>
                <br />
                Cyprus Gaming and Casino Supervision Authority
              </div>
              <div className="col-md-4">
                <strong>Currencies</strong>
                <br />
                USD, CNY, EUR, INR, RUB <a href="#">18 more</a>
              </div>
              <div className="col-md-4">
                <strong>Payment Methods</strong>
                <br />
                <img src="payment1.png" height="24" />{" "}
                <img src="payment2.png" height="24" />{" "}
                <img src="payment3.png" height="24" /> <a href="#">130 more</a>
              </div>
            </div>
            <div className="mb-3">
              <strong>Features</strong>
              <br />
              <span className="badge bg-light text-dark border">3D Games</span>
              <span className="badge bg-light text-dark border">
                Arcade Games
              </span>
              <span className="badge bg-light text-dark border">Auto Play</span>
              <span className="badge bg-light text-dark border">
                Branded Games
              </span>
              <span className="badge bg-light text-dark border">
                Fantasy Games
              </span>
              <span className="badge bg-light text-dark border">
                Free Games
              </span>
              <a href="#">7 more</a>
            </div>
            <div className="d-flex align-items-center">
              <strong className="me-2">Payout Speed</strong>
              <div className="bg-light px-3 py-1 rounded border">
                1 - 2 Days
              </div>
            </div>

            {/* <!-- Popular Games --> */}
            <div className="mt-5">
              <h5 className="d-flex justify-content-between">
                Popular Games{" "}
                <a href="#" className="small">
                  See all
                </a>
              </h5>
              <div className="row row-cols-2 row-cols-md-5 g-3">
                <div className="col">
                  <div className="border rounded p-2 text-center">
                    Blackjack
                  </div>
                </div>
                <div className="col">
                  <div className="border rounded p-2 text-center">Slots</div>
                </div>
                <div className="col">
                  <div className="border rounded p-2 text-center">Roulette</div>
                </div>
                <div className="col">
                  <div className="border rounded p-2 text-center">Baccarat</div>
                </div>
                <div className="col">
                  <div className="border rounded p-2 text-center">Craps</div>
                </div>
                <div className="col">
                  <div className="border rounded p-2 text-center">Poker</div>
                </div>
                <div className="col">
                  <div className="border rounded p-2 text-center">
                    Video Poker
                  </div>
                </div>
                <div className="col">
                  <div className="border rounded p-2 text-center">
                    Live Roulette
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Rating --> */}
          <div className="col-md-4">
            <h5>Rating</h5>
            <div className="d-flex align-items-center mb-2">
              <div className="text-warning h5 mb-0">⭐⭐⭐⭐⭐</div>
              <span className="ms-2">9.7</span>
            </div>
            <div className="small mb-2">👍 896 | 👎 108</div>
            <div className="small mb-2">
              Banking & Payout:{" "}
              <div className="progress">
                <div className="progress-bar bg-success"></div>
              </div>
            </div>
            <div className="small mb-2">
              Promotions:{" "}
              <div className="progress">
                <div className="progress-bar bg-success"></div>
              </div>
            </div>
            <div className="small mb-2">
              Software & Games:{" "}
              <div className="progress">
                <div className="progress-bar bg-success"></div>
              </div>
            </div>
            <div className="small mb-2">
              Security & Fairplay:{" "}
              <div className="progress">
                <div className="progress-bar bg-success"></div>
              </div>
            </div>
            <div className="small mb-2">
              Support:{" "}
              <div className="progress">
                <div className="progress-bar bg-success"></div>
              </div>
            </div>
            <ul className="mt-3 small">
              <li>✔️ Excellent reputation since its establishment</li>
              <li>✔️ Multiplayer games supported</li>
              <li>✔️ Top customer support service</li>
              <li>✔️ Offers Unlimited withdrawal</li>
              <li>✔️ Accepts cryptocurrencies</li>
              <li>✔️ Demo version widely available</li>
            </ul>
          </div>
        </div>
      </div>

      {/* review-data-area  */}

      <div className="container">
    <div className="row">
      <nav className="col-md-2 d-none d-md-block  ">
        <ul className="nav flex-column sidebar bg-light">
          <li className="nav-item "><a className="nav-link  sideBer" href="#">Intro</a></li>
          <li className="nav-item "><a className="nav-link sideBer" href="#">Profile</a></li>
          <li className="nav-item "><a className="nav-link sideBer" href="#">Games</a></li>
          <li className="nav-item "><a className="nav-link sideBer" href="#">Banking</a></li>
          <li className="nav-item "><a className="nav-link sideBer" href="#">Mobile</a></li>
          <li className="nav-item "><a className="nav-link sideBer" href="#">VIP & Bonuses</a></li>
          <li className="nav-item "><a className="nav-link sideBer" href="#">Promotions</a></li>
          <li className="nav-item "><a className="nav-link sideBer" href="#">Online Gambling News</a></li>
          <li className="nav-item "><a className="nav-link sideBer" href="#">Security & Fairplay</a></li>
          <li className="nav-item  "><a className="nav-link sideBer" href="#">Support</a></li>
          <li className="nav-item  "><a className="nav-link sideBer" href="#">FAQ</a></li>
        </ul>
      </nav>
      
      <main className="col-md-7 content py-4">
        <h3>22BET Casino Review</h3>
        <p className="text-muted">Review last updated on <span className="text-success">March 31, 2025</span></p>
        <p>
          22Bet Casino opened shop back in 2007, and since then, the Curaçao licensed gambling operator has expanded worldwide. Today, it is one of the best-known and most respected suppliers of online casino entertainment for players from many countries where gambling is legal. It works with trustworthy providers of casino games and features exclusively reliable payment methods, which are fast and inexpensive. Players qualify for bonuses and are looked after by a friendly customer support team.
        </p>

        <h5 className="mt-4">Pros & Cons</h5>
        <div className="accordion" id="prosConsAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingPros">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePros" aria-expanded="true" aria-controls="collapsePros">
                Pros
              </button>
            </h2>
            <div id="collapsePros" className="accordion-collapse collapse show" aria-labelledby="headingPros" data-bs-parent="#prosConsAccordion">
              <div className="accordion-body">
                <ul className="list-unstyled mb-0">
                  <li>✔ Excellent reputation since its establishment.</li>
                  <li>✔ Top customer support service.</li>
                  <li>✔ Accepts cryptocurrencies.</li>
                  <li>✔ Multiplayer games supported.</li>
                  <li>✔ Offers Unlimited withdrawal.</li>
                  <li>✔ Demo version widely available.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingCons">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCons" aria-expanded="false" aria-controls="collapseCons">
                Cons
              </button>
            </h2>
            <div id="collapseCons" className="accordion-collapse collapse" aria-labelledby="headingCons" data-bs-parent="#prosConsAccordion">
              <div className="accordion-body">
                <ul className="list-unstyled mb-0">
                  {/* <!-- Add cons here if needed --> */}
                </ul>
              </div>
            </div>
          </div>
        </div>





<div className="games-section col-md-12 mt-5">
  <h4>Games</h4>
  <p>
    22Bet Casino games left a powerful impression on me when I landed on the website. Over the years, I was
    pleasantly surprised by the addition of new titles, with a clear emphasis on slots. This is my favorite genre,
    alongside scratch cards, and I assume they have plenty of fans among recreational punters. You don’t need any
    previous experience to be successful with these games, as they rely exclusively on luck. Lottery-inspired titles
    are also available, and you can try them first in demo format to learn the ropes.
  </p>
  <p>
    At the opposite end of the spectrum, I discovered more than a handful of table games, including some
    compatible with real dealers. Different types of roulette, blackjack, baccarat and many other card games can be
    tried on play money. Video pokers are also available to those who prefer games with a high return to players and
    are advantageous to those who use math and strategy. The portfolio of games exceeds 2000 titles, so the risk of
    running out of options is slim to none.
  </p>

  <h5 className="mt-4">Live Games</h5>
  <p>
    Whenever I fancy live dealer entertainment, I know I can find it on the 22Bet Casino platform. There are dozens of
    blackjack and baccarat tables, so at any hour of day or night, you will find at least some tables staffed by dealers
    and populated by your peers. Action from these tables is broadcasted in real-time using WebCams and you can
    see everything that happens before, during, and after the game. Players can ask questions via the live chat
    interface and interact with their peers and dealers. These add a new layer of authenticity and make players feel
    like they are in a land-based casino.
  </p>

  <div className="d-flex flex-wrap gap-3 mt-3">
    <div className="card text-center p-2">Blackjack</div>
    <div className="card text-center p-2">Slots</div>
    <div className="card text-center p-2">Roulette</div>
    <div className="card text-center p-2">Baccarat</div>
    <div className="card text-center p-2">Craps</div>
    <div className="card text-center p-2">Poker</div>
  </div>
</div>

<div className="live-section col-md-12 mt-5">
  <h4>Live Games</h4>
  <div className="row g-3">
    <div className="col">
      <div className="card text-center p-2">Live Roulette</div>
    </div>
    <div className="col">
      <div className="card text-center p-2">Live Blackjack</div>
    </div>
    <div className="col">
      <div className="card text-center p-2">Live Baccarat</div>
    </div>
    <div className="col">
      <div className="card text-center p-2">Live Craps</div>
    </div>
    <div className="col">
      <div className="card text-center p-2">Live Slots</div>
    </div>
    <div className="col">
      <div className="card text-center p-2 bg-light text-muted">Live Poker</div>
    </div>
  </div>

  <div className="text-center mt-3">
    <button className="btn btn-outline-secondary" data-bs-toggle="collapse" data-bs-target="#moreLiveGames">Show More</button>
  </div>

  <div id="moreLiveGames" className="collapse mt-4">
    <div className="alert alert-info text-center">
      <h5>Great Selection of Games</h5>
      <p>Join 22BET Casino and play over 5039 games from 94 different providers.</p>
      <button className="btn btn-warning">Play Here</button>
    </div>
  </div>

  <h5 className="mt-4">Game Providers</h5>
  <div className="d-flex flex-wrap gap-2">
    <span className="badge bg-light text-dark">1Spin4Win</span>
    <span className="badge bg-light text-dark">AE Casino</span>
    <span className="badge bg-light text-dark">AllWaySpin</span>
    <span className="badge bg-light text-dark">Amatic Industries</span>
    <span className="badge bg-light text-dark">Amigo Gaming</span>
    <span className="badge bg-light text-dark">Amusnet Interactive</span>
    <span className="badge bg-light text-dark">Apollo Games</span>
    <span className="badge bg-light text-dark">Area Vegas Games</span>
  </div>
</div>


<div className="feature-section col-md-12">
  <h4>Features</h4>
  <div className="row">
    <div className="col-md-4">
      <p><i className="feature-icon">🎮</i>3D Games</p>
      <p><i className="feature-icon">🎰</i>Branded Games</p>
      <p><i className="feature-icon">💰</i>High Limit Games</p>
      <p><i className="feature-icon">🕹️</i>Mini Games</p>
      <p><i className="feature-icon">⭐</i>Progressive Jackpots</p>
    </div>
    <div className="col-md-4">
      <p><i className="feature-icon">👾</i>Arcade Games</p>
      <p><i className="feature-icon">🧙</i>Fantasy Games</p>
      <p><i className="feature-icon">📜</i>History Log</p>
      <p><i className="feature-icon">🃏</i>Multi-Hand</p>
    </div>
    <div className="col-md-4">
      <p><i className="feature-icon">▶️</i>Auto Play</p>
      <p><i className="feature-icon">🎁</i>Free Games</p>
      <p><i className="feature-icon">💳</i>Low Limit Games</p>
      <p><i className="feature-icon">👥</i>Multiplayer</p>
    </div>
  </div>
</div>







    <div className="container my-5">
    {/* <!-- Banking Section --> */}
    <section>
      <h2>Banking</h2>
      <p>22Bet Casino is one of the most accommodating gambling operators when it comes to payment methods. It has a huge selection of financial instruments that can be used to deposit and cash out winnings quickly and securely. The prospect of loading your account immediately and conducting a withdrawal in a few days is appealing to both casual punters and veterans. They have low minimum deposit and withdrawal limits and in the absence of any fees, players will not see their money diminished by commission.</p>
      <p>Cryptocurrency deposits are accepted, so punters who want to switch to digital money gambling can do it here. Alternatively, conservative punters can stick to the payment methods they use daily, without opening new accounts and setting up wallets. There are many currencies accepted. Therefore you have a good chance to deposit in the national currency and avoid unnecessary exchange fees. New members will have to accept the 24 hours pending period, which is waived for loyal customers.</p>
      <h4>Currencies</h4>
      <div className="row row-cols-4 g-2">
        <div className="col">USD</div><div className="col">CNY</div><div className="col">EUR</div><div className="col">INR</div>
        <div className="col">RUB</div><div className="col">TRY</div><div className="col">BTC</div><div className="col">BCH</div>
        <div className="col">BTG</div><div className="col">BTS</div><div className="col">BCN</div><div className="col">DASH</div>
        <div className="col">DGB</div><div className="col">DOGE</div><div className="col">ETH</div><div className="col">ETC</div>
        <div className="col">GAME</div><div className="col">LTC</div><div className="col">XMR</div><div className="col">XEM</div>
        <div className="col">SIB</div><div className="col">XGOX</div><div className="col">ZEC</div>
      </div>
    </section>

    {/* <!-- Mobile Section --> */}
    <section className="mt-5">
      <h2>Mobile</h2>
      <p>22bet casino is a place where smartphones and tablets use is not only supported but also encouraged. If you own any of these gadgets, you can use them to set up an account, make a deposit and play any of the games available. I conduct most of my gambling sessions exclusively on smartphones and tablets and they work impeccably. They also have a dedicated app you can download if you want to have easy access to the entire portfolio of games. The alternative is to play in the browser, which is a faster solution and one that many players consider to be more convenient.</p>
      <h5>Compatible Operating Systems</h5>
      <p>
        Android OS, Apple iOS, Apple iPadOS, Apple macOS, Microsoft Windows, Microsoft Windows Mobile
      </p>
      <h5>Available Apps</h5>
      <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on Apple Store" width="150"/></a>
      <a href="#"><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Download on Google Play" width="150"/></a>
    </section>

    {/* <!-- VIP & Bonuses Section --> */}
    <section className="mt-5">
      <h2>VIP & Bonuses</h2>
      <p>I love bonuses and 22Bet Casino has more than a handful of such freebies for its players. They tend to add new promotions all the time, so the lineup changes constantly. The good news is that all the campaigns available are displayed on the website, so you can check them out at a glance. Visit the website to get up to speed with the latest bonuses and see which of these offers better meets your expectations. Remember to play by the rules, respect the terms and conditions and meet the wagering requirements. If you do your part, the casino is certain to uphold its end of the deal.</p>
    </section>

    {/* <!-- Withdrawal Details Section --> */}
    <section className="mt-5">
      <h2>Withdrawal Details</h2>
      <table className="table table-bordered">
        <tbody>
          <tr><th>Payout Speed</th><td>1 - 2 Days</td></tr>
          <tr><th>Withdrawal Limit</th><td>Up to $5000 No Limits</td></tr>
          <tr><th>Processing Time</th><td>24 hours</td></tr>
          <tr><th>Ewallets withdrawal time</th><td>1 hour</td></tr>
          <tr><th>Debit/Credit Cards Withdrawal Time</th><td>1 hour</td></tr>
          <tr><th>Bank Transfers Withdrawal Time</th><td>24 hours</td></tr>
          <tr><th>Cheque withdrawal time</th><td>7 days</td></tr>
        </tbody>
      </table>
    </section>
  </div>


  <div className="container my-5">


    <hr className="my-5"/>

    <h2 className="mb-4">Security & Fairplay</h2>
    <p>
      22bet has a long-standing record of treating players with respect and has every reason to maintain the same attitude for many years to come. For the time being, you can trust them because they are licensed in Curaçao and have their games certified by independent auditors. The casino works exclusively with respectable software developers, so you can trust the new releases. The platform is stable and information is encrypted using SSL technology, similar to what financial institutions rely upon.
    </p>
    <div className="mb-4">
      <strong>Certificate of Security:</strong> <span className="text-success">Yes / SSL</span>
    </div>

    <hr className="my-5"/>

    <h2 className="mb-4">Support</h2>
    <p>
      The customer support team is available round-the-clock to assist players who run into trouble. If you find yourself between a rock and a hard place, you should let the team help you via live chat or email. Both channels of communication are open 24/7 and you will be looked after by a professional and friendly expert.
    </p>
    <p><strong>Support methods:</strong> Call Back Service, Email, Live Chat, Phone<br/><span className="text-success">24/7 Support Available</span></p>

    <hr className="my-5"/>

    <h2 className="mb-4">Dispute Resolution Services</h2>
    <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/IBAS_logo.svg/320px-IBAS_logo.svg.png" alt="IBAS Logo" width="100"/> IBAS</p>

    <hr className="my-5"/>

    <h2 className="mb-4">Online Gambling News</h2>
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card news-card">
          <img src="https://via.placeholder.com/400x250" className="card-img-top" alt="VIP Club Showdown"/>
          <div className="card-body">
            <h5 className="card-title">VIP Club Showdown: Comparing Top 5 Casino Loyalty Programs</h5>
            <p className="card-text"><small className="text-muted">February 12, 2025</small></p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card news-card">
          <img src="https://via.placeholder.com/400x250" className="card-img-top" alt="RNG in Gambling"/>
          <div className="card-body">
            <h5 className="card-title">RNG in Gambling: How It Ensures Fair Play and Why It Matters</h5>
            <p className="card-text"><small className="text-muted">February 9, 2025</small></p>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center">
      <button className="btn btn-success">Show More</button>
    </div>

    <hr className="my-5"/>

<h2 className="mb-4">Online Gambling News</h2>
<div className="row">
  <div className="col-md-6 mb-4">
    <div className="card news-card">
      <img src="https://via.placeholder.com/400x250" className="card-img-top" alt="VIP Club Showdown"/>
      <div className="card-body">
        <h5 className="card-title">VIP Club Showdown: Comparing Top 5 Casino Loyalty Programs</h5>
        <p className="card-text"><small className="text-muted">February 12, 2025</small></p>
      </div>
    </div>
  </div>
  <div className="col-md-6 mb-4">
    <div className="card news-card">
      <img src="https://via.placeholder.com/400x250" className="card-img-top" alt="RNG in Gambling"/>
      <div className="card-body">
        <h5 className="card-title">RNG in Gambling: How It Ensures Fair Play and Why It Matters</h5>
        <p className="card-text"><small className="text-muted">February 9, 2025</small></p>
      </div>
    </div>
  </div>
</div>
<div className="text-center">
  <button className="btn btn-success">Show More</button>
</div>


<h2 className="mb-4">FAQ</h2>
    <div className="accordion" id="faqAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
            Is 22Bet Casino license regulated and trustworthy?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show">
          <div className="accordion-body">
            The casino is licensed and regulated in Curaçao, has 15 years of experience, and treats players fairly.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
            Am I subject to fees when depositing and cashing out?
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse">
          <div className="accordion-body">
            {/* <!-- Add corresponding answer here --> */}
          </div>
        </div>
      </div>
      {/* <!-- Add the rest of the FAQ items similarly --> */}
    </div>
  </div>





      </main>

      <aside className="col-md-3">
        <div className="bonus-card">
          <div className="green-box">Up to $300<br/><small>22BET Casino Welcome Bonus</small></div>
          <p><strong>100% Match Bonus up to $300</strong></p>
          <p>WR: 50x (Bonus + Deposit)<br/>Cashable: Yes<br/>Min. Deposit: $1</p>
          <button className="btn btn-warning">Get My Bonus</button>
          <p className="small text-muted mt-2">18+ Only, GambleAware.org, T&C Apply</p>
        </div>

        <div className="bonus-card">
          <div className="green-box">Up to mBTC20<br/><small>22BET Casino Welcome Bonus</small></div>
          <p><strong>100% Match Bonus up to mBTC20</strong></p>
          <p>WR: 50x (Bonus + Deposit)<br/>Cashable: Yes</p>
          <button className="btn btn-warning">Get My Bonus</button>
          <p className="small text-muted mt-2">18+ Only, GambleAware.org, T&C Apply</p>
        </div>
      </aside>
    </div>
  </div>

      <Footer></Footer>
    </>
  );
};

export default ReviewPage;
