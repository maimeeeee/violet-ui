<svelte:options
  customElement={{
    tag: 'violet-icon-button',
    accessors: true,
    props: {
      size: { reflect: true, type: 'Number', attribute: 'size' },
      fill: { reflect: true, type: 'Boolean', attribute: 'fill' },
    },
  }}
/>

<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements'
  import Icon from '../icon/Icon.svelte'

  export let type: HTMLButtonAttributes['type'] = 'button'
  export let size = 32
  export let fill = false
  export let color = 'var(--primary-600)'
  export let variants: 'outlined' | 'filled' | 'text' = 'text'

  const backgroundColor = {
    outlined: 'transparent',
    filled: color,
    text: 'transparent',
  }[variants]
</script>

<button
  {type}
  style="width: {size}px; height: {size}px; background-color: {backgroundColor};"
>
  <Icon size={size * 0.75} {fill} {color}>
    <slot />
  </Icon>
</button>

<style>
  button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 999px;
  }

  button::before {
    position: absolute;
    inset: 0;
    content: '';
    background-color: var(--interactive-hover);
    border-radius: 999px;
    opacity: 0;
  }

  button:hover::before {
    opacity: 1;
  }
</style>
