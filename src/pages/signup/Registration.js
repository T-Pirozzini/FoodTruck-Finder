import styles from './Signup.module.css'
import { useState } from 'react'
import MyTruckLocationMap from "./MyTruckLocation"


export default function Registration() {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log("EMAIL:", email)
  //   console.log("PASSWORD:", password)
  // }

  return (
    <form  className={styles['login-form']}>
      <h2>Register Your FoodTruck</h2>
      <label>
        <span>Name:</span>
        <input 
        // type="email"
        // onChange={(e) => setEmail(e.target.value)}
        // value={email} 
        />        
      </label>
      <label>
        <span>Password:</span>
        {/* <input type="password" */}
        {/* // onChange={(e) => setPassword(e.target.value)}
        // value={password}
        /> */}
      </label>
      <label>
        <span>Info:</span>
        {/* <input type="password" */}
        {/* // onChange={(e) => setPassword(e.target.value)}
        // value={password}
        /> */}
      </label>
      <label>
        <span>Latitude:</span>

      </label>
      <label>
        <span>Longitude:</span>
      </label>
      <button className="btn">Submit</button>

      <MyTruckLocationMap />
    </form>    
  )
}