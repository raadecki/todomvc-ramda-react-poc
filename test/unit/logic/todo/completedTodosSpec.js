import i from './input';
import o from './output';
import {completedTodos} from 'logic/todo';

describe('completedTodos function spec', function() {

    it('should filter todos with complete flag set to true', function() {
        expect(completedTodos(i.TODOS_WITH_COMPLETE)).toEqual(o.TODOS_COMPLETE_FILTERED);
    });

});
