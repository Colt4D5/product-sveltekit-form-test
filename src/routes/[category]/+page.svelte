<script>
  export let data;
  const {products, category} = data
  console.log(products, category)
  import checked from '$lib/assets/checked.svg'
</script>

<div class="container">
  <h1>{category}</h1>
  <div id="products">
    {#each products.products as product, i (i)}
      <div class="product">
        <label for={`${product.title}-${i}`}>
          <h2>{product.title}</h2>
          <input hidden type="checkbox" id={`${product.title}-${i}`} name={`${product.title}-${i}`} />
          <img class="product-img" src="{product.img}" alt="{product.alt}" />
          <div class="check">
            <img src={checked} alt="check" />
          </div>
        </label>
        <p class="price">${product.price}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 900px;
    margin-inline: auto;
  }
  h1 {
    width: 100%;
    background-color: palegreen;
    text-align: center;
    padding-block: 1rem;
    margin-block-end: 0;
  }
  #products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .product {
    border-radius: 0.5rem;
    box-shadow: 4px 3px 6px rgb(0 0 0 / 0.15);
  }
  img.product-img {
    display: block;
    margin-inline: auto;
    max-width: 200px;
    max-height: 300px;
  }
  .product label {
    position: relative;
    z-index: 9;
    cursor: pointer;
  }
  .product label .check img {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    margin-inline: auto;
    max-width: 200px;
    max-height: 300px;
    transition: opacity 0.75s ease;
    opacity: 0;
    pointer-events: none;
  }
  .product label input:checked ~ .check img {
    opacity: 1;
  }
</style>
