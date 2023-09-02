import Footer from "src/Components/Footer"
import RegisterHeader from "src/Components/RegisterHeader"

interface Props {
  children?: React.ReactNode
}

export default function registerLayout({children}: Props) {
  return (
    <div>
      <RegisterHeader></RegisterHeader>
      {children}
      <Footer></Footer>
    </div>
  )
}
