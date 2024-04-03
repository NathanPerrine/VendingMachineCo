<script lang="ts">
	import VendingDisplay from '$lib/assets/images/VendingDisplay.png';
	import Services from './Services.svelte';
  import services from '$lib/data/services.json'
  let servicesLeft = services.slice(0, 2)
  let servicesRight = services.slice(2, 4)
</script>

<main class="w-full flex flex-col justify-center">
	<div class="w-full py-3 wavy flex justify-center">
		<!-- hero -->
		<section id="hero" class="max-w-7xl flex justify-around">
			<div id="heroTextContainer" class=" w-1/3 min-h-min p-4 flex flex-col justify-center">
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
    <section id="ourServices" class="w-full max-w-7xl flex flex-col items-center">
      <h2 class="font-bold text-2xl">Our Services</h2>
      <!-- services container -->
      <div class="flex justify-between gap-4 my-4">
        <div class="w-full">
          {#each servicesLeft as service (service.service)}
            <Services icon={service.icon} service={service.service} desc={service.desc} leftOrRight="left"/>
          {/each}
        </div>
        <!-- divider -->
        <div class="h-4/5 border border-gray-600 self-center"></div>

        <div class="w-full">
          {#each servicesRight as service (service.service)}
            <Services icon={service.icon} service={service.service} desc={service.desc} leftOrRight="right"/>
          {/each}
        </div>
      </div>
    </section>
  </div>

	<!-- Wavy div to break section -->
	<div style="height: 150px; overflow: hidden;">
		<svg class="wavyFlip" viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"
			><path
				d="M-4.51,82.40 C150.00,150.00 271.49,-49.98 515.80,105.08 L500.00,0.00 L0.00,0.00 Z"
				style="stroke: none;  --darkreader-inline-stroke: none; --darkreader-inline-fill: #33a6ff;"
				data-darkreader-inline-stroke=""
				data-darkreader-inline-fill=""
			></path></svg
		>
	</div>

  <!-- Why choose us -->
  <div class="wavy flex justify-center w-full">
    <section class="w-full max-w-7xl flex flex-col justify-center">
      <h2 class="font-bold text-2xl">Why Choose SnackMaster Vending Solutions?</h2>
      <section class="aboutMe h-12 rounded-lg">
        <!-- text -->
        <div>
          <h2 class="font-bold text-lg">Reliability</h2>
          <p>
            With SnackMaster, you can count on dependable vending services that are always there when you need them.
          </p>
        </div>
      </section>
      <!-- <section>
        Variety: We offer an extensive selection of snacks and beverages to please every palate and dietary need.
      </section>
      <section>
        Convenience: Our hassle-free placement, maintenance, and restocking services make vending easy and stress-free for you.
      </section>
      <section>
        Exceptional Customer Service: We pride ourselves on delivering superior customer service and building lasting relationships with our clients.
      </section> -->
    </section>
  </div>


</main>

<style lang="scss">
	#hero {
		width: full;
		position: relative;

		img {
			width: 400px;
		}
	}

  .aboutMe{
    background-color: $background;
    width: 100%;
    border: 2px solid $dark-accent;
  }

	.wavy {
		// background-color: rgb(94, 192, 194);
    background-color: $primary-accent;
	}

  .wavyFlip {
    // -webkit-transform: scale(-1, -1);
    transform: scale(-1);
  }

  path {
    fill: $primary-accent;
  }
</style>
