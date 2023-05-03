import { render, screen, within } from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import { createMemoryHistory } from 'history';
import { makeMockOffers } from '../../mocks/mocks';
import PlacesList from './offer-list';

describe('CityList component', () => {
  const mockOffers = makeMockOffers();
  const listItemHoverFn = jest.fn();
  const history = createMemoryHistory();

  const PlacesListWithHistoryRouter = (
    <HistoryRouter history={history}>
      <PlacesList offers={mockOffers} onListItemHover={listItemHoverFn} />
    </HistoryRouter>
  );

  it ('should display a list of offers from the props', () => {
    render(PlacesListWithHistoryRouter);

    const list = screen.getByTestId('places-list');
    const items = within(list).getAllByTestId('place-card-container');

    expect(items.length).toEqual(mockOffers.length);
  });
});
