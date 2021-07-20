<script>
  const footerItems = [
    "About",
    "Help Center",
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Ads info",
    "Blog",
    "Status",
    "Careers",
    "Brand Resources",
    "Advertising",
    "Marketing",
    "Twitter for Business",
    "Developers",
    "Directory",
    "Settings",
  ];
</script>

<footer class="px-10 text-xs text-gray-200 text-opacity-50 py-1">
  <ul class="flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
    <li class="cursor-pointer hover:underline pt-1">About</li>
    {#each footerItems as item}
      <li class="cursor-pointer hover:underline pt-1">{item}</li>
    {/each}
    <li class="p-1">© 2021 Twitter, Inc.</li>
  </ul>
</footer>
