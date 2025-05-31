
const Contact = () => {
  return (
      <section
        id="contact"
        className="py-16"
        style={{ backgroundColor: '#021C1E' }}
      >
        <div className="text-black mx-auto max-w-screen-lg">
          <header>
            <div className="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
              <div
                className="h-[1px] w-10 bg-amber-200 md:w-20"
                data-aos="zoom-in-left"
                data-aos-duration="600"
              ></div>
              &nbsp; Contact Me
            </div>
          </header>
          <form className="mt-4 max-w-md mx-auto bg-white/30 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 rounded-md"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded-md"
                required
              />
              <textarea
                placeholder="Your Message"
                className="p-2 rounded-md"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="shadow bg-green-600 text-white p-2 rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <button
          id="backToTop"
          className="shadow back-to-top hidden rounded-md bg-red-600 text-white"
        >
          ↑
        </button>
      </section>
  )
}

export default Contact
