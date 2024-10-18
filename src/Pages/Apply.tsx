import Header from "../components/Header"
import Button from "../components/ui/Button"

const Apply = () => {
  return (
    <main className="apply_page-style">
      <div className="flex flex-col items-center w-full">
        <Header />
        <div className="flex flex-col mt-12 items-center">
          <h1 className="font-extrabold text-3xl">
            PUBLISH TASK
          </h1>
          <p className="text-xs xr:text-sm text-center">
            Input details of your Tasks to be published.
          </p>
          <form className="flex flex-col space-y-4 mt-8 w-full px-5 items-center">
            <div className="cards px-4 py-2 bg-[#EFD0CA80] space-y-2">
              <label htmlFor="task-title" className="text-xs xr:text-sm font-bold">
                Input Task Title
              </label>
              <input
                type="text"
                placeholder="TASK TITLE"
                id="task-title"
                name="task-title"
                required
                className="w-full px-3 py-2 rounded-full border outline-none focus:outline-none focus:ring-1 focus:ring-[#000807] focus:ring-opacity-100 text-xs xr:text-sm bg-[#FFFFFF4D] placeholder:text-[#000807] placeholder:xr:text-[15px] placeholder:font-extrabold"
              />
            </div>
            <div className="cards px-4 py-2 bg-[#EFD0CA80] space-y-2">
              <label htmlFor="task-description" className="text-xs xr:text-sm font-bold">
                Input Task Description
              </label>
              <textarea
                rows={15}
                placeholder="TASK DESCRIPTION"
                id="task-description"
                name="task-description"
                required
                className="resize-none w-full px-3 py-2 rounded-lg border outline-none focus:outline-none focus:ring-1 focus:ring-[#000807] focus:ring-opacity-100 text-xs xr:text-sm h-28 bg-[#FFFFFF4D] placeholder:text-[#000807] placeholder:xr:text-[15px] placeholder:font-extrabold"
              />
            </div>
            <div className="cards px-4 py-2 bg-[#EFD0CA80] space-y-2">
              <label htmlFor="task-title" className="text-xs xr:text-sm font-bold">
                Input Task duration
              </label>
              <input
                type="text"
                placeholder="TASK DURATION"
                id="task-duration"
                name="task-duration"
                required
                className="w-full px-3 py-2 rounded-full border outline-none focus:outline-none focus:ring-1 focus:ring-[#000807] focus:ring-opacity-100 text-xs xr:text-sm bg-[#FFFFFF4D] placeholder:text-[#000807] placeholder:xr:text-[15px] placeholder:font-extrabold"
              />
            </div>
            <div className="cards px-4 py-2 bg-[#EFD0CA80] space-y-2">
              <label htmlFor="amount" className="text-xs xr:text-sm font-bold">
                Amount To Earn
              </label>
              <input
                type="number"
                placeholder="50 DOLLARS"
                id="amount"
                name="amount"
                required
                className="w-full px-3 py-2 rounded-full border outline-none focus:outline-none focus:ring-1 focus:ring-[#000807] focus:ring-opacity-100  text-xs xr:text-sm bg-[#FFFFFF4D] placeholder:text-[#000807] placeholder:xr:text-[15px] placeholder:font-extrabold"
              />
            </div>
            <div className="cards px-4 py-2 bg-[#EFD0CA80] space-y-2">
              <label htmlFor="amount" className="text-xs xr:text-sm font-bold">
                Input CTA
              </label>
              <input
                type="text"
                placeholder="CTA"
                id="cta"
                name="cta"
                required
                className="w-full px-3 py-2 rounded-full border outline-none focus:outline-none focus:ring-1 focus:ring-[#000807] focus:ring-opacity-100  text-xs xr:text-sm bg-[#FFFFFF4D] placeholder:text-[#000807] placeholder:xr:text-[15px] placeholder:font-extrabold"
              />
            </div>
            <Button name="REVIEW"  />
          </form>
        </div>
      </div>
    </main>
  )
}

export default Apply