import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
import PaletteFooter from "./PaletteFooter";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
  },
};

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors
        />

        {/* Navbar goes here */}
        <div className={classes.colors}>{colorBoxes}</div>
        {/* Footer goes here */}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);

// import React, { Component } from "react";
// import ColorBox from "./ColorBox";
// import Navbar from "./Navbar";
// import PaletteFooter from "./PaletteFooter";
// import "./Palette.css";

// class Palette extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { level: 500, format: "hex" };
//     this.changeLevel = this.changeLevel.bind(this);
//     this.changeFormat = this.changeFormat.bind(this);
//   }
//   changeLevel(level) {
//     this.setState({ level });
//   }
//   changeFormat(val) {
//     this.setState({ format: val });
//   }
//   render() {
//     const { colors, paletteName, emoji, id } = this.props.palette;
//     const { level, format } = this.state;
//     const colorBoxes = colors[level].map((color) => (
//       <ColorBox
//         background={color[format]}
//         name={color.name}
//         key={color.id}
//         moreUrl={`/palette/${id}/${color.id}`}
//         showingFullPalette
//       />
//     ));
//     return (
//       <div className="Palette">
//         <Navbar
//           level={level}
//           changeLevel={this.changeLevel}
//           handleChange={this.changeFormat}
//           showingAllColors
//         />
//         <div className="Palette-colors">{colorBoxes}</div>
//         <PaletteFooter paletteName={paletteName} emoji={emoji} />
//       </div>
//     );
//   }
// }
// export default Palette;
