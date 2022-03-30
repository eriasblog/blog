import { render } from '@testing-library/react';

import UtilSearchContext from './UtilSearchContext';

describe('UtilSearchContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilSearchContext />);
    expect(baseElement).toBeTruthy();
  });
});
