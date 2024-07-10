// app/page.js
import { redirect } from 'next/navigation'
import '../app/globals.css'

export default function HomePage() {
  redirect('/login')
  return null
}
