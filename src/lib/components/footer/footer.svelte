<script lang="ts">
	import Icon from '@iconify/svelte';

	let socials = [
		{
			site: 'Instagram',
			link: '/',
			icon: 'mdi:instagram'
		},
		{
			site: 'Facebook',
			link: '/',
			icon: 'mdi:facebook'
		},
		{
			site: 'Twitter',
			link: '/',
			icon: 'mdi:twitter'
		},
		{
			site: 'linkedIn',
			link: '/',
			icon: 'mdi:linkedin'
		}
	];

  export let form;
</script>

<footer class="w-full flex justify-center mb-8">
	<div class="w-full max-w-7xl flex flex-col">
    <!-- top row -->
    <div class="w-full flex flex-row justify-between my-2">
      <h3 class="self-center font-bold text-xl">Connect with us</h3>
      <!-- social icons -->
      <div class="flex">
        {#each socials as social (social.site)}
          <a href={social.link} class="p-4 border border-gray-500">
            <Icon icon={social.icon} width="24px" />
          </a>
        {/each}
      </div>
    </div>

    <!-- phone/email, email form -->
    <div class="flex">
      <!-- phone/email -->
      <div>
        <!-- phone -->
        <div>
          <p><span class="text-lg font-bold">Phone:</span> <a href="tel:1111111111">111-111-1111</a></p>
        </div>
        <div>
          <p><span class="text-lg font-bold">Email:</span> <a href="mailto:snackmaster@gmail.com">SnackMaster@gmail.com</a></p>
        </div>
      </div>
      <!-- email form -->
      <div>
        <fieldset>
          <legend>Send Emails</legend>
          <form method="POST" class="container" action="">
            <!-- to -->
            <div class="input">
              <label for="">To:</label>
              <input name="to" type="email" value="placeholder@gmail.com" />
            </div>
            <!-- subject -->
            <div class="input">
              <label for="">Subject:</label>
              <input name="subject" type="text" value="" />
            </div>
            <!-- message -->
            <div class="input">
              <label for="">Message:</label>
              <textarea name="message" rows="6" value="" />
            </div>
            <button type="submit">Send</button>
          </form>
          <p class="success">{form?.success || ""}</p>
        </fieldset>
      </div>

    </div>
	</div>
</footer>


<style lang="scss">
  footer {
    border-top: 2px solid $dark-accent;
  }

  .wrapper {
    max-width: 800px;
    margin: 2em auto;
  }

  fieldset {
    padding: 2em;
    box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
  }

  legend {
    font-weight: bold;
    font-size: 2em;
    padding: 0 0.25em;
    color: #333;
  }

  .container {
    max-width: 400px;
  }

  .input {
    display: grid;
    margin-bottom: 1.5em;
  }

  label {
    font-weight: 600;
    margin-bottom: 0.25em;
    color: #555;
  }

  input {
    padding: 5px;
  }

  button {
    cursor: pointer;
    padding: 0.5em 1em;
    border-radius: 4px;
    border: 1px solid rgb(5, 151, 64);
    background-color: rgb(5, 151, 64);
    color: white;
  }

  .success {
    color: #0a5;
  }

</style>