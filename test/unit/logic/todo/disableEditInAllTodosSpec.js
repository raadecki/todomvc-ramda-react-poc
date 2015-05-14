import i from './input';
import o from './output';

import {disableEditInAllTodos} from 'logic/todo';

describe('disableEditInAllTodos function spec', function() {

    it('should set edit flag to false in all todos', function() {
        expect(disableEditInAllTodos(i.TODOS_WITH_EDIT)).toEqual(o.TODOS_WITHOUT_EDIT);
    });
});
