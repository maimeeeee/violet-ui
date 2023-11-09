<svelte:options
  customElement={{
    tag: 'violet-icon',
    accessors: true,
    props: {
      size: { reflect: true, type: 'Number', attribute: 'size' },
      fill: { reflect: true, type: 'Boolean', attribute: 'fill' },
    },
  }}
/>

<script>
  export let fill = false
  export let color = 'var(--icon)'
  export let size = 32 * 0.75
</script>

<span
  class="material-symbols-outlined"
  class:fill
  style=" font-size:{size}px; color: {color};"
>
  <slot />
</span>

<style>
  .material-symbols-outlined {
    display: inline-block;
    /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
    font-family: 'Material Symbols Outlined';
    font-size: 24px;
    font-style: normal;
    font-weight: normal;
    font-feature-settings: 'liga';
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
  }

  .fill {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }
</style>
