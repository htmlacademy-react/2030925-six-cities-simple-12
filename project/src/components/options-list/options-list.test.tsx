import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockStore } from '../../mocks/mock-store';
import { makeMockFilterOptions } from '../../mocks/mocks';
import OptionsList from './options-list';

describe('OptionsList component', () => {
  const mockFilterOptions = makeMockFilterOptions();
  const store = mockStore({OFFERS: {filterOptions: mockFilterOptions}});

  const OptionsListWithProvider = (
    <Provider store={store}>
      <OptionsList />
    </Provider>
  );

  it('should display active filter options', () => {
    render(OptionsListWithProvider);

    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getByTestId('active-filter-option').textContent).toEqual(mockFilterOptions.name);
  });
});
