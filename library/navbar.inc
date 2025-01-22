<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand foreground-accent" href="index.html">Speläventyret</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link foreground-primary" href="products.html">Produkter</a>
          </li>
          <li class="nav-item">
            <a class="nav-link foreground-primary" href="about.html">Om Oss</a>
          </li>
          <li class="nav-item">
            <a class="nav-link foreground-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
              <i class="bi bi-cart"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>



  <div class="offcanvas offcanvas-end background-dark" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title foreground-accent" id="offcanvasScrollingLabel">Kundvagn</h5>
      <button type="button" class="btn-close button-primary-foreground" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div id="cart-products"  class="offcanvas-body">
      


      </div>
    </div>
  </div>