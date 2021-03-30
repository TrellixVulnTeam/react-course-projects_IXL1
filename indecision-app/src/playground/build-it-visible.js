class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Title</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>

        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
// let see = false;
// const toggleText = () => {
//   see = !see;
//   render();
// };
// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Title</h1>
//       <button onClick={toggleText}>
//         {see ? "Hide details" : "Show details"}
//       </button>
//       {see && (
//         <div>
//           <p>Hey. These are some details you can see!</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();
