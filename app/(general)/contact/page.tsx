import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact page',
  keywords: ['contact page', 'carlos'],
}

export default function Contact() {
  return (
    <>
      <span className='text-7xl'>CONTACT PAGE</span>
    </>
  )
}
