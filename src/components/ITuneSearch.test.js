import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import store from '../store';
import ITuneSearch from './ITuneSearch';
import { Provider } from 'react-redux';
import axiosMock from 'axios';

function renderWithRedux(ui) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

jest.mock('axios');

test('show info message when page load', () => {
  const { getByText } = renderWithRedux(<ITuneSearch />);
  expect(getByText(/Enter keyword and click search/i)).toBeInTheDocument();
});

test('show "no result found" message when no result found', async () => {
  const { getByTestId, getByText, getByPlaceholderText } = renderWithRedux(<ITuneSearch />);

  axiosMock.get.mockResolvedValueOnce({
    data: { resultCount: 0, results: [] }
  });

  fireEvent.change(getByPlaceholderText(/Search Key/i), { target: { value: 'a' } });
  fireEvent.click(getByTestId('search'));

  const message = await waitForElement(() => getByText(/No result found/i));
  expect(message).toBeInTheDocument();
});

test('show an error when there is error', async () => {
  const { getByTestId, getByText, getByPlaceholderText } = renderWithRedux(<ITuneSearch />);

  axiosMock.get.mockRejectedValueOnce(new Error('Network error'));

  fireEvent.change(getByPlaceholderText(/Search Key/i), { target: { value: 'a' } });
  fireEvent.click(getByTestId('search'));

  const error = await waitForElement(() => getByText(/Network error/i));
  expect(error).toBeInTheDocument();
});

test('show results when there is at least one result', async () => {
  const { getByTestId, getByText, getByPlaceholderText } = renderWithRedux(<ITuneSearch />);

  axiosMock.get.mockResolvedValueOnce({
    data: {
      resultCount: 1,
      results: [
        {
          trackId: 316832052,
          artistName: 'Donald Sikorski',
          artworkUrl100:
            'https://is5-ssl.mzstatic.com/image/thumb/Video/v4/99/1d/b3/991db377-1a3e-f2e8-05e1-562bd593b083/source/100x100bb.jpg'
        }
      ]
    }
  });

  fireEvent.change(getByPlaceholderText(/Search Key/i), { target: { value: 'a' } });
  fireEvent.click(getByTestId('search'));

  const result = await waitForElement(() => getByText(/Donald Sikorski/i));
  expect(result).toBeInTheDocument();
});
