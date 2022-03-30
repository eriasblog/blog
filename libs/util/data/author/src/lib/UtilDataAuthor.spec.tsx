import { render } from '@testing-library/react';

import UtilDataAuthor from './UtilDataAuthor';

describe('UtilDataAuthor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilDataAuthor />);
    expect(baseElement).toBeTruthy();
  });
});
