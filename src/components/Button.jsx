import React from "react";
import '../style-sheet/Button.css'

function Button({ texto, esClickButton, handlingClick }) {
  return (
    <button className={ esClickButton ? 'click-button' : 'reset-button' }
    onClick={handlingClick}>
      {texto}
    </button>
  );
}

export default Button;