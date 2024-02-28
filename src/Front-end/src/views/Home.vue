<template>
  <!-- Header -->
  <header>
    <!-- Container -->
    <div> 
      <nav>
        <!-- logo -->
        <div>
          <img src="/front-end/public/images/logo.png/" alt="website logo">
        </div>
        <!-- links -->
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <!-- menu button -->
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
        </div>
      </nav>
    </div>
  </header>

  <!-- Banner -->
  <section>
    <div style="background-image: url('.../public/images/banner.png')">
      <div>
        <!-- tag -->
        <p>Food app</p>
        <!-- title -->
        <h1>Why stay hungry when you can order from Bella Onojie</h1>
        <!-- desc -->
        <p>Download the bella onoje's food app now on</p>
        <!-- button -->
        <div>
          <button>Playstore</button>
          <button>Appstore</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
 
}
</script>
