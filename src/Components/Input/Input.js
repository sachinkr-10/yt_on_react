import React from 'react'

const Input = (props) => {

    return(
        <form class="form-inline">
  
  <div class="form-group mx-sm-3 mb-2">
    <input type="text" onBlur={props.changeHandler} class="form-control" id="inputPassword2" placeholder={props.placeholder} />
  </div>
  <button class="btn btn-primary mb-2" onClick={props.submitHandler}>Search</button>
</form>
    )
}

export default Input