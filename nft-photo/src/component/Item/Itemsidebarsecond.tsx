import React from "react";
function Itemsidebarsecond() {
  return (
    <div className="asset__info">
      <div className="asset__desc">
        <h2>Descriptions</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
      </div>

      <ul className="asset__authors">
        <li>
          <span>Creator</span>
          <div className="asset__author asset__author--verified">
            <img src="img/avatars/avatar5.jpg" alt="" />
            <a href="#/Author">@midinh</a>
          </div>
        </li>
        <li>
          <span>Collection</span>
          <div className="asset__author ">
            <img src="img/avatars/avatar9.jpg" alt="" />
            <a href="#/Collection">The Meta Key</a>
          </div>
        </li>
      </ul>

      {/* <!-- tabs --> */}
      <ul className="nav nav-tabs asset__tabs" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-toggle="tab"
            href="#tab-1"
            role="tab"
            aria-controls="tab-1"
            aria-selected="true"
          >
            History
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#tab-2"
            role="tab"
            aria-controls="tab-2"
            aria-selected="false"
          >
            Bids
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#tab-3"
            role="tab"
            aria-controls="tab-3"
            aria-selected="false"
          >
            Details
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
          <div
            className="asset__actions asset__actions--scroll"
            id="asset__actions--scroll"
          >
            <div className="asset__action asset__action--verified">
              <img src="img/avatars/avatar10.jpg" alt="" />
              <p>
                Bid placed for <b>11.00 ETH</b> 4 hours ago <br />
                by <a href="#/Author">@erikkk</a>
              </p>
            </div>

            <div className="asset__action asset__action--verified">
              <img src="img/avatars/avatar4.jpg" alt="" />
              <p>
                Bid placed for <b>10.00 ETH</b> 5 hours ago <br />
                by <a href="#/Author">@johndoe</a>
              </p>
            </div>

            <div className="asset__action asset__action--verified">
              <img src="img/avatars/avatar6.jpg" alt="" />
              <p>
                Bid placed for <b>2.508 ETH</b> 5 hours ago <br />
                by <a href="#/Author">@n1ckname</a>
              </p>
            </div>

            <div className="asset__action asset__action--verified">
              <img src="img/avatars/avatar4.jpg" alt="" />
              <p>
                Bid placed for <b>2.2799 ETH</b> 6 hours ago <br />
                by <a href="#/Author">@johndoe</a>
              </p>
            </div>

            <div className="asset__action asset__action--verified">
              <img src="img/avatars/avatar5.jpg" alt="" />
              <p>
                Put on sale for <b>0.55 ETH</b> 1 days ago <br />
                by <a href="#/Author">@midinh</a>
              </p>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="tab-2" role="tabpanel">
          <div className="asset__actions">
            <div className="asset__action asset__action--verified">
              <img src="img/avatars/avatar10.jpg" alt="" />
              <p>
                Bid placed for <b>11.00 ETH</b> 4 hours ago <br />
                by <a href="author.html">@erikkk</a>
              </p>
            </div>

            <div className="asset__action asset__action--verified">
              <img src="img/avatars/avatar4.jpg" alt="" />
              <p>
                Bid placed for <b>10.00 ETH</b> 5 hours ago <br />
                by <a href="author.html">@johndoe</a>
              </p>
            </div>

            <div className="asset__action asset__action--verified">
              <img src="img/avatars/avatar6.jpg" alt="" />
              <p>
                Bid placed for <b>2.508 ETH</b> 5 hours ago <br />
                by <a href="author.html">@n1ckname</a>
              </p>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="tab-3" role="tabpanel">
          <ul className="asset__authors asset__authors--tab">
            <li>
              <span>Owner</span>
              <div className="asset__author asset__author--verified">
                <img src="img/avatars/avatar5.jpg" alt="" />
                <a href="author.html">@midinh</a>
              </div>
            </li>
            <li>
              <span>Year created</span>
              <p>2021</p>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- end tabs -->

                    <!-- actions --> */}
      <div className="asset__btns">
        <button className="asset__btn asset__btn--clr" type="button">
          Buy - 3.19 ETH
        </button>

        <a href="#modal-bid" className="asset__btn open-modal">
          Place a bid
        </a>
      </div>
    </div>
  );
}
export default Itemsidebarsecond;
