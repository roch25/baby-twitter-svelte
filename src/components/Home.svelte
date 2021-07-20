<script>
  import Banner from "./Banner.svelte";
  import Footer from "./Footer.svelte";
  let loggedIn = false;

  $: title = loggedIn
    ? "Home / Twitter"
    : "Twitter, It'a what's happening / Twitter";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#if loggedIn}
  <p>Logged in!</p>
{:else}
  <div class="flex flex-col-reverse lg:flex-row">
    <Banner />
    <div class="py-4 px-10 flex flex-col justify-around h-96 lg:h-auto ">
      <img src="/baby-twitter.svg" alt="baby-twitter" width="80" />
      <h1 class="sm:text-6xl font-bold tracking-tight text-4xl">
        Happening now
      </h1>
      <h3 class="sm:text-4xl font-bold tracking-tight text-2xl">
        Join Twitter today.
      </h3>
      <div
        class="flex flex-col sm:flex-row justify-around sm:w-82 lg:flex-col gap-y-4 gap-x-2"
      >
        <button class="btn bg-primary text-white hover:bg-opacity-50"
          >Sign up</button
        >
        <button class="btn bg-primary bg-opacity-0 hover:bg-opacity-5"
          >Log in</button
        >
      </div>
    </div>
  </div>
{/if}
<Footer />

<style>
  .btn {
    @apply rounded-full border-2 min-w-max w-2/6 border-primary py-2 px-6 rounded-full border-2 border-primary transition ease-out delay-200 text-sm;
  }
</style>
