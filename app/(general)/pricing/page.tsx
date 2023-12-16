import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Pricing page',
  keywords: ['pricing page', 'carlos'],
}

export default function Pricing() {
  return (
    <>
      <span className='text-7xl'>PRICING PAGE</span>
    </>
  )
}
