import { render } from '@testing-library/react';

import UtilLoadingSpinner from './UtilLoadingSpinner';

describe('UtilLoadingSpinner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilLoadingSpinner />);
    expect(baseElement).toBeTruthy();
  });
});
