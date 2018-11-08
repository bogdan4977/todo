import { string, bool, shape } from 'prop-types';

export const ItemType = shape({
    id: string.isRequired,
    value: string.isRequired,
    done: bool.isRequired,
});
