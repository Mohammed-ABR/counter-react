const ButtonGroup = ( {handleIncrement, handleDecrement, handleReset} ) => {
    return(
<div className= "btn-group">
            <button className= "btn primary" onClick={handleDecrement}>-</button>
            <button className= "btn reset" onClick={handleReset}>Reset</button>
            <button className= "btn primary" onClick={handleIncrement}>+</button>
        </div>
    );
}
export default ButtonGroup;