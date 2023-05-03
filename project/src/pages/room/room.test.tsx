import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import { AuthorizationStatus } from '../../const';
import { mockStore } from '../../mocks/mock-store';
import { makeMockOffer } from '../../mocks/mocks';
import Room from './room';

describe('Room screen', () => {
  const mockOffer = makeMockOffer();

  const store = mockStore({
    OFFERS: {
      singleOffer: mockOffer,
      isSingleOfferLoading: false,
      nearbyOffers: [],
    },
    USER: {
      userInfo: undefined,
      authorizationStatus: AuthorizationStatus.NoAuth,
    },
    COMMENTS: {
      comments: [],
    },
  });
  const history = createMemoryHistory();

  const RoomWithProvider = (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Room />
      </HistoryRouter>
    </Provider>
  );

  it('should render the selected offer correctly', () => {
    render(RoomWithProvider);

    expect(screen.getByText(mockOffer.title)).toBeInTheDocument();
    expect(screen.getByText(mockOffer.description)).toBeInTheDocument();
    expect(screen.getByText(mockOffer.host.name)).toBeInTheDocument();
  });
});
