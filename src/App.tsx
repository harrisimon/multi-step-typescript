import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { multiStepForm } from "./multiStepForm"
import { UserForm } from "./UserForm"
import { PlanForm } from "./PlanForm"
import { AddOnForm } from "./AddOnForm"
import { ReviewPage } from "./ReviewPage"
import "./assets/fonts/Ubuntu-Regular.ttf"

function App() {
	const { steps, currStepIndex, step, isFirstForm, isLastForm, back, next } =
		multiStepForm([
			<UserForm />,
			<PlanForm />,
			<AddOnForm />,
			<ReviewPage />,
		])

	return (
		<div className="App">
			
			<div className="form">
				<div>
					<div className="steps">
						{currStepIndex + 1} / {steps.length}
						<form>{step}</form>
						<div className="nav-buttons">
							{!isFirstForm && (
								<button type="button" onClick={back}>
									Go Back
								</button>
							)}
							<button type="button" onClick={next}>
								{isLastForm ? "Submit" : "Next Step"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
