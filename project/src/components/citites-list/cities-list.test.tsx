import { render, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CITIES } from '../../const';
import { mockStore } from '../../mocks/mock-store';
import { makeFakeCity } from '../../mocks/mocks';
import CitiesList from './cities-list';

describe('CityList component', () => {
  it ('should display a list of cities from the props', () => {
    const mockCity = makeFakeCity();
    const store = mockStore({CITY: mockCity});

    render(
      <Provider store={store}>
        <CitiesList cities={CITIES} />
      </Provider>
    );

    const list = screen.getByRole('list');
    const items = within(list).getAllByRole('listitem');
    const currentCities = items.map((item) => item.textContent);

    expect(currentCities).toEqual(CITIES);
  });
});
