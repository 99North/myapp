import React, { useState } from 'react'

function BMICalculatorPage() {

    const [height, setHeight]=useState(null)
    const [weight, setWeight]=useState(null);
    const [bmi, setBmi]=useState(null)
    const [category, setCategory]=useState(null)

    const calculateBMI=()=>{
        if(weight && height){
            const bmiValue=(weight/((height/100) ** 2)).toFixed(2)
            setBmi(bmiValue)
            categorizeBMI(bmiValue)
        }
    }


    const categorizeBMI = (bmiValue) => {
        if (bmiValue < 18.5) {
            setCategory('Underweight');
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            setCategory('Normal weight');
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            setCategory('Overweight');
        } else {
            setCategory('Obesity');
        }
    };
  return (
    <div>
        <h1>BMICalculator</h1>

        <div>
        <input 
            type='number' 
            name='height'
            value={height} 
            placeholder='Enter height' 
            onChange={(e)=>setHeight(e.target.value)}
            ></input>

        <input 
            type='number' 
            name='weight' 
            placeholder='Enter Weight'
            value={weight}
            onChange={(e)=>setWeight(e.target.value)}
            ></input>

            <h1>Your BMI: {bmi}</h1>
            <h2>Catagory: {category}</h2>

        <button onClick={calculateBMI}>Calculate</button>

        {
            bmi && (
                <div>
                    <h3>Your BMI: {bmi}</h3>
                    <p>Category: {category}</p>

                    </div>
            )
        }
        </div>
    </div>
  )
}

export default BMICalculatorPage