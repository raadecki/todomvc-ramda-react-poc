import i from './input';
import o from './output';
import {addTodo} from 'logic/todo';

describe('addTodo function spec', function() {

    it('should add todo to a todos array', function() {
        expect(addTodo(i.TODO_NAME, i.TODOS)).toEqual(o.TODOS_ADDED);
    });

});
