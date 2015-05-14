import i from './input';
import o from './output';

import {activeTodos} from 'logic/todo';

describe('activeTodos function spec', function() {

    it('should filter todos with complete flag set to false', function() {
        expect(activeTodos(i.TODOS_WITH_ACTIVE)).toEqual(o.TODOS_ACTIVE_FILTERED);
    });

});
