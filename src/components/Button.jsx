const Button = (props) => {
    return(
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-5 rounded" onClick={props.klik}>{props.text}</button>
    )
  }
  
export default Button