import { ResetIcon } from "@radix-ui/react-icons"

function ResetButton({setCount}) {
    const handleResetCount = (event) => {
        setCount(0)
        event.currentTarget.blur()
    }

    return <button className="reset-btn" onClick={handleResetCount} >
        <ResetIcon className="reset-btn-icon"/>
    </button>
}

export default ResetButton