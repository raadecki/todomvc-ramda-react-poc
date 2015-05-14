var i  = {};

i.TODO_NAME = 'test';
i.TODOS = [
    {
        name: 'aaa',
        complete: false,
        edit: false
    }
];
i.TODOS_WITH_EDIT = [
    {
        name: 'aaa',
        complete: false,
        edit: false
    },
    {
        name: 'bbb',
        complete: false,
        edit: true
    },
    {
        name: 'ccc',
        complete: false,
        edit: false
    }
];

i.TODOS_WITH_ACTIVE = [
    {
        name: 'aaa',
        complete: true,
        edit: false
    },
    {
        name: 'bbb',
        complete: true,
        edit: false
    },
    {
        name: 'ccc',
        complete: false,
        edit: false
    }
];

i.TODOS_WITH_COMPLETE = [
    {
        name: 'aaa',
        complete: false,
        edit: false
    },
    {
        name: 'bbb',
        complete: true,
        edit: false
    },
    {
        name: 'ccc',
        complete: false,
        edit: false
    }
];

export default i;
