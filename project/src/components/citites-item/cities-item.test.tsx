import { Provider } from 'react-redux';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockStore } from '../../mocks/mock-store';
import { makeFakeCity } from '../../mocks/mocks';
import CityItem from './cities-item';


describe('City Item component', () => {
  const mockCity = makeFakeCity();
  const store = mockStore({ CITY: mockCity });

  const CityItemWithProvider = (
    <Provider store={store}>
      <CityItem city={mockCity.currentCity} />
    </Provider>
  );

  it('should display city name from props', () => {
    render(CityItemWithProvider);

    const cityName = screen.getByText(mockCity.currentCity);
    expect(cityName).toBeInTheDocument();
  });

  it('when user clicks CityItem component, setCurrentCity is dispatched', async () => {
    render(CityItemWithProvider);

    await act(async () => await userEvent.click(screen.getByText(mockCity.currentCity)));

    const actions = store.getActions();

    expect(actions[0].type).toBe('CITY/setCurrentCity');
  });
});

