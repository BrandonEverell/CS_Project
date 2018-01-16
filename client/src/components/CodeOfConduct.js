import React from 'react';

function CodeOfConduct (props) {
  const textOrange = {
    color: 'orangeRed',
    backgroundColor: 'Gainsboro',
    margin: '0'
  }

  const style = {
    backgroundColor: 'Gainsboro',
    margin: '0'
  }

return (
  <div className="CodeOfConduct card" style={style}>
  <div className="card-content">
    <h1 style={textOrange}> CODE OF CONDUCT </h1>
    <p style={textOrange}> This community has been built on the strong values of respect, care, and responsibility for people and the areas we interact with. Ignorant, disrespectful, or damaging behaviour isn't tolerated.</p>
    <p> We're all in this one together, so please, don't be that person. We have some simple rules we live by up here.</p>

    <p className="row">READ MORE<i className="material-icons">add</i></p>

  </div>
</div>
)
}

export default CodeOfConduct;
