// Item types
const FILLER = "FILLER";
const PRAC = "PRAC";
const CONDITION = "PRAC";

// Lists
const LISTS = [
    "list1",
    "list2"
    // "list3"
];

const PRACTICE_ITEMS = [
    {
        id : 1,
        item_type : PRAC,
        stimulus: 'A'
    },
    {
        id : 2,
        item_type : PRAC,
        stimulus: 'B'
    }
];

const LIST_GROUP1 = [
    {
        id : 1,
        item_type : CONDITION,
        stimulus: 'a',
    },
];

const LIST_GROUP2 = [
    {
        id : 1,
        item_type: CONDITION,
        stimulus: 'b'
    },
];

// Add a third list of stimuli when required.
// const LIST_GROUP3 = [
// ...
// ]

// These lists are not a between subjects variable, but
// define which list a participant gets.
const TEST_ITEMS = [
    {list_name: LISTS[0], table: LIST_GROUP1},
    {list_name: LISTS[1], table: LIST_GROUP2}
    // Add a third list here, put a comma on the
    // end of the line above here.
    // {list_name: LISTS[1], table: LIST_GROUP3}
];
