
const Footer = () => {
  const tahun = new Date().getFullYear()
  return (
    <footer id="footer" className="mt-5 bg-black text-center">
        <div className="text-white mx-auto max-w-screen-lg p-4">
            <p>© {tahun} Febri. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
