import Header from "../components/Header"

const ReviewTask = () => {
  return (
    <main className="apply_page-style">
      <div className="flex flex-col items-center w-full">
        <Header />
        <div className="flex flex-col mt-12 items-center">
          <h1 className="font-extrabold text-3xl">
            REVIEWING YOUR TASK
          </h1>
          <p className="text-xs xr:text-sm text-center">
            Give us a moment while we review your task
          </p>
        </div>
        <img src="/review.png" alt="review" />
      </div>
    </main>
  )
}

export default ReviewTask