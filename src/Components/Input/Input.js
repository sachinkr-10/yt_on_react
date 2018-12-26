import React from 'react'

const Input = (props) => {

    return(
        <form class="form-inline col-md-9 container" style={{margin : '10px'}}>
  <div class="form-group mx-sm-3 col-md-10 mb-2">
    <input type="text" onBlur={props.changeHandler} class="form-control col-md-12" id="inputPassword2" placeholder={props.placeholder} />
  </div>
  <button class="btn btn-danger mb-2" onClick={props.submitHandler}>Search</button>
</form>
    )
}

export default Input