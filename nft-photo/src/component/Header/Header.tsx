import React from "react";

function Header(props: any) {
  function goExplore() {
    window.location.assign("#/Explore");
  }
  function goExploreSecond() {
    window.location.assign("#/Exploresecond");
  }
  function goItem() {
    window.location.assign("#/Item");
    const active = true;
    props.onClickActive(active);
  }
  function goItemSecond() {
    window.location.assign("#/Item");
    const active = false;
    props.onClickActive(active);
  }
  return (
    <div className="header__content">
      <div className="header__logo">
        <a href="#/Home">{/* <img src="img/logo.svg" alt=""> */}</a>
      </div>

      <form action="#" className="header__search">
        <input
          type="text"
          placeholder="Search items, collections, and creators"
        ></input>
        <button type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
          </svg>
        </button>
        <button type="button" className="close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
          </svg>
        </button>
      </form>

      <div className="header__menu">
        <ul className="header__nav">
          <li className="header__nav-item">
            <a
              className="header__nav-link"
              href="#"
              role="button"
              id="dropdownMenuHome"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Home{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
              </svg>
            </a>

            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenuHome"
            >
              <li>
                <a href="#/Home">Home style 1</a>
              </li>
              <li>
                <a href="#/Homesecond">Home style 2</a>
              </li>
              <li>
                <a href="#/Homethree">Home style 3</a>
              </li>
            </ul>
          </li>
          <li className="header__nav-item">
            <a
              className="header__nav-link"
              href="#"
              role="button"
              id="dropdownMenu"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Explore{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
              </svg>
            </a>

            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenu"
            >
              <li>
                <a onClick={goExplore}>Explore style 1</a>
              </li>
              <li>
                <a onClick={goExploreSecond}>Explore style 2</a>
              </li>
              <li>
                <a href="#/Explorethree">Explore style 3</a>
              </li>
              <li>
                <a onClick={goItem}>Item style 1</a>
              </li>
              <li>
                <a onClick={goItemSecond}>Item style 2</a>
              </li>
            </ul>
          </li>
          <li className="header__nav-item">
            <a href="#/Activity" className="header__nav-link">
              Activity
            </a>
          </li>
          <li className="header__nav-item">
            <a
              className="header__nav-link"
              href="#"
              role="button"
              id="dropdownMenu0"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Community{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
              </svg>
            </a>

            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenu0"
            >
              <li>
                <a href="#/Token">Unitok</a>
              </li>
              <li className="dropdown-submenu">
                <a
                  className="dropdown-item"
                  href="#"
                  role="button"
                  id="dropdownMenuSub"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                  </svg>
                </a>

                <ul
                  className="dropdown-menu header__nav-menu"
                  aria-labelledby="dropdownMenuSub"
                >
                  <li>
                    <a href="#/Blog">Blog style 1</a>
                  </li>
                  <li>
                    <a href="#/Blog">Blog style 2</a>
                  </li>
                  <li>
                    <a href="#/Article">Article</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#/Faq">Help center</a>
              </li>
              <li>
                <a href="#/contact">Contacts</a>
              </li>
            </ul>
          </li>
          <li className="header__nav-item">
            <a
              className="header__nav-link"
              href="#"
              role="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pages{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
              </svg>
            </a>

            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenu1"
            >
              <li>
                <a href="#/Authors">Authors</a>
              </li>
              <li>
                <a href="#/Author">Author</a>
              </li>
              <li>
                <a href="#/Collection">Collection</a>
              </li>
              <li>
                <a href="#/Create">Create</a>
              </li>
            </ul>
          </li>
          <li className="header__nav-item">
            <a
              className="header__nav-link header__nav-link--menu"
              href="#"
              role="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z" />
              </svg>
            </a>

            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenu2"
            >
              <li>
                <a href="#/Signin">Sign in</a>
              </li>
              <li>
                <a href="#/Signup">Sign up</a>
              </li>
              <li>
                <a href="#/Forgot">Forgot password</a>
              </li>
              <li>
                <a href="#/PageNotFound">404 Page</a>
              </li>
              <li>
                <a href="#/Privacy">Privacy policy</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="header__actions">
        <div className="header__action header__action--search">
          <button className="header__action-btn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
            </svg>
          </button>
        </div>

        <div className="header__action header__action--signin">
          <a
            className="header__action-btn header__action-btn--signin"
            href="signin.html"
          >
            <span>Sign in</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" />
            </svg>
          </a>
        </div>
      </div>

      <button className="header__btn" type="button">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}
export default Header;
