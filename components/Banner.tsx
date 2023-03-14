
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10 font-['Poppins']">
      <div>
        <h1 className="text-6xl mb-4">Quality Articles Weekly</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to the {" "}
          <span className="underline decoration-4 decoration-[#1809ff]">World of Quality Discourses!</span>
        </h2>
      </div>

      <p  className="mt-5 md:mt-2 text-gray-400 max-w-sm"> The best quality tools | Real-world application of quality tools | Weekly articles & more!
      </p>
    </div>
  )
}

export default Banner