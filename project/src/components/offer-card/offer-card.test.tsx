import { Provider } from 'react-redux';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import Room from '../../pages/room/room';
import { AuthorizationStatus } from '../../const';
import { mockStore } from '../../mocks/mock-store';
import { makeMockOffer } from '../../mocks/mocks';
import PlaceCard from './offer-card';

describe('PlaceCard component', () => {
  const listItemHoverFn = jest.fn();
  const mockOffer = makeMockOffer();

  const history = createMemoryHistory();

  const PlaceCardWithHistoryRouter = (
    <HistoryRouter history={history}>
      <PlaceCard offer={mockOffer} onListItemHover={listItemHoverFn}/>
    </HistoryRouter>
  );

  it('should render the offer\'s details properly', () => {
    render(PlaceCardWithHistoryRouter);

    const imageUrl = mockOffer.images[0];
    expect(screen.getByRole('img')).toHaveAttribute('src', imageUrl);
    expect(screen.getByTestId('place-card-title').textContent).toEqual(mockOffer.title);
    expect(screen.getByTestId('place-card-price')).toHaveTextContent(`${mockOffer.price}`);
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });

  it('when component is hovered, onListItemHover is called with the offer id', () => {
    render(PlaceCardWithHistoryRouter);

    fireEvent.mouseEnter(screen.getByTestId('place-card-container'));

    expect(listItemHoverFn).toBeCalled();
    expect(listItemHoverFn).nthCalledWith(1, mockOffer.id);
  });

  it('when component is unhovered, onListItemHover is called with undefined', () => {
    render(PlaceCardWithHistoryRouter);

    fireEvent.mouseLeave(screen.getByTestId('place-card-container'));

    expect(listItemHoverFn).toBeCalled();
    expect(listItemHoverFn).nthCalledWith(1, undefined);
  });

  it('When title is clicked, redirect to Offer screen', async () => {
    const listItemHoverfn = jest.fn();

    const store = mockStore(
      {
        OFFERS: { singleOffer: undefined },
        COMMENTS: { comments: undefined },
        USER: {
          authorizationStatus: AuthorizationStatus.Auth,
        }
      }
    );

    history.push('/');

    render (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path='/' element={<PlaceCard offer={mockOffer} onListItemHover={listItemHoverfn}/>} />
            <Route path='/offer/:id' element={<Room />} />
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(mockOffer.title)).toBeInTheDocument();

    await act(async () => await userEvent.click(screen.getByText(mockOffer.title)));

    await waitFor(() => {
      expect(history.location.pathname).toBe(`/offer/${mockOffer.id}`);
    });

    const actions = store.getActions();
    expect(actions[0].type).toBe('LOAD_OFFER/pending');
  });
});
