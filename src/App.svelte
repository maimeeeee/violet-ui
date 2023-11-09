<script lang="ts">
  let open = false
  const clickMenu = () => {
    open = !open
  }
</script>

<main class="container">
  <header>
    <violet-icon-button
      tabindex={-1}
      role="button"
      on:keydown|preventDefault={clickMenu}
      on:click|preventDefault={clickMenu}
      color="var(--primary-50)">menu</violet-icon-button
    >
  </header>
  <article>
    <h1>Violet-UI</h1>
  </article>
  <violet-drawer style="display: contents;" {open} />
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(
      180deg,
      var(--primary-400) 0%,
      var(--primary-100) 100%
    );
  }

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 48px;
    padding: 0 8px;
  }

  article {
    flex: 1;
    width: 100%;
    color: var(--text-secondary);
  }

  h1 {
    font-size: 64px;
    font-weight: lighter;
  }
</style>
