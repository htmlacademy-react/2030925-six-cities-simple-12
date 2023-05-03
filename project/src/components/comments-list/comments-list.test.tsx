import { render, screen, within } from '@testing-library/react';
import { makeMockComments } from '../../mocks/mocks';
import CommentsList from './comments-list';

describe('CommentsList component', () => {
  const mockComments = makeMockComments();
  it('should render comments correctly', () => {
    render(<CommentsList comments={mockComments} />);

    const list = screen.getByRole('list');
    const items = within(list).getAllByRole('listitem');

    expect(items.length).toEqual(mockComments.length);
  });
});
