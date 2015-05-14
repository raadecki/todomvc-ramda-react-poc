import o from './output';
import {toggleTodoComplete} from 'logic/todo';

describe('toggleComplete function spec', function() {

    it('should mark second todo as completed', function() {
        var idx = 1;

        expect(toggleTodoComplete(idx, o.TODOS_ADDED)).toEqual(o.TODOS_2_COMPLETED);
    });

    it('should mark first todo as completed', function() {
        var idx = 0;

        expect(toggleTodoComplete(idx, o.TODOS_ADDED)).toEqual(o.TODOS_1_COMPLETED);
    });

    it('should unmark second todo as completed', function() {
        var idx = 1;

        expect(toggleTodoComplete(idx, o.TODOS_2_COMPLETED)).toEqual(o.TODOS_ADDED);
    });
});
