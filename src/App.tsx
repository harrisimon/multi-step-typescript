import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { multiStepForm } from "./multiStepForm"
import { UserForm } from "./UserForm"
import { PlanForm } from "./PlanForm"
import { AddOnForm } from "./AddOnForm"
import { ReviewPage } from "./ReviewPage"

function App() {
	const { steps, currStepIndex, step, isFirstForm, isLastForm, back, next } =
		multiStepForm([<UserForm />, <PlanForm />, <AddOnForm />, <ReviewPage />])

	return (
		<div className="App">
			multi-step
			<form>
				<div>
					{currStepIndex + 1} / {steps.length}
					{step}
					<div>
						{!isFirstForm && (
							<button type="button" onClick={back}>
								Go Back
							</button>
						)}
						<button type="button" onClick={next}>
							{isLastForm ?  "Submit" : "Next Step"} 
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default App
