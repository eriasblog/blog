import { render } from '@testing-library/react';

import UtilSearchModal from './UtilSearchModal';

describe('UtilSearchModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilSearchModal />);
    expect(baseElement).toBeTruthy();
  });
});
