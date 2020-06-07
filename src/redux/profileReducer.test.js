// import {describe, expect, it} from '@jest/globals';//default import when .test.js
// Jest is a JavaScript testing framework
import profilePageReducer, { addPostActionCreator } from './profilePageReducer';

const state = {
    posts: [
        {
            id: "1",
            message: "Hi, how are you?",
            likesCount: 12
        },
        {
            id: "2",
            message: "It's my first posts",
            likesCount: 11
        },
        {
            id: "3",
            message: "blabla",
            likesCount: 4
        },
        {
            id: "4",
            message: "blablabla",
            likesCount: 55
        }
    ]
}

it('Add new post', () => {
    //test data
    const action = addPostActionCreator("this is new post bro :)");

    const newState = profilePageReducer(state, action);

    //expection
    expect(newState.posts.length).toBe(5);
});

