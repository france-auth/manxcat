import Header from "../components/Header"
import Button from "../components/ui/Button"

const ApproveTask = () => {
  return (
    <main className="apply_page-style">
      <div className="flex flex-col items-center w-full">
        <Header />
        <div className="flex flex-col mt-12 items-center">
          <h1 className="font-extrabold text-3xl">
            APPROVED
          </h1>
          <p className="text-xs xr:text-sm text-center">
            Your Task has been approved and ready to be published
          </p>
        </div>
        <img src="/review.png" alt="approved" />
        <Button name="PUBLISH TASK" />
      </div>
    </main>
  )
}

export default ApproveTask