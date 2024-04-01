<script lang="ts">
	import vendingMachineAlley from '$lib/assets/images/vendingMachineAlley.jpg';
	import vendingMachineBuilding from '$lib/assets/images/vendingMachineBuilding.png';
	import VendingDisplay from '$lib/assets/images/VendingDisplay.png';
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
				style="stroke: none; fill: rgb(94, 192, 194); --darkreader-inline-stroke: none; --darkreader-inline-fill: #33a6ff;"
				data-darkreader-inline-stroke=""
				data-darkreader-inline-fill=""
			></path></svg
		>
	</div>

  <div class="w-full flex justify-center">
    <div class="max-w-7xl">
      about us
    </div>
  </div>
</main>

<style lang="scss">
	$background: #e6f4f1;

	#hero {
		width: full;
		position: relative;

		img {
			width: 400px;
		}
	}

	.wavy {
		background-color: rgb(94, 192, 194);
	}

	:global(body) {
		background-color: $background;
	}
</style>
