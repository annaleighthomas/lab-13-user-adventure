import { getUser, setUser, updateUsersChoice } from '../local-storage/local-storage-utils.js';

const test = QUnit.test;

test('should ge the user from local ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        hp: 35,
        gold: 0,
        name: 'jane',
        class: 'wizard',
        completed: {}
    };

    localStorage.setItem('USER', JSON.stringify(user));
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getUser();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, user);
});

test('should set the user in to local storage ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        hp: 35,
        gold: 0,
        name: 'jane',
        class: 'wizard',
        completed: {}
    };
    
    setUser(user)

    const actual = JSON.parse(localStorage.getItem('USER'));
    
    //Act 
    // Call the function you're testing and set the result to a const
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, user);
});

test('should update the user based on their choice ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        hp: 100,
        gold: 100,
        name: 'jane',
        class: 'wizard',
        completed: {}
    };
    
    localStorage.setItem('USER', JSON.stringify(user));

    const choice = {
        hp: 10,
        gold: -30
    };

    const expected = {
        hp: 110,
        gold: 70,
        name: 'jane',
        class: 'wizard',
        completed: {
            dragon: true
        }
    };

    updateUsersChoice('dragon', choice);
    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, expected);
});

