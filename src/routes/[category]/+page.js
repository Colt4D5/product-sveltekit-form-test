export async function load({ fetch, params }) {
  const {category} = params
  console.log(category)
  // const response = await fetch(`http://127.0.0.1:8080/api/${category}/shampoo`)
  const response = await fetch(`https://product-api-test.vercel.app/api/${category}/shampoo`)
  const products = await response.json()
  return {products, category};
}