var o = {};

o.TODOS_ADDED = [
    {
        name: 'aaa',
        complete: false,
        edit: false
    },
    {
        name: 'test',
        complete: false,
        edit: false
    }
];

o.TODOS_2_COMPLETED = [
    {
        name: 'aaa',
        complete: false,
        edit: false
    },
    {
        name: 'test',
        complete: true,
        edit: false
    }
];
o.TODOS_1_COMPLETED = [
    {
        name: 'aaa',
        complete: true,
        edit: false
    },
    {
        name: 'test',
        complete: false,
        edit: false
    }
];

o.TODOS_2_EDITED = [
    {
        name: 'aaa',
        complete: false,
        edit: false
    },
    {
        name: 'test',
        complete: false,
        edit: true
    }
];

o.TODOS_1_EDITED = [
    {
        name: 'aaa',
        complete: false,
        edit: true
    },
    {
        name: 'test',
        complete: false,
        edit: false
    }
];

o.TODOS_2_FOO = [
    {
        name: 'aaa',
        complete: false,
        edit: false
    },
    {
        name: 'foo',
        complete: false,
        edit: false
    }
];

o.TODOS_1_BAR = [
    {
        name: 'bar',
        complete: false,
        edit: false
    },
    {
        name: 'test',
        complete: false,
        edit: false
    }
];

o.TODOS_DELETED = [
    {
        name: 'test',
        complete: false,
        edit: false
    }
];

o.TODOS_WITHOUT_EDIT = [
    {
        name: 'aaa',
        complete: false,
        edit: false
    },
    {
        name: 'bbb',
        complete: false,
        edit: false
    },
    {
        name: 'ccc',
        complete: false,
        edit: false
    }
];

o.TODOS_ACTIVE_FILTERED = [
    {
        name: 'ccc',
        complete: false,
        edit: false
    }
];

o.TODOS_COMPLETE_FILTERED = [
    {
        name: 'bbb',
        complete: true,
        edit: false
    }
];

export default o;
