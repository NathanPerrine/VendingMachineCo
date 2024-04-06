<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let form: PageData;
</script>

<!-- email form -->
<div class="w-full flex justify-center">
	<div class="max-w-7xl flex h-[75vh] items-center">
		<form class="w-full max-w-lg" method="POST" use:enhance action="?/sendEmail">
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<!-- First Name -->
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="firstName"
					>
						First Name
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						name="firstName"
						type="text"
						placeholder="Jane"
					/>
					<!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
				</div>
				<div class="w-full md:w-1/2 px-3">
					<!-- Last Name -->
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="lastName"
					>
						Last Name
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						name="lastName"
						type="text"
						placeholder="Doe"
					/>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
          <!-- email -->
          <div class="mb-2">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
              Email
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="email" placeholder="JaneDoe@gmail.com" />
          </div>
          <!-- Message area -->
					<div>
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="message"
						>
							Message
						</label>
						<textarea
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							name="message"
							rows="6"
							placeholder="Hi! I'd like to request a site survey for your free vending machine placements at my office/break room/rest stop."
						/>
					</div>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-2">
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="city"
					>
						City
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						name="city"
						type="text"
						placeholder="Toledo"
					/>
				</div>
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="state"
					>
						State
					</label>
					<div class="relative">
						<select
							class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							name="state"
						>
							<option selected>Ohio</option>
							<option>Michigan</option>
						</select>
						<div
							class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
						>
							<svg
								class="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								><path
									d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
								/></svg
							>
						</div>
					</div>
				</div>
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="zip"
					>
						Zip
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						name="zip"
						type="text"
						placeholder="43601"
					/>
				</div>
			</div>
			<div class="w-full flex justify-center">
				<button class="w-1/2 rounded-md p-2" type="submit">Send &rarr;</button>
			</div>
		</form>
	</div>
</div>

<style lang="scss">
	textarea,
	input {
		border: 2px solid $primary-accent;
	}

	button {
		background-color: $primary-accent;
		border: 2px solid $background;
	}
</style>
