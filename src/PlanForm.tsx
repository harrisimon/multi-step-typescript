import { useState } from "react"
export function PlanForm() {
   
	return (
		<>
			<div className="planButton">
				Arcade<small>$9/mo</small>
			</div>
			<div className="planButton">
				Advanced
				<small>$12/mo</small>
			</div>
			<div className="planButton">
				Pro<small>$15/mo</small>
			</div>
			<label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
		
		</>
	)
}
