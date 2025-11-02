import React from 'react'
import PricingTable from '../components/PricingTable'
import { ADDONS } from '../data/pricing'

export default function PricingPage() {
  return (
    <main className='py-16 bg-white text-gray-800'>
      <div className='max-w-6xl mx-auto px-4 space-y-12'>
        <header className='text-center space-y-3'>
          <h1 className='text-4xl font-bold'>Simple, Transparent Pricing</h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Every rental includes the essentials: tables and chairs, a custom floor plan, AV basics,
            load-in help, and post-event trash removal.
          </p>
        </header>

        <PricingTable />

        <section className='space-y-3'>
          <h2 className='text-2xl font-semibold'>Add-Ons</h2>
          <div className='overflow-x-auto border rounded-lg'>
            <table className='w-full text-left border-collapse'>
              <thead className='bg-gray-50 font-semibold text-gray-700'>
                <tr><th className='p-3'>Add-On</th><th>Details</th><th>Price</th></tr>
              </thead>
              <tbody className='divide-y'>
                {ADDONS.map((a) => (
                  <tr key={a.name}>
                    <td className='p-3 font-medium'>{a.name}</td>
                    <td>{a.details ?? ''}</td>
                    <td>{a.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}