import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    throw redirect(302, '/hair-care/shampoo');
    // const response = await fetch('http://127.0.0.1:8080/api/hair-care/shampoo')
    const response = await fetch('https://product-api-test.vercel.app/api/hair-care/shampoo')
    const products = await response.json()
    return {products};
};