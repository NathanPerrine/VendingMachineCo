<script lang="ts">
	import VendingDisplay from '$lib/assets/images/VendingDisplay.png';
	import vendingOffice from '$lib/assets/images/vendingOffice.jpg';
  import sweet from '$lib/assets/images/sweet.jpg'
  import salty from '$lib/assets/images/salty.jpg'
  import nutsAndSeeds from '$lib/assets/images/nutsAndSeeds.jpg'
  import roastedChickpeas from '$lib/assets/images/roastedChickpeas.jpg'
  import riceCrackers from '$lib/assets/images/riceCrackers.jpg'
  import mochi from '$lib/assets/images/mochi.jpg'
  import popCans from '$lib/assets/images/popCans.jpg'
	import Services from './Services.svelte';
	import services from '$lib/data/services.json';
	let servicesLeft = services.slice(0, 2);
	let servicesRight = services.slice(2, 4);
</script>

<main class="w-full flex flex-col justify-center">
	<!-- Hero -->
	<div class="w-full py-3 wavy flex justify-center">
		<!-- hero -->
		<section id="hero" class="max-w-7xl flex justify-around items-center">
			<div
				id="heroTextContainer"
				class="w-1/3 min-h-min p-4 flex flex-col justify-center rounded-lg"
			>
				<h1 class="text-3xl font-bold">Welcome to SnackMaster</h1>
				<p class="text-lg pt-4">
					At SnackMaster, we're dedicated to providing convenient, reliable, and satisfying vending
					solutions for businesses, schools, hospitals, and other institutions throughout the
					greater Toledo area. With our extensive range of vending machines and unparalleled
					customer service, we make snack time a breeze.
				</p>
			</div>

			<img src={VendingDisplay} alt="vending machines selection" height="500" />
		</section>
	</div>

	<!-- Wavy div to break section -->
	<div style="height: 150px; overflow: hidden;">
		<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"
			><path
				d="M-4.51,82.40 C150.00,150.00 271.49,-49.98 515.80,105.08 L500.00,0.00 L0.00,0.00 Z"
				style="stroke: none;  --darkreader-inline-stroke: none; --darkreader-inline-fill: #33a6ff;"
				data-darkreader-inline-stroke=""
				data-darkreader-inline-fill=""
			></path></svg
		>
	</div>

	<!-- services -->
	<div class="w-full flex justify-center">
		<section id="ourServices" class="w-full max-w-7xl flex flex-col items-center mx-4">
			<h2 class="font-bold text-2xl">Our Services</h2>
			<!-- services container -->
			<div class="flex justify-between gap-4 my-4">
				<div class="w-full">
					{#each servicesLeft as service (service.service)}
						<Services
							icon={service.icon}
							service={service.service}
							desc={service.desc}
							leftOrRight="left"
						/>
					{/each}
				</div>
				<!-- divider -->
				<div class="h-4/5 border border-gray-600 self-center"></div>

				<div class="w-full">
					{#each servicesRight as service (service.service)}
						<Services
							icon={service.icon}
							service={service.service}
							desc={service.desc}
							leftOrRight="right"
						/>
					{/each}
				</div>
			</div>
		</section>
	</div>

	<!-- Wavy div to break section -->
	<div style="height: 150px; overflow: hidden;">
		<svg
			class="wavyFlip"
			viewBox="0 0 500 150"
			preserveAspectRatio="none"
			style="height: 100%; width: 100%;"
			><path
				d="M-4.51,82.40 C150.00,150.00 271.49,-49.98 515.80,105.08 L500.00,0.00 L0.00,0.00 Z"
				style="stroke: none;  --darkreader-inline-stroke: none; --darkreader-inline-fill: #33a6ff;"
				data-darkreader-inline-stroke=""
				data-darkreader-inline-fill=""
			></path></svg
		>
	</div>

	<!-- Why choose us -->
	<div class="wavy flex justify-center w-full h-full">
		<div class="w-full max-w-7xl flex flex-col justify-center my-4">
			<h2 class="font-bold text-2xl mb-4 text-center">Why Choose SnackMaster Vending Solutions?</h2>
			<section class="mx-4 relative">
				<div>
					<img
						src={vendingOffice}
						alt="Vending machine in an office"
						class="rounded-lg w-4/5 mx-auto"
					/>
				</div>
				<!-- text -->
				<div class="w-1/4 chooseTextContainer topLeft">
					<h2 class="font-bold text-lg">Reliability</h2>
					<p>
						With SnackMaster, you can count on dependable vending services that are always there
						when you need them.
					</p>
				</div>
				<div class="w-1/4 chooseTextContainer center">
					<h2 class="font-bold text-lg">Variety</h2>
					<p>
						We offer an extensive selection of snacks and beverages to please every palate and
						dietary need.
					</p>
				</div>
				<div class="w-1/4 chooseTextContainer bottomLeft">
					<h2 class="font-bold text-lg">Convenience</h2>
					<p>
						Our hassle-free placement, maintenance, and restocking services make vending easy and
						stress-free for you.
					</p>
				</div>
				<div class="w-1/4 chooseTextContainer bottomRight">
					<h2 class="font-bold text-lg">Exceptional Customer Service</h2>
					<p>
						We pride ourselves on delivering superior customer service and building lasting
						relationships with our clients.
					</p>
				</div>
			</section>
		</div>
	</div>

	<!-- Wavy div to break section -->
	<div style="height: 150px; overflow: hidden;">
		<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"
			><path
				d="M-4.51,82.40 C150.00,150.00 271.49,-49.98 515.80,105.08 L500.00,0.00 L0.00,0.00 Z"
				style="stroke: none;  --darkreader-inline-stroke: none; --darkreader-inline-fill: #33a6ff;"
				data-darkreader-inline-stroke=""
				data-darkreader-inline-fill=""
			></path></svg
		>
	</div>

	<!-- Our Products -->
	<div class="w-full flex justify-center mb-8">
		<section class="w-full max-w-7xl flex flex-col items-center justify-between mx-4 h-[500px]">
			<h2 class="font-bold text-xl">Our products</h2>
			<p class="text-center">
				By offering a diverse selection that inclueds healthy options, salty snacks, and sweet
				treats, we can ensure our vending machines are stocked with a wide variety of items that
				will cater to the tastes and preferences of your employees or customers.
			</p>

			<!-- carousel -->
			<div class="wrapper">
				<div class="carousel">
          <!-- sweet -->
					<div class="carousel__item">
						<div class="carousel__item-head">
              <img src={sweet} alt="Sweet candies" class="roundedImg" />
            </div>
						<div class="carousel__item-body">
							<p class="title">Sweet</p>
              <p>Candies, chocolate bars, cookies, gummies</p>
						</div>
					</div>
          <!-- salty -->
					<div class="carousel__item">
						<div class="carousel__item-head">
              <img src={salty} alt="chips" class="roundedImg" />
            </div>
						<div class="carousel__item-body">
							<p class="title">Salty</p>
              <p>Chips, pretzels, popcorn, crackers, jerky</p>
						</div>
					</div>
          <!-- healthy -->
					<div class="carousel__item">
						<div class="carousel__item-head">
              <img src={nutsAndSeeds} alt="nuts and seeds" class="roundedImg" />
            </div>
						<div class="carousel__item-body">
							<p class="title">Healthy</p>
              <p>Nuts & seeds, granola, dried fruits, yogurt</p>
						</div>
					</div>
          <!-- Savory -->
					<div class="carousel__item">
						<div class="carousel__item-head">
              <img src={roastedChickpeas} alt="roasted chickpeas" class="roundedImg" />
            </div>
						<div class="carousel__item-body">
							<p class="title">Savory</p>
              <p>Roasted chickpeas, peanut butter crackers, protein rich snacks</p>
						</div>
					</div>
          <!-- Gluten-Free -->
					<div class="carousel__item">
						<div class="carousel__item-head">
              <img src={riceCrackers} alt="rice crackers" class="roundedImg" />
            </div>
						<div class="carousel__item-body">
							<p class="title">Gluten-Free</p>
              <p>Rice or Corn based crackers and chips, nuts & seed bars, gluten-free cookies</p>
						</div>
					</div>
          <!-- International -->
					<div class="carousel__item">
						<div class="carousel__item-head">
              <img src={mochi} alt="mochi" class="roundedImg" />
            </div>
						<div class="carousel__item-body">
							<p class="title">International</p>
              <p>Rice crackers, nori, spiced nuts, mochi</p>
						</div>
					</div>
          <!-- Drinks -->
					<div class="carousel__item">
						<div class="carousel__item-head">
              <img src={popCans} alt="pop cans" class="roundedImg" />
            </div>
						<div class="carousel__item-body">
							<p class="title">Drinks</p>
              <p>Pepsi, Coke, bottled waters, energy drinks, teas, juices, iced coffees</p>
						</div>
					</div>
				</div>
			</div>

			<p>
				Our stock is always expanding to meet the needs and preferences of our customers, for a more
				comprehensive list please contact us <a href="mailto:snackmaster@gmail.com" class="link">here</a>
			</p>
		</section>
	</div>
</main>

<style lang="scss">
  .roundedImg{
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

	.chooseTextContainer {
		background-color: $background;

		border-radius: 0.5rem;
		border: 2px solid $dark-accent;
		position: absolute;
		padding: 8px;
    box-shadow: 5px 5px 2px $dark-accent;

		&.topLeft {
			top: 10%;
			left: 7%;
		}
		&.topRight {
			top: 10%;
			right: 5%;
		}
		&.bottomLeft {
			bottom: 10%;
			left: 3%;
		}
		&.bottomRight {
			bottom: 10%;
			right: 5%;
		}
		&.center {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.link {
		color: $dark-accent;
		text-decoration: underline;
	}

	#hero {
		width: full;
		position: relative;

		img {
			width: 400px;
		}
	}

	#heroTextContainer {
		background-color: $background;
		height: min-content;
	}

	.aboutMe {
		background-color: $background;
		width: 100%;
		border: 2px solid $dark-accent;
	}

	.wavy {
		background-color: $primary-accent;
	}

	.wavyFlip {
		transform: scale(-1);
	}

	path {
		fill: $primary-accent;
	}

	$animation-timing: 28s;
	$carousel-items: 7;
	$animation-delay-fraction: calc($animation-timing / $carousel-items);
	$animation-steps-fraction: calc(100 / $carousel-items);
	$slide-change-timing: 3; // percentage of total animation cycle

	.wrapper {
		height: 50%;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.carousel {
		position: relative;
		width: 100%;
		max-width: 500px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.carousel__item {
		display: flex;
		align-items: center;
		position: absolute;
		width: 100%;
		padding: 0 12px;
		opacity: 0;
		filter: drop-shadow(0 2px 2px #555);
		will-change: transform, opacity;
		animation: carousel-animate-vertical $animation-timing linear infinite;
	}

	@for $i from 1 through ($carousel-items - 1) {
		.carousel__item:nth-child(#{$i}) {
			animation-delay: calc(#{$animation-delay-fraction} * #{$i - 2});
		}
	}

	.carousel__item:last-child {
		animation-delay: calc(-#{$animation-delay-fraction} * 2);
	}

	.carousel__item-head {
		border-radius: 50%;
		background-color: #d7f7fc;
		width: 90px;
		height: 90px;
		padding: 14px;
		position: relative;
		margin-right: -45px;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 50px;
	}

	.carousel__item-body {
		width: 100%;
		background-color: #fff;
		border-radius: 8px;
		padding: 16px 20px 16px 70px;
	}

	.title {
		text-transform: uppercase;
		font-size: 20px;
		margin-top: 10px;
	}

	@keyframes carousel-animate-vertical {
		0% {
			transform: translateY(100%) scale(0.5);
			opacity: 0;
			visibility: hidden;
		}
		#{$slide-change-timing}%,
		#{$animation-steps-fraction}% {
			transform: translateY(100%) scale(0.7);
			opacity: 0.4;
			visibility: visible;
		}
		#{$animation-steps-fraction + $slide-change-timing}%,
		#{$animation-steps-fraction * 2}% {
			transform: translateY(0) scale(1);
			opacity: 1;
			visibility: visible;
		}
		#{($animation-steps-fraction * 2) + $slide-change-timing}%,
		#{$animation-steps-fraction * 3}% {
			transform: translateY(-100%) scale(0.7);
			opacity: 0.4;
			visibility: visible;
		}
		#{($animation-steps-fraction * 3) + $slide-change-timing}% {
			transform: translateY(-100%) scale(0.5);
			opacity: 0;
			visibility: visible;
		}
		100% {
			transform: translateY(-100%) scale(0.5);
			opacity: 0;
			visibility: hidden;
		}
	}
</style>
