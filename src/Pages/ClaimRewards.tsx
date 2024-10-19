import ButtoN from "../components/ui/Button"

const ClaimRewards = () => {
  return (
    <main className='page-style'>
      <div className="flex flex-col items-center gap-10 mt-3">
        <div className="flex flex-col items-center">
          <img 
            src="/friends/gold-stack.png" 
            alt="gold stack" 
          />
          <p className="text-4xl font-extrabold text-center">5000</p>
          <p className="text-sm text-center">
            You have earned $5000 from growing your clique
          </p>
        </div>
        <ButtoN name="CLAIM REWARDS"  />
      </div>
    </main>
  )
}

export default ClaimRewards