
function PhotoControls({onNext, onPrevious, onColor, onBlackAndWhite}){
   return (

    <p className="hero-buttons">
      <button onClick={onPrevious}>Previous Photo</button>
      <button onClick={onNext}>Next Photo</button>
      <button onClick={onColor}>Color Photo</button>
      <button onClick={onBlackAndWhite}>Black and White Photo</button>
    </p>
   )
}

export default PhotoControls