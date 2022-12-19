import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { multiStepForm } from "./multiStepForm"
import { UserForm } from "./UserForm"

function App() {
	const { steps, currStepIndex, step, isFirstForm, isLastForm, back, next } =
		multiStepForm([<UserForm />, <div>2</div>])

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
								Back
							</button>
						)}
						<button type="button" onClick={next}>
							{isLastForm ?  "Submit" : "Next"} 
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default App
