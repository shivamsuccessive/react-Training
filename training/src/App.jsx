import React from 'react';
import './App.css';
import Slider from './components/Slider';
import Welcome from './components/TextField/index';
// import styles from './components/TextField/style';
// import TextFieldDemo from './pages/TextFieldDemo';
import SelectField from './components/SelectField'
import RadioGroup from './components/RadioGroup'
import InputDemo from './pages/InputDemo'
import Math from './components/Math/math'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: '',
      invalid: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.isValid(this.state);
  }

  isValid(arg) {
    arg.valid !== '' ? this.setState({ validClass: "success"}) : this.setState({ validClass: "error"});
    Number.isInteger(arg.invalid) >= 0 && !isNaN(parseInt(arg.invalid)) ? this.setState({inValidClass: "success"}) : this.setState({inValidClass: "error"});
  }

  render() {
    return (
    <div>
      {/* <InputDemo /> */}
      {/* <RadioGroup /> */}
      <Math first="3" second="2" operator="*" />
      {/* <TextFieldDemo /> */}
      {/* <Slider random={1} banners = {[1,2,3]}/> */}
      {/* <Slider />
      <Welcome validClass={this.state.validClass} valid={this.state.valid} invalid={this.state.invalid} inValidClass={this.state.inValidClass} onChange={this.handleChange} stylesheet={styles} ></Welcome> */}
    </div>
    );
  }
}
export default App;
