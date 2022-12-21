export function UserForm() {
   return <>
   <h1> Personal Info</h1>
   <small>Please provide your name, email address, and phone number.</small>
    <label>
        Name
        <input autoFocus required type="text"/>
    </label>
    <label>
        Email
        <input  required type="text"/>
    </label>
    <label>
        Phone Number
        <input  required type="text"/>
    </label>
    </>
}