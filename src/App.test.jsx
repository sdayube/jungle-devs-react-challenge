import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
// import axios from 'axios';
import App from './app';
import store from './store';

const providedApp = () => <Provider store={store}><App /></Provider>;

jest.mock('axios');

describe('Tests availability widget', () => {
  it('Checks if nanny info renders correctly', () => {
    render(providedApp());
    const linkElement = screen.getByText(/Sarah’s day care available now in North Sydney/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Checks if nanny available times render correctly', () => {
    render(providedApp());
    const linkElement = screen.getByText(/Wednesday, Thursday, Friday - 7:30 - 5:30/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Tests newsletter input validation warning', () => {
  it('Checks if submit button exists', () => {
    render(providedApp());
    const linkElement = screen.getByText(/Send/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Checks if attempt with invalid inputs returns warning', () => {
    render(providedApp());
    const send = screen.getByText(/Send/i);
    const nameInput = screen.getByPlaceholderText(/Your name/i);
    const emailInput = screen.getByPlaceholderText(/Your email/i);

    userEvent.click(send);
    const warning = screen.getByText(/Please fill in the input fields correctly/i);

    expect(warning).toBeInTheDocument();

    userEvent.type(nameInput, 'user');
    userEvent.click(send);
    expect(warning).toBeInTheDocument();

    userEvent.type(emailInput, 'user@mail.com');
    userEvent.click(send);
    expect(warning).not.toBeInTheDocument();
  });
});

afterEach(() => jest.clearAllMocks());

// I could not find out how to mock the axios response. Since this is my first time using it
// and considering that testing isn't one of the requirements but a bonus I wanted to do,
// I'll not do it at the moment. But now I'm damn curious, so I'll keep trying on my end until
// i eventually figure it out.

// describe('Tests API request', () => {
//   it('Checks if fulfilled promise works as intended', async () => {
//     await axios.post.mockResolvedValue({ Ok: true });
//     await expect(screen.getByText(/We're happy to have you on board!/i)).toBeInTheDocument();
//   });

//   it('Checks if rejected promise works as intended', async () => {
//     await axios.post.mockResolvedValue({ Ok: false });
//     await expect(screen.getByText(/Something went wrong.../i)).toBeInTheDocument();
//   });
// });
