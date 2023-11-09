<svelte:options
  customElement={{
    tag: 'violet-drawer',
    accessors: true,
    props: {
      size: { reflect: true, type: 'Number', attribute: 'size' },
      open: { reflect: true, type: 'Boolean', attribute: 'open' },
    },
  }}
/>

<script>
  export let open = false
  $: {
    console.log('LOG: click menu', { open })
  }
</script>

<aside class:open>
  <nav>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
</aside>

<style>
  aside {
    position: fixed;
    left: -100%;
    height: 100%;
    background-color: var(--neutral-200);
    box-shadow: var(--neutral-a60);
    transition: left 0.3s ease-in-out;
  }

  nav {
    padding: 16px;
  }

  a {
    display: block;
  }

  .open {
    left: 0;
  }
</style>
