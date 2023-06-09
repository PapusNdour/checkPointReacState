import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Papus NDOUR',
      bio : "Expérimenté, j'assure la planification, l'organisation et la coordination de projets de grande envergure. Grâce à mes compétences en gestion, je guide et motive les équipes pour atteindre les objectifs fixés dans les délais impartis. Doté d'une excellente vision stratégique, je garantis la réussite et la qualité des projets, tout en assurant une communication fluide entre toutes les parties prenantes.",
      //imgSrc: '/path/to/image.jpg',
      imgSrc: "data:image/jpeg;base64,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",

      profession: 'Responsable projet - web Developer',
    },
    show: false,
    mountingTime: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountingTime: prevState.mountingTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
      mountingTime: 0,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountingTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleProfile}>
          {show ? 'Cacher le Profile' : 'Montrer le profile'}
        </button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt="Profile" />
            <p>{profession}</p>
          </div>
        )}
        <p>Temps de montage: {mountingTime} seconds</p>
      </div>
    );
  }
}

export default App;