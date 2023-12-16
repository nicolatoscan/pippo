<script lang="ts">
  import Header from "./components/Top.svelte";
</script>

<div>
  <div id="header" class="header"><Header /></div>
</div>

<style>
  :global(*) {
    box-sizing: border-box;
  }
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: monospace;
  }
  .header {
    margin-bottom: 100vh;
  }
</style>
