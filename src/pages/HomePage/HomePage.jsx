// import ButtonMain from 'components/ButtonMain/ButtonMain';

import ButtonMain from 'components/ButtonMain/ButtonMain';

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <ButtonMain>normal</ButtonMain>
      <ButtonMain $primary className="secondary">
        primary
      </ButtonMain>
      {/* <ButtonMain onClick={() => alert("Main button clicked")}>
        Primary
      </ButtonMain>
      <ButtonMain
        onClick={() => alert("Main button clicked")}
        className="secondary"
      >
        Secondary
      </ButtonMain> */}
    </div>
  );
};
export default HomePage;
