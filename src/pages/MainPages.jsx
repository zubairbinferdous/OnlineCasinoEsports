import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainPages = () => {
  return (
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
              OnlineCasinoReports.com serves as a global guide to assist players
              in finding the premier online casinos and gambling platforms
              worldwide. Utilizing a meticulous in-house review process and
              players' feedback, our seasoned experts evaluate and rank various
              online casinos, poker rooms, bingo venues, Esports, and sports
              betting sites. Our assessments encompass all aspects of the gaming
              experience, from game selection and unique features to banking
              options and customer support.
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
                      <span className="badge bg-secondary badge-custom">2</span>
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
                      <p className="text-success fw-semibold mb-1">Exclusive</p>
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
                      <span className="badge bg-danger badge-custom">Hot</span>
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
                    <span className="badge bg-secondary badge-custom">New</span>
                  </div>
                  <img
                    src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                    className="casino-logo"
                    alt="Casino Logo"
                  />
                  <h5 className="m-0 fw-bold">Win.Casino</h5>
                  <div className="rating mb-2">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="text-muted">(9.7)</small>
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
                    <span className="badge bg-secondary badge-custom">New</span>
                  </div>
                  <img
                    src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                    className="casino-logo"
                    alt="Casino Logo"
                  />
                  <h5 className="m-0 fw-bold">Win.Casino</h5>
                  <div className="rating mb-2">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="text-muted">(9.7)</small>
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
                    <span className="badge bg-secondary badge-custom">New</span>
                  </div>
                  <img
                    src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                    className="casino-logo"
                    alt="Casino Logo"
                  />
                  <h5 className="m-0 fw-bold">Win.Casino</h5>
                  <div className="rating mb-2">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="text-muted">(9.7)</small>
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
                    <span className="badge bg-secondary badge-custom">New</span>
                  </div>
                  <img
                    src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                    className="casino-logo"
                    alt="Casino Logo"
                  />
                  <h5 className="m-0 fw-bold">Win.Casino</h5>
                  <div className="rating mb-2">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="text-muted">(9.7)</small>
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
                    <span className="badge bg-secondary badge-custom">New</span>
                  </div>
                  <img
                    src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                    className="casino-logo"
                    alt="Casino Logo"
                  />
                  <h5 className="m-0 fw-bold">Win.Casino</h5>
                  <div className="rating mb-2">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="text-muted">(9.7)</small>
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
                    <span className="badge bg-secondary badge-custom">New</span>
                  </div>
                  <img
                    src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                    className="casino-logo"
                    alt="Casino Logo"
                  />
                  <h5 className="m-0 fw-bold">Win.Casino</h5>
                  <div className="rating mb-2">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="text-muted">(9.7)</small>
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
                    <span className="badge bg-secondary badge-custom">New</span>
                  </div>
                  <img
                    src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                    className="casino-logo"
                    alt="Casino Logo"
                  />
                  <h5 className="m-0 fw-bold">Win.Casino</h5>
                  <div className="rating mb-2">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="text-muted">(9.7)</small>
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
                    <span className="badge bg-secondary badge-custom">New</span>
                  </div>
                  <img
                    src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                    className="casino-logo"
                    alt="Casino Logo"
                  />
                  <h5 className="m-0 fw-bold">Win.Casino</h5>
                  <div className="rating mb-2">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="text-muted">(9.7)</small>
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
                    <span className="badge bg-secondary badge-custom">New</span>
                  </div>
                  <img
                    src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                    className="casino-logo"
                    alt="Casino Logo"
                  />
                  <h5 className="m-0 fw-bold">Win.Casino</h5>
                  <div className="rating mb-2">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="text-muted">(9.7)</small>
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
                    <span className="badge bg-secondary badge-custom">New</span>
                  </div>
                  <img
                    src="https://via.placeholder.com/70x70.png?text=win.CASINO"
                    className="casino-logo"
                    alt="Casino Logo"
                  />
                  <h5 className="m-0 fw-bold">Win.Casino</h5>
                  <div className="rating mb-2">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="text-muted">(9.7)</small>
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
                Our experts meticulously review and rank online casinos through
                a comprehensive inspection process. From game selections to
                customer service, we guide you towards the best casinos in the
                industry.
              </p>

              <h6>Exclusive Bonuses and Promotions</h6>
              <p>
                Our experts meticulously review and rank online casinos through
                a comprehensive inspection process. From game selections to
                customer service, we guide you towards the best casinos in the
                industry.
              </p>

              <h6>Casino Comparison Tool</h6>
              <p>
                Utilize our innovative casino comparison tool to compare
                hundreds of casinos effortlessly and find the one that best
                suits your preferences.
              </p>

              <h6>Free Casino Games Library</h6>
              <p>
                Indulge in an extensive array of thrilling online casino games,
                allowing for practice, fun, and risk-free enjoyment.
              </p>
              <h6>Tracked Progressive Jackpots</h6>
              <p>
                Stay informed with our tracking of the largest progressive
                jackpots online, complete with hit history and insightful
                statistics to guide your selection.
              </p>

              <h6>Latest News & Industry Insights</h6>
              <p>
                Stay informed with our tracking of the largest progressive
                jackpots online, complete with hit history and insightful
                statistics to guide your selection.
              </p>
              <h6>Comprehensive Gambling Directory</h6>
              <p>
                Navigate our extensive reviews to find exactly what you need in
                the world of online gambling. Whether you're looking for
                insights on payment methods, software providers, casino games
                providers, licensing authorities, currencies accepted, or even
                language options, our complete directory is your one-stop
                resource.
              </p>
              <h6>Educational Gambling & Game Guides</h6>
              <p>
                Enhance your gaming prowess with our informative how-to &
                strategy guides, tailored to help you master various casino
                games.
              </p>

              <h6>Exploration of Online Gambling Verticals</h6>
              <p>
                Uncover new gambling opportunities with our dedicated review
                sections for Sportsbooks, Esportsbooks, Poker Rooms, Bingo
                Sites, and Online Lotteries.
              </p>

              <h6>OCR-Approved Casinos</h6>
              <p>
                Uncover new gambling opportunities with our dedicated review
                sections for Sportsbooks, Esportsbooks, Poker Rooms, Bingo
                Sites, and Online Lotteries.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* data-area  */}

      <div className="container">
    <div className="row">
      <nav className="col-md-3 d-none d-md-block  ">
      <ul className="nav flex-column">
  <li className="nav-item"><a className="nav-link sideBer" href="#">Overview</a></li>
  <li className="nav-item"><a className="nav-link sideBer" href="#">OCR's Standards for Seal Endorsement</a></li>
  <li className="nav-item"><a className="nav-link sideBer" href="#">Compare Casinos Tool</a></li>
  <li className="nav-item"><a className="nav-link sideBer" href="#">Trusted Reviews</a></li>
  <li className="nav-item"><a className="nav-link sideBer" href="#">How We Rate</a></li>
  <li className="nav-item"><a className="nav-link sideBer" href="#">Related Guides</a></li>
  <li className="nav-item"><a className="nav-link sideBer" href="#">Our Favorite Casino</a></li>
  <li className="nav-item"><a className="nav-link sideBer" href="#">FAQ</a></li>
  <li className="nav-item"><a className="nav-link sideBer" href="#">Apply For Seal</a></li>
  <li className="nav-item"><a className="nav-link sideBer" href="#">Discover More</a></li>
</ul>


      </nav>
      
      <main className="col-md-9 content py-4">
        <h3>22BET Casino Review</h3>
        <p className="text-muted">Review last updated on <span className="text-success">March 31, 2025</span></p>
        <p>
          22Bet Casino opened shop back in 2007, and since then, the Curaçao licensed gambling operator has expanded worldwide. Today, it is one of the best-known and most respected suppliers of online casino entertainment for players from many countries where gambling is legal. It works with trustworthy providers of casino games and features exclusively reliable payment methods, which are fast and inexpensive. Players qualify for bonuses and are looked after by a friendly customer support team.
        </p>



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




  </div>
      </main>
    </div>
     </div>




      <Footer></Footer>
    </div>
  );
};

export default MainPages;
