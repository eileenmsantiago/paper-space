import React from 'react';
import Switch from 'react-ios-switch';

class ToggleButton extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        checked: false,
      };
    }
    
    render() {
      const { checked } = this.state;
      
      return (
        <Switch
          checked={checked}
          className="toggle"
          onChange={checked => this.setState({ checked })}
          offColor="#E79C88"
          onColor="#5881EA"
          handleColor="white"
        />
      );
    }
  }

  export default ToggleButton;