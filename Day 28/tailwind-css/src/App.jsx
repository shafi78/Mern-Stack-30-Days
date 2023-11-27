
function App() {

  return (
    <>
    <div className="mt-20 mx-52 flex flex-wrap rounded border-2 border-slate-200">
    <div className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white h-24 text-xl flex justify-center items-center font-bold">
      New you can Trust
    </div>

    <div className="text-center mt-6 w-full">
      <h3 className="text-lg font-semibold">Stay upto date with the latest</h3>
      <p>Subscribe to our newletter for the latest new straight into your inbox</p>

      <form action="" className="flex flex-wrap">
        <input type="text" placeholder="your@email.com" className="w-full bg-slate-200 text-center placeholder:text-sm m-4 py-2" />
        <button className="bg-blue-500 w-full text-white mx-5 my-2 py-2 rounded-full">Subscribe Now</button>
      </form>

      <p className="m-6 text-sm">We value your privacy</p>
    </div>
    </div>
    </>
  )
}

export default App
