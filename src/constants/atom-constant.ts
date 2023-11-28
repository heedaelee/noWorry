import {v4 as uuidv4} from 'uuid';

export const WORRY_LIST_KEY = 'worryList';
export const BOTTOM_TAP_NAME = 'bottomTapName';
export const PAGES = 'pages';
export const MODAL_OPEN_KEY = `modalOpenAtom/${uuidv4()}`;

export default {
  WORRY_LIST_KEY,
  BOTTOM_TAP_NAME,
  PAGES,
  MODAL_OPEN_KEY,
};
