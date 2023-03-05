export async function load({ fetch, params }) {
	const {category, product} = params
	// console.log(params)
	// const response = await fetch(`http://127.0.0.1:8080/api/${category}/${product}`)
	const response = await fetch(`https://product-api-test.vercel.app/api/${category}/${product}`)
	const products = await response.json()
	return {
		title: product,
		products
	};
}