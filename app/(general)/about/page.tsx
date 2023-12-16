import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
  keywords: ['about page', 'carlos'],
}

export default function About() {
  return (
    <>
      <span className='text-7xl'>ABOUT PAGE</span>
    </>
  )
}
