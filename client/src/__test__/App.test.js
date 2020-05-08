import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import App from "../App";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
