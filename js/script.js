// Copyright (c) 2024 Julianne Leblanc-Peltier All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: March 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
    const numberInput = parseInt(document.getElementById("number-input").value)
  
  // output
  document.getElementById("number-output").innerHTML = " The number you put: " + numberInput
}
