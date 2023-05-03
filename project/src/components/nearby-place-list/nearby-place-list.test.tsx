import { render, screen, within } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { makeMockOffers } from '../../mocks/mocks';
import HistoryRouter from '../history-router/history-router';
import NearbyPlaceList from './nearby-place-list';

describe('NearbyPlacesList component', () => {
  const mockOffers = makeMockOffers();
  const history = createMemoryHistory();

  it('should render offers in list items that receive from props', () => {
    render(
      <HistoryRouter history={history}>
        <NearbyPlaceList
          nearbyOffers={mockOffers}
        />
      </HistoryRouter>
    );

    const list = screen.getByTestId('nearbyplaces-list');
    const items = within(list).getAllByTestId('nearbyplace-container');

    expect(items.length).toEqual(mockOffers.length);
  });
});
