import o from './output';
import {deleteTodo} from 'logic/todo';

describe('deleteTodo function spec', function() {

    it('it should delete first todo', function() {
        var idx = 0;
        expect(deleteTodo(idx, o.TODOS_ADDED)).toEqual(o.TODOS_DELETED);
    });
});
