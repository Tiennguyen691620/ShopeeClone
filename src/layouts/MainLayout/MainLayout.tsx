import Header from 'src/Components/Header'
import './MainLayout.scss'
import Footer from 'src/Components/Footer'
import React from 'react'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}
