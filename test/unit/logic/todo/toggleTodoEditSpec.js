import o from './output';
import {toggleTodoEdit} from 'logic/todo';

describe('toggleTodoEdit function spec', function() {
    it('should mark second todo as edited', function() {
        var idx = 1;

        expect(toggleTodoEdit(idx, o.TODOS_ADDED)).toEqual(o.TODOS_2_EDITED);
    });

    it('should mark first todo as edited', function() {
        var idx = 0;

        expect(toggleTodoEdit(idx, o.TODOS_ADDED)).toEqual(o.TODOS_1_EDITED);
    });

    it('should unmark second todo as edited', function() {
        var idx = 1;

        expect(toggleTodoEdit(idx, o.TODOS_2_EDITED)).toEqual(o.TODOS_ADDED);
    });
});
