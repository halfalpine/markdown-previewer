const Output = ({text}) =>
  <div className="md-component">
    <h2>This is the Output.</h2>
    <div
      className="textarea-output"
      dangerouslySetInnerHTML={{__html: marked(text, {breaks: true})}}
    />
  </div>

export default Output;
