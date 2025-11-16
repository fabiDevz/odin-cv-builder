function InputCard(props)
{
return <>
    <div>
        <h2>{props.title} </h2>
        {props.nameInput.map((name, index) => (
        <div key={index}>
          <h3>{name}:</h3>
          <input />
        </div>
      ))}

    </div>


</>

}

export default InputCard;