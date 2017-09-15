const Input = ({text, handleInputChange}) =>
  <div className="md-component">
    <h2>This is the Input.</h2>
    <form className="textarea-input">
      <textarea
        autoFocus={false}
        type="text"
        value={text}
        onChange={handleInputChange}
      >
      </textarea>
    </form>
  </div>

export default Input;
