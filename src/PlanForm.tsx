import { useState } from "react"
export function PlanForm() {
	return (
		<>
			<h1>Select your plan</h1>
			<small>You have the option of monthly or yearly billing</small>
			<div className="planOptions">
				<button className="planButton">
					Arcade
					<br />
					<small>$9/mo</small>
				</button>
				<button className="planButton">
					Advanced
					<br />
					<small>$12/mo</small>
				</button>
				<button className="planButton">
					Pro
					<br />
					<small>$15/mo</small>
				</button>
			</div>
			<label className="switch">
				<input type="checkbox" />
				<span className="slider round"></span>
			</label>
		</>
	)
}
