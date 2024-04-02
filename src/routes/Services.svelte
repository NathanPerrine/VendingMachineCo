<script lang="ts">
  type Props = {
    icon: string;
    service: string;
    desc: string;
    leftOrRight: string;
  }
  let { icon, service, desc, leftOrRight }: Props = $props();
</script>

<section class="flex w-full border-2 rounded-md h-48 my-4 p-2">
  <img src={icon} alt="vending machine icon" class={"w-16 h-16 m-4 border-2 rounded-full self-center "  + (leftOrRight === 'left' ? "order-1" : "order-2") }/>
  <div class={leftOrRight === 'left' ? "order-2" : "order-1"}>
    <h3 class="font-bold text-xl text-center">{service}</h3>
    <p>{desc}</p>
  </div>
</section>

<style lang="scss">
  section{
    background-color: $primary-accent;
    border-color: $dark-accent;
  }

  img {
    border-color: $med-accent;
    background-color: $light-accent;
  }
</style>