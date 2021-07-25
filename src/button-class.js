export class Buttonclass extends React.component {
  state = {
    count:0,
  }

  handleOnClick = () => {
    const {count} = this.state;
    this.setState({ count : count + 1});
  };

  render() {
    //??
  }
}