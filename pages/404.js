import React from 'react'

function FourOhFour() {
  return (
    <div className="error">
      <h1>error 404</h1>
      <h1 className="text">page non trouvée :&apos;(</h1>
      <style jsx>{`
        .error {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
FourOhFour.layout = 'blog'

export default FourOhFour;