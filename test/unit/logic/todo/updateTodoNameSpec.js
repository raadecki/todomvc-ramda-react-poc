import o from './output';
import {updateTodoName} from 'logic/todo';

describe('updateTodoName function spec', function() {

    it('should update second todo name to foo', function() {
        var idx = 1;
        var name = 'foo';

        expect(updateTodoName(idx, name, o.TODOS_ADDED)).toEqual(o.TODOS_2_FOO);
    });

    it('should update first todo name to bar', function() {
        var idx = 0;
        var name = 'bar';

        expect(updateTodoName(idx, name, o.TODOS_ADDED)).toEqual(o.TODOS_1_BAR);
    });
});
