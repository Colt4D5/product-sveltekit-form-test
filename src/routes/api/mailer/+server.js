import nodemailer from 'nodemailer'

export const POST = async ({ request }) => {
  const products = await request.json()
  console.log(products)

  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'allen.colton@hotmail.com',
      pass: '1Muffinita!'
    }
  })

  let emailMarkup = ''
  
  products.forEach(prod => emailMarkup += `
    <h2>${prod}</h2>
    <button>Buy Now</button>
  `)
  
  const mailOptions = {
    from: 'allen.colton@hotmail.com',
    to: 'colton@immarketinggroup.com',
    subject: 'Test subject',
    html: emailMarkup
  }

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err)
        reject(err)
        // return json('error')
      } else {
        console.log(`Email sent: ${info.response}`)
        resolve(info)
        // return json('Success!')
      }
    })
  })

  return new Response(JSON.stringify({products}), { status: 200 })
}