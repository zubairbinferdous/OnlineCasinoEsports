import "./App.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
function App() {
  return (
    <>
      <div>
        <Header></Header>

        {/* title  */}
        <div className="container py-1">
          <div className="row align-items-center">
            <div className="col-md-8 data-title">
              <h2 className="fw-bold">
                Discover the Top Online Casinos: <br />A Comprehensive Online
                Gambling Guide for 2025
              </h2>
              <p>
                OnlineCasinoReports.com serves as a global guide to assist
                players in finding the premier online casinos and gambling
                platforms worldwide. Utilizing a meticulous in-house review
                process and players' feedback, our seasoned experts evaluate and
                rank various online casinos, poker rooms, bingo venues, Esports,
                and sports betting sites. Our assessments encompass all aspects
                of the gaming experience, from game selection and unique
                features to banking options and customer support.
              </p>
            </div>

            <div className="col-md-4">
              <div className="safe-box text-center title-side">
                <div className="safe-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div className="safe-text-1 mt-2 title-side2">
                  100% Safe & Secure
                </div>
                <div className="safe-text-2 title-side">
                  Regulated & Licensed Casinos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* casino - area  */}

        <div className="container py-4">
          <div className="row">
            <div className="col-lg-9">
              {/* top 3 casino  */}
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                      <div className="mb-2">
                        <span className="badge bg-success badge-custom">
                          Approved
                        </span>
                        <span className="badge bg-secondary badge-custom">
                          2
                        </span>
                      </div>
                      <img
                        src="casino1.png"
                        alt="22BET"
                        className="img-fluid mb-3"
                      />
                      <h5 className="fw-bold">22BET Casino</h5>
                      <div className="mb-2">⭐⭐⭐⭐⭐ 9.7</div>
                      <p className="text-success fw-semibold">
                        100% Match Bonus up to $300
                      </p>
                      <p className="text-muted small">
                        18+ Only. GambleAware.org, T&C Apply.
                      </p>
                      <a href="#" className="btn btn-warning w-100 mb-2">
                        Play Here
                      </a>
                      <div className="text-start small">
                        <div>
                          <strong>Payout Speed:</strong> 1 - 2 Days
                        </div>
                        <ul className="mt-2">
                          <li>✔️ Excellent reputation</li>
                          <li>✔️ Multiplayer games</li>
                          <li>✔️ Top customer support</li>
                          <li>✔️ Unlimited withdrawals</li>
                          <li>✔️ Crypto accepted</li>
                        </ul>
                        <div className="fw-bold small">Payment Methods:</div>
                        <div className="payment-icons">
                          <img src="visa.png" /> <img src="paypal.png" />{" "}
                          <img src="bitcoin.png" />
                        </div>
                        <div className="mt-2">
                          <a href="#" className="me-2">
                            Compare
                          </a>{" "}
                          | <a href="#">Review</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                      <div className="mb-2">
                        <span className="badge bg-warning badge-custom">
                          Top Pick
                        </span>
                        <span className="badge bg-success badge-custom">
                          Approved
                        </span>
                        <span className="badge bg-secondary badge-custom">
                          Favorite
                        </span>
                      </div>
                      <img
                        src="megapari.png"
                        alt="Megapari"
                        className="img-fluid mb-3"
                      />
                      <h5 className="fw-bold">Megapari Casino</h5>
                      <div className="mb-2">⭐⭐⭐⭐⭐ 9.8</div>
                      <div className="bonus-box">
                        <p className="text-success fw-semibold mb-1">
                          Exclusive
                        </p>
                        <p className="mb-1">
                          Up to $1950 + 150 Free Spins on your first 4 deposits
                        </p>
                        <div className="text-muted small">HRBONUS1</div>
                      </div>
                      <p className="text-muted small">
                        18+ Only. GambleAware.org, T&C Apply.
                      </p>
                      <a href="#" className="btn btn-warning w-100 mb-2">
                        Play Here
                      </a>
                      <div className="text-start small">
                        <div>
                          <strong>Win Rate:</strong> 98.7%
                        </div>
                        <div>
                          <strong>Payout Speed:</strong> 1 hour
                        </div>
                        <ul className="mt-2">
                          <li>✔️ Award-winning casino</li>
                          <li>✔️ Huge jackpots</li>
                          <li>✔️ 24/7 support</li>
                          <li>✔️ Fast withdrawals</li>
                          <li>✔️ Accepts Bitcoin</li>
                        </ul>
                        <div className="fw-bold small">Payment Methods:</div>
                        <div className="payment-icons">
                          <img src="astro.png" /> <img src="safra.png" />{" "}
                          <img src="crypto.png" />
                        </div>
                        <div className="mt-2">
                          <a href="#" className="me-2">
                            Compare
                          </a>{" "}
                          | <a href="#">Review</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                      <div className="mb-2">
                        <span className="badge bg-success badge-custom">
                          Approved
                        </span>
                        <span className="badge bg-secondary badge-custom">
                          Favorite
                        </span>
                        <span className="badge bg-danger badge-custom">
                          Hot
                        </span>
                      </div>
                      <img
                        src="stake.png"
                        alt="Stake"
                        className="img-fluid mb-3"
                      />
                      <h5 className="fw-bold">Stake Casino</h5>
                      <div className="mb-2">⭐⭐⭐⭐⭐ 9.7</div>
                      <p className="text-success fw-semibold">
                        200% Match Bonus up to $2000
                      </p>
                      <p className="text-muted small">
                        18+ Only. GambleAware.org, T&C Apply.
                      </p>
                      <a href="#" className="btn btn-warning w-100 mb-2">
                        Play Here
                      </a>
                      <div className="text-start small">
                        <div>
                          <strong>Win Rate:</strong> 97%
                        </div>
                        <div>
                          <strong>Payout Speed:</strong> 2 - 3 Days
                        </div>
                        <ul className="mt-2">
                          <li>✔️ Reputable setup</li>
                          <li>✔️ Exclusive blackjack</li>
                          <li>✔️ Helpful support</li>
                          <li>✔️ Multi-currency</li>
                          <li>✔️ Crypto supported</li>
                        </ul>
                        <div className="fw-bold small">Payment Methods:</div>
                        <div className="payment-icons">
                          <img src="applepay.png" /> <img src="wallet.png" />
                        </div>
                        <div className="mt-2">
                          <a href="#" className="me-2">
                            Compare
                          </a>{" "}
                          | <a href="#">Review</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* all other casino  */}

              <div className="casino-card">
                <div className="d-flex align-items-start gap-3">
                  <div>
                    <div className="mb-2">
                      <span className="badge bg-success badge-custom">
                        Approved
                      </span>
                      <span className="badge bg-danger badge-custom">Hot</span>
                      <span className="badge bg-secondary badge-custom">
                        New
                      </span>
                    </div>
                    <img
                      src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                      className="casino-logo"
                      alt="Casino Logo"
                    />
                    <h5 className="m-0 fw-bold">Win.Casino</h5>
                    <div className="rating mb-2">
                      ⭐️⭐️⭐️⭐️⭐️{" "}
                      <small className="text-muted">(9.7)</small>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <strong className="me-2">Win Rate</strong>{" "}
                      <span className="text-success">97%</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <strong className="me-2">Payout Speed</strong>{" "}
                      <span>⚡ Instant</span>
                    </div>
                    <div className="payment-methods d-flex align-items-center">
                      <strong className="me-2">Payment Methods</strong>
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Crypto"
                        alt="Crypto Wallet"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=GCash"
                        alt="GCash"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Mastercard"
                        alt="Mastercard"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Neteller"
                        alt="Neteller"
                      />
                      <small className="ms-2 text-primary">11 more</small>
                    </div>
                  </div>
                </div>

                <div className="text-end">
                  <p className="mb-2 text-success fw-bold">
                    Up to $420000 + 200 Free Spins on your first 4 deposits
                  </p>
                  <p className="text-small">
                    18+ Only, GambleAware.org, T&C Apply
                  </p>
                  <a href="#" className="btn btn-yellow mb-2">
                    Play Here
                  </a>
                  <div className="text-small">
                    <a href="#" className="me-2">
                      Compare
                    </a>{" "}
                    |<a href="#">Review</a>
                  </div>
                </div>
              </div>

              <div className="casino-card">
                <div className="d-flex align-items-start gap-3">
                  <div>
                    <div className="mb-2">
                      <span className="badge bg-success badge-custom">
                        Approved
                      </span>
                      <span className="badge bg-danger badge-custom">Hot</span>
                      <span className="badge bg-secondary badge-custom">
                        New
                      </span>
                    </div>
                    <img
                      src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                      className="casino-logo"
                      alt="Casino Logo"
                    />
                    <h5 className="m-0 fw-bold">Win.Casino</h5>
                    <div className="rating mb-2">
                      ⭐️⭐️⭐️⭐️⭐️{" "}
                      <small className="text-muted">(9.7)</small>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <strong className="me-2">Win Rate</strong>{" "}
                      <span className="text-success">97%</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <strong className="me-2">Payout Speed</strong>{" "}
                      <span>⚡ Instant</span>
                    </div>
                    <div className="payment-methods d-flex align-items-center">
                      <strong className="me-2">Payment Methods</strong>
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Crypto"
                        alt="Crypto Wallet"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=GCash"
                        alt="GCash"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Mastercard"
                        alt="Mastercard"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Neteller"
                        alt="Neteller"
                      />
                      <small className="ms-2 text-primary">11 more</small>
                    </div>
                  </div>
                </div>

                <div className="text-end">
                  <p className="mb-2 text-success fw-bold">
                    Up to $420000 + 200 Free Spins on your first 4 deposits
                  </p>
                  <p className="text-small">
                    18+ Only, GambleAware.org, T&C Apply
                  </p>
                  <a href="#" className="btn btn-yellow mb-2">
                    Play Here
                  </a>
                  <div className="text-small">
                    <a href="#" className="me-2">
                      Compare
                    </a>{" "}
                    |<a href="#">Review</a>
                  </div>
                </div>
              </div>

              <div className="casino-card">
                <div className="d-flex align-items-start gap-3">
                  <div>
                    <div className="mb-2">
                      <span className="badge bg-success badge-custom">
                        Approved
                      </span>
                      <span className="badge bg-danger badge-custom">Hot</span>
                      <span className="badge bg-secondary badge-custom">
                        New
                      </span>
                    </div>
                    <img
                      src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                      className="casino-logo"
                      alt="Casino Logo"
                    />
                    <h5 className="m-0 fw-bold">Win.Casino</h5>
                    <div className="rating mb-2">
                      ⭐️⭐️⭐️⭐️⭐️{" "}
                      <small className="text-muted">(9.7)</small>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <strong className="me-2">Win Rate</strong>{" "}
                      <span className="text-success">97%</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <strong className="me-2">Payout Speed</strong>{" "}
                      <span>⚡ Instant</span>
                    </div>
                    <div className="payment-methods d-flex align-items-center">
                      <strong className="me-2">Payment Methods</strong>
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Crypto"
                        alt="Crypto Wallet"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=GCash"
                        alt="GCash"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Mastercard"
                        alt="Mastercard"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Neteller"
                        alt="Neteller"
                      />
                      <small className="ms-2 text-primary">11 more</small>
                    </div>
                  </div>
                </div>

                <div className="text-end">
                  <p className="mb-2 text-success fw-bold">
                    Up to $420000 + 200 Free Spins on your first 4 deposits
                  </p>
                  <p className="text-small">
                    18+ Only, GambleAware.org, T&C Apply
                  </p>
                  <a href="#" className="btn btn-yellow mb-2">
                    Play Here
                  </a>
                  <div className="text-small">
                    <a href="#" className="me-2">
                      Compare
                    </a>{" "}
                    |<a href="#">Review</a>
                  </div>
                </div>
              </div>

              <div className="casino-card">
                <div className="d-flex align-items-start gap-3">
                  <div>
                    <div className="mb-2">
                      <span className="badge bg-success badge-custom">
                        Approved
                      </span>
                      <span className="badge bg-danger badge-custom">Hot</span>
                      <span className="badge bg-secondary badge-custom">
                        New
                      </span>
                    </div>
                    <img
                      src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                      className="casino-logo"
                      alt="Casino Logo"
                    />
                    <h5 className="m-0 fw-bold">Win.Casino</h5>
                    <div className="rating mb-2">
                      ⭐️⭐️⭐️⭐️⭐️{" "}
                      <small className="text-muted">(9.7)</small>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <strong className="me-2">Win Rate</strong>{" "}
                      <span className="text-success">97%</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <strong className="me-2">Payout Speed</strong>{" "}
                      <span>⚡ Instant</span>
                    </div>
                    <div className="payment-methods d-flex align-items-center">
                      <strong className="me-2">Payment Methods</strong>
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Crypto"
                        alt="Crypto Wallet"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=GCash"
                        alt="GCash"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Mastercard"
                        alt="Mastercard"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Neteller"
                        alt="Neteller"
                      />
                      <small className="ms-2 text-primary">11 more</small>
                    </div>
                  </div>
                </div>

                <div className="text-end">
                  <p className="mb-2 text-success fw-bold">
                    Up to $420000 + 200 Free Spins on your first 4 deposits
                  </p>
                  <p className="text-small">
                    18+ Only, GambleAware.org, T&C Apply
                  </p>
                  <a href="#" className="btn btn-yellow mb-2">
                    Play Here
                  </a>
                  <div className="text-small">
                    <a href="#" className="me-2">
                      Compare
                    </a>{" "}
                    |<a href="#">Review</a>
                  </div>
                </div>
              </div>

              <div className="casino-card">
                <div className="d-flex align-items-start gap-3">
                  <div>
                    <div className="mb-2">
                      <span className="badge bg-success badge-custom">
                        Approved
                      </span>
                      <span className="badge bg-danger badge-custom">Hot</span>
                      <span className="badge bg-secondary badge-custom">
                        New
                      </span>
                    </div>
                    <img
                      src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                      className="casino-logo"
                      alt="Casino Logo"
                    />
                    <h5 className="m-0 fw-bold">Win.Casino</h5>
                    <div className="rating mb-2">
                      ⭐️⭐️⭐️⭐️⭐️{" "}
                      <small className="text-muted">(9.7)</small>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <strong className="me-2">Win Rate</strong>{" "}
                      <span className="text-success">97%</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <strong className="me-2">Payout Speed</strong>{" "}
                      <span>⚡ Instant</span>
                    </div>
                    <div className="payment-methods d-flex align-items-center">
                      <strong className="me-2">Payment Methods</strong>
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Crypto"
                        alt="Crypto Wallet"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=GCash"
                        alt="GCash"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Mastercard"
                        alt="Mastercard"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Neteller"
                        alt="Neteller"
                      />
                      <small className="ms-2 text-primary">11 more</small>
                    </div>
                  </div>
                </div>

                <div className="text-end">
                  <p className="mb-2 text-success fw-bold">
                    Up to $420000 + 200 Free Spins on your first 4 deposits
                  </p>
                  <p className="text-small">
                    18+ Only, GambleAware.org, T&C Apply
                  </p>
                  <a href="#" className="btn btn-yellow mb-2">
                    Play Here
                  </a>
                  <div className="text-small">
                    <a href="#" className="me-2">
                      Compare
                    </a>{" "}
                    |<a href="#">Review</a>
                  </div>
                </div>
              </div>

              <div className="casino-card">
                <div className="d-flex align-items-start gap-3">
                  <div>
                    <div className="mb-2">
                      <span className="badge bg-success badge-custom">
                        Approved
                      </span>
                      <span className="badge bg-danger badge-custom">Hot</span>
                      <span className="badge bg-secondary badge-custom">
                        New
                      </span>
                    </div>
                    <img
                      src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                      className="casino-logo"
                      alt="Casino Logo"
                    />
                    <h5 className="m-0 fw-bold">Win.Casino</h5>
                    <div className="rating mb-2">
                      ⭐️⭐️⭐️⭐️⭐️{" "}
                      <small className="text-muted">(9.7)</small>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <strong className="me-2">Win Rate</strong>{" "}
                      <span className="text-success">97%</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <strong className="me-2">Payout Speed</strong>{" "}
                      <span>⚡ Instant</span>
                    </div>
                    <div className="payment-methods d-flex align-items-center">
                      <strong className="me-2">Payment Methods</strong>
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Crypto"
                        alt="Crypto Wallet"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=GCash"
                        alt="GCash"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Mastercard"
                        alt="Mastercard"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Neteller"
                        alt="Neteller"
                      />
                      <small className="ms-2 text-primary">11 more</small>
                    </div>
                  </div>
                </div>

                <div className="text-end">
                  <p className="mb-2 text-success fw-bold">
                    Up to $420000 + 200 Free Spins on your first 4 deposits
                  </p>
                  <p className="text-small">
                    18+ Only, GambleAware.org, T&C Apply
                  </p>
                  <a href="#" className="btn btn-yellow mb-2">
                    Play Here
                  </a>
                  <div className="text-small">
                    <a href="#" className="me-2">
                      Compare
                    </a>{" "}
                    |<a href="#">Review</a>
                  </div>
                </div>
              </div>

              <div className="casino-card">
                <div className="d-flex align-items-start gap-3">
                  <div>
                    <div className="mb-2">
                      <span className="badge bg-success badge-custom">
                        Approved
                      </span>
                      <span className="badge bg-danger badge-custom">Hot</span>
                      <span className="badge bg-secondary badge-custom">
                        New
                      </span>
                    </div>
                    <img
                      src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                      className="casino-logo"
                      alt="Casino Logo"
                    />
                    <h5 className="m-0 fw-bold">Win.Casino</h5>
                    <div className="rating mb-2">
                      ⭐️⭐️⭐️⭐️⭐️{" "}
                      <small className="text-muted">(9.7)</small>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <strong className="me-2">Win Rate</strong>{" "}
                      <span className="text-success">97%</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <strong className="me-2">Payout Speed</strong>{" "}
                      <span>⚡ Instant</span>
                    </div>
                    <div className="payment-methods d-flex align-items-center">
                      <strong className="me-2">Payment Methods</strong>
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Crypto"
                        alt="Crypto Wallet"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=GCash"
                        alt="GCash"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Mastercard"
                        alt="Mastercard"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Neteller"
                        alt="Neteller"
                      />
                      <small className="ms-2 text-primary">11 more</small>
                    </div>
                  </div>
                </div>

                <div className="text-end">
                  <p className="mb-2 text-success fw-bold">
                    Up to $420000 + 200 Free Spins on your first 4 deposits
                  </p>
                  <p className="text-small">
                    18+ Only, GambleAware.org, T&C Apply
                  </p>
                  <a href="#" className="btn btn-yellow mb-2">
                    Play Here
                  </a>
                  <div className="text-small">
                    <a href="#" className="me-2">
                      Compare
                    </a>{" "}
                    |<a href="#">Review</a>
                  </div>
                </div>
              </div>

              <div className="casino-card">
                <div className="d-flex align-items-start gap-3">
                  <div>
                    <div className="mb-2">
                      <span className="badge bg-success badge-custom">
                        Approved
                      </span>
                      <span className="badge bg-danger badge-custom">Hot</span>
                      <span className="badge bg-secondary badge-custom">
                        New
                      </span>
                    </div>
                    <img
                      src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                      className="casino-logo"
                      alt="Casino Logo"
                    />
                    <h5 className="m-0 fw-bold">Win.Casino</h5>
                    <div className="rating mb-2">
                      ⭐️⭐️⭐️⭐️⭐️{" "}
                      <small className="text-muted">(9.7)</small>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <strong className="me-2">Win Rate</strong>{" "}
                      <span className="text-success">97%</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <strong className="me-2">Payout Speed</strong>{" "}
                      <span>⚡ Instant</span>
                    </div>
                    <div className="payment-methods d-flex align-items-center">
                      <strong className="me-2">Payment Methods</strong>
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Crypto"
                        alt="Crypto Wallet"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=GCash"
                        alt="GCash"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Mastercard"
                        alt="Mastercard"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Neteller"
                        alt="Neteller"
                      />
                      <small className="ms-2 text-primary">11 more</small>
                    </div>
                  </div>
                </div>

                <div className="text-end">
                  <p className="mb-2 text-success fw-bold">
                    Up to $420000 + 200 Free Spins on your first 4 deposits
                  </p>
                  <p className="text-small">
                    18+ Only, GambleAware.org, T&C Apply
                  </p>
                  <a href="#" className="btn btn-yellow mb-2">
                    Play Here
                  </a>
                  <div className="text-small">
                    <a href="#" className="me-2">
                      Compare
                    </a>{" "}
                    |<a href="#">Review</a>
                  </div>
                </div>
              </div>

              <div className="casino-card">
                <div className="d-flex align-items-start gap-3">
                  <div>
                    <div className="mb-2">
                      <span className="badge bg-success badge-custom">
                        Approved
                      </span>
                      <span className="badge bg-danger badge-custom">Hot</span>
                      <span className="badge bg-secondary badge-custom">
                        New
                      </span>
                    </div>
                    <img
                      src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                      className="casino-logo"
                      alt="Casino Logo"
                    />
                    <h5 className="m-0 fw-bold">Win.Casino</h5>
                    <div className="rating mb-2">
                      ⭐️⭐️⭐️⭐️⭐️{" "}
                      <small className="text-muted">(9.7)</small>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <strong className="me-2">Win Rate</strong>{" "}
                      <span className="text-success">97%</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <strong className="me-2">Payout Speed</strong>{" "}
                      <span>⚡ Instant</span>
                    </div>
                    <div className="payment-methods d-flex align-items-center">
                      <strong className="me-2">Payment Methods</strong>
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Crypto"
                        alt="Crypto Wallet"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=GCash"
                        alt="GCash"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Mastercard"
                        alt="Mastercard"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Neteller"
                        alt="Neteller"
                      />
                      <small className="ms-2 text-primary">11 more</small>
                    </div>
                  </div>
                </div>

                <div className="text-end">
                  <p className="mb-2 text-success fw-bold">
                    Up to $420000 + 200 Free Spins on your first 4 deposits
                  </p>
                  <p className="text-small">
                    18+ Only, GambleAware.org, T&C Apply
                  </p>
                  <a href="#" className="btn btn-yellow mb-2">
                    Play Here
                  </a>
                  <div className="text-small">
                    <a href="#" className="me-2">
                      Compare
                    </a>{" "}
                    |<a href="#">Review</a>
                  </div>
                </div>
              </div>

              <div className="casino-card">
                <div className="d-flex align-items-start gap-3">
                  <div>
                    <div className="mb-2">
                      <span className="badge bg-success badge-custom">
                        Approved
                      </span>
                      <span className="badge bg-danger badge-custom">Hot</span>
                      <span className="badge bg-secondary badge-custom">
                        New
                      </span>
                    </div>
                    <img
                      src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                      className="casino-logo"
                      alt="Casino Logo"
                    />
                    <h5 className="m-0 fw-bold">Win.Casino</h5>
                    <div className="rating mb-2">
                      ⭐️⭐️⭐️⭐️⭐️{" "}
                      <small className="text-muted">(9.7)</small>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <strong className="me-2">Win Rate</strong>{" "}
                      <span className="text-success">97%</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <strong className="me-2">Payout Speed</strong>{" "}
                      <span>⚡ Instant</span>
                    </div>
                    <div className="payment-methods d-flex align-items-center">
                      <strong className="me-2">Payment Methods</strong>
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Crypto"
                        alt="Crypto Wallet"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=GCash"
                        alt="GCash"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Mastercard"
                        alt="Mastercard"
                      />
                      <img
                        src="https://via.placeholder.com/40x25.png?text=Neteller"
                        alt="Neteller"
                      />
                      <small className="ms-2 text-primary">11 more</small>
                    </div>
                  </div>
                </div>

                <div className="text-end">
                  <p className="mb-2 text-success fw-bold">
                    Up to $420000 + 200 Free Spins on your first 4 deposits
                  </p>
                  <p className="text-small">
                    18+ Only, GambleAware.org, T&C Apply
                  </p>
                  <a href="#" className="btn btn-yellow mb-2">
                    Play Here
                  </a>
                  <div className="text-small">
                    <a href="#" className="me-2">
                      Compare
                    </a>{" "}
                    |<a href="#">Review</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="bg-light p-3 rounded shadow-sm">
                <h6 className="fw-bold">
                  Your Definitive Guide to Online Casino Gambling
                </h6>
                <p className="mb-2 small">
                  Welcome to OnlineCasinoReports International.
                </p>
                <p className="mb-2 small">
                  <strong>Independent provider of casino reviews</strong>
                  <br />
                  <a href="#">OnlineCasinoReports.com</a>
                </p>
                <hr />
                <h6>In-Depth Casino Reviews</h6> 
<p>
Our experts meticulously review and rank online casinos through a comprehensive inspection process. From game selections to customer service, we guide you towards the best casinos in the industry. 
</p>

<h6>Exclusive Bonuses and Promotions</h6> 
<p>
Our experts meticulously review and rank online casinos through a comprehensive inspection process. From game selections to customer service, we guide you towards the best casinos in the industry. 
</p>

<h6>Casino Comparison Tool</h6> 
<p>
Utilize our innovative casino comparison tool to compare hundreds of casinos effortlessly and find the one that best suits your preferences. 
</p>

<h6>Free Casino Games Library</h6> 
<p>
Indulge in an extensive array of thrilling online casino games, allowing for practice, fun, and risk-free enjoyment. 

</p>
<h6>Tracked Progressive Jackpots</h6> 
<p>
Stay informed with our tracking of the largest progressive jackpots online, complete with hit history and insightful statistics to guide your selection. 
</p>

<h6>Latest News & Industry Insights</h6> 
<p>
Stay informed with our tracking of the largest progressive jackpots online, complete with hit history and insightful statistics to guide your selection. 
</p>
<h6>Comprehensive Gambling Directory</h6> 
<p>
Navigate our extensive reviews to find exactly what you need in the world of online gambling. Whether you're looking for insights on payment methods, software providers, casino games providers, licensing authorities, currencies accepted, or even language options, our complete directory is your one-stop resource. 

</p>
<h6>Educational Gambling & Game Guides</h6> 
<p>
Enhance your gaming prowess with our informative how-to & strategy guides, tailored to help you master various casino games. 
</p>

<h6>Exploration of Online Gambling Verticals</h6> 
<p>
Uncover new gambling opportunities with our dedicated review sections for Sportsbooks, Esportsbooks, Poker Rooms, Bingo Sites, and Online Lotteries. 
</p>

<h6>OCR-Approved Casinos</h6> 
<p>
Uncover new gambling opportunities with our dedicated review sections for Sportsbooks, Esportsbooks, Poker Rooms, Bingo Sites, and Online Lotteries. 
</p>
                
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Game Choices Section --> */}
        <div className="text-center py-5">
          <h4>What game would you like to play?</h4>
          <p>
            Discover the most recommended online casinos that offer your
            favorite game:
          </p>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <span className="game-icons">🎰</span>
                <div>Online Slots</div>
              </div>
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <span className="game-icons">💥</span>
                <div>Crash Games</div>
              </div>
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <span className="game-icons">🃏</span>
                <div>Online Blackjack</div>
              </div>
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <span className="game-icons">🎲</span>
                <div>Online Roulette</div>
              </div>
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <span className="game-icons">🎯</span>
                <div>Online Craps</div>
              </div>
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <span className="game-icons">🀄</span>
                <div>Online Baccarat</div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Online Gambling News Section --> */}
        <div className="container mb-5">
          <h4 className="text-center mb-4">Online Gambling News</h4>
          <div className="row">
            {/* <!-- Card 1 --> */}
            <div className="col-md-4 mb-4">
              <div className="card news-card">
                <img
                  src="https://via.placeholder.com/600x300?text=2025+Thailand"
                  alt="News 1"
                />
                <div className="card-img-overlay">
                  <small>April 14, 2025</small>
                  <h6 className="mt-1">
                    Thailand Halts Casino Regulation Bill Following Public
                    Outcry
                  </h6>
                </div>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="col-md-4 mb-4">
              <div className="card news-card">
                <img
                  src="https://via.placeholder.com/600x300?text=SoftSwiss+Jackpot"
                  alt="News 2"
                />
                <div className="card-img-overlay">
                  <small>April 13, 2025</small>
                  <h6 className="mt-1">
                    SOFTSWISS Celebrates First Sportsbook Network Jackpot Winner
                    with €80,294.89 Payout at SiGMA Americas
                  </h6>
                </div>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="col-md-4 mb-4">
              <div className="card news-card">
                <img
                  src="https://via.placeholder.com/600x300?text=Betgames+Slots"
                  alt="News 3"
                />
                <div className="card-img-overlay">
                  <small>April 12, 2025</small>
                  <h6 className="mt-1">
                    BetGames Release Crypt of Giza: Deluxe as the First-Ever
                    Slot Sequel with Expanding Grid and Progressive Multipliers!
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Show More Button --> */}
          <button className="btn btn-success show-more-btn">Show More</button>
        </div>

        <div className="container mb-5">
          <h4 className="text-center mb-4">Online Gambling News</h4>
          <div className="row">
            {/* <!-- Card 1 --> */}
            <div className="col-md-4 mb-4">
              <div className="card news-card">
                <img
                  src="https://via.placeholder.com/600x300?text=2025+Thailand"
                  alt="News 1"
                />
                <div className="card-img-overlay">
                  <small>April 14, 2025</small>
                  <h6 className="mt-1">
                    Thailand Halts Casino Regulation Bill Following Public
                    Outcry
                  </h6>
                </div>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="col-md-4 mb-4">
              <div className="card news-card">
                <img
                  src="https://via.placeholder.com/600x300?text=SoftSwiss+Jackpot"
                  alt="News 2"
                />
                <div className="card-img-overlay">
                  <small>April 13, 2025</small>
                  <h6 className="mt-1">
                    SOFTSWISS Celebrates First Sportsbook Network Jackpot Winner
                    with €80,294.89 Payout at SiGMA Americas
                  </h6>
                </div>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="col-md-4 mb-4">
              <div className="card news-card">
                <img
                  src="https://via.placeholder.com/600x300?text=Betgames+Slots"
                  alt="News 3"
                />
                <div className="card-img-overlay">
                  <small>April 12, 2025</small>
                  <h6 className="mt-1">
                    BetGames Release Crypt of Giza: Deluxe as the First-Ever
                    Slot Sequel with Expanding Grid and Progressive Multipliers!
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Show More Button --> */}
          <button className="btn btn-success show-more-btn">Show More</button>
        </div>

        <div className="container mb-5">
          <h4 className="text-center mb-4">Online Gambling News</h4>
          <div className="row">
            {/* <!-- Card 1 --> */}
            <div className="col-md-4 mb-4">
              <div className="card news-card">
                <img
                  src="https://via.placeholder.com/600x300?text=2025+Thailand"
                  alt="News 1"
                />
                <div className="card-img-overlay">
                  <small>April 14, 2025</small>
                  <h6 className="mt-1">
                    Thailand Halts Casino Regulation Bill Following Public
                    Outcry
                  </h6>
                </div>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="col-md-4 mb-4">
              <div className="card news-card">
                <img
                  src="https://via.placeholder.com/600x300?text=SoftSwiss+Jackpot"
                  alt="News 2"
                />
                <div className="card-img-overlay">
                  <small>April 13, 2025</small>
                  <h6 className="mt-1">
                    SOFTSWISS Celebrates First Sportsbook Network Jackpot Winner
                    with €80,294.89 Payout at SiGMA Americas
                  </h6>
                </div>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="col-md-4 mb-4">
              <div className="card news-card">
                <img
                  src="https://via.placeholder.com/600x300?text=Betgames+Slots"
                  alt="News 3"
                />
                <div className="card-img-overlay">
                  <small>April 12, 2025</small>
                  <h6 className="mt-1">
                    BetGames Release Crypt of Giza: Deluxe as the First-Ever
                    Slot Sequel with Expanding Grid and Progressive Multipliers!
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Show More Button --> */}
          <button className="btn btn-success show-more-btn">Show More</button>
        </div>

        {/* <!-- Section: Gambling Facts --> */}
        <section className="py-5 bg-light">
          <div className="container text-center">
            <h4 className="mb-4">World Wide Gambling Facts</h4>
            <div className="row">
              <div className="col-md-3 mb-4">
                <div className="info-icon">⭐</div>
                <strong>Most Popular Games</strong>
                <p>
                  The most popular casino games worldwide include slots, poker,
                  blackjack, roulette, baccarat, craps, video poker, and live
                  dealer games.
                </p>
              </div>
              <div className="col-md-3 mb-4">
                <div className="info-icon">📊</div>
                <strong>Gambling Market Value</strong>
                <p>
                  The worldwide gambling industry's market value is over $500
                  billion.
                </p>
              </div>
              <div className="col-md-3 mb-4">
                <div className="info-icon">🗺️</div>
                <strong>Land-Based Gambling</strong>
                <p>
                  Thousands of land-based casinos exist across the globe, mostly
                  in the U.S., Europe, and Asia.
                </p>
              </div>
              <div className="col-md-3 mb-4">
                <div className="info-icon">👫</div>
                <strong>Legal Gambling Age</strong>
                <p>
                  In most countries, the minimum gambling age is 18 years old.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Section: Favorite Casino --> */}
        <section className="py-5">
          <div className="container">
            <h4 className="text-center mb-4">Our Favorite Casino</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="highlight-card d-flex">
                  <div className="text-center pr-4">
                    <img
                      src="https://via.placeholder.com/100x100?text=1xBet"
                      className="casino-logo mb-2"
                    />
                    <h6>1xBet Casino</h6>
                    <p>⭐⭐⭐⭐⭐ 9.6</p>
                    <span className="badge badge-success">Approved</span>
                    <span className="badge badge-light">Favorite</span>
                  </div>
                  <div className="w-100 pl-4">
                    <div className="row">
                      <div className="col-md-3">
                        <strong>Best for</strong>
                        <ul className="list-unstyled">
                          <li>🃏 Blackjack</li>
                          <li>🎰 Slots</li>
                          <li>🎯 Roulette</li>
                        </ul>
                        <p>Over 4016 games available</p>
                      </div>
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li className="feature-check">
                            ✔ Excellent reputation since setup
                          </li>
                          <li className="feature-check">
                            ✔ 3D table games with enhanced experience
                          </li>
                          <li className="feature-check">
                            ✔ Live chat and email support
                          </li>
                          <li className="feature-check">
                            ✔ Unlimited monthly withdrawals
                          </li>
                          <li className="feature-check">✔ Supports crypto</li>
                        </ul>
                        <p>
                          <strong>Payout Speed:</strong> 2–3 Days
                        </p>
                      </div>
                      <div className="col-md-3">
                        <strong>Features:</strong>
                        <ul className="list-unstyled">
                          <li>🎮 3D Games</li>
                          <li>🕹️ Arcade Games</li>
                          <li>🎦 Auto Play</li>
                          <li>🏷️ Branded Games</li>
                          <li>
                            <a href="#">+12 more</a>
                          </li>
                        </ul>
                        <strong>Payment Methods:</strong>
                        <p>
                          <img
                            src="https://via.placeholder.com/40x20?text=Astro"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/40x20?text=Pay"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/40x20?text=More"
                            alt=""
                          />
                        </p>
                      </div>
                      <div className="col-md-3">
                        <div className="bonus-section">
                          <p>
                            <strong>
                              💰 100% Match Bonus up to $1500 + 150 Free Spins
                            </strong>
                          </p>
                          <p>Welcome Bonus</p>
                          <small>18+ Only. GambleAware.org, T&C Apply</small>
                          <br />
                          <button className="btn btn-warning mt-3">
                            Play Here
                          </button>
                          <div className="mt-2">
                            <a href="#">Compare</a> | <a href="#">Review</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Bonus Section --> */}
            </div>
          </div>
        </section>


        <div className="container py-5">
  <h2 className="text-center mb-5">Real Money Online Casinos</h2>
  <div className="row text-center text-md-start">
    <div className="col-md-3 mb-4">
      <div className="icon">🎰</div>
      <h5 className="section-heading">Games</h5>
      <p>A diverse array of gaming choices, including live games, progressive jackpots, and various other gaming options, significantly enriches the online casino experience. This variety is more than a mere luxury; it's a fundamental expectation for modern players. Online casinos cater to this demand by offering hundreds or even thousands of engaging options accessible with just a click...</p>
    </div>
    <div className="col-md-3 mb-4">
      <div className="icon">🏅</div>
      <h5 className="section-heading">Bonuses</h5>
      <p>Online casinos have carved a distinct niche through their extensive promotions, setting them apart from their land-based counterparts. In the competitive online gambling market, the best online casinos go the extra mile by greeting players with generous welcome bonuses tied to their initial deposits...</p>
    </div>
    <div className="col-md-3 mb-4">
      <div className="icon">💎</div>
      <h5 className="section-heading">VIP & Rewards</h5>
      <p>Retaining players in the competitive iGaming landscape requires meticulous loyalty schemes and VIP programs. The best online casinos create these to reward players at all stake levels, fostering a sense of value and connection. Extra benefits are more than bonuses; they acknowledge the player's commitment...</p>
    </div>
    <div className="col-md-3 mb-4">
      <div className="icon">💰</div>
      <h5 className="section-heading">Banking</h5>
      <p>Players engaging in real-money transactions at online casinos prioritize security and careful handling of funds. A trustworthy site should offer various banking options and prompt payouts, as delays can erode trust. The best online casinos prioritize financial integrity, adopting robust security measures...</p>
    </div>
  </div>

  <div className="info-box text-center text-md-start">
    <div className="row align-items-center">
      <div className="col-md-3 text-center mb-3 mb-md-0">
        <div className="icon">📱</div>
      </div>
      <div className="col-md-9">
        <h5 className="section-heading">Enjoy Seamless Gaming Anytime, Anywhere with Mobile-Optimized Play</h5>
        <p>Today's leading online casinos recognize the desire for flexibility and freedom in gaming experiences. Understanding the increasingly mobile lifestyles of players, these casinos have invested in high-quality mobile apps and fully mobile-compatible sites. This innovation allows you to access and indulge in your favorite casino games without constraints, anytime and anywhere...</p>
      </div>
      <div className="col-md-4 text-center">
        <a href="#" className="btn btn-custom mt-2">Best Mobile Casinos</a>
      </div>
    </div>
  </div>
</div>

<div className="container py-5">
  <h3 className="text-center fw-semibold mb-4">Discovering the Highest-Rated Online Casinos for Premier Gaming Experience</h3>
  <p className="text-center mb-5">
    Players are still looking for options in today’s thriving online casino landscape. With hundreds of sites readily available and new ones continually launching, the challenge is not finding a casino but identifying the best among them. Amidst this abundance of choice, how can one discern which casinos stand out? That’s where our team of dedicated professionals comes in. We meticulously review various online casinos and recommend only the crème de la crème. Our rigorous evaluation process filters through the masses, providing you with a curated selection of top-tier casinos you can trust for an exceptional gaming experience.
  </p>

  <div className="row gy-4">
    <div className="col-md-6">
      <h6><span className="check-icon">✔️</span>Bonuses & Promotions</h6>
      <p>Welcome bonuses are more than just enticing figures; they’re pivotal in choosing an online casino. We analyze these incentives precisely, ensuring that wagering requirements are reasonable and favorable terms exist.</p>
    </div>
    <div className="col-md-6">
      <h6><span className="check-icon">✔️</span>Swift and Timely Payouts</h6>
      <p>Top-rated casino operators understand the importance of delivering winnings promptly without delays. Quick and secure withdrawals are essential for a seamless experience.</p>
    </div>
    <div className="col-md-6">
      <h6><span className="check-icon">✔️</span>Flexible Deposits & Withdrawals Options</h6>
      <p>A wide array of banking options, including all major currencies, enables convenience and user-friendliness. Players can choose methods they trust and prefer without hassle.</p>
    </div>
    <div className="col-md-6">
      <h6><span className="check-icon">✔️</span>Responsive Customer Support</h6>
      <p>Support can make or break a gaming experience. We prioritize casinos with efficient, accessible support that swiftly resolves player issues.</p>
    </div>
    <div className="col-md-6">
      <h6><span className="check-icon">✔️</span>Diverse Games & Features</h6>
      <p>A rich selection of games enhances overall enjoyment. We value flexibility, variety, and effortless navigation among multiple titles.</p>
    </div>
    <div className="col-md-6">
      <h6><span className="check-icon">✔️</span>Uncompromising Safety & Security</h6>
      <p>Security is essential in real-money gaming. We only recommend casinos with high standards of data and financial protection.</p>
    </div>
  </div>

  <div className="highlight-section mt-5">
    <div className="row justify-content-center">
      <h4>How We Find The Best Casinos</h4>
      <div className="col-md-4">
        <div className="icon-box">⭐</div>
        <h6>Expert Reviews</h6>
        <p>Our experts review and rank hundreds of online casinos and gambling sites, using a rigorous 12-factor evaluation method.</p>
      </div>
      <div className="col-md-4">
        <div className="icon-box">⏱️</div>
        <h6>Ongoing Validation</h6>
        <p>We regularly verify casino data, including bonus offers and licensing changes, to ensure our reviews remain accurate.</p>
      </div>
      <div className="col-md-4">
        <div className="icon-box">📢</div>
        <h6>Player's Feedback</h6>
        <p>We factor in actual user feedback to validate and enhance our rankings, ensuring our reviews reflect real user experiences.</p>
      </div>
    </div>
    <button className="btn btn-highlight mt-4">Browse Casinos</button>
  </div>
</div>


<div className="container py-5">

  {/* <!-- Trusted Brands Section --> */}
  <h4 className="text-center fw-semibold mb-4">We Endorse Exclusively the Finest and Most Trusted Brands</h4>
  <div className="row g-4 text-center">
    <div className="col-md-3">
      <div className="trusted-card">
        <h6>Fully Licensed and Secure Casinos</h6>
        <p>Every online casino we recommend is backed by trustworthy licenses from reputable authorities to ensure safety and transparency.</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="trusted-card">
        <h6>High-Quality Software Experience</h6>
        <p>We prioritize seamless gaming experiences on visually appealing platforms, free from glitches and technical issues.</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="trusted-card">
        <h6>Swift and Reliable Withdrawals</h6>
        <p>We endorse casinos known for fast and dependable withdrawal processes so your winnings arrive quickly.</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="trusted-card">
        <h6>Insights from Top Players' Feedback</h6>
        <p>We value and assess real user feedback to evaluate how casinos treat their players and ensure quality service.</p>
      </div>
    </div>
  </div>

  {/* <!-- Free Games Section --> */}
  <h4 className="text-center fw-semibold mt-5 mb-4">Play free casino games for practice or fun</h4>
  <div className="row g-4">
    <div className="col-md-3">
      <div className="card game-card">
        <img src="https://via.placeholder.com/300x150.png?text=Majestic+Wolf" alt="Majestic Wolf" />
        <div className="card-body text-center">
          <h6>Majestic Wolf</h6>
          <div className="rating">⭐ 9.9</div>
          <p className="small text-muted">Slots by Mancala gaming</p>
          <button className="btn btn-play">Play</button>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card game-card">
        <img src="https://via.placeholder.com/300x150.png?text=Queens+of+Cards" alt="Queens of Cards" />
        <div className="card-body text-center">
          <h6>Queens of Cards</h6>
          <div className="rating">⭐ 9.8</div>
          <p className="small text-muted">Slots by ZEUSPLAY</p>
          <button className="btn btn-play">Play</button>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card game-card">
        <img src="https://via.placeholder.com/300x150.png?text=God+of+Wealth" alt="God Of Wealth" />
        <div className="card-body text-center">
          <h6>God Of Wealth Hold And Win</h6>
          <div className="rating">⭐ 9.8</div>
          <p className="small text-muted">Slots by BGAMING</p>
          <button className="btn btn-play">Play</button>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card game-card">
        <img src="https://via.placeholder.com/300x150.png?text=Slotham+City" alt="Slotham City" />
        <div className="card-body text-center">
          <h6>Slotham City</h6>
          <div className="rating">⭐ 9.8</div>
          <p className="small text-muted">Slots by Popiplay</p>
          <button className="btn btn-play">Play</button>
        </div>
      </div>
    </div>
  </div>

  <div className="text-center">
    <button className="btn btn-show-more">Show More</button>
  </div>

</div>


<div className="container live-casino-section">
  <h2 className="live-casino-heading">Popular Live Casino Games</h2>
  <p className="live-casino-description">
    Below you can find the most-played live online casino games that feature a realistic Vegas-style gaming experience.
    Pick any live game to learn more about it and discover the best casinos that offer the game.
  </p>

  <div className="row">
    <div className="col-md-6">
      <div className="casino-game">
        <img src="https://img.icons8.com/ios/50/spear.png" className="game-icon" alt=""/>
        <div className="game-details">
          <h5>Live Casino War</h5>
          <p>Experience the real-life excitement of a casino from the comfort of your home with Live Dealer Casino War.</p>
          <a href="#">Learn more</a>
        </div>
      </div>

      <div className="casino-game">
        <img src="https://img.icons8.com/ios/50/dice.png" className="game-icon" alt=""/>
        <div className="game-details">
          <h5>Live Sic Bo Guide</h5>
          <p>Dive into the enthralling world of live dealer Sic Bo, a Chinese casino game where chance meets strategy.</p>
          <a href="#">Learn more</a>
        </div>
      </div>

      <div className="casino-game">
        <img src="https://img.icons8.com/ios/50/cards.png" className="game-icon" alt=""/>
        <div className="game-details">
          <h5>Live Dealer Games</h5>
          <p>Embark on an authentic gaming experience with online casino live dealer games.</p>
          <a href="#">Learn more</a>
        </div>
      </div>

      <div className="casino-game">
        <img src="https://img.icons8.com/ios/50/roulette.png" className="game-icon" alt=""/>
        <div className="game-details">
          <h5>Live Roulette</h5>
          <p>Discover a fantastic roulette variant that will bring the atmosphere of a brick-and-mortar casino to your home.</p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="casino-game">
        <img src="https://img.icons8.com/ios/50/mahjong.png" className="game-icon" alt=""/>
        <div className="game-details">
          <h5>Live Dealer Mahjong Pai Gow</h5>
          <p>Discover the excitement of Mahjong Pai Gow with live dealers. An ancient Asian tile game, now online.</p>
          <a href="#">Learn more</a>
        </div>
      </div>

      <div className="casino-game">
        <img src="https://img.icons8.com/ios/50/businessman.png" className="game-icon" alt=""/>
        <div className="game-details">
          <h5>Live Casino Hold'em</h5>
          <p>Enter the thrilling world of Online Live Dealer Casino Hold’em, a vibrant variation of Texas Hold’em poker.</p>
          <a href="#">Learn more</a>
        </div>
      </div>

      <div className="casino-game">
        <img src="https://img.icons8.com/ios/50/two-of-clubs.png" className="game-icon" alt=""/>
        <div className="game-details">
          <h5>Live Baccarat</h5>
          <p>Enjoy a different way of playing baccarat by joining the best live online baccarat casinos.</p>
          <a href="#">Learn more</a>
        </div>
      </div>

      <div className="casino-game">
        <img src="https://img.icons8.com/ios/50/black-jack.png" className="game-icon" alt=""/>
        <div className="game-details">
          <h5>Live Blackjack</h5>
          <p>Enjoy the thrills of live blackjack and have one of the most authentic gambling experiences possible.</p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="container">

    {/* <!-- Discover More --> */}
    <div className="discover-section">
      <h3 className="section-heading">Discover More</h3>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="discover-card">
            <h5><img src="https://img.icons8.com/color/48/joystick.png" width="24" /> Online Casino Tournaments</h5>
            <p>Dive into the exciting world of online casino tournaments and competitions with the ultimate guide...</p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="discover-card">
            <h5><img src="https://img.icons8.com/color/48/slot-machine.png" width="24" /> Free Play Bonuses</h5>
            <p>Dive into the exciting world of free-play casino bonuses. Discover their pros, their cons, and how you can claim one today...</p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="discover-card">
            <h5><img src="https://img.icons8.com/color/48/star.png" width="24" /> Bingo Bonuses</h5>
            <p>Online bingo is a popular pastime that offers excitement, social interaction, and big win opportunities...</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Blacklisted Casinos --> */}
    <div className="blacklist-section">
      <div className="blacklist-wrapper">
        <h4 className="blacklist-title">Blacklisted Casinos</h4>
        <p>To guarantee you have a safe and enjoyable experience, we only recommend Casinos that meet our strict selection criteria...</p>
        <h6 className="blacklist-subtitle">Casinos we recommend you to avoid</h6>
        <div className="casino-list">
          <span className="casino-tag">FortuneJack Casino <span className="warning-icon">⚠</span></span>
          <span className="casino-tag">Play Fortuna Casino <span className="warning-icon">⚠</span></span>
          <span className="casino-tag">Casino Luck <span className="warning-icon">⚠</span></span>
          <span className="casino-tag">Mr Green Casino <span className="warning-icon">⚠</span></span>
          <span className="casino-tag">Funbet Casino <span className="warning-icon">⚠</span></span>
        </div>
      </div>
    </div>

    {/* <!-- FAQ Section --> */}
    <div className="faq-section">
      <h4 className="faq-title">FAQ</h4>
      <div className="accordion accordion-custom" id="customFaq">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne">
              Why should I have confidence in your casino reviews?
            </button>
          </h2>
          <div id="faqOne" className="accordion-collapse collapse" data-bs-parent="#customFaq">
            <div className="accordion-body">We follow strict criteria and expert evaluations...</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo">
              On what criteria are your casino review ratings founded?
            </button>
          </h2>
          <div id="faqTwo" className="accordion-collapse collapse" data-bs-parent="#customFaq">
            <div className="accordion-body">Ratings are based on fairness, security, user feedback...</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree">
              What action can I take if I believe a casino has acted unjustly?
            </button>
          </h2>
          <div id="faqThree" className="accordion-collapse collapse" data-bs-parent="#customFaq">
            <div className="accordion-body">You can file a complaint with regulators or us...</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqFour">
              How can I determine if a specific casino is the right fit for me?
            </button>
          </h2>
          <div id="faqFour" className="accordion-collapse collapse" data-bs-parent="#customFaq">
            <div className="accordion-body">Compare features, payment methods, and reviews...</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqFive">
              How can I verify the safety of an online casino?
            </button>
          </h2>
          <div id="faqFive" className="accordion-collapse collapse" data-bs-parent="#customFaq">
            <div className="accordion-body">Check for licenses, SSL encryption, and audit certificates...</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqSix">
              Which casinos offer the quickest payout times?
            </button>
          </h2>
          <div id="faqSix" className="accordion-collapse collapse" data-bs-parent="#customFaq">
            <div className="accordion-body">Refer to our payout speed comparison guide...</div>
          </div>
        </div>
      </div>
    </div>

  </div>









      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
